# Novaqy MVP - Technical Context & Integration Architecture

## Project Architecture Overview

### Business Context
Novaqy Cloud LLP provides patient, senior-focused technical support across US and Canada through one-time service plans. The website serves as both a marketing platform and purchase gateway, with immediate support call initiation post-purchase.

### Target User Demographics
- **Primary**: Adults 55+ who struggle with technology (computers, phones, email, devices)
- **Technology Comfort**: Low to moderate; prefer simple, clear interfaces
- **Device Usage**: Mix of older computers, tablets, smartphones; often slower internet
- **Pain Points**: Complex interfaces, technical jargon, time pressure, small text/buttons
- **Goals**: Get help quickly, understand costs clearly, trust the service provider

## Technical Stack Architecture

### Frontend (Astro + TypeScript + Tailwind + Shadcn)
```
Frontend Layer:
┌─────────────────────────────────────────────┐
│ Astro 4+ (Static Site Generation)          │
│ ├── TypeScript (Strict Mode Only)          │
│ ├── Tailwind CSS (Senior-Optimized)        │
│ ├── Shadcn/ui Components (Curated)         │
│ └── Zero Runtime JS (Performance First)    │
└─────────────────────────────────────────────┘
```

### Backend & Services
```
Service Layer:
┌─────────────────┐ ┌──────────────────┐ ┌─────────────────┐
│ Supabase        │ │ Stripe Checkout  │ │ Google/Zoho     │
│ ├── Database    │ │ ├── Sessions     │ │ ├── Workspace   │
│ ├── Auth        │ │ ├── Webhooks     │ │ ├── Analytics   │
│ ├── RLS         │ │ └── Success/Fail │ │ └── Zoho Sign   │
│ └── Edge Funcs  │ └──────────────────┘ └─────────────────┘
└─────────────────┘
```

### Hosting & Deployment
```
Infrastructure:
┌─────────────────────────────────────────────┐
│ Cloudflare Pages (Edge Hosting)            │
│ ├── GitHub Integration (Auto Deploy)       │
│ ├── Global CDN (Senior Device Support)     │
│ ├── Edge Functions (Serverless)            │
│ └── SSL/Security Headers                   │
└─────────────────────────────────────────────┘
```

## Senior-First Design Philosophy

### Performance Considerations
- **Device Reality**: Many seniors use 3-5 year old devices with limited RAM/CPU
- **Connection Speed**: Often basic broadband or mobile data with slower speeds
- **Browser Usage**: Mix of modern and slightly outdated browsers
- **Memory Constraints**: Limited available memory due to background applications

### Accessibility Requirements (Non-Negotiable)
- **Font Scaling**: Base 18px, scalable to 32px without layout breaking
- **Color Contrast**: 4.5:1 minimum, tested with WebAIM contrast checker
- **Interaction Areas**: 44px minimum touch targets, forgiving click areas
- **Navigation Patterns**: Consistent, predictable, breadcrumb navigation
- **Error Recovery**: Clear error messages with specific next steps
- **Time Allowances**: No session timeouts, patient form handling

### Content Strategy
- **Language Level**: 6th-8th grade reading level, no technical jargon
- **Instruction Format**: Numbered steps, visual cues, patient tone
- **Trust Building**: Prominent phone number, clear pricing, testimonials
- **Urgency Balance**: Helpful without creating pressure or anxiety

## File Structure & Organization

