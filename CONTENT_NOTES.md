# Content And Booking

- `src/App.tsx`: Model A RTL landing page, all 16 fully visible package cards, category anchor navigation, mobile navigation, home-service section, branch maps and persistent booking dock.
- `src/data.ts`: All 16 services, WhatsApp message generation, contact numbers, five review excerpts and five branch locations.
- `src/components/ReviewCarousel.tsx`: Swipeable RTL carousel with autoplay, pause, keyboard navigation and expandable review text.
- `src/components/DelayedCallPrompt.tsx`: Dismissible call options appearing 35 seconds after the page mounts.
- `src/index.css`: Responsive layouts, Arabic typography and iPhone safe-area support.
- `public/images/`: Six illustrative, generated spa photographs. These are not photographs of the center's actual premises.

## Booking

All phone call links use the local Saudi format without a country code: `tel:0501262512` for branches and `tel:0502076285` for home services. Displayed phone numbers use the same local format. WhatsApp links retain their required international numbers, `966501262512` and `966502076285`, without a leading plus or local zero.

Branch location cards offer phone booking only, plus their map/directions link. WhatsApp remains available in the package cards, hero, header, home-service section and three-button fixed booking dock.

An additional non-modal call prompt appears after 35 seconds with two direct local phone links: branches and home service. It sits above the existing booking dock, measuring the dock's actual height to respect mobile safe areas. It does not move focus automatically, lock scrolling or place a call on its own. Visitors can close it with its close button or Escape; once closed, it stays closed until the page is reloaded. Timer and event listeners are cleaned up on unmount. Timing and native dialer behavior have not been tested in a browser or on a physical device in this environment.

Every package's branch WhatsApp link includes its name, VIP designation if applicable, duration and the 50% offer. Home messages begin with a request to book a home massage and ask whether the selected package is available at home. No appointments are automatically confirmed and no payment is collected.

WhatsApp uses the officially documented `https://wa.me/<international-number>?text=<encoded-message>` route. It redirects to WhatsApp's own handoff page; this is a click-to-chat integration, not the authenticated WhatsApp Business Cloud API. Arabic text, literal `+` characters in combined-package names and the `%` in the discount are encoded once with `encodeURIComponent`.

Live HTTP checks of both destination numbers returned WhatsApp handoff pages with the supplied numbers and populated messages. The branch account was displayed as the center's Arabic name; the home number was displayed as `Dorh Spa`. Additional package-message checks confirmed that the royal massage plus royal bath branch message retains the literal `+` and `50%`, and that the one-hour VIP home message retains its package name and duration. No messages were sent. App launch and message delivery on a physical device have not been tested.

Prices, offer expiration dates and opening hours were not supplied and have not been invented. The discount and customer/review totals are the owner's supplied marketing figures. The latest supplied customer figure is more than 150,000; the Google review figure remains 5,000. Confirm current offer terms before publication.

## Package Cards

All packages are rendered together in three sections: seven massage services, five hammams and four special bundles. Each package's photo, name, short description, duration, badges, inclusions and three booking links are visible immediately. There are no dropdowns, accordions, disclosure buttons, category filters, preview limits or modal dialogs. Category links navigate to headings without hiding other packages.

The full-width home-service section, labeled "دره سبا في بيتك", appears directly after the seven massage packages and before the Moroccan hammam packages. Its photograph, styling, `#at-home` anchor and home-service phone/WhatsApp links remain unchanged.

The photo-led cards use three columns on desktop, two on tablets and one on mobile. Special bundles use two columns on larger screens. Cards stretch within each row and use flexible inclusion lists to align the booking actions. Photos use reserved aspect ratios and lazy loading.

All 16 package photos display a compact, single-line badge reading only "خصم 50%". A slow three-second gold glow brightens and dims without hiding the text; the animation is disabled for reduced-motion preferences. VIP and most-popular labels remain beside the package details.

The top-right logo uses a compact gold lotus and a two-line wordmark displaying the full name "درة المساج والتدليك الرياضي" without repeating the word for massage. Its smaller visual size retains a 44px minimum link height for touch use. The footer keeps its original larger logo sizing.

Semantic articles and headings identify each package. All booking links remain in the normal keyboard tab order without requiring an expansion step. Reduced-motion preferences are respected.

## Reviews

The five reviews are excerpts transcribed from the supplied screenshots. They are not a live Google feed. Original screenshot photos and profile pictures were not available as project files, so initials are used rather than fabricated customer photographs. Stale relative timestamps and a fabricated aggregate rating have deliberately been omitted. Links are labeled as center reviews, not as direct links to an individual review.

## Branch Maps

The Shifa, Dhahrat Laban and Arqa embed URLs came from the supplied iframes. The supplied Yarmouk and Yasmin iframes repeated Arqa, so separate place identifiers and coordinates were taken from the branch links published on the center's public Linktree:

- https://linktr.ee/dorrat_almasaj
- Yarmouk: https://maps.app.goo.gl/V3UWi5xSVwg9qpWa9
- Yasmin: https://maps.app.goo.gl/EGYjqn1ysgv4sqLP9

Maps load automatically as the visitor approaches the branches section, in full color and without an activation step. The entire map surface is a normal link to that branch's Google Maps URL with `target="_blank"` and `rel="noopener noreferrer"`. A single tap or keyboard activation opens Google Maps in a new tab/window, or the app when the device handles the link that way. The preview iframe does not capture pointer or keyboard input, so touch scrolling remains available. Direction links and phone booking remain below each map. External map rendering depends on access to Google; opening Google Maps on a physical device has not been tested.

The corrected Yarmouk and Yasmin embed endpoints were fetched successfully and returned the respective branch names and place records. A production build succeeded and includes all six local image assets. Visual testing in a browser or on physical iPhones was not available in this environment.

## References

- Visual direction: https://nagmspa.com/
- WhatsApp click-to-chat: https://faq.whatsapp.com/5913398998672934/
- Google Maps URLs: https://developers.google.com/maps/documentation/urls/guide
- General massage/reflexology context: https://my.clevelandclinic.org/health/articles/16883-complementary-therapy
- Hot-stone relaxation context: https://www.healthline.com/health/hot-stone-massage

Service descriptions focus on relaxation, muscle tension and skin care, not guaranteed cures or toxin-removal claims.
