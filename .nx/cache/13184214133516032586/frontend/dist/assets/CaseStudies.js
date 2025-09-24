import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { C as Card, b as CardHeader, d as CardTitle, e as CardDescription, a as CardContent } from "./card.js";
import { B as Badge } from "./badge.js";
import { I as Input, B as Button } from "./input.js";
import { a as reactExports, L as Link } from "./react-vendor.js";
import { d as dataService } from "./dataService.js";
import { o as Search, B as Building, T as TrendingUp, A as ArrowRight } from "./utils-vendor.js";
import "./index.js";
import "./auth-vendor.js";
import "./query-vendor.js";
import "./separator.js";
const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [caseStudies, setCaseStudies] = reactExports.useState([]);
  const [selectedIndustry, setSelectedIndustry] = reactExports.useState("All");
  reactExports.useEffect(() => {
    const loadCaseStudies = () => {
      const studies = dataService.getPublishedCaseStudies();
      setCaseStudies(studies);
    };
    loadCaseStudies();
    const unsubscribe = dataService.subscribe("case_studies", loadCaseStudies);
    return unsubscribe;
  }, []);
  const industries = ["All", ...Array.from(new Set(caseStudies.map((study) => study.industry || "General").filter(Boolean)))];
  const filteredStudies = caseStudies.filter((study) => {
    var _a;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) || study.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || ((_a = study.client) == null ? void 0 : _a.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-20 pb-16 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-6", children: "Case Studies" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold mb-6", children: "Real Results, Real Impact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Discover how we've helped businesses transform their operations and achieve remarkable growth through our managed IT services." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search case studies...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            className: "pl-10"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: industries.map((industry) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: selectedIndustry === industry ? "default" : "outline",
        size: "sm",
        onClick: () => setSelectedIndustry(industry),
        children: industry
      },
      industry
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: filteredStudies.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredStudies.map((study) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "hover:shadow-medium transition-all duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48", children: study.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: study.imageUrl,
          alt: study.title,
          className: "w-full h-full object-cover"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-gradient-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: study.industry || "General" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: new Date(study.publishedAt).toLocaleDateString() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `/case-studies/${study.id}`,
            className: "hover:text-primary transition-colors",
            children: study.title
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: study.excerpt })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        study.client && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: study.client })
        ] }),
        study.results && study.results.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-medium mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
            "Key Results"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-sm text-muted-foreground space-y-1", children: study.results.slice(0, 2).map((result, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-primary rounded-full" }),
            result
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", asChild: true, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/case-studies/${study.id}`, children: [
          "Read Full Case Study",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
        ] }) })
      ] })
    ] }, study.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "No case studies found matching your criteria." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          onClick: () => {
            setSearchTerm("");
            setSelectedIndustry("All");
          },
          children: "Show all case studies"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Our Impact in Numbers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Real metrics from our successful implementations" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: "500+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Businesses Transformed" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: "98.5%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Client Satisfaction Rate" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: "24/7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Support Availability" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gradient-hero text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Ready to Transform Your Business?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 opacity-90 max-w-2xl mx-auto", children: "Join hundreds of businesses that have improved their operations and achieved remarkable growth with our managed IT services." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Start Your Transformation" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "bg-blue-900 hover:bg-blue-800 text-white", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", children: "View Our Services" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  CaseStudies as default
};