### Project Structure
```
novaqy-mvp/
├── src/
│   ├── components/
│   │   ├── ui/                 # Shadcn components (curated)
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Form.tsx
│   │   │   └── Dialog.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Navigation.astro
│   │   └── features/           # Feature-specific components
│   │       ├── PlanCard.astro
│   │       ├── ContactForm.astro
│   │       └── CallToAction.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Main layout wrapper
│   │   └── PageLayout.astro    # Standard page layout
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── plans.astro         # Plans comparison
│   │   ├── about.astro         # Company information
│   │   ├── contact.astro       # Contact form
│   │   ├── business.astro      # B2B coming soon
│   │   ├── tools/
│   │   │   └── index.astro     # Tools directory (coming soon)
│   │   ├── legal/
│   │   │   ├── terms.astro     # Terms of service
│   │   │   ├── privacy.astro   # Privacy policy
│   │   │   └── refund.astro    # Refund policy
│   │   ├── remote-disclaimer.astro  # Remote tool disclaimer
│   │   ├── sign-contract.astro # Zoho Sign integration
│   │   ├── success.astro       # Payment success
│   │   └── cancel.astro        # Payment cancellation
│   ├── lib/
│   │   ├── supabase.ts         # Supabase client and types
│   │   ├── stripe.ts           # Stripe integration helpers
│   │   ├── seo.ts              # SEO utilities and metadata
│   │   └── utils.ts            # General utilities
│   ├── styles/
│   │   ├── globals.css         # Global styles and resets
│   │   └── components.css      # Component-specific styles
│   └── types/
│       └── index.ts            # TypeScript type definitions
├── public/
│   ├── robots.txt              # Search engine instructions
│   ├── sitemap.xml             # Auto-generated sitemap
│   └── favicon.ico             # Favicon and app icons
├── astro.config.mjs            # Astro configuration
├── tailwind.config.js          # Tailwind senior-friendly config
├── tsconfig.json               # TypeScript strict configuration
├── package.json                # Dependencies and scripts
├── .env.example                # Environment variable template
├── Jenkinsfile                 # CI/CD pipeline configuration
└── README.md                   # Project documentation
```

## Integration Architecture

### Payment Flow (Stripe Checkout Sessions)
```
User Journey:
1. User clicks "Buy Now" on Plans page
2. Frontend calls Stripe API to create Checkout Session
3. User redirects to Stripe Checkout (hosted)
4. User completes payment with personal details
5. Stripe redirects to /success or /cancel
6. Success page shows "Call Now" CTA + internal notification
7. Support team receives email with customer details
8. Manual call initiation to customer
```

### Data Flow Architecture
```
Contact Form:
User Input → Form Validation → Supabase Insert → Email Notification

Plan Purchase:
User Action → Stripe Session → Payment → Supabase Log → Call Notification

Call Initiation:
Purchase Success → Email to Support → Manual Call → Update Status
```

### Environment Variables
```
# Supabase Configuration
SUPABASE_URL=your-project-url.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key

# Stripe Configuration
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_ID_MOBILE=price_...
STRIPE_PRICE_ID_INDIVIDUAL=price_...
STRIPE_PRICE_ID_FAMILY=price_...
STRIPE_PRICE_ID_FAMILY_PLUS=price_...

# Google Analytics
GA4_MEASUREMENT_ID=G-...

# Zoho Integration
ZOHO_SIGN_TEMPLATE_ID=placeholder-template-id

# Email Configuration
SUPPORT_EMAIL=support@novaqy.com
NOTIFICATION_EMAIL=notifications@novaqy.com

# Domain Configuration
PUBLIC_SITE_URL=https://novaqy.com
```

## Database Schema & Operations

### Supabase Tables
```sql
-- Contact form submissions
contact_submissions:
  - id (uuid, pk)
  - name (text, required)
  - email (text, required)
  - phone (text, optional)
  - preferred_contact_time (text)
  - message (text)
  - created_at (timestamptz)

-- Plan purchases
plan_purchases:
  - id (uuid, pk)
  - stripe_session_id (text, unique)
  - customer_name (text, required)
  - customer_email (text, required)
  - customer_phone (text)
  - plan_type (enum: mobile|individual|family|family_plus)
  - amount_paid (integer, cents)
  - payment_status (enum: pending|completed|failed)
  - call_initiated (boolean, default false)
  - created_at (timestamptz)

-- Call notifications
call_notifications:
  - id (uuid, pk)
  - purchase_id (uuid, fk)
  - customer_name (text)
  - customer_phone (text)
  - plan_type (text)
  - notification_sent (boolean)
  - call_completed (boolean)
  - notes (text)
  - created_at (timestamptz)
```

### Row Level Security (RLS)
- **contact_submissions**: Allow anonymous inserts, admin read
- **plan_purchases**: System inserts only, admin read/update
- **call_notifications**: Admin access only

## SEO & Content Strategy

### Target Keywords & Content
```
Primary Keywords:
- "technical support for seniors"
- "senior tech help US Canada"
- "patient computer assistance"
- "one-time tech support plans"

Long-tail Keywords:
- "help seniors with computers"
- "antivirus setup for older adults"
- "patient tech support phone number"
- "senior-friendly IT assistance"

Content Strategy:
- Homepage: Trust-building, clear value proposition
- Plans: Benefit-focused descriptions, no tech jargon
- About: Human connection, patience emphasis
- Contact: Multiple ways to reach support
```

