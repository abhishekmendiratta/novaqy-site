import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { C as Card, b as CardHeader, a as CardContent, c as CardFooter } from "./card.js";
import { B as Button } from "./input.js";
import { B as Badge } from "./badge.js";
import { c as cn } from "./index.js";
import { e as Check } from "./utils-vendor.js";
function PricingCard({
  title,
  price,
  period = "/mo",
  description,
  features,
  buttonText,
  buttonVariant = "default",
  popular = false,
  className,
  onButtonClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn(
    "relative transition-all duration-300 hover:shadow-medium",
    popular && "border-primary shadow-large scale-105",
    className
  ), children: [
    popular && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground", children: "Most Popular" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center pb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold", children: price }),
        period && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: period })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4", children: description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start space-x-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-success mt-0.5 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: feature })
    ] }, index)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "w-full",
        variant: buttonVariant,
        size: "lg",
        onClick: onButtonClick,
        children: buttonText
      }
    ) })
  ] });
}
export {
  PricingCard as P
};
