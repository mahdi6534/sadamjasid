import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'motion/react';
import {
  ArrowDown, ArrowLeft, ArrowUp, ArrowUpLeft, Check,
  Clock3, Crown, House, MapPin, Menu, Navigation, Phone, Sparkles, X,
} from 'lucide-react';
import { Brand, GoogleIcon, Lotus, WhatsAppIcon } from './components/Brand';
import DelayedCallPrompt from './components/DelayedCallPrompt';
import ReviewCarousel from './components/ReviewCarousel';
import {
  branches, branchWhatsappLink, categories, CONTACT, googleReviewsUrl, services, serviceTitle, whatsappLink,
  type Service,
} from './data';

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div className={className}
      initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

function BookingActions({ variant = 'hero', service }: { variant?: 'hero' | 'package' | 'dock'; service?: Service }) {
  const title = service ? serviceTitle(service) : 'جلسة مساج';
  return (
    <div className={`booking-actions booking-actions-${variant}`}>
      <a className="button button-green" href={whatsappLink('branches', service)} target="_blank" rel="noopener noreferrer" aria-label={`احجز ${title} عبر واتساب الفروع`}>
        <WhatsAppIcon size={20} /><span>واتساب الفروع</span>
      </a>
      <a className="button button-gold" href={`tel:${CONTACT.branchesDisplay}`} aria-label={`اتصل لحجز ${title} في الفروع على ${CONTACT.branchesDisplay}`}>
        <Phone size={18} aria-hidden="true" /><span>{variant === 'hero' ? 'اتصل لحجز الفروع' : 'اتصال الفروع'}</span>
      </a>
      <a className="button button-home" href={whatsappLink('home', service)} target="_blank" rel="noopener noreferrer" aria-label={`واتساب الخدمات والعروض المنزلية${service ? `، استفسر عن ${title}` : ''}`}>
        <WhatsAppIcon size={20} />
        <span>الخدمات والعروض المنزلية</span>
      </a>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={`service-card${service.popular ? ' service-card-popular' : ''}`} id={`package-${service.id}`} aria-labelledby={`package-${service.id}-title`}>
      <div className="package-cover">
        <img className="package-photo" src={service.image} alt={service.name} loading="lazy" decoding="async" width="640" height="420" />
        {service.ribbon && <div className="package-ribbon"><Sparkles size={16} aria-hidden="true" /><span>{service.ribbon}</span></div>}
        <span className="package-discount-badge">خصم <strong dir="ltr">50%</strong></span>
      </div>
      <header className="package-preview">
        <h4 className="package-name" id={`package-${service.id}-title`}>{service.name}</h4>
        {(service.duration || service.vip || service.popular) && (
          <div className="package-meta">
            {service.duration && <span className="service-duration"><Clock3 size={14} aria-hidden="true" />{service.duration}</span>}
            {service.vip && <span className="package-vip"><Crown size={14} aria-hidden="true" /><span lang="en">VIP</span></span>}
            {service.popular && <span className="package-popular">الأكثر طلباً</span>}
          </div>
        )}
        <p className="package-description">{service.description}</p>
      </header>
      <div className="package-body">
        <div className="package-content">
          <h5>ماذا تشمل الباقة؟</h5>
          <ul className="included-list">{service.includes.map((item) => <li key={item}><Check size={16} aria-hidden="true" /><span>{item}</span></li>)}</ul>
          <BookingActions variant="package" service={service} />
          <p className="booking-note">السعر والموعد وتوفر الباقة للمنزلي لدى فريق الحجز.</p>
        </div>
      </div>
    </article>
  );
}

function BranchCard({ branch, index }: { branch: typeof branches[number]; index: number }) {
  return (
    <article className="branch-card">
      <div className="branch-heading">
        <div><span className="branch-kicker">درة المساج</span><h3>فرع {branch.name}</h3></div>
        <span className="branch-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="branch-map">
        <iframe src={branch.embed} title={`خريطة درة المساج، فرع ${branch.name}`} width="600" height="400" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" tabIndex={-1} aria-hidden="true" />
        <a className="branch-map-link" href={branch.mapUrl} target="_blank" rel="noopener noreferrer" aria-label={`فتح خريطة فرع ${branch.name} في Google Maps بنافذة جديدة`}>
          <span className="map-open-hint"><MapPin size={15} aria-hidden="true" />افتح في Google Maps<ArrowUpLeft size={15} aria-hidden="true" /></span>
        </a>
      </div>
      <div className="branch-actions">
        <a className="branch-directions" href={branch.mapUrl} target="_blank" rel="noopener noreferrer"><Navigation size={16} aria-hidden="true" />الموقع والاتجاهات <ArrowUpLeft size={15} aria-hidden="true" /></a>
        <a className="branch-whatsapp" href={branchWhatsappLink(branch.phone)} target="_blank" rel="noopener noreferrer" aria-label={`احجز فرع ${branch.name} عبر واتساب على ${branch.phone}`}><WhatsAppIcon size={17} /><span>واتساب الحجز</span></a>
        <a className="branch-call" href={`tel:${branch.phone}`} aria-label={`اتصل لحجز فرع ${branch.name} على ${branch.phone}`}><Phone size={17} aria-hidden="true" /><span>اتصل للحجز</span><b dir="ltr">{branch.phone}</b></a>
      </div>
    </article>
  );
}

