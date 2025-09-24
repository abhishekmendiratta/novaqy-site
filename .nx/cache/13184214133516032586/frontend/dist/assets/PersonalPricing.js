import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
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
const PersonalPricing = () => {
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
        "Email/phone support during business hours"
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
      popular: true
    },
    {
      name: "Premium Care",
      price: "$249",
      period: "/year",
      description: "Complete protection for households with multiple devices.",
      features: [
        "Unlimited remote support for up to 3 devices (PC, tablet, phone)",
        "Quarterly PC optimization + patching",
        "Assistance with apps and online payments",
        "Priority support (8:30AM - 8:30PM EST)"
      ],
      buttonText: "Buy Now",
      popular: false
    },
    {
      name: "Family / Elite Care",
      price: "$449",
      period: "/year",
      description: "Peace of mind for families or power users.",
      features: [
        "Unlimited support for up to 5 devices",
        "Full software setup (Zoom, email, productivity & security apps)",
        "Smart home/IoT troubleshooting (Wi-Fi, Alexa, TVs, routers)",
        "Priority support with toll-free number (8:30AM - 8:30PM EST)"
      ],
      buttonText: "Buy Now",
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
          premium: "Apps, payments",
          family: "Full setup (Zoom, email, banking)"
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold mb-6", children: "Personal Managed Services Plans" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-8 max-w-3xl mx-auto", children: "Affordable, reliable, and designed for seniors & non-tech users across USA & Canada. Choose the plan that fits your needs." })
    ] }) }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Compare Personal Plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Detailed breakdown of features across all personal plans" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-muted/20 border-b-2 border-blue-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-6 font-semibold text-lg", colSpan: 5, children: category.category }) }, category.category),
          category.features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b hover:bg-blue-50/50 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-6 font-medium", children: feature.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center p-6", children: feature.essential ? typeof feature.essential === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800", children: feature.essential }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-success mx-auto" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-muted-foreground mx-auto" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center p-6", children: feature.advanced ? typeof feature.advanced === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800", children: feature.advanced }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-success mx-auto" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-muted-foreground mx-auto" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center p-6 bg-gradient-to-b from-yellow-50 to-orange-50", children: feature.premium ? typeof feature.premium === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800", children: feature.premium }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-success mx-auto" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-muted-foreground mx-auto" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center p-6", children: feature.family ? typeof feature.family === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800", children: feature.family }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-success mx-auto" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-muted-foreground mx-auto" }) })
          ] }, `${category.category}-${feature.name}-${index}`))
        ] })) })
      ] }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Frequently asked questions" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: "What is the difference between the plans?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Each plan offers different levels of support: Essential Care provides basic troubleshooting, Advanced Care includes antivirus protection, Premium Care offers unlimited support for multiple devices, and Family Care covers up to 5 devices with comprehensive setup assistance." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: "Can I change plans later?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately with prorated billing. Downgrades will take effect at your next billing cycle. Contact our support team to make changes." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: "Is there a setup fee?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No setup fees! All plans are billed annually with no hidden costs. Your first month includes a complimentary device assessment and optimization session to get you started." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  PersonalPricing as default
};
