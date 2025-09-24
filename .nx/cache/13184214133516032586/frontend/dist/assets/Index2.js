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
import { j as jsxRuntimeExports, c as createContextScope, P as Primitive, f as useCallbackRef, h as useLayoutEffect2 } from "./ui-vendor.js";
import { u as useVariant, H as Header, F as Footer } from "./Footer.js";
import { a as reactExports, L as Link, r as requireReact } from "./react-vendor.js";
import { B as Button } from "./input.js";
import { C as Card, a as CardContent, b as CardHeader } from "./card.js";
import { c as cn } from "./index.js";
import { S as Settings, X, P as Phone, M as MessageCircle, a as Star, A as ArrowRight, B as Building, b as Shield, G as Globe, U as User, Z as Zap, C as ChartColumn, d as CircleCheckBig } from "./utils-vendor.js";
import { B as Badge } from "./badge.js";
import "./separator.js";
import "./auth-vendor.js";
import "./query-vendor.js";
function CookieBanner() {
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const [showSettings, setShowSettings] = reactExports.useState(false);
  const [preferences, setPreferences] = reactExports.useState({
    necessary: true,
    // Always true, non-toggleable
    analytics: false,
    marketing: false,
    functional: false
  });
  reactExports.useEffect(() => {
    const cookieConsent = localStorage.getItem("novaqy-cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);
  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    localStorage.setItem("novaqy-cookie-consent", JSON.stringify(allAccepted));
    setIsVisible(false);
  };
  const acceptSelected = () => {
    localStorage.setItem("novaqy-cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
  };
  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    localStorage.setItem("novaqy-cookie-consent", JSON.stringify(onlyNecessary));
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: !showSettings ? (
    // Main banner
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: "We use cookies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cookies", className: "text-primary hover:underline", children: "Learn more about our cookie policy" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: rejectAll, children: "Reject All" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => setShowSettings(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4 mr-2" }),
          "Customize"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: acceptAll, children: "Accept All" })
      ] })
    ] })
  ) : (
    // Settings panel
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Cookie Preferences" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => setShowSettings(false),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-6", children: [
        {
          key: "necessary",
          title: "Necessary Cookies",
          description: "Required for basic site functionality. Cannot be disabled.",
          required: true
        },
        {
          key: "functional",
          title: "Functional Cookies",
          description: "Enable enhanced functionality like chat widgets and form submissions."
        },
        {
          key: "analytics",
          title: "Analytics Cookies",
          description: "Help us understand how visitors interact with our website."
        },
        {
          key: "marketing",
          title: "Marketing Cookies",
          description: "Used to track visitors and display relevant advertisements."
        }
      ].map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start justify-between p-4 border rounded-lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-1", children: category.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: category.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: cn(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                  preferences[category.key] || category.required ? "bg-primary" : "bg-gray-200",
                  category.required && "opacity-50 cursor-not-allowed"
                ),
                onClick: () => {
                  if (!category.required) {
                    setPreferences((prev) => __spreadProps(__spreadValues({}, prev), {
                      [category.key]: !prev[category.key]
                    }));
                  }
                },
                disabled: category.required,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                      preferences[category.key] || category.required ? "translate-x-6" : "translate-x-1"
                    )
                  }
                )
              }
            ) })
          ]
        },
        category.key
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: rejectAll, children: "Reject All" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: acceptSelected, children: "Save Preferences" })
      ] })
    ] })
  ) }) }) });
}
function FloatingActions() {
  const [isExpanded, setIsExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
      "flex flex-col space-y-3 transition-all duration-300",
      isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
    ), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "lg",
          className: "rounded-full shadow-large",
          asChild: true,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+1-800-NOVAQY-1", className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Call Now" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "lg",
          variant: "outline",
          className: "rounded-full shadow-large bg-background",
          asChild: true,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get Started" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "lg",
        className: "rounded-full shadow-large",
        onClick: () => setIsExpanded(!isExpanded),
        children: [
          isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: isExpanded ? "Close actions" : "Open actions" })
        ]
      }
    )
  ] });
}
const FeatureCard = reactExports.memo(function FeatureCard2({
  icon,
  title,
  description,
  className,
  variant = "default"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn(
    "group transition-all duration-300 ease-in-out hover:shadow-medium hover:scale-[1.02]",
    variant === "highlighted" && "border-primary/20 bg-primary/5 shadow-soft",
    variant === "minimal" && "border-none shadow-none bg-transparent",
    className
  ), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
        "p-2 rounded-lg transition-colors duration-300",
        variant === "highlighted" ? "bg-primary/10 text-primary group-hover:bg-primary/20" : "bg-muted text-foreground group-hover:bg-muted/80"
      ), children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg transition-colors duration-300 group-hover:text-primary", children: title })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80", children: description }) })
  ] });
});
var shim = { exports: {} };
var useSyncExternalStoreShim_production = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreShim_production;
function requireUseSyncExternalStoreShim_production() {
  if (hasRequiredUseSyncExternalStoreShim_production) return useSyncExternalStoreShim_production;
  hasRequiredUseSyncExternalStoreShim_production = 1;
  var React = requireReact();
  function is(x, y) {
    return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
  function useSyncExternalStore$2(subscribe2, getSnapshot) {
    var value = getSnapshot(), _useState = useState({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
    useLayoutEffect(
      function() {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      },
      [subscribe2, value, getSnapshot]
    );
    useEffect(
      function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        return subscribe2(function() {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        });
      },
      [subscribe2]
    );
    useDebugValue(value);
    return value;
  }
  function checkIfSnapshotChanged(inst) {
    var latestGetSnapshot = inst.getSnapshot;
    inst = inst.value;
    try {
      var nextValue = latestGetSnapshot();
      return !objectIs(inst, nextValue);
    } catch (error) {
      return true;
    }
  }
  function useSyncExternalStore$1(subscribe2, getSnapshot) {
    return getSnapshot();
  }
  var shim2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
  useSyncExternalStoreShim_production.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim2;
  return useSyncExternalStoreShim_production;
}
var hasRequiredShim;
function requireShim() {
  if (hasRequiredShim) return shim.exports;
  hasRequiredShim = 1;
  {
    shim.exports = requireUseSyncExternalStoreShim_production();
  }
  return shim.exports;
}
var shimExports = requireShim();
function useIsHydrated() {
  return shimExports.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
function subscribe() {
  return () => {
  };
}
var AVATAR_NAME = "Avatar";
var [createAvatarContext] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAvatar } = _a, avatarProps = __objRest(_a, ["__scopeAvatar"]);
    const [imageLoadingStatus, setImageLoadingStatus] = reactExports.useState("idle");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AvatarProvider,
      {
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, __spreadProps(__spreadValues({}, avatarProps), { ref: forwardedRef }))
      }
    );
  }
);
Avatar$1.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAvatar, src, onLoadingStatusChange = () => {
    } } = _a, imageProps = __objRest(_a, ["__scopeAvatar", "src", "onLoadingStatusChange"]);
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = useImageLoadingStatus(src, imageProps);
    const handleLoadingStatusChange = useCallbackRef((status) => {
      onLoadingStatusChange(status);
      context.onImageLoadingStatusChange(status);
    });
    useLayoutEffect2(() => {
      if (imageLoadingStatus !== "idle") {
        handleLoadingStatusChange(imageLoadingStatus);
      }
    }, [imageLoadingStatus, handleLoadingStatusChange]);
    return imageLoadingStatus === "loaded" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.img, __spreadProps(__spreadValues({}, imageProps), { ref: forwardedRef, src })) : null;
  }
);
AvatarImage$1.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAvatar, delayMs } = _a, fallbackProps = __objRest(_a, ["__scopeAvatar", "delayMs"]);
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = reactExports.useState(delayMs === void 0);
    reactExports.useEffect(() => {
      if (delayMs !== void 0) {
        const timerId = window.setTimeout(() => setCanRender(true), delayMs);
        return () => window.clearTimeout(timerId);
      }
    }, [delayMs]);
    return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, __spreadProps(__spreadValues({}, fallbackProps), { ref: forwardedRef })) : null;
  }
);
AvatarFallback$1.displayName = FALLBACK_NAME;
function resolveLoadingStatus(image, src) {
  if (!image) {
    return "idle";
  }
  if (!src) {
    return "error";
  }
  if (image.src !== src) {
    image.src = src;
  }
  return image.complete && image.naturalWidth > 0 ? "loaded" : "loading";
}
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin }) {
  const isHydrated = useIsHydrated();
  const imageRef = reactExports.useRef(null);
  const image = (() => {
    if (!isHydrated) return null;
    if (!imageRef.current) {
      imageRef.current = new window.Image();
    }
    return imageRef.current;
  })();
  const [loadingStatus, setLoadingStatus] = reactExports.useState(
    () => resolveLoadingStatus(image, src)
  );
  useLayoutEffect2(() => {
    setLoadingStatus(resolveLoadingStatus(image, src));
  }, [image, src]);
  useLayoutEffect2(() => {
    const updateStatus = (status) => () => {
      setLoadingStatus(status);
    };
    if (!image) return;
    const handleLoad = updateStatus("loaded");
    const handleError = updateStatus("error");
    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    if (typeof crossOrigin === "string") {
      image.crossOrigin = crossOrigin;
    }
    return () => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    };
  }, [image, crossOrigin, referrerPolicy]);
  return loadingStatus;
}
var Root = Avatar$1;
var Image = AvatarImage$1;
var Fallback = AvatarFallback$1;
const Avatar = reactExports.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    __spreadValues({
      ref,
      className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)
    }, props)
  );
});
Avatar.displayName = Root.displayName;
const AvatarImage = reactExports.forwardRef((_c, ref) => {
  var _d = _c, { className } = _d, props = __objRest(_d, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Image, __spreadValues({ ref, className: cn("aspect-square h-full w-full", className) }, props));
});
AvatarImage.displayName = Image.displayName;
const AvatarFallback = reactExports.forwardRef((_e, ref) => {
  var _f = _e, { className } = _f, props = __objRest(_f, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Fallback,
    __spreadValues({
      ref,
      className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)
    }, props)
  );
});
AvatarFallback.displayName = Fallback.displayName;
const TestimonialCard = reactExports.memo(function TestimonialCard2({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: cn("h-full transition-all duration-300 hover:shadow-medium", className), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-1 mb-4", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Star,
      {
        className: cn(
          "w-4 h-4",
          i < rating ? "text-yellow-400 fill-current" : "text-muted-foreground"
        )
      },
      `star-${i}`
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-muted-foreground mb-6 leading-relaxed", children: [
      '"',
      quote,
      '"'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: avatar, alt: author }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { children: author.split(" ").map((n) => n[0]).join("") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: author }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
          role,
          " at ",
          company
        ] })
      ] })
    ] })
  ] }) });
});
const HeroSection = ({ content, variant }) => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-20 pb-16 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-6", children: content.hero.badge }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-bold mb-6 leading-tight", children: content.hero.title }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto", children: content.hero.subtitle }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "group", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", state: { variant }, children: [
      content.hero.cta1,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: variant === "customer" ? "/business" : "/contact", children: content.hero.cta2 }) })
  ] })
] }) }) });
const FeaturesSection = ({ content, variant }) => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: variant === "business" ? "Everything you need for proactive managed IT" : "Everything you need for stress-free technology" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: variant === "business" ? "Centralized remote management, security monitoring, and optimization delivered by a reliable partner." : "Friendly, patient experts helping you stay connected, secure, and confident with everyday technology." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: content.features.map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    FeatureCard,
    {
      icon: f.icon,
      title: f.title,
      description: f.description,
      variant: "default"
    },
    f.title
  )) })
] }) });
const StatsSection = ({ variant }) => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: variant === "business" ? "25K+" : "10K+" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: variant === "business" ? "Devices under active management" : "Remote support sessions delivered" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: variant === "business" ? "1.5K+" : "5K+" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: variant === "business" ? "Security incidents prevented" : "Devices optimized & cleaned" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: variant === "business" ? "98.9%" : "99.2%" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "First-contact resolution rate" })
  ] })
] }) }) });
const TestimonialsSection = ({ variant }) => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "What our customers say" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: variant === "business" ? "Teams rely on our proactive monitoring and rapid response." : "People trust our patient, friendly support every day." })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TestimonialCard,
      {
        quote: variant === "business" ? "Their remote monitoring & patching cut our downtime dramatically within the first month." : "They patiently set up my new laptop and transferred everything. I didn’t have to worry about a thing.",
        author: "Sarah Chen",
        role: variant === "business" ? "IT Manager" : "Retired Teacher",
        company: variant === "business" ? "TechStart Inc" : ""
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TestimonialCard,
      {
        quote: variant === "business" ? "Our security posture improved quickly—clear reporting and proactive alerts give us peace of mind." : "My computer runs faster than it has in years—regular maintenance really helps.",
        author: "Michael Rodriguez",
        role: variant === "business" ? "Operations Director" : "Senior User",
        company: variant === "business" ? "Growth Corp" : ""
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TestimonialCard,
      {
        quote: variant === "business" ? "Feels like an in‑house IT department without the overhead—responsive and professional." : "I finally feel confident using online services thanks to their guidance and security tips.",
        author: "Emily Johnson",
        role: variant === "business" ? "Founder" : "Freelance Writer",
        company: variant === "business" ? "Innovation Labs" : ""
      }
    )
  ] })
] }) });
const CTASection = ({ variant }) => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gradient-hero text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: variant === "business" ? "Ready to strengthen your IT operations?" : "Ready for simpler, stress‑free technology?" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 opacity-90 max-w-2xl mx-auto", children: variant === "business" ? "Scale with proactive monitoring, security, and expert remote support—no internal overhead." : "Get patient, friendly experts who keep you secure, connected, and confident every day." }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", state: { variant }, children: "Get Started Today" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: "bg-blue-900 hover:bg-blue-800 text-white", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Talk to Our Team" }) })
  ] })
] }) });
const Index = () => {
  const { variant } = useVariant();
  const businessContent = {
    hero: {
      badge: "Trusted by 500+ businesses",
      title: "Managed IT services for growing businesses",
      subtitle: "Professional remote support, system management, and technology solutions delivered by our expert team in India.",
      cta1: "Get Started",
      cta2: "Contact Sales"
    },
    features: [
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "w-6 h-6" }),
        title: "Business IT Support",
        description: "Comprehensive managed services including server management, network monitoring, and business software support."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6" }),
        title: "Security Management",
        description: "24/7 security monitoring, backup solutions, and compliance management for your business infrastructure."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6" }),
        title: "Remote Administration",
        description: "Full remote management of your IT infrastructure with secure access and professional oversight."
      }
    ]
  };
  const customerContent = {
    hero: {
      badge: "Trusted by 10,000+ customers in US & Canada",
      title: "Remote tech support and managed services for seniors",
      subtitle: "Setup, optimization, and ongoing help from India to North America — making technology simple and accessible.",
      cta1: "Create Account",
      cta2: "See Business Plans"
    },
    features: [
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-6 h-6" }),
        title: "Personal Tech Support",
        description: "Friendly assistance with computers, smartphones, and smart home devices from certified technicians."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6" }),
        title: "Device Security",
        description: "Antivirus setup, software updates, and security monitoring to keep your devices safe and secure."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6" }),
        title: "Remote Troubleshooting",
        description: "Quick problem resolution through secure remote access — no need to leave your home."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-6 h-6" }),
        title: "Setup & Training",
        description: "Help with new device setup, software installation, and personalized training sessions."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-6 h-6" }),
        title: "System Optimization",
        description: "Regular maintenance, cleanup, and performance tuning to keep your devices running smoothly."
      },
      {
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-6 h-6" }),
        title: "Ongoing Support",
        description: "Monthly check-ins, proactive maintenance, and unlimited support calls during business hours."
      }
    ]
  };
  const content = variant === "business" ? businessContent : customerContent;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, { content, variant }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesSection, { content, variant }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsSection, { variant }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, { variant }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, { variant }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CookieBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingActions, {})
  ] });
};
export {
  Index as default
};
