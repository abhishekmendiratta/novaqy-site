import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { C as Card, a as CardContent } from "./card.js";
import { B as Badge } from "./badge.js";
import { B as Button } from "./input.js";
import { L as Link } from "./react-vendor.js";
import { a as Star, Q as Quote, A as ArrowRight } from "./utils-vendor.js";
import "./index.js";
import "./auth-vendor.js";
import "./query-vendor.js";
import "./separator.js";
const CustomerStories = () => {
  const testimonials = [
    {
      id: "1",
      quote: "Novaqy's remote support team helped me set up my new laptop perfectly. They patiently walked me through every step and even transferred all my files. I didn't have to worry about a thing!",
      author: "Sarah Mitchell",
      role: "Retired Teacher",
      company: "",
      location: "Vancouver, BC",
      service: "Device Setup & Training",
      rating: 5,
      verified: true
    },
    {
      id: "2",
      quote: "Their proactive monitoring caught a security issue before it became a problem. The team responded quickly and resolved everything professionally. Highly recommend their managed services.",
      author: "Michael Rodriguez",
      role: "Small Business Owner",
      company: "Rodriguez Consulting",
      location: "Toronto, ON",
      service: "Managed IT Security",
      rating: 5,
      verified: true
    },
    {
      id: "3",
      quote: "I've been using Novaqy's support for over a year now. My computer runs faster than it ever has, and I feel confident with their ongoing maintenance and security monitoring.",
      author: "Patricia Wong",
      role: "Freelance Writer",
      company: "",
      location: "Calgary, AB",
      service: "Ongoing Support",
      rating: 5,
      verified: true
    },
    {
      id: "4",
      quote: "As a small business, we needed reliable IT support without the overhead of full-time staff. Novaqy's managed services have been perfect - responsive, professional, and cost-effective.",
      author: "David Chen",
      role: "Founder",
      company: "TechStart Solutions",
      location: "Montreal, QC",
      service: "Business IT Support",
      rating: 5,
      verified: true
    },
    {
      id: "5",
      quote: "The antivirus setup was seamless, and their $25 license fee was clearly explained upfront. No hidden costs or surprises - exactly what I needed for peace of mind.",
      author: "Jennifer Adams",
      role: "Healthcare Professional",
      company: "",
      location: "Ottawa, ON",
      service: "Security Setup",
      rating: 5,
      verified: true
    },
    {
      id: "6",
      quote: "Novaqy's team helped me understand online security better than anyone else. Their patient explanations and practical tips have made me much more confident using technology.",
      author: "Robert Thompson",
      role: "Senior User",
      company: "",
      location: "Edmonton, AB",
      service: "Security Training",
      rating: 5,
      verified: true
    }
  ];
  const stats = [
    { label: "Happy Customers", value: "10,000+" },
    { label: "Remote Sessions", value: "25,000+" },
    { label: "Security Issues Prevented", value: "1,500+" },
    { label: "Devices Optimized", value: "5,000+" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-20 pb-16 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-6", children: "Wall of Love" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold mb-6", children: "What Our Customers Say" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Real stories from real customers who trust Novaqy for their technology needs. These testimonials reflect genuine experiences with our services." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-8 mt-12", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: stat.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: stat.label })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: testimonials.map((testimonial) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
        [...Array(testimonial.rating)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }, i)),
        testimonial.verified && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "ml-2 text-xs", children: "Verified" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-8 h-8 text-muted-foreground mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground leading-relaxed", children: [
          '"',
          testimonial.quote,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: testimonial.author }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
          testimonial.role,
          testimonial.company && ` at ${testimonial.company}`
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: testimonial.location }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "mt-2 text-xs", children: testimonial.service })
      ] })
    ] }) }, testimonial.id)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Share Your Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Have a positive experience with Novaqy? We'd love to hear from you. Your testimonial helps others make informed decisions about our services." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 max-w-2xl mx-auto text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-amber-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Important:" }),
        " By submitting a testimonial, you grant Novaqy a license to display your quote and name (or alias) with consent. All testimonials are genuine customer feedback and may be moderated for clarity and appropriateness."
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
          "Submit Your Story",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", children: "View Our Services" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  CustomerStories as default
};