### Schema.org Implementation
```json
Organization Schema:
{
  "@type": "Organization",
  "name": "Novaqy Cloud LLP",
  "alternateName": "Novaqy",
  "description": "Patient technical support for seniors across US and Canada",
  "telephone": "+1-800-330-1234",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": ["US", "CA"]
  },
  "serviceArea": ["United States", "Canada"]
}

Service Schema:
{
  "@type": "Service",
  "name": "Senior Technical Support",
  "provider": "Novaqy Cloud LLP",
  "serviceType": "Technical Support",
  "audience": "Seniors aged 55+"
}
```

## Accessibility Testing Framework

### Automated Testing
- **axe-core**: Zero accessibility violations required
- **Lighthouse**: 100 accessibility score mandatory
- **Color Contrast**: WebAIM contrast checker integration
- **Keyboard Navigation**: Tab order and focus management testing

### Manual Testing Protocol
```
Senior Accessibility Checklist:
□ All text minimum 18px, scalable to 200%
□ Color contrast minimum 4.5:1 (test with WebAIM)
□ All interactive elements minimum 44px touch target
□ Keyboard navigation reaches all functionality
□ Focus indicators visible and high-contrast
□ Screen reader announces all content logically
□ No auto-playing content or animations
□ Error messages are clear and actionable
□ Forms have proper labels and validation
□ Phone numbers are click-to-call enabled
```

## Performance Optimization Strategy

### Bundle Optimization
- **CSS**: Purge unused styles, inline critical CSS
- **JavaScript**: Minimal runtime JS, prefer server-side rendering
- **Images**: WebP/AVIF with fallbacks, proper alt text
- **Fonts**: System fonts preferred, preload critical fonts only

### Caching Strategy
```
Cloudflare Caching:
- Static assets: 1 year cache
- HTML pages: 1 hour cache (for updates)
- API responses: No cache (dynamic content)
- Images: 6 months cache with versioning
```

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: <1.2s
- **FID (First Input Delay)**: <100ms
- **CLS (Cumulative Layout Shift)**: <0.1
- **Performance Budget**: CSS <50KB, JS <20KB

## Deployment & CI/CD

### Jenkins Pipeline Stages
```
Pipeline Stages:
1. Checkout & Dependencies
2. TypeScript Type Checking (strict mode)
3. ESLint & Prettier Validation
4. Unit Tests (utilities and components)
5. Build Production Bundle
6. Lighthouse CI (Performance ≥95, A11y 100)
7. Accessibility Tests (axe-core, zero violations)
8. Deploy to Cloudflare Pages
9. Smoke Tests (key pages load correctly)
10. Notification (Slack/Email on success/failure)
```

### Environment Strategy
- **Development**: Local development with Supabase local
- **Staging**: Cloudflare Pages preview deployments
- **Production**: Cloudflare Pages with custom domain

## Security Considerations

### Data Protection
- **PII Handling**: Customer data encrypted at rest (Supabase)
- **Payment Security**: PCI compliance through Stripe
- **Form Validation**: Client and server-side validation
- **HTTPS**: Enforce HTTPS on all pages
- **CSP Headers**: Content Security Policy implementation

### Senior-Specific Security
- **Clear Privacy**: Simple, readable privacy policy
- **Data Minimization**: Collect only necessary information
- **Secure Defaults**: No tracking without explicit consent
- **Trust Indicators**: Security badges and certifications

## Future Expansion Points

### Phase 2 Enhancements
- **Tools Implementation**: Add actual utility tools functionality
- **User Accounts**: Customer portal for service history
- **Automated Calling**: Integration with call center software
- **B2B Portal**: Full business services section

### Integration Roadmap
- **Zoho CRM**: Full customer relationship management
- **Call Center**: Automated call routing and queue
- **Live Chat**: Senior-friendly chat widget
- **Knowledge Base**: Self-service help articles

This technical context ensures the MVP delivers a fast, accessible, and effective platform for Novaqy's senior customers while maintaining clear paths for future enhancement and scaling.