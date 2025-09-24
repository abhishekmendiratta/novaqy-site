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
import { u as useComposedRefs, b as useControllableState, j as jsxRuntimeExports, c as createContextScope, P as Primitive, e as composeEventHandlers, y as usePrevious, z as useSize } from "./ui-vendor.js";
import { a as reactExports } from "./react-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { B as Button } from "./input.js";
import { C as Card, b as CardHeader, d as CardTitle, e as CardDescription, a as CardContent } from "./card.js";
import { c as cn } from "./index.js";
import { B as Badge } from "./badge.js";
import { S as Separator } from "./separator.js";
import { A as Alert, a as AlertDescription } from "./alert.js";
import { d as CircleCheckBig, D as Download, v as Trash2, u as TriangleAlert } from "./utils-vendor.js";
import "./auth-vendor.js";
import "./query-vendor.js";
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form
    } = _a, switchProps = __objRest(_a, [
      "__scopeSwitch",
      "name",
      "checked",
      "defaultChecked",
      "required",
      "disabled",
      "value",
      "onCheckedChange",
      "form"
    ]);
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked != null ? defaultChecked : false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        __spreadProps(__spreadValues({
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value
        }, switchProps), {
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        })
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeSwitch } = _a, thumbProps = __objRest(_a, ["__scopeSwitch"]);
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      __spreadProps(__spreadValues({
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0
      }, thumbProps), {
        ref: forwardedRef
      })
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = reactExports.forwardRef(
  (_a, forwardedRef) => {
    var _b = _a, {
      __scopeSwitch,
      control,
      checked,
      bubbles = true
    } = _b, props = __objRest(_b, [
      "__scopeSwitch",
      "control",
      "checked",
      "bubbles"
    ]);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      __spreadProps(__spreadValues({
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked
      }, props), {
        tabIndex: -1,
        ref: composedRefs,
        style: __spreadProps(__spreadValues(__spreadValues({}, props.style), controlSize), {
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      })
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
const Switch = reactExports.forwardRef((_c, ref) => {
  var _d = _c, { className } = _d, props = __objRest(_d, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    __spreadProps(__spreadValues({
      className: cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props), {
      ref,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          className: cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    })
  );
});
Switch.displayName = Root.displayName;
const PrivacySettings = () => {
  const [preferences, setPreferences] = reactExports.useState({
    strictlyNecessary: true,
    functional: false,
    analytics: false,
    advertising: false
  });
  const [consentDate, setConsentDate] = reactExports.useState(null);
  const [hasChanges, setHasChanges] = reactExports.useState(false);
  const [showSuccess, setShowSuccess] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const savedPreferences = localStorage.getItem("cookie-preferences");
    const savedConsentDate = localStorage.getItem("cookie-consent-date");
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
    if (savedConsentDate) {
      setConsentDate(savedConsentDate);
    }
  }, []);
  const updatePreference = (category, value) => {
    if (category === "strictlyNecessary") return;
    setPreferences((prev) => __spreadProps(__spreadValues({}, prev), {
      [category]: value
    }));
    setHasChanges(true);
  };
  const savePreferences = () => {
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    localStorage.setItem("cookie-consent-date", (/* @__PURE__ */ new Date()).toISOString());
    setConsentDate((/* @__PURE__ */ new Date()).toISOString());
    setHasChanges(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3e3);
    console.log("Privacy preferences saved:", preferences);
  };
  const exportData = () => {
    const data = {
      cookiePreferences: preferences,
      consentDate,
      exportDate: (/* @__PURE__ */ new Date()).toISOString(),
      userAgent: navigator.userAgent
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "privacy-data-export.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const requestDeletion = () => {
    alert("Data deletion request submitted. You will receive a confirmation email within 30 days.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container py-20 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-4 text-foreground", children: "Privacy Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Manage your privacy preferences and data rights. Your choices are saved locally and can be changed anytime." })
      ] }),
      showSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "mb-6 border-green-200 bg-green-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-green-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { className: "text-green-800", children: "Your privacy preferences have been saved successfully." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-2xl font-semibold text-foreground", children: [
            "Cookie Preferences",
            consentDate && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
              "Last updated: ",
              new Date(consentDate).toLocaleDateString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-lg leading-relaxed", children: "Control which types of cookies and tracking technologies we use on our website." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Strictly Necessary Cookies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Required for the website to function properly. These cannot be disabled." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: preferences.strictlyNecessary, disabled: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Functional Cookies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Remember your preferences and settings to enhance your experience." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: preferences.functional,
                onCheckedChange: (checked) => updatePreference("functional", checked)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Analytics Cookies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Help us understand how visitors interact with our website to improve performance." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: preferences.analytics,
                onCheckedChange: (checked) => updatePreference("analytics", checked)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Advertising Cookies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Used to deliver relevant advertisements and measure campaign effectiveness." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: preferences.advertising,
                onCheckedChange: (checked) => updatePreference("advertising", checked)
              }
            )
          ] }),
          hasChanges && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: savePreferences, className: "w-full sm:w-auto", children: "Save Preferences" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-semibold text-foreground", children: "Your Data Rights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-lg leading-relaxed", children: "Under GDPR, PIPEDA, and other privacy laws, you have certain rights regarding your personal data." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Access Your Data" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Request a copy of all personal data we hold about you." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: exportData, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-2" }),
                "Export Data"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Delete Your Data" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Request deletion of your personal data from our systems." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: requestDeletion, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 mr-2" }),
                "Request Deletion"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Data deletion requests will be processed within 30 days. Some data may be retained for legal compliance purposes." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl font-semibold text-foreground", children: "Contact Our Privacy Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-lg leading-relaxed", children: "Have questions about your privacy rights or need assistance with your settings?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Privacy Officer:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:privacy@novaqy.com", className: "text-blue-600 hover:text-blue-800", children: "privacy@novaqy.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "General Support:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:support@novaqy.com", className: "text-blue-600 hover:text-blue-800", children: "support@novaqy.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-4", children: "We typically respond to privacy-related inquiries within 48 hours." })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  PrivacySettings as default
};
