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
import { c as createContextScope, b as useControllableState, j as jsxRuntimeExports, w as useId, P as Primitive, e as composeEventHandlers, d as Presence, u as useComposedRefs, h as useLayoutEffect2, a as createCollection, x as useDirection } from "./ui-vendor.js";
import { H as Header$1, F as Footer } from "./Footer.js";
import { B as Badge } from "./badge.js";
import { a as reactExports, R as React, L as Link } from "./react-vendor.js";
import { c as cn } from "./index.js";
import { n as ChevronDown, o as Search } from "./utils-vendor.js";
import { I as Input, B as Button } from "./input.js";
import "./separator.js";
import "./auth-vendor.js";
import "./query-vendor.js";
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange
    } = _a, collapsibleProps = __objRest(_a, [
      "__scopeCollapsible",
      "open",
      "defaultOpen",
      "disabled",
      "onOpenChange"
    ]);
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen != null ? defaultOpen : false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          __spreadProps(__spreadValues({
            "data-state": getState$1(open),
            "data-disabled": disabled ? "" : void 0
          }, collapsibleProps), {
            ref: forwardedRef
          })
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeCollapsible } = _a, triggerProps = __objRest(_a, ["__scopeCollapsible"]);
    const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      __spreadProps(__spreadValues({
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState$1(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled
      }, triggerProps), {
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      })
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { forceMount } = _a, contentProps = __objRest(_a, ["forceMount"]);
    const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContentImpl, __spreadProps(__spreadValues({}, contentProps), { ref: forwardedRef, present })) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = reactExports.forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeCollapsible, present, children } = _a, contentProps = __objRest(_a, ["__scopeCollapsible", "present", "children"]);
  const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
  const [isPresent, setIsPresent] = reactExports.useState(present);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = reactExports.useRef(0);
  const height = heightRef.current;
  const widthRef = reactExports.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = reactExports.useRef(isOpen);
  const originalStylesRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    __spreadProps(__spreadValues({
      "data-state": getState$1(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen
    }, contentProps), {
      ref: composedRefs,
      style: __spreadValues({
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0
      }, props.style),
      children: isOpen && children
    })
  );
});
function getState$1(open) {
  return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection, useCollection, createCollectionScope] = createCollection(ACCORDION_NAME);
