import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { B as Button } from "./input.js";
import { C as Card, b as CardHeader, d as CardTitle, a as CardContent, e as CardDescription } from "./card.js";
import { B as Badge } from "./badge.js";
import { L as Link } from "./react-vendor.js";
import { A as ArrowRight, d as CircleCheckBig, B as Building, b as Shield, G as Globe, C as ChartColumn, I as Users } from "./utils-vendor.js";
import "./index.js";
import "./auth-vendor.js";
import "./query-vendor.js";
import "./separator.js";
const BusinessServices = () => {
  const businessFeatures = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "w-6 h-6" }),
      title: "Enterprise IT Management",
      description: "Comprehensive managed services for your business infrastructure with 24/7 monitoring and support."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6" }),
      title: "Security & Compliance",
      description: "Advanced security protocols, compliance management, and data protection for business environments."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6" }),
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with ongoing management and optimization services."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-6 h-6" }),
      title: "Performance Monitoring",
      description: "Real-time monitoring of your systems with detailed analytics and proactive maintenance."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6" }),
      title: "Team Training",
      description: "Comprehensive training programs for your staff on new technologies and best practices."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-6 h-6" }),
      title: "Dedicated Support",
      description: "Assigned account manager and dedicated support team for your business needs."
    }
  ];
  const businessPlans = [
    {
      name: "Business Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses with basic IT needs",
      features: [
        "Up to 10 devices managed",
        "Business hours support",
        "Basic security monitoring",
        "Monthly health reports",
        "Email support"
      ]
    },
    {
      name: "Business Pro",
      price: "$499",
      period: "/month",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Up to 50 devices managed",
        "24/7 priority support",
        "Advanced security suite",
        "Cloud backup & recovery",
        "Dedicated account manager",
        "Phone & chat support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited devices",
        "White-glove onboarding",
        "Custom security policies",
        "SLA guarantees",
        "Dedicated support team",
        "On-site consultations"
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { variant: "business" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-20 pb-16 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-6", children: "Trusted by 500+ Businesses" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-bold mb-6 leading-tight", children: "Managed IT Services for Growing Businesses" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto", children: "Professional remote support, system management, and technology solutions delivered by our expert team in India for businesses across North America." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "group", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
          "Schedule Consultation",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", children: "View Business Plans" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Complete IT Solutions for Your Business" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "From infrastructure management to employee support, we handle all your technology needs so you can focus on growing your business." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: businessFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "transition-all duration-300 hover:shadow-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary", children: feature.icon }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl", children: feature.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: feature.description }) })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Business Plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Choose the right plan for your business size and needs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: businessPlans.map((plan, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: `relative transition-all duration-300 hover:shadow-medium ${plan.popular ? "border-primary shadow-large scale-105" : ""}`,
          children: [
            plan.popular && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground", children: "Most Popular" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center pb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: plan.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold", children: plan.price }),
                plan.period && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: plan.period })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "mt-4", children: plan.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: plan.features.map((feature, featureIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: feature })
              ] }, featureIndex)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", variant: plan.popular ? "default" : "outline", children: plan.name === "Enterprise" ? "Contact Sales" : "Get Started" }) })
            ] })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gradient-hero text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Ready to Transform Your Business IT?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 opacity-90 max-w-2xl mx-auto", children: "Let our experienced team handle your technology infrastructure so you can focus on what matters most - growing your business." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Schedule Free Consultation" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", className: "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", children: "View All Plans" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  BusinessServices as default
};
