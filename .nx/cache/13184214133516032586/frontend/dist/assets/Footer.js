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
import { p as Root, v as Trigger, j as jsxRuntimeExports, q as Portal, r as Content, t as Close, O as Overlay, T as Title, s as Description, Y as Root2, Z as Trigger$1, _ as Portal2, $ as Content2, a0 as Item2, a1 as SubTrigger2, a2 as SubContent2, a3 as CheckboxItem2, a4 as ItemIndicator2, a5 as RadioItem2, a6 as Label2, a7 as Separator2 } from "./ui-vendor.js";
import { a as reactExports, L as Link } from "./react-vendor.js";
import { c as cn, b as cva, V as VariantContextInternal } from "./index.js";
import { B as Button, I as Input } from "./input.js";
import { X, a2 as ChevronRight, e as Check, a3 as Circle, n as ChevronDown, a4 as Menu } from "./utils-vendor.js";
import { S as Separator } from "./separator.js";
const Sheet = Root;
const SheetTrigger = Trigger;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    __spreadProps(__spreadValues({
      className: cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props), {
      ref
    })
  );
});
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(
  (_c, ref) => {
    var _d = _c, { side = "right", className, children } = _d, props = __objRest(_d, ["side", "className", "children"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, __spreadProps(__spreadValues({ ref, className: cn(sheetVariants({ side }), className) }, props), { children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ] }))
    ] });
  }
);
SheetContent.displayName = Content.displayName;
const SheetTitle = reactExports.forwardRef((_e, ref) => {
  var _f = _e, { className } = _f, props = __objRest(_f, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, __spreadValues({ ref, className: cn("text-lg font-semibold text-foreground", className) }, props));
});
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef((_g, ref) => {
  var _h = _g, { className } = _h, props = __objRest(_h, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, __spreadValues({ ref, className: cn("text-sm text-muted-foreground", className) }, props));
});
SheetDescription.displayName = Description.displayName;
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger$1;
const DropdownMenuSubTrigger = reactExports.forwardRef((_i, ref) => {
  var _j = _i, { className, inset, children } = _j, props = __objRest(_j, ["className", "inset", "children"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SubTrigger2,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
        inset && "pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
      ]
    })
  );
});
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef((_k, ref) => {
  var _l = _k, { className } = _l, props = __objRest(_l, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SubContent2,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef((_m, ref) => {
  var _n = _m, { className, sideOffset = 4 } = _n, props = __objRest(_n, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef((_o, ref) => {
  var _p = _o, { className, inset } = _p, props = __objRest(_p, ["className", "inset"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item2,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef((_q, ref) => {
  var _r = _q, { className, children, checked } = _r, props = __objRest(_r, ["className", "children", "checked"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CheckboxItem2,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef((_s, ref) => {
  var _t = _s, { className, children } = _t, props = __objRest(_t, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    RadioItem2,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef((_u, ref) => {
  var _v = _u, { className, inset } = _v, props = __objRest(_v, ["className", "inset"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label2,
    __spreadValues({
      ref,
      className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)
    }, props)
  );
});
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef((_w, ref) => {
  var _x = _w, { className } = _x, props = __objRest(_x, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Separator2, __spreadValues({ ref, className: cn("-mx-1 my-1 h-px bg-muted", className) }, props));
});
DropdownMenuSeparator.displayName = Separator2.displayName;
function useVariant() {
  const ctx = reactExports.useContext(VariantContextInternal);
  if (!ctx) throw new Error("useVariant must be used within VariantProvider");
  return ctx;
}
function Header() {
  const { variant, setVariant } = useVariant();
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigation = [
    { name: "Features", href: "#features", submenu: false },
    { name: "Pricing", href: "/pricing", submenu: false },
    {
      name: "Resources",
      href: "#resources",
      submenu: true,
      items: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Customer Stories", href: "/customer-stories" },
        { name: "FAQ", href: "/faq" }
      ]
    },
    { name: "About", href: "/about", submenu: false },
    { name: "Contact", href: "/contact", submenu: false }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft" : "bg-background/50"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container flex h-16 items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center space-x-2", "aria-label": "Novaqy home", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/logo.png",
              alt: "Novaqy logo",
              className: "h-16 w-auto object-contain scale-110",
              loading: "eager",
              decoding: "async"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-foreground", children: "Novaqy" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { id: "navigation", className: "hidden lg:flex items-center space-x-8", "aria-label": "Main navigation", children: navigation.map((item) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: item.submenu ? /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DropdownMenuTrigger,
              {
                className: "flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                "aria-haspopup": "true",
                "aria-expanded": "false",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4", "aria-hidden": "true" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "start", className: "w-48", children: (_a = item.items) == null ? void 0 : _a.map((subItem) => /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: subItem.href, className: "w-full", children: subItem.name }) }, subItem.name)) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.href,
              className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
              children: item.name
            }
          ) }, item.name);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: variant === "customer" ? "default" : "outline",
                size: "sm",
                onClick: () => setVariant("customer"),
                className: "flex-1",
                children: "Personal"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: variant === "business" ? "default" : "outline",
                size: "sm",
                onClick: () => setVariant("business"),
                className: "flex-1",
                children: "Business"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Log In" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", state: { variant }, children: "Get Started" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open: isMobileMenuOpen, onOpenChange: setIsMobileMenuOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "lg:hidden",
              "aria-label": "Open main menu",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetContent, { side: "right", className: "w-80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col space-y-6 mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: navigation.map((item) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: item.submenu ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground mb-2", children: item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-4 space-y-2", children: (_a = item.items) == null ? void 0 : _a.map((subItem) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: subItem.href,
                    className: "block text-muted-foreground hover:text-foreground transition-colors",
                    onClick: () => setIsMobileMenuOpen(false),
                    children: subItem.name
                  },
                  subItem.name
                )) })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: item.href,
                  className: "block text-muted-foreground hover:text-foreground transition-colors",
                  onClick: () => setIsMobileMenuOpen(false),
                  children: item.name
                }
              ) }, item.name);
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: variant === "customer" ? "default" : "outline",
                    size: "sm",
                    onClick: () => setVariant("customer"),
                    className: "flex-1",
                    children: "Personal"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: variant === "business" ? "default" : "outline",
                    size: "sm",
                    onClick: () => setVariant("business"),
                    className: "flex-1",
                    children: "Business"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "w-full", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", onClick: () => setIsMobileMenuOpen(false), children: "Log In" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", state: { variant }, onClick: () => setIsMobileMenuOpen(false), children: "Get Started" }) })
            ] })
          ] }) })
        ] })
      ] })
    }
  );
}
function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Managed IT Support", href: "/business" },
        { name: "Remote Tech Support", href: "/pricing" },
        { name: "Security Monitoring", href: "/pricing" },
        { name: "Device Optimization", href: "/pricing" },
        { name: "Training & Setup", href: "/pricing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Customer Stories", href: "/customer-stories" },
        { name: "Help Center", href: "/faq" },
        { name: "Contact Support", href: "/contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Cookie Scanner", href: "/cookie-scanner" },
        { name: "Privacy Settings", href: "/privacy-settings" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy-settings" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Acceptable Use", href: "/acceptable-use" },
        { name: "End User Agreement", href: "/end-user-agreement" },
        { name: "Return & Refund", href: "/return-refund" },
        { name: "Shipping Policy", href: "/shipping" },
        { name: "Remote Disclaimer", href: "/remote-disclaimer" }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-muted/30 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "Stay Updated" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-md mx-auto", children: "Get the latest updates on new services, security tips, and technology insights for seniors and businesses." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex max-w-sm mx-auto space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "email",
            placeholder: "Enter your email",
            className: "flex-1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "bg-primary hover:bg-primary/90 text-primary-foreground", children: "Subscribe" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "We respect your privacy. Unsubscribe at any time." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-12" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-12", children: footerSections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-4", children: section.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: section.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: link.href,
          className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
          children: link.name
        }
      ) }, link.name)) })
    ] }, section.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/logo.png",
            alt: "Novaqy logo",
            className: "h-9 w-auto object-contain",
            loading: "lazy",
            decoding: "async"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Novaqy Cloud LLP" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2025 Novaqy Cloud LLP. All rights reserved." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-settings", className: "hover:text-foreground transition-colors", children: "Privacy Settings" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-8 border-t text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Your data is protected with enterprise-grade security and 256-bit SSL encryption." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center items-center space-x-8 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SOC 2 Type II Compliant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "256-bit SSL Encryption" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GDPR & PIPEDA Compliant" })
      ] })
    ] })
  ] }) });
}
export {
  Footer as F,
  Header as H,
  useVariant as u
};
