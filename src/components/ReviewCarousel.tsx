import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';
import { ArrowUpLeft, ChevronLeft, ChevronRight, Pause, Play, Star } from 'lucide-react';
import { googleReviewsUrl } from '../data';
import reviews from '../../reviews.json';
import { GoogleIcon } from './Brand';

export function Stars() {
  return (
    <span className="stars" role="img" aria-label="5 نجوم من 5">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={15} fill="currentColor" strokeWidth={0} aria-hidden="true" />
      ))}
    </span>
  );
}

function ReviewCard({ review, onInteract, ...rest }: { review: typeof reviews[number]; onInteract: () => void } & { 'aria-hidden'?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="review-card" dir="rtl" {...rest}>
      <div className="review-author">
        <span className="review-avatar" style={{ backgroundColor: review.color }} aria-hidden="true">{review.initial}</span>
        <div className="review-author-details"><h3 dir="auto">{review.name}</h3><p>{review.meta}</p></div>
        <GoogleIcon size={23} />
      </div>
      <Stars />
      <blockquote className={`review-text${expanded ? ' is-expanded' : ''}`} dir="auto">{review.text}</blockquote>
      <div className="review-bottom">
        {review.text.length > 130 ? <button type="button" aria-expanded={expanded} onClick={() => { setExpanded(!expanded); onInteract(); }}>{expanded ? 'عرض أقل' : 'قراءة المزيد'}</button> : <span />}
        <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" aria-label="عرض تقييمات درة المساج على خرائط Google">تقييمات المركز <ArrowUpLeft size={15} aria-hidden="true" /></a>
      </div>
    </article>
  );
}

export default function ReviewCarousel() {
  const viewport = useRef<HTMLDivElement>(null);
  const inView = useInView(viewport, { amount: 0.1 });
  const reducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [metrics, setMetrics] = useState({ step: 0, max: 2 });

  useEffect(() => { if (reducedMotion) setAutoplay(false); }, [reducedMotion]);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const measure = () => {
      const first = element.firstElementChild as HTMLElement | null;
      if (!first) return;
      const styles = getComputedStyle(element);
      const visible = Number(styles.getPropertyValue('--review-count')) || 1;
      const step = first.getBoundingClientRect().width + parseFloat(styles.columnGap || '24');
      const max = Math.max(0, reviews.length - visible);
      setMetrics({ step, max });
      setCurrent(Math.min(max, Math.round(Math.abs(element.scrollLeft) / step)));
    };
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    measure();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplay || hovered || focused || !inView || !metrics.step || reducedMotion) return;
    const element = viewport.current;
    if (!element) return;
    const setWidth = reviews.length * metrics.step - (parseFloat(getComputedStyle(element).columnGap || '24'));
    const speed = metrics.step / 3.5;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      if (!document.hidden) {
        let offset = Math.abs(element.scrollLeft) + speed * dt;
        if (offset >= setWidth) {
          offset -= setWidth;
          element.scrollLeft = -offset;
        } else {
          element.scrollLeft = -offset;
        }
        setCurrent(Math.min(metrics.max, Math.round(offset / metrics.step)));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [autoplay, hovered, focused, inView, metrics, reducedMotion]);

  function goTo(index: number) {
    setAutoplay(false);
    const next = index < 0 ? metrics.max : index > metrics.max ? 0 : index;
    viewport.current?.scrollTo({ left: -next * metrics.step, behavior: reducedMotion ? 'auto' : 'smooth' });
  }

  return (
    <div className="reviews-carousel" role="region" aria-roledescription="عارض شرائح" aria-label="تقييمات عملاء درة المساج"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false); }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(current + 1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); goTo(current - 1); }
      }}>
      <div className={`reviews-viewport${autoplay && !reducedMotion ? ' is-gliding' : ''}`} ref={viewport} onPointerDown={() => setAutoplay(false)} onScroll={() => {
        if (viewport.current && metrics.step) setCurrent(Math.min(metrics.max, Math.max(0, Math.round(Math.abs(viewport.current.scrollLeft) / metrics.step))));
      }}>
        {reviews.map((review) => <ReviewCard key={review.name} review={review} onInteract={() => setAutoplay(false)} />)}
        {reviews.map((review) => <ReviewCard key={`${review.name}-clone`} review={review} aria-hidden onInteract={() => setAutoplay(false)} />)}
      </div>
      <div className="carousel-controls">
        <button type="button" className="round-button" onClick={() => goTo(current - 1)} aria-label="التقييمات السابقة"><ChevronRight size={19} aria-hidden="true" /></button>
        <div className="carousel-dots">{Array.from({ length: metrics.max + 1 }, (_, index) => (
          <button type="button" key={index} className={`carousel-dot${current === index ? ' is-active' : ''}`} onClick={() => goTo(index)} aria-label={`انتقل إلى مجموعة التقييمات ${index + 1}`} aria-current={current === index ? 'true' : undefined}><span /></button>
        ))}</div>
        <button type="button" className="round-button" onClick={() => goTo(current + 1)} aria-label="التقييمات التالية"><ChevronLeft size={19} aria-hidden="true" /></button>
        <span className="carousel-control-divider" />
        <button type="button" className="round-button autoplay-button" onClick={() => setAutoplay(!autoplay)} aria-label={autoplay ? 'إيقاف الحركة التلقائية' : 'تشغيل الحركة التلقائية'} aria-pressed={autoplay}>{autoplay ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}</button>
        <span className="sr-only" aria-live={autoplay ? 'off' : 'polite'}>المجموعة {current + 1} من {metrics.max + 1}</span>
      </div>
    </div>
  );
}