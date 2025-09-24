import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { P as PricingCard } from "./PricingCard.js";
import { k as useNavigate } from "./react-vendor.js";
import "./index.js";
import "./auth-vendor.js";
import "./utils-vendor.js";
import "./query-vendor.js";
import "./input.js";
import "./separator.js";
import "./card.js";
import "./badge.js";
const BusinessPricing = () => {
  const navigate = useNavigate();
  const b2bPlans = [
    {
      name: "Managed Hosting",
      price: "",
      period: "",
      description: "Fully managed servers & cloud hosting.",
      features: [
        "Fully managed servers & cloud hosting",
        "Domain & email management",
        "Security & patch updates",
        "Uptime monitoring & SLA"
      ],
      buttonText: "Query Now",
      popular: false
    },
    {
      name: "MSP Services",
      price: "",
      period: "",
      description: "Endpoint management & monitoring.",
      features: [
        "Endpoint management & monitoring",
        "Patch management & software updates",
        "Remote troubleshooting & support",
        "Security & antivirus management"
      ],
      buttonText: "Query Now",
      popular: false
    },
    {
      name: "MSSP Services",
      price: "",
      period: "",
      description: "Managed cybersecurity monitoring.",
      features: [
        "Managed cybersecurity monitoring",
        "Threat detection & incident response",
        "Compliance & auditing support",
        "Backup & disaster recovery planning"
      ],
      buttonText: "Query Now",
      popular: false
    },
    {
      name: "Backup as a Service",
      price: "",
      period: "",
      description: "Cloud backup with encryption.",
      features: [
        "Cloud backup with encryption",
        "Scheduled backups & restore verification",
        "Versioning & retention policies",
        "Optional white-label solutions"
      ],
      buttonText: "Query Now",
      popular: false
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-20 pb-16 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold mb-6", children: "Business Managed Services Plans" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-8 max-w-3xl mx-auto", children: "Professional remote support, system management, and technology solutions delivered by our expert team." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "🏢 Business Managed Services Plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Pricing is hidden. Submit a query to receive a personalized quote." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto", children: b2bPlans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        PricingCard,
        {
          title: plan.name,
          price: plan.price,
          period: plan.period,
          description: plan.description,
          features: plan.features,
          buttonText: plan.buttonText,
          popular: plan.popular,
          onButtonClick: () => navigate("/contact", { state: { service: plan.name } })
        },
        plan.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Why Choose Our Business Services?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Comprehensive IT solutions designed for growing businesses" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🛡️" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: "24/7 Security Monitoring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Continuous threat detection and incident response to protect your business data." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⚡" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: "Rapid Response" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Quick problem resolution with dedicated support during business hours (8:30AM - 8:30PM EST)." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📊" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-2", children: "Compliance & Reporting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Regular compliance audits and detailed reporting for peace of mind." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Everything you need to know about our business managed services" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "What industries do you serve?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We serve businesses across all industries including healthcare, finance, retail, manufacturing, professional services, education, and government sectors. Our solutions are tailored to meet industry-specific compliance requirements and operational needs." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "Do you offer customized solutions?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Yes, all our business plans can be fully customized to meet your specific requirements, compliance needs, and business objectives. We work closely with your team to design solutions that integrate seamlessly with your existing infrastructure and processes." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "What are your service level agreements (SLAs)?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Our SLA guarantees include 99.9% uptime monitoring, response times within 15 minutes for critical issues during business hours (8:30AM - 8:30PM EST), and resolution commitments tailored to your business needs. We also provide detailed monthly reporting and compliance documentation." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "How do you handle data security and compliance?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Security is our top priority. We implement enterprise-grade encryption, multi-factor authentication, regular security audits, and compliance with standards like SOC 2, HIPAA, PCI DSS, and GDPR. All data is backed up with geo-redundant storage and encrypted both in transit and at rest." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "What is your onboarding process?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Our structured onboarding process includes: initial consultation and assessment (1-2 weeks), detailed planning and customization (2-4 weeks), implementation and migration (4-8 weeks depending on complexity), and ongoing training and support. We assign a dedicated account manager to ensure smooth transition." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "Do you provide 24/7 support?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Yes, we offer 24/7 monitoring and support with dedicated business hours support from 8:30AM - 8:30PM EST. Critical system alerts are monitored around the clock, and our emergency response team is available for urgent situations outside normal business hours." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "What happens during system outages or emergencies?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Our incident response protocol ensures immediate notification and rapid resolution. We maintain detailed emergency contact lists, backup communication channels, and predefined escalation procedures. Critical systems are monitored 24/7 with automated alerts and manual oversight." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "How do you handle software updates and patches?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We follow industry best practices for patch management with scheduled maintenance windows, thorough testing in staging environments, and gradual rollouts to minimize business disruption. Critical security patches are applied within 24-48 hours of release." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "What reporting and analytics do you provide?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We provide comprehensive monthly reports including system performance metrics, security incidents, compliance status, backup verification, and business continuity readiness. Custom dashboards and real-time monitoring are available through our client portal." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "How do you ensure business continuity?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Our business continuity planning includes redundant systems, automated failover, regular disaster recovery testing, and comprehensive backup strategies. We maintain multiple data centers and cloud providers to ensure uninterrupted service availability." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "What are your contract terms and cancellation policies?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Contracts are typically 12-36 months with flexible renewal options. We offer 30-day money-back guarantee for new clients. Cancellation requires 90-day written notice. All data will be securely returned or destroyed according to your preferences upon contract termination." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "Do you offer training for our staff?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Yes, we provide comprehensive training programs including initial onboarding sessions, ongoing education on new features and security best practices, and documentation access. Training can be delivered remotely or on-site depending on your preference." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-lg border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3 text-lg", children: "How do you handle vendor management and third-party integrations?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We manage all vendor relationships, software licenses, and third-party integrations on your behalf. This includes license renewals, vendor negotiations, integration testing, and ensuring compatibility with your existing systems and compliance requirements." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  BusinessPricing as default
};
