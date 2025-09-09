export type PlanKey = 'mobile' | 'individual' | 'family' | 'family_plus'

export interface Plan {
  id: PlanKey
  title: string
  priceCents: number
  priceLabel: string
  duration: string
  devices: string
  features: string[]
  stripePriceEnv: string // environment variable name for Stripe Price ID
  summary: string
}

export const PLANS: Plan[] = [
  {
    id: 'mobile',
    title: 'Mobile Plan',
    priceCents: 14900,
    priceLabel: '$149',
    duration: '1 year',
    devices: 'Up to 10 devices',
    features: [
      '1 year Mobile Antivirus protection of your choice',
      'Technical support for up to 10 devices for one year',
      'Great for year‑round device protection',
      'Avoid third‑party support costs'
    ],
    stripePriceEnv: 'STRIPE_PRICE_ID_MOBILE',
    summary: 'Mobile antivirus + 1 year support'
  },
  {
    id: 'individual',
    title: 'Individual Plan',
    priceCents: 24900,
    priceLabel: '$249',
    duration: '1 year',
    devices: 'Phone + PC (1 each)',
    features: [
      '1 year antivirus for Phone + PC',
      'Unlimited support (1 Computer, 1 Phone) for one year',
      'General diagnostics and troubleshooting',
      'Setup and installation assistance',
      'Driver and application software support',
      'Anti‑spyware setup and optimization',
      'Security software installation and management',
      'Computer optimization and memory management',
      'Software update management',
      '1/2 hour PC training session',
      'Monthly scheduled PC tune‑up call',
      'Email configuration and assistance'
    ],
    stripePriceEnv: 'STRIPE_PRICE_ID_INDIVIDUAL',
    summary: 'Antivirus + comprehensive one‑year support'
  },
  {
    id: 'family',
    title: 'Family Plan',
    priceCents: 34900,
    priceLabel: '$349',
    duration: '3 years (antivirus) / 1 year support',
    devices: 'Up to 5 devices (support for 1 year)',
    features: [
      '3 years antivirus protection',
      'Unlimited support for up to 5 devices for 1 year',
      'Complete Value‑Added Services Bundle (same as Individual)'
    ],
    stripePriceEnv: 'STRIPE_PRICE_ID_FAMILY',
    summary: '3 years protection + family support'
  },
  {
    id: 'family_plus',
    title: 'Family+ Plan',
    priceCents: 44900,
    priceLabel: '$449',
    duration: '3 years (antivirus) / 2 years support',
    devices: 'Up to 10 devices (2 years support)',
    features: [
      '3 years antivirus protection',
      '2 years technical support for 10 devices',
      'Complete Value‑Added Services Bundle (same as Individual)'
    ],
    stripePriceEnv: 'STRIPE_PRICE_ID_FAMILY_PLUS',
    summary: 'Extended family protection + 2 years support'
  }
]
