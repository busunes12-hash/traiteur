# Élan Traiteur Frontend Architecture

## Project Overview

Modern, production-ready React application built with Vite, Tailwind CSS, and responsive design principles. The site showcases luxury catering services with full accessibility and SEO optimization.

**Tech Stack:**
- React 18.3.1 with Hooks
- Vite 7.0.0 (build tool)
- Tailwind CSS 3.4.17 (styling)
- Docker + nginx (deployment)

---

## Directory Structure

```
src/
├── components/
│   ├── common/               # Reusable UI components
│   │   ├── Button.jsx       # BtnGold, BtnOutline, BtnSmall
│   │   ├── Typography.jsx   # Eyebrow, Heading, Subtitle, etc.
│   │   ├── Logo.jsx         # Brand logo component
│   │   └── index.js         # Barrel export
│   │
│   └── sections/            # Page section components
│       ├── Navbar.jsx       # Navigation header with mobile menu
│       ├── Hero.jsx         # Hero carousel (5 slides)
│       ├── Services.jsx     # 6 service cards
│       ├── Manifesto.jsx    # About/philosophy section
│       ├── Gallery.jsx      # Masonry gallery with lightbox
│       ├── Testimonials.jsx # Testimonial carousel
│       ├── Pricing.jsx      # 3 pricing tiers
│       ├── FAQ.jsx          # Accordion FAQ
│       ├── Contact.jsx      # CTA + contact info
│       ├── Footer.jsx       # Site footer
│       └── index.js         # Barrel export
│
├── data/
│   └── content.js           # Centralized content & configuration
│
├── hooks/
│   ├── useTheme.js          # Theme toggle (prepared for future)
│   └── useScrollReveal.js   # Scroll reveal & nav scroll detection
│
├── App.jsx                  # Main app wrapper
├── main.jsx                 # React entry point
└── index.css                # Global styles & utilities

```

---

## Core Components

### Common Components

**Button.jsx**
- `BtnGold` - Primary CTA button (champagne background)
- `BtnOutline` - Secondary button (outlined)
- `BtnSmall` - Minimal text link

All variants include:
- Focus-visible states for keyboard navigation
- Hover animations
- Semantic HTML (links as `<a>`, buttons as `<button>`)

**Typography.jsx**
- `GoldLine` - Decorative divider
- `Eyebrow` - Section label with accent line
- `SectionHeading` - Main section title
- `PageTitle` - Large hero headline (clamp-hero)
- `Subtitle` - Body text with responsive sizing

### Section Components

**Navbar.jsx**
- Fixed navigation with scroll detection
- Mobile hamburger menu (animated)
- Desktop and mobile layouts
- Proper ARIA labels and semantic nav

**Hero.jsx**
- 5-slide carousel with 4-second auto-rotation
- Keyboard + click navigation
- Staggered animation reveals
- Stats display
- Scroll hint animation
- Ken Burns effect on images

**Services.jsx**
- 6 responsive grid cards (sm:2col, lg:3col)
- Hover background image overlay
- Numbered display (01-06)
- Animated accent line

**Manifesto.jsx**
- 2-column layout (image + text)
- Floating stat box
- Hover zoom effect on image
- Responsive spacing adjustments

**Gallery.jsx**
- Responsive masonry grid (2-3 columns)
- Interactive lightbox modal
- Lazy loading on below-fold images
- ESC key to close
- Click outside to close

**Testimonials.jsx**
- 3-item carousel with 5-second rotation
- 5-star rating display
- Indicator dots for manual navigation
- Smooth opacity transitions

**Pricing.jsx**
- 3 pricing cards with responsive grid
- Featured tier with gradient text
- Feature bullet lists
- CTA buttons

**FAQ.jsx**
- Accordion with expand/collapse
- Custom plus-to-cross icon animation
- Smooth height transitions
- Staggered reveal

**Contact.jsx**
- Split 2-column layout
- WhatsApp + email CTAs
- Contact information display
- Social media links

**Footer.jsx**
- Responsive navigation
- Logo + tagline
- Auto-generated copyright year
- Mobile vs desktop layout

---

## Data Management

**src/data/content.js**

Centralized configuration containing:
- `BRAND` - Company branding
- `CONTACT` - Phone, WhatsApp, email, address
- `NAV_LINKS` - Navigation menu items
- `STATS` - Hero section stats
- `FEATURES` - 6 service descriptions
- `TESTIMONIALS` - 3 client quotes
- `PRICING` - 3 pricing tiers
- `FAQS` - 6 questions with answers
- `SERVICE_IMAGES` - Image URLs for service cards

All components import from this single source of truth.

---

## Hooks

### useScrollReveal()

```javascript
useScrollReveal(); // Called once in App component

// Automatically handles:
// - Observes elements with .reveal, .reveal-left, .reveal-right classes
// - Adds .visible class when in viewport
// - CSS transitions handle the animation
```

### useNavScroll(threshold = 60)

```javascript
const scrolled = useNavScroll();
// Returns true if scrollY > 60px, false otherwise
```

---

## Styling Architecture

### Tailwind Configuration

