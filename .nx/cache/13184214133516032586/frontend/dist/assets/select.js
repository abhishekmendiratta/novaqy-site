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
import { j as jsxRuntimeExports, E as Root2, F as Value, G as Trigger, I as Icon, H as Portal, J as Content2, K as Viewport, L as Item, M as ItemIndicator, N as ItemText, S as ScrollUpButton, Q as ScrollDownButton, U as Label, X as Separator } from "./ui-vendor.js";
import { a as reactExports } from "./react-vendor.js";
import { c as cn } from "./index.js";
import { n as ChevronDown, e as Check, a1 as ChevronUp } from "./utils-vendor.js";
const Textarea = reactExports.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    __spreadValues({
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref
    }, props)
  );
});
Textarea.displayName = "Textarea";
const Select = Root2;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef((_c, ref) => {
  var _d = _c, { className, children } = _d, props = __objRest(_d, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
      ]
    })
  );
});
SelectTrigger.displayName = Trigger.displayName;
const SelectScrollUpButton = reactExports.forwardRef((_e, ref) => {
  var _f = _e, { className } = _f, props = __objRest(_f, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollUpButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
    })
  );
});
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef((_g, ref) => {
  var _h = _g, { className } = _h, props = __objRest(_h, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollDownButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
    })
  );
});
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef((_i, ref) => {
  var _j = _i, { className, children, position = "popper" } = _j, props = __objRest(_j, ["className", "children", "position"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content2,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
      ]
    })
  ) });
});
SelectContent.displayName = Content2.displayName;
const SelectLabel = reactExports.forwardRef((_k, ref) => {
  var _l = _k, { className } = _l, props = __objRest(_l, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Label, __spreadValues({ ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className) }, props));
});
SelectLabel.displayName = Label.displayName;
const SelectItem = reactExports.forwardRef((_m, ref) => {
  var _n = _m, { className, children } = _n, props = __objRest(_n, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
      ]
    })
  );
});
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef((_o, ref) => {
  var _p = _o, { className } = _p, props = __objRest(_p, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, __spreadValues({ ref, className: cn("-mx-1 my-1 h-px bg-muted", className) }, props));
});
SelectSeparator.displayName = Separator.displayName;
export {
  Select as S,
  Textarea as T,
  SelectTrigger as a,
  SelectValue as b,
  SelectContent as c,
  SelectItem as d
};