function LandingPage() {
  const reducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    ['home', 'services', 'packages-massage', 'at-home', 'packages-hammam', 'packages-special', 'packages-pedicure', 'reviews', 'branches'].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    const closeOutside = (event: PointerEvent) => { if (event.target instanceof Node && !header.current?.contains(event.target)) setMenuOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    return () => { document.removeEventListener('keydown', closeOnEscape); document.removeEventListener('pointerdown', closeOutside); };
  }, [menuOpen]);

  const navItems = [
    { name: 'الرئيسية', href: '#home', active: activeSection === 'home' },
    { name: 'خدماتنا', href: '#services', active: ['services', 'packages-massage', 'packages-hammam', 'packages-pedicure'].includes(activeSection) },
    { name: 'الباقات المميزة', href: '#packages-special', active: activeSection === 'packages-special' },
    { name: 'آراء العملاء', href: '#reviews', active: activeSection === 'reviews' },
    { name: 'فروعنا', href: '#branches', active: activeSection === 'branches' },
  ];

  return (
    <div className="site" dir="rtl">
      <a className="skip-link" href="#services">انتقل إلى الباقات</a>
      <header className="site-header" ref={header}>
        <div className="container header-inner">
          <Brand compact />
          <nav className="desktop-nav" aria-label="القائمة الرئيسية">{navItems.map((item) => <a key={item.name} className={item.active ? 'active' : ''} href={item.href} aria-current={item.active ? 'location' : undefined}>{item.name}</a>)}</nav>
          <div className="header-actions">
            <a className="button button-gold header-book" href={whatsappLink('branches')} target="_blank" rel="noopener noreferrer">احجز لحظة راحة <ArrowUpLeft size={17} aria-hidden="true" /></a>
            <button className="menu-toggle" type="button" aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>
        <AnimatePresence>{menuOpen && <motion.nav className="mobile-menu" id="mobile-menu" aria-label="قائمة الجوال" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
          <div className="container">{navItems.map((item) => <a key={item.name} href={item.href} className={item.active ? 'active' : ''} aria-current={item.active ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{item.name}<ArrowUpLeft size={17} /></a>)}<a href="#at-home" onClick={() => setMenuOpen(false)}>المساج المنزلي<House size={17} /></a></div>
        </motion.nav>}</AnimatePresence>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <motion.img src="/images/spa-hero.jpg" alt="" aria-hidden="true" className="hero-video-bg" fetchPriority="high" initial={{ scale: reducedMotion ? 1 : 1.06 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }} />
          <div className="hero-shade" />
          <div className="container hero-inner">
            <motion.div className="hero-content" initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }}>
              <div className="hero-intro"><span />لأن راحتك تستاهل<span /></div>
              <h1 id="hero-title">درة المساج</h1>
              <p className="hero-subtitle">أفضل مساج بالرياض <span>5 فروع</span></p>
              <div className="hero-offer"><span className="offer-label">خصم</span><strong className="offer-number" dir="ltr">50<span>%</span></strong><span className="offer-description">على جميع الخدمات<small>لفترة محدودة</small></span></div>
              <div className="hero-actions"><BookingActions /></div>
              <a className="hero-browse button button-gold" href="#services">اكتشف الباقات <ArrowDown size={17} aria-hidden="true" /></a>
            </motion.div>
          </div>
          <a className="hero-scroll" href="#services" aria-label="اكتشف باقات درة المساج"><ArrowDown size={18} aria-hidden="true" /></a>
        </section>

        <div className="trust-note"><div className="container trust-inner"><GoogleIcon size={23} /><p>أكثر من <strong dir="ltr">150,000</strong> عميل، و<span className="trust-nowrap"><strong dir="ltr">5,000</strong> تقييم على Google</span></p><a href="#reviews" className="trust-reviews-link">آراء عملائنا <ArrowUpLeft size={14} aria-hidden="true" /></a></div></div>

        <section className="services-section section-space" id="services" aria-labelledby="services-title">
          <div className="container">
            <Reveal className="section-heading centered"><span className="eyebrow">باقات درة المساج</span><h2 id="services-title">راحتك، على طريقتك<span className="gold-dot">.</span></h2><p>اختر باقتك واحجز مباشرة. خصم <strong dir="ltr">50%</strong> على جميع الباقات.</p></Reveal>
            <nav className="package-nav" aria-label="انتقل إلى نوع الباقات">
              {categories.map((item) => <a key={item.id} href={`#packages-${item.id}`} className={activeSection === `packages-${item.id}` ? 'is-active' : ''} aria-current={activeSection === `packages-${item.id}` ? 'location' : undefined}>{item.name}</a>)}
            </nav>
          </div>
          {categories.map((item, index) => (
            <Fragment key={item.id}>
              <div className="container package-catalog">
                <section className="package-group" id={`packages-${item.id}`} aria-labelledby={`packages-${item.id}-title`}>
                  <div className="package-group-heading"><h3 id={`packages-${item.id}-title`}>{item.name}</h3><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span></div>
                  <div className={`package-list${item.id === 'special' ? ' package-list-special' : ''}`}>
                    {services.filter((service) => service.category === item.id).map((service) => <ServiceCard key={service.id} service={service} />)}
                  </div>
                </section>
              </div>
              {item.id === 'massage' && (
                <section className="home-service" id="at-home" aria-labelledby="home-service-title">
                  <img src="/images/home-spa.jpg" alt="جلسة استرخاء في خصوصية المنزل" loading="lazy" decoding="async" />
                  <div className="home-service-shade" />
                  <div className="container">
                    <Reveal className="home-service-content">
                      <span className="eyebrow">دره سبا في بيتك</span>
                      <h2 id="home-service-title">نجيب الراحة،<br />لين عندك<span>.</span></h2>
                      <p>مساج احترافي في خصوصية بيتك. اكتشف باقات وعروض المنزلي.</p>
                      <div className="home-service-actions">
                        <a className="button button-cream" href={whatsappLink('home')} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />الخدمات والعروض المنزلية<ArrowUpLeft size={17} /></a>
                        <a className="button button-light-outline" href={`tel:${CONTACT.homeDisplay}`}><Phone size={17} />اتصل لحجز المنزلي</a>
                      </div>
                    </Reveal>
                  </div>
                </section>
              )}
            </Fragment>
          ))}
        </section>

        <section className="reviews-section section-space" id="reviews" aria-labelledby="reviews-title">
          <div className="container"><Reveal className="section-heading section-heading-split"><div><span className="eyebrow">من تجارب عملائنا</span><h2 id="reviews-title">الراحة تحكي عن نفسها<span className="gold-dot">.</span></h2><p>تقييمات حقيقية، من أشخاص جربوا الفرق.</p></div><a className="google-reviews-link" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer"><GoogleIcon size={29} /><span>آراء عملائنا على Google<small>اكتشف المزيد من التقييمات <ArrowUpLeft size={13} /></small></span></a></Reveal><Reveal><ReviewCarousel /></Reveal></div>
        </section>

        <section className="branches-section section-space" id="branches" aria-labelledby="branches-title">
          <div className="container"><Reveal className="section-heading centered"><span className="eyebrow">تلقانا قريب منك</span><h2 id="branches-title">5 فروع. والراحة واحدة<span className="gold-dot">.</span></h2><p>اختر أقرب فرع لك في الرياض، واترك الباقي علينا.</p></Reveal><div className="branches-grid">{branches.map((branch, index) => <Reveal key={branch.name} delay={(index % 3) * 0.07}><BranchCard branch={branch} index={index} /></Reveal>)}</div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container">
        <div className="footer-main">
          <div className="footer-brand"><Brand light /><p>لحظة راحة، تستاهلها.</p></div>
          <div className="footer-links"><h2>اكتشف درة المساج</h2><a href="#packages-massage">جلسات المساج</a><a href="#packages-hammam">الحمام المغربي</a><a href="#packages-special">الباقات المميزة</a><a href="#branches">فروعنا في الرياض</a></div>
          <div className="footer-contact"><h2>راحتك تبدأ باتصال</h2><a href={`tel:${CONTACT.branchesDisplay}`}><span>حجز الفروع</span><b dir="ltr">{CONTACT.branchesDisplay}</b><Phone size={16} /></a><a href={`tel:${CONTACT.homeDisplay}`}><span>حجز المنزلي</span><b dir="ltr">{CONTACT.homeDisplay}</b><House size={16} /></a></div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} درة المساج والتدليك الرياضي. جميع الحقوق محفوظة.</p><span className="photo-note">الصور لأغراض توضيحية</span><a href="#home">العودة للأعلى <ArrowUp size={15} /></a></div>
      </div></footer>

      <nav className="booking-dock" aria-label="الحجز السريع الثابت"><div className="container dock-inner"><div className="dock-caption"><Lotus /><div><strong>حان وقت راحتك</strong><span>حجزك أقرب مما تتخيل</span></div><ArrowLeft size={20} /></div><BookingActions variant="dock" /></div></nav>
      <DelayedCallPrompt />
    </div>
  );
}

export default function App() {
  return <MotionConfig reducedMotion="user"><LandingPage /></MotionConfig>;
}