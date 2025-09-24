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
import { c as cn, b as cva } from "./index.js";
const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Alert = reactExports.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues({ ref, role: "alert", className: cn(alertVariants({ variant }), className) }, props));
});
Alert.displayName = "Alert";
const AlertTitle = reactExports.forwardRef(
  (_c, ref) => {
    var _d = _c, { className } = _d, props = __objRest(_d, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("h5", __spreadValues({ ref, className: cn("mb-1 font-medium leading-none tracking-tight", className) }, props));
  }
);
AlertTitle.displayName = "AlertTitle";
const AlertDescription = reactExports.forwardRef(
  (_e, ref) => {
    var _f = _e, { className } = _f, props = __objRest(_f, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues({ ref, className: cn("text-sm [&_p]:leading-relaxed", className) }, props));
  }
);
AlertDescription.displayName = "AlertDescription";
export {
  Alert as A,
  AlertDescription as a
};
