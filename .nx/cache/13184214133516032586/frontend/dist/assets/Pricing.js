import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { u as useVariant, H as Header, F as Footer } from "./Footer.js";
import { P as PricingCard } from "./PricingCard.js";
import { C as Card, a as CardContent } from "./card.js";
import { k as useNavigate } from "./react-vendor.js";
import { e as Check, X } from "./utils-vendor.js";
import "./index.js";
import "./auth-vendor.js";
import "./query-vendor.js";
import "./input.js";
import "./separator.js";
import "./badge.js";
const Pricing = () => {
  const { variant, setVariant } = useVariant();
  const planType = variant === "customer" ? "personal" : "business";
  const switchTo = (type) => setVariant(type === "personal" ? "customer" : "business");
  const navigate = useNavigate();
  const b2cPlans = [
    {
      name: "Essential Care",
      price: "$99",
      period: "/year",
      description: "Best for individuals who need occasional help.",
      features: [
        "3 on-demand tech support sessions per year (remote)",
        "PC health check & optimization (1× per year)",
        "Basic antivirus setup (BYOL – bring your own license or trial)",
        "Email support during business hours"
      ],
      buttonText: "Buy Now",
      popular: false
    },
    {
      name: "Advanced Care",
      price: "$149",
      period: "/year",
      description: "Covers everyday issues and adds security.",
      features: [
        "Unlimited remote support sessions (1 device)",
        "Antivirus license included (1 device, 1 year)",
        "Monthly PC tune-up & malware scans",
        "Printer, email, and software troubleshooting",
        "Priority support (faster response)"
      ],
      buttonText: "Buy Now",
      popular: false
    },
    {
      name: "Premium Care",
      price: "$249",
      period: "/year",
      description: "Complete protection for households with multiple devices.",
      features: [
        "Unlimited remote support for up to 3 devices (PC, tablet, phone)",
        "Quarterly PC optimization + patching",
        "Assistance with secure apps, online accounts, and cloud storage",
        "Priority support (8:30AM - 8:30PM EST)"
      ],
      buttonText: "Buy Now",
      popular: true
    },
    {
      name: "Family / Elite Care",
      price: "$449",
      period: "/year",
      description: "Peace of mind for families or power users.",
      features: [
        "Unlimited support for up to 5 devices",
        "Full software setup (Zoom, email, cloud, productivity & security apps)",
        "Smart home/IoT troubleshooting (Wi-Fi, Alexa, TVs, routers)",
        "Priority support with toll-free number (8:30AM - 8:30PM EST)"
      ],
      buttonText: "Buy Now",
      popular: false
    }
  ];
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
  const b2cFeatureComparison = [
    {
      category: "Support Features",
      features: [
        {
          name: "Remote tech support sessions",
          essential: "3 per year",
          advanced: "Unlimited (1 device)",
          premium: "Unlimited (up to 3 devices)",
          family: "Unlimited (up to 5 devices)"
        },
        {
          name: "Support hours",
          essential: "Business hours",
          advanced: "Business hours + Priority",
          premium: "8:30AM - 8:30PM EST",
          family: "8:30AM - 8:30PM EST"
        },
        {
          name: "Antivirus protection",
          essential: "BYOL (bring your own license)",
          advanced: "Included (1 device, 1 year)",
          premium: "Included (up to 3 devices)",
          family: "Included (up to 5 devices)"
        }
      ]
    },
    {
      category: "Maintenance & Optimization",
      features: [
        {
          name: "PC health checks",
          essential: "1× per year",
          advanced: "Monthly tune-ups",
          premium: "Quarterly optimization",
          family: "Quarterly optimization"
        },
        {
          name: "Software setup assistance",
          essential: "Basic setup",
          advanced: "Printer, email, software",
          premium: "Apps, payments, cloud storage",
          family: "Full setup (Zoom, email, cloud, banking)"
        },
        {
          name: "Smart home/IoT support",
          essential: false,
          advanced: false,
          premium: false,
          family: "Wi-Fi, Alexa, TVs, routers"
        }
      ]
    }
  ];
  const handleGetStarted = (planName) => {
    navigate("/payment", { state: { selectedPlan: planName } });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-20 pb-16 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold mb-6", children: "Managed Services Plans" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-8 max-w-3xl mx-auto", children: "Affordable, reliable, and designed for seniors & non-tech users across USA & Canada. Choose the plan that fits your needs." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "tel:+1-800-123-4567",
            className: "inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg",
            children: "📞 Call Now: (800) 123-4567"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Available 8:30AM - 8:30PM EST" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center space-x-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => switchTo("personal"),
            className: `px-6 py-2 rounded-lg font-medium transition-colors ${planType === "personal" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
            children: "🏠 Personal Plans"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => switchTo("business"),
            className: `px-6 py-2 rounded-lg font-medium transition-colors ${planType === "business" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
            children: "🏢 Business Plans"
          }
        )
      ] })
    ] }) }),
    planType === "personal" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "🛡️ Personal Managed Services Plans" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Choose the plan that fits your needs and enjoy peace of mind all year round." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto", children: b2cPlans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          PricingCard,
          {
            title: plan.name,
            price: plan.price,
            period: plan.period,
            description: plan.description,
            features: plan.features,
            buttonText: plan.buttonText,
            popular: plan.popular,
            onButtonClick: () => handleGetStarted(plan.name)
          },
          plan.name
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gradient-to-br from-blue-50 to-indigo-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent", children: "Compare Personal Plans" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Detailed breakdown of features across all personal plans" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "max-w-7xl mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-6 font-bold text-lg", children: "Features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center p-6 font-bold text-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: "$99" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-90", children: "Essential Care" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center p-6 font-bold text-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: "$149" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-90", children: "Advanced Care" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center p-6 font-bold text-lg bg-gradient-to-b from-yellow-400 to-orange-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: "$249" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-90", children: "Premium Care" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs bg-white/20 rounded-full px-2 py-1 mt-1", children: "Most Popular" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center p-6 font-bold text-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: "$449" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-90", children: "Family Care" })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: b2cFeatureComparison.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-gradient-to-r from-gray-50 to-blue-50/30 border-b-2 border-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-6 font-bold text-lg text-blue-900", colSpan: 5, children: category.category }) }, category.category),
            category.features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-200 hover:bg-blue-50/50 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-6 font-medium text-gray-800", children: feature.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center p-6", children: feature.essential ? typeof feature.essential === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800", children: feature.essential }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 text-green-600 bg-green-100 rounded-full p-1" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-red-500 bg-red-100 rounded-full p-1" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center p-6", children: feature.advanced ? typeof feature.advanced === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800", children: feature.advanced }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 text-green-600 bg-green-100 rounded-full p-1" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-red-500 bg-red-100 rounded-full p-1" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center p-6 bg-gradient-to-b from-yellow-50 to-orange-50", children: feature.premium ? typeof feature.premium === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800", children: feature.premium }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 text-green-600 bg-green-100 rounded-full p-1" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-red-500 bg-red-100 rounded-full p-1" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center p-6", children: feature.family ? typeof feature.family === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800", children: feature.family }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-6 h-6 text-green-600 bg-green-100 rounded-full p-1" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-red-500 bg-red-100 rounded-full p-1" }) }) })
            ] }, `${category.category}-${index}`))
          ] })) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-8 text-gray-800", children: "Ready to Get Started?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gray-800 mb-2", children: "$99/year" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-blue-600 mb-4", children: "Essential Care" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleGetStarted("Essential Care"),
                  className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors",
                  children: "Buy Now"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gray-800 mb-2", children: "$149/year" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-blue-600 mb-4", children: "Advanced Care" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleGetStarted("Advanced Care"),
                  className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors",
                  children: "Buy Now"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg p-6 border-2 border-yellow-300 hover:shadow-xl transition-shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-white mb-2", children: "$249/year" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-white mb-2", children: "Premium Care" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm bg-white/20 rounded-full px-3 py-1 mb-4 inline-block", children: "Most Popular" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleGetStarted("Premium Care"),
                  className: "w-full bg-white hover:bg-gray-100 text-orange-600 font-semibold py-3 px-6 rounded-lg transition-colors",
                  children: "Buy Now"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gray-800 mb-2", children: "$449/year" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-blue-600 mb-4", children: "Family Care" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleGetStarted("Family / Elite Care"),
                  className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors",
                  children: "Buy Now"
                }
              )
            ] })
          ] })
        ] })
      ] }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
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
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Everything you need to know about our tech support services" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3 text-blue-900", children: "What devices do you support?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We support Windows PCs, Macs, tablets (iPad, Android), smartphones (iPhone, Android), and smart home devices including routers, printers, and IoT devices. Our technicians are trained on all major operating systems and can help with setup, troubleshooting, and optimization." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4 border-l-green-500 shadow-md hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3 text-green-900", children: "How quickly can I get help?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Response times vary by plan: Essential Care offers business hours support, Advanced Care provides priority response, while Premium and Family Care plans get the fastest response times. Most issues are resolved within the same session, and we offer unlimited support sessions for higher-tier plans." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4 border-l-purple-500 shadow-md hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3 text-purple-900", children: "What if I'm not tech-savvy?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Our team specializes in helping seniors and non-technical users. We use simple language, provide step-by-step guidance, and can take control of your device remotely to fix issues. We also offer personalized training sessions to help you feel confident using your technology." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3 text-orange-900", children: "Is my data secure during remote support?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Absolutely. We use industry-standard encryption and secure remote access tools. Our technicians only access what they need to fix your issue, and all sessions are monitored and logged. We never store your personal data or access private files without your explicit permission." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4 border-l-red-500 shadow-md hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3 text-red-900", children: "What common issues do you fix?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We handle everything from basic setup and software installation to complex issues like virus removal, system optimization, email problems, Wi-Fi connectivity, printer setup, and smart home device configuration. We also provide preventive maintenance and security updates." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4 border-l-indigo-500 shadow-md hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3 text-indigo-900", children: "Can I get help with online banking and shopping?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Yes! Higher-tier plans include assistance with online banking setup, secure payment methods, and safe online shopping practices. We help you set up payment apps, configure security settings, and teach you how to recognize and avoid online scams." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4 border-l-teal-500 shadow-md hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3 text-teal-900", children: "What antivirus protection do you provide?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Advanced Care and higher plans include a full year of premium antivirus protection. Essential Care users can bring their own license or we can help set up free antivirus options. We also provide ongoing malware scanning, removal services, and security best practices training." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4 border-l-pink-500 shadow-md hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3 text-pink-900", children: "Do you offer phone support?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "For B2C customers, we provide email support during business hours (8:30AM - 8:30PM EST). B2B customers can request phone consultations through our contact form. All support is handled by certified technicians with expertise in senior-friendly technology solutions." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-l-4 border-l-cyan-500 shadow-md hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-3 text-cyan-900", children: "Can I change or cancel my plan?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "You can upgrade your plan at any time with prorated billing. Downgrades take effect at the next billing cycle. Cancellations can be made anytime with no cancellation fees. We offer a 30-day money-back guarantee on all plans." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  Pricing as default
};
