import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Phone, X } from 'lucide-react';
import { CONTACT, whatsappLink } from '../data';
import { WhatsAppIcon } from './Brand';

const CALL_PROMPT_DELAY_MS = 35_000;

export default function DelayedCallPrompt() {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(90);
  const panel = useRef<HTMLElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), CALL_PROMPT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  // Measure the existing dock, including iPhone safe areas, rather than cover it.
  useEffect(() => {
    const dock = document.querySelector<HTMLElement>('.booking-dock');
    if (!dock) return;
    const updateOffset = () => setBottomOffset(Math.ceil(dock.getBoundingClientRect().height) + 12);
    const observer = new ResizeObserver(updateOffset);
    updateOffset();
    observer.observe(dock);
    return () => observer.disconnect();
  }, []);

  const dismiss = useCallback(() => {
    if (panel.current?.contains(document.activeElement)) {
      const fallback = document.querySelector<HTMLAnchorElement>('.booking-dock a[href^="tel:"]');
      const target = previousFocus.current?.isConnected ? previousFocus.current : fallback;
      target?.focus({ preventScroll: true });
    }
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dismiss();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [visible, dismiss]);

  return (
    <>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {visible ? 'خيارات الاتصال متاحة: اتصل بالفروع أو بالخدمة المنزلية.' : ''}
      </div>
      <AnimatePresence>
        {visible && (
          <motion.aside
            ref={panel}
            className="call-prompt"
            aria-labelledby="call-prompt-title"
            style={{
              bottom: bottomOffset,
              maxHeight: `calc(100svh - ${bottomOffset + 16}px - env(safe-area-inset-top, 0px))`,
            }}
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
            transition={{ duration: reducedMotion ? 0 : 0.3, ease: 'easeOut' }}
            onFocusCapture={(event) => {
              if (event.relatedTarget instanceof HTMLElement && !event.currentTarget.contains(event.relatedTarget)) {
                previousFocus.current = event.relatedTarget;
              }
            }}
          >
            <div className="call-prompt-heading">
              <h2 id="call-prompt-title">اتصل الان لجلسة مساج مميزة</h2>
              <button type="button" className="call-prompt-close" onClick={dismiss} aria-label="إغلاق خيارات الاتصال">
                <X size={19} aria-hidden="true" />
              </button>
            </div>
            <p>في فروعنا أو في راحة بيتك.</p>
            <div className="call-prompt-actions">
              <a className="button button-green" href={whatsappLink('branches')} target="_blank" rel="noopener noreferrer" aria-label="احجز جلسة مساج عبر واتساب الفروع">
                <WhatsAppIcon size={17} />واتساب الفروع
              </a>
              <a className="button button-gold" href={`tel:${CONTACT.branchesDisplay}`} aria-label={`اتصل بالفروع على ${CONTACT.branchesDisplay}`}>
                <Phone size={17} aria-hidden="true" />اتصل بالفروع
              </a>
              <a className="button button-home" href={whatsappLink('home')} target="_blank" rel="noopener noreferrer" aria-label="الخدمات والعروض المنزلية عبر واتساب">
                <WhatsAppIcon size={17} />الخدمات والعروض المنزلية
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}