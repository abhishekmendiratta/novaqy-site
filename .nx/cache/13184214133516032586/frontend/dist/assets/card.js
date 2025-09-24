var __defProp = Object.defineProperty;
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { a as reactExports } from "./react-vendor.js";
import { c as cn } from "./index.js";
const Card = reactExports.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues({ ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className) }, props));
});
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  (_c, ref) => {
    var _d = _c, { className } = _d, props = __objRest(_d, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues({ ref, className: cn("flex flex-col space-y-1.5 p-6", className) }, props));
  }
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  (_e, ref) => {
    var _f = _e, { className } = _f, props = __objRest(_f, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("h3", __spreadValues({ ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className) }, props));
  }
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  (_g, ref) => {
    var _h = _g, { className } = _h, props = __objRest(_h, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", __spreadValues({ ref, className: cn("text-sm text-muted-foreground", className) }, props));
  }
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  (_i, ref) => {
    var _j = _i, { className } = _j, props = __objRest(_j, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
  }
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  (_k, ref) => {
    var _l = _k, { className } = _l, props = __objRest(_l, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues({ ref, className: cn("flex items-center p-6 pt-0", className) }, props));
  }
);
CardFooter.displayName = "CardFooter";
export {
  Card as C,
  CardContent as a,
  CardHeader as b,
  CardFooter as c,
  CardTitle as d,
  CardDescription as e
};