var [createAccordionContext] = createContextScope(ACCORDION_NAME, [
  createCollectionScope,
  createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion$1 = React.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { type } = _a, accordionProps = __objRest(_a, ["type"]);
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplMultiple, __spreadProps(__spreadValues({}, multipleProps), { ref: forwardedRef })) : /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplSingle, __spreadProps(__spreadValues({}, singleProps), { ref: forwardedRef })) });
  }
);
Accordion$1.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
  ACCORDION_NAME,
  { collapsible: false }
);
var AccordionImplSingle = React.forwardRef(
  (props, forwardedRef) => {
    const _a = props, {
      value: valueProp,
      defaultValue,
      onValueChange = () => {
      },
      collapsible = false
    } = _a, accordionSingleProps = __objRest(_a, [
      "value",
      "defaultValue",
      "onValueChange",
      "collapsible"
    ]);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue != null ? defaultValue : "",
      onChange: onValueChange,
      caller: ACCORDION_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionValueProvider,
      {
        scope: props.__scopeAccordion,
        value: React.useMemo(() => value ? [value] : [], [value]),
        onItemOpen: setValue,
        onItemClose: React.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, __spreadProps(__spreadValues({}, accordionSingleProps), { ref: forwardedRef })) })
      }
    );
  }
);
var AccordionImplMultiple = React.forwardRef((props, forwardedRef) => {
  const _a = props, {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    }
  } = _a, accordionMultipleProps = __objRest(_a, [
    "value",
    "defaultValue",
    "onValueChange"
  ]);
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue != null ? defaultValue : [],
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  const handleItemOpen = React.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleItemClose = React.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AccordionValueProvider,
    {
      scope: props.__scopeAccordion,
      value,
      onItemOpen: handleItemOpen,
      onItemClose: handleItemClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, __spreadProps(__spreadValues({}, accordionMultipleProps), { ref: forwardedRef })) })
    }
  );
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = React.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAccordion, disabled, dir, orientation = "vertical" } = _a, accordionProps = __objRest(_a, ["__scopeAccordion", "disabled", "dir", "orientation"]);
    const accordionRef = React.useRef(null);
    const composedRefs = useComposedRefs(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      var _a2;
      if (!ACCORDION_KEYS.includes(event.key)) return;
      const target = event.target;
      const triggerCollection = getItems().filter((item) => {
        var _a3;
        return !((_a3 = item.ref.current) == null ? void 0 : _a3.disabled);
      });
      const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
      const triggerCount = triggerCollection.length;
      if (triggerIndex === -1) return;
      event.preventDefault();
      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;
      const moveNext = () => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      };
      const movePrev = () => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      };
      switch (event.key) {
        case "Home":
          nextIndex = homeIndex;
          break;
        case "End":
          nextIndex = endIndex;
          break;
        case "ArrowRight":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              moveNext();
            } else {
              movePrev();
            }
          }
          break;
        case "ArrowDown":
          if (orientation === "vertical") {
            moveNext();
          }
          break;
        case "ArrowLeft":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              movePrev();
            } else {
              moveNext();
            }
          }
          break;
        case "ArrowUp":
          if (orientation === "vertical") {
            movePrev();
          }
          break;
      }
      const clampedIndex = nextIndex % triggerCount;
      (_a2 = triggerCollection[clampedIndex].ref.current) == null ? void 0 : _a2.focus();
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionImplProvider,
      {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          __spreadProps(__spreadValues({}, accordionProps), {
            "data-orientation": orientation,
            ref: composedRefs,
            onKeyDown: disabled ? void 0 : handleKeyDown
          })
        ) })
      }
    );
  }
);
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem$1 = React.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAccordion, value } = _a, accordionItemProps = __objRest(_a, ["__scopeAccordion", "value"]);
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = useId();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionItemProvider,
      {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          __spreadProps(__spreadValues(__spreadValues({
            "data-orientation": accordionContext.orientation,
            "data-state": getState(open)
          }, collapsibleScope), accordionItemProps), {
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2) => {
              if (open2) {
                valueContext.onItemOpen(value);
              } else {
                valueContext.onItemClose(value);
              }
            }
          })
        )
      }
    );
  }
);
AccordionItem$1.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = React.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAccordion } = _a, headerProps = __objRest(_a, ["__scopeAccordion"]);
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.h3,
      __spreadProps(__spreadValues({
        "data-orientation": accordionContext.orientation,
        "data-state": getState(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0
      }, headerProps), {
        ref: forwardedRef
      })
    );
  }
);
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger$1 = React.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAccordion } = _a, triggerProps = __objRest(_a, ["__scopeAccordion"]);
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trigger,
      __spreadProps(__spreadValues(__spreadValues({
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId
      }, collapsibleScope), triggerProps), {
        ref: forwardedRef
      })
    ) });
  }
);
AccordionTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "AccordionContent";
var AccordionContent$1 = React.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAccordion } = _a, contentProps = __objRest(_a, ["__scopeAccordion"]);
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content,
      __spreadProps(__spreadValues(__spreadValues({
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation
      }, collapsibleScope), contentProps), {
        ref: forwardedRef,
        style: __spreadValues({
          ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
          ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)"
        }, props.style)
      })
    );
  }
);
AccordionContent$1.displayName = CONTENT_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root2 = Accordion$1;
var Item = AccordionItem$1;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger$1;
var Content2 = AccordionContent$1;
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Item, __spreadValues({ ref, className: cn("border-b", className) }, props));
});
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef((_c, ref) => {
  var _d = _c, { className, children } = _d, props = __objRest(_d, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Trigger2,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
      ]
    })
  ) });
});
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef((_e, ref) => {
  var _f = _e, { className, children } = _f, props = __objRest(_f, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    __spreadProps(__spreadValues({
      ref,
      className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    }, props), {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
    })
  );
});
AccordionContent.displayName = Content2.displayName;
const FAQ = () => {
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const faqCategories = [
    {
      title: "Services & Support",
      faqs: [
        {
          question: "What services does Novaqy provide?",
          answer: "Novaqy provides MSP B2C (tech support), Managed Hosting, Managed IT (B2B), and MSSP services. We offer remote technical support, system management, security monitoring, and technology solutions for both individual customers and businesses."
        },
        {
          question: "How does remote support work?",
          answer: "Our certified technicians provide secure remote access to diagnose and resolve technical issues. All sessions are logged, time-bound, and require your explicit authorization. We use industry-standard security measures to protect your data."
        },
        {
          question: "What are your service hours?",
          answer: "We provide support during business hours (typically 9 AM - 6 PM in your local time zone). Emergency security issues are addressed 24/7 through our monitoring systems."
        },
        {
          question: "Do you offer one-time support services?",
          answer: "Yes, we offer one-time support incidents for $49. This covers diagnostic work and remediation, but excludes software licenses and subscriptions."
        }
      ]
    },
    {
      title: "Billing & Pricing",
      faqs: [
        {
          question: "How do refunds work?",
          answer: "All services are non-refundable once work has commenced or software has been provisioned. This includes one-time support incidents, antivirus licenses, and subscription services. We maintain detailed session logs, timestamps, and communication records that clearly document all services provided. Chargebacks initiated through American Express, Discover, or other card networks will be contested with full documentation of services rendered, including remote session evidence, diagnostic reports, and customer communications. As a U.S. and Canada-based service provider, we comply with all applicable consumer protection laws while maintaining strict policies to prevent fraudulent chargebacks."
        },
        {
          question: "What is the $25 antivirus license deduction?",
          answer: "The $25 antivirus license fee covers third-party software licensing costs and is non-refundable upon provisioning. This fee supports industry-leading antivirus solutions and includes license activation, configuration, and initial setup. All software licenses are transferred to the customer upon completion and cannot be refunded due to licensing restrictions and our zero-tolerance policy for chargebacks."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel subscriptions at any time through your account dashboard. Cancellations take effect at the end of your current billing period with no refunds for the remaining period. We provide clear cancellation confirmation and maintain records of all cancellation requests. Please note that cancelled subscriptions cannot be reactivated, and new subscriptions would be subject to current pricing and terms."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards (Visa, MasterCard, American Express, Discover) and debit cards. All payments are processed securely through PCI-compliant payment processors. We reserve the right to decline payments or suspend services for any reason, including suspected fraudulent activity or chargeback history. Multiple chargebacks may result in account termination and reporting to credit agencies."
        },
        {
          question: "What happens if I dispute a charge?",
          answer: "All charge disputes will be contested with comprehensive documentation including session logs, timestamps, service records, and customer communications. As a legitimate U.S. and Canada-based technology service provider, we maintain detailed records of all services provided. Chargebacks without prior contact with our support team may result in additional fees and potential legal action for breach of contract."
        },
        {
          question: "Are there any guarantees or warranties?",
          answer: "We provide services with reasonable skill and care. However, due to the nature of technology support and the challenges of remote diagnostics, we cannot guarantee specific outcomes. All services are provided on an 'as-is' basis. We maintain comprehensive documentation of all work performed to protect against unfounded chargebacks and disputes."
        }
      ]
    },
    {
      title: "Privacy & Security",
      faqs: [
        {
          question: "How do I withdraw cookie consent?",
          answer: "You can withdraw or modify your cookie consent anytime through our Privacy Settings page. Changes take effect immediately, though some cookies may persist until your next browser session."
        },
        {
          question: "What data do you collect?",
          answer: "We collect contact information, billing data, device identifiers, IP addresses, diagnostic logs, support tickets, and consent preferences. All collection is limited to necessary purposes for service delivery."
        },
        {
          question: "Do you sell personal data?",
          answer: "No, we do not sell personal data. We may share limited information with service providers for payment processing, security, and customer support, but only under contractual safeguards."
        },
        {
          question: "How do I exercise my data rights?",
          answer: "Contact our Privacy Officer at privacy@novaqy.com to request access, correction, deletion, or portability of your data. We verify identity before processing such requests."
        }
      ]
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "What operating systems do you support?",
          answer: "We support Windows 10/11, macOS 10.15+, and major Linux distributions. Some advanced features may require specific system requirements."
        },
        {
          question: "How secure is remote access?",
          answer: "Remote sessions use encrypted connections, unique credentials, and least-privilege access. Sessions are time-bound, logged for audit purposes, and require your explicit consent."
        },
        {
          question: "What if I need emergency support?",
          answer: "For security incidents or system outages, contact our emergency line. Critical issues are prioritized and addressed within our SLA timeframes."
        },
        {
          question: "Do you provide training?",
          answer: "Yes, we offer personalized training sessions to help you get comfortable with technology. This is included in our managed service plans."
        }
      ]
    }
  ];
  const filteredFAQs = faqCategories.map((category) => __spreadProps(__spreadValues({}, category), {
    faqs: category.faqs.filter(
      (faq) => faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter((category) => category.faqs.length > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-20 pb-16 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-6", children: "Help Center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold mb-6", children: "Frequently asked questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Find answers to common questions about Novaqy's managed IT services and remote support." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search FAQs...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            className: "pl-10"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-4xl mx-auto", children: filteredFAQs.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: filteredFAQs.map((category, categoryIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6", children: category.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: category.faqs.map((faq, faqIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        AccordionItem,
        {
          value: `${categoryIndex}-${faqIndex}`,
          className: "border rounded-lg px-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left", children: faq.question }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground", children: faq.answer })
          ]
        },
        faqIndex
      )) })
    ] }, categoryIndex)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "No FAQs found matching your search." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          onClick: () => setSearchTerm(""),
          children: "Show all FAQs"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Can't find what you're looking for?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Our support team is here to help. Get in touch and we'll get back to you as soon as possible." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact Support" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+1-800-NOVAQY-1", children: "Call Us" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  FAQ as default
};