**Colors:**
- `obsidian` - Dark neutral (950 = #0a0908)
- `champagne` - Gold accent (500 = #c9a84c)
- `ivory` - Light text (#f7f3eb)
- `mocha` - Secondary (used in testimonials)

**Typography:**
- `font-display` - Cormorant Garamond (headings)
- `font-sans` - DM Sans (body text)

**Custom Utilities:**
- `text-gradient-gold` - Gold gradient text
- `glass`, `glass-dark` - Frosted glass effects
- `gold-border-gradient` - Animated border
- `clamp-title`, `clamp-hero` - Responsive font sizing
- `section-pad` - Consistent section padding

### Global Styles (index.css)

**Animations:**
- `fade-up` - Vertical slide up with opacity
- `fade-in` - Pure opacity transition
- `slide-right` - Horizontal slide with scale
- `ken-burns` - Subtle zoom effect
- `float` - Floating up/down motion
- `shimmer` - Shine effect

**Accessibility:**
- Enhanced `focus-visible` states
- `prefers-reduced-motion` support
- `.sr-only` and `.skip-to-main` utilities

---

## Responsive Design Strategy

### Breakpoints (Tailwind defaults)

```
sm: 640px   - Tablets/small screens
lg: 1024px  - Desktop
xl: 1280px  - Large screens
```

### Component Patterns

All components follow mobile-first approach:

```jsx
// Text sizing
className="text-sm sm:text-base lg:text-lg"

// Grid layouts
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"

// Spacing
className="px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8"

// Padding with clamp
className="section-pad" // Responsive vertical padding
```

---

## Image Optimization

### srcset Implementation

Images include multiple resolution breakpoints:

```jsx
srcSet={`
  ${url}?w=400&q=80 400w,
  ${url}?w=600&q=80 600w,
  ${url}?w=800&q=80 800w,
  ${url}?w=1200&q=80 1200w
`}
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
```

### Lazy Loading

- Hero hero images: `loading="eager"` (LCP)
- Gallery/other images: `loading="lazy"` (below fold)

---

## Accessibility Features

### ARIA & Semantic HTML

- Proper heading hierarchy (h1, h2, h3)
- `<nav>`, `<main>`, `<section>` semantic tags
- `aria-label` on nav elements
- `aria-expanded` on toggle buttons
- `role="button"` on interactive divs
- `aria-hidden="true"` on decorative elements
- `aria-current="page"` on active nav items

### Keyboard Navigation

- All interactive elements in tab order
- Focus-visible outline on all buttons
- ESC key closes modals/lightboxes
- Enter/Space triggers buttons
- Arrow keys in carousels

### Screen Reader Support

- Skip-to-main link
- Alt text on all images
- Descriptive aria-labels
- Proper table semantics (if added)

---

## Performance Metrics

### Build Sizes (Production)

```
HTML:  4.19 KB (gzip: 1.48 KB)
CSS:   29.25 KB (gzip: 5.79 KB)
JS:    182.27 KB (gzip: 56.56 KB)
```

### Core Web Vitals Targets

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Optimization Techniques

- CSS-driven animations (no JS for transitions)
- Native lazy loading on images
- Responsive image srcsets
- Efficient event handlers with proper cleanup
- Minimal component re-renders with useCallback

---

## SEO & Meta Tags

### Open Graph

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Élan Traiteur — L'art de recevoir" />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
```

### JSON-LD Structured Data

LocalBusiness schema with:
- Name, description, contact
- Address, service area
- Social media links
- Price range

### Keywords

French luxury catering, weddings, events, Casablanca

---

## Development Workflow

### Setup

```bash
npm install
npm run dev        # Local dev server
npm run build      # Production build
npm run preview    # Preview production build
```

### Adding New Components

1. Create file in `src/components/sections/` or `src/components/common/`
2. Export from section `index.js`
3. Import in App.jsx
4. Follow existing component patterns for accessibility and responsiveness

### Content Updates

Most changes only require updating `src/data/content.js`:
- Text, pricing, services, testimonials, FAQs
- Phone numbers, email, social links
- No need to rebuild frontend code

### Building for Production

```bash
npm run build
# Output in dist/ folder
# Ready for Docker deployment
```

---

## Deployment

### Docker Build

```dockerfile
# Nixpacks automatically:
# 1. Installs dependencies (npm install)
# 2. Builds assets (npm run build)
# 3. Serves with nginx
```

### Environment

Deployed via Easypanel (pulls from GitHub)

**Deployment Steps:**

1. Commit changes locally
2. Push to `busunes12-hash/traiteur` master branch
3. Easypanel auto-pulls and rebuilds
4. nginx serves production build

---

## Future Enhancements

- [ ] Contact form with email backend
- [ ] Newsletter signup modal
- [ ] Cookie consent banner
- [ ] Loading states and skeletons
- [ ] Error boundary components
- [ ] Dynamic testimonials from CMS
- [ ] Blog section with MDX
- [ ] Internationalization (FR/EN/AR)
- [ ] Analytics integration

---

## File Size Budget

Keep these targets for optimal performance:

```
JS:  < 200KB (gzip: < 60KB)
CSS: < 35KB  (gzip: < 7KB)
```

---

## Questions & Support

For updates to component structure, styling, or architecture:
1. Check existing patterns in similar components
2. Follow established naming conventions
3. Ensure accessibility standards
4. Test responsive design on mobile/tablet
5. Validate with build: `npm run build`

Last Updated: 2024
