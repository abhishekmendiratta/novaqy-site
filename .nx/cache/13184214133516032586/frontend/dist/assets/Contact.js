var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { C as Card, a as CardContent, b as CardHeader, d as CardTitle } from "./card.js";
import { I as Input, B as Button } from "./input.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Textarea } from "./select.js";
import { L as Label } from "./label.js";
import { B as Badge } from "./badge.js";
import { a as reactExports } from "./react-vendor.js";
import { u as useToast } from "./index.js";
import { i as Mail, P as Phone, j as MapPin, k as Clock } from "./utils-vendor.js";
import "./separator.js";
import "./auth-vendor.js";
import "./query-vendor.js";
const Contact = () => {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: ""
    });
  };
  const handleInputChange = (field, value) => {
    setFormData((prev) => __spreadProps(__spreadValues({}, prev), { [field]: value }));
  };
  const contactInfo = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-6 h-6" }),
      title: "Email",
      content: "hello@novaqy.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-6 h-6" }),
      title: "Phone",
      content: "+1 (800) NOVAQY-1",
      subtitle: "Mon-Fri, 8:30AM-8:30PM EST"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-6 h-6" }),
      title: "Office",
      content: "TBD - Address",
      subtitle: "Visit us by appointment"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6" }),
      title: "Support Hours",
      content: "Mon-Fri, 8:30AM-8:30PM EST",
      subtitle: "24/7 emergency monitoring available"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-20 pb-16 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-6", children: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold mb-6", children: "Get in touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Have questions about our platform? Want to schedule a demo? Our team is here to help you succeed." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16", children: contactInfo.map((info, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center hover:shadow-medium transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex p-3 bg-primary/10 rounded-lg text-primary mb-4", children: info.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: info.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium mb-1", children: info.content }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: info.subtitle })
    ] }) }, index)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl text-center", children: "Send us a message" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "name",
                value: formData.name,
                onChange: (e) => handleInputChange("name", e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "email",
                type: "email",
                value: formData.email,
                onChange: (e) => handleInputChange("email", e.target.value),
                required: true
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "company", children: "Company" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "company",
                value: formData.company,
                onChange: (e) => handleInputChange("company", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "phone",
                type: "tel",
                value: formData.phone,
                onChange: (e) => handleInputChange("phone", e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "subject", children: "Subject *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (value) => handleInputChange("subject", value), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a topic" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "general", children: "General Inquiry" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sales", children: "Sales Question" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "support", children: "Technical Support" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "partnership", children: "Partnership" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "press", children: "Press & Media" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", children: "Message *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "message",
              rows: 6,
              value: formData.message,
              onChange: (e) => handleInputChange("message", e.target.value),
              placeholder: "Tell us more about your needs...",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", className: "w-full", children: "Send Message" })
      ] }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Common questions we receive from customers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: "How quickly will I get a response?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "We aim to respond to all inquiries within 24 hours during business days (Mon-Fri, 8:30AM-8:30PM EST). For urgent matters, please call our support line during business hours." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: "Can I schedule a demo?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: `Yes! Select "Sales Question" in the form above and mention you'd like to schedule a demo. Our sales team will coordinate a time that works for you.` })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: "Do you offer technical support?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Absolutely. Our technical support team is available 24/7 to help with any platform-related questions or issues." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  Contact as default
};
