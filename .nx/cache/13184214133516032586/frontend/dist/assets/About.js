import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { C as Card, a as CardContent } from "./card.js";
import { B as Badge } from "./badge.js";
import { B as Button } from "./input.js";
import { a as reactExports, L as Link } from "./react-vendor.js";
import { H as HeartHandshake, b as Shield, f as Brain, g as Server, h as Award } from "./utils-vendor.js";
import "./index.js";
import "./auth-vendor.js";
import "./query-vendor.js";
import "./separator.js";
const About = () => {
  const values = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartHandshake, { className: "w-8 h-8" }),
      title: "Empathy First",
      description: "We meet people where they are. Clear, patient guidance for seniors and non‑technical users is built into every interaction."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8" }),
      title: "Security by Design",
      description: "Proactive monitoring, zero‑trust thinking, and layered defenses inform every managed service and hosting decision."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-8 h-8" }),
      title: "Education & Clarity",
      description: "We translate complex threats, tools, and systems into plain language so customers stay confident and informed."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "w-8 h-8" }),
      title: "Reliability & Uptime",
      description: "From managed endpoints to hosted workloads, consistency and measurable outcomes drive trust."
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8" }),
      title: "Continuous Improvement",
      description: "We review incidents, iterate processes, and automate routine work to amplify human expertise."
    }
  ];
  const stats = [
    { number: "25K+", label: "Endpoints protected & monitored" },
    { number: "1.5K+", label: "Security events triaged quarterly" },
    { number: "98.9%", label: "First‑contact resolution (consumer)" },
    { number: "99.95%", label: "Managed hosting SLA uptime" }
  ];
  reactExports.useEffect(() => {
    document.title = "About Novaqy Cloud LLP – Managed IT, Security & Support";
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-20 pb-16 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-6", children: "About Novaqy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold mb-6", children: "Human‑centered managed IT, security & support" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "Novaqy Cloud LLP delivers patient remote tech help for seniors, scalable MSP services for growing businesses, hardened managed hosting, and proactive MDR / MSSP protection—unified under one outcomes‑driven platform." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-8", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: stat.number }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: stat.label })
    ] }, stat.label)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-8 text-center", children: "Our Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-muted-foreground leading-relaxed mb-6", children: [
          "Novaqy began with a recurring pattern: seniors and non‑technical professionals feeling left behind by rapid software, device, and security change—while small and mid‑sized businesses wrestled with fragmented outsourcing, reactive IT fire drills, and rising cyber threats. Founders ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Abhishek Mendiratta" }),
          " (CEO & CTO) and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Dinesh Kumar" }),
          " (COO) envisioned a unified model: empathetic human support plus disciplined, automation‑backed operations and security."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-6", children: "We built a services fabric that spans: remote tech assistance for individuals, fully managed endpoint & network operations (MSP), secure and optimized application & data hosting, and continuous detection / response with actionable reporting (MSSP). Each layer feeds into the next—threat intelligence informs patching, performance metrics guide capacity, and user feedback sharpens experience design." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-6", children: "Instead of selling hours, we align to measurable outcomes: faster resolution, fewer incidents, higher device health scores, tightly controlled attack surface, and confidence for non‑technical users. Education is not an upsell—it is core to resilience." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Today we support households, distributed teams, and growing companies—protecting data, simplifying daily workflows, and letting people focus on relationships and business value rather than wrestling with technology. The journey continues as we invest in assistive AI tooling, privacy‑preserving telemetry, and automation that elevates our specialists instead of replacing them." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Our Values" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "The principles shaping sustainable, human‑oriented managed services" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: values.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center hover:shadow-medium transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex p-4 bg-primary/10 rounded-lg text-primary mb-4", children: value.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: value.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: value.description })
      ] }) }, value.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Meet Our Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Multi‑disciplinary leaders blending empathy, automation, and security excellence" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl", children: "AM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1", children: "Abhishek Mendiratta" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Chief Executive Officer & Chief Technology Officer" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl", children: "DK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1", children: "Dinesh Kumar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Chief Operating Officer" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl", children: "You" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1", children: "Future Leader" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Join us to shape resilient, human‑centered technology services" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Ready to experience worry‑free technology?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "From household devices to regulated business workloads—partner with a team that blends empathy, automation, and security discipline." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", children: "Get Support" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Talk to Our Team" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  About as default
};
