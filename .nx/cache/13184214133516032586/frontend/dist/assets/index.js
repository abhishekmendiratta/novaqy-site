const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Index2.js","assets/ui-vendor.js","assets/react-vendor.js","assets/Footer.js","assets/input.js","assets/utils-vendor.js","assets/separator.js","assets/card.js","assets/badge.js","assets/auth-vendor.js","assets/query-vendor.js","assets/NotFound.js","assets/Pricing.js","assets/PricingCard.js","assets/PersonalPricing.js","assets/BusinessPricing.js","assets/About.js","assets/Contact.js","assets/select.js","assets/label.js","assets/Login.js","assets/alert.js","assets/Signup.js","assets/checkbox.js","assets/ResetPassword.js","assets/FAQ.js","assets/Blog.js","assets/dataService.js","assets/BlogPost.js","assets/CaseStudies.js","assets/CaseStudy.js","assets/CustomerStories.js","assets/Terms.js","assets/ReturnRefund.js","assets/Cookies.js","assets/CookieScanner.js","assets/PrivacySettings.js","assets/RemoteDisclaimer.js","assets/AcceptableUse.js","assets/Shipping.js","assets/EndUserAgreement.js","assets/Payment.js","assets/enc-hex.js","assets/supabaseService.js","assets/PaymentSuccess.js","assets/PaymentFailed.js","assets/Careers.js","assets/Admin.js","assets/charts-vendor.js","assets/Dashboard.js","assets/BusinessServices.js"])))=>i.map(i=>d[i]);
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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _q;
import { c as createContextScope, a as createCollection, u as useComposedRefs, j as jsxRuntimeExports, B as Branch, P as Primitive, b as useControllableState, d as Presence, e as composeEventHandlers, f as useCallbackRef, V as VisuallyHidden, R as Root, g as Portal, h as useLayoutEffect2, i as dispatchDiscreteCustomEvent, k as createPopperScope, D as DismissableLayer, C as Content, l as createSlottable, m as Root$1, A as Anchor, n as Arrow } from "./ui-vendor.js";
import { h as requireReactDom, a as reactExports, b as reactDomExports, R as React, c as ReactDOM, u as useLocation, N as Navigate, B as BrowserRouter, i as Routes, j as Route } from "./react-vendor.js";
import { _ as __vitePreload } from "./auth-vendor.js";
import { c as clsx, t as twMerge, X } from "./utils-vendor.js";
import { Q as QueryClient, a as QueryClientProvider } from "./query-vendor.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var client = {};
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m = requireReactDom();
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return __spreadProps(__spreadValues({}, state), {
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      });
    case "UPDATE_TOAST":
      return __spreadProps(__spreadValues({}, state), {
        toasts: state.toasts.map((t) => t.id === action.toast.id ? __spreadValues(__spreadValues({}, t), action.toast) : t)
      });
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return __spreadProps(__spreadValues({}, state), {
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? __spreadProps(__spreadValues({}, t), {
            open: false
          }) : t
        )
      });
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return __spreadProps(__spreadValues({}, state), {
          toasts: []
        });
      }
      return __spreadProps(__spreadValues({}, state), {
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      });
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast(_a) {
  var props = __objRest(_a, []);
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: __spreadProps(__spreadValues({}, props2), { id })
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: __spreadProps(__spreadValues({}, props), {
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    })
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = reactExports.useState(memoryState);
  reactExports.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return __spreadProps(__spreadValues({}, state), {
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  });
}
var PROVIDER_NAME$1 = "ToastProvider";
var [Collection, useCollection, createCollectionScope] = createCollection("Toast");
var [createToastContext] = createContextScope("Toast", [createCollectionScope]);
var [ToastProviderProvider, useToastProviderContext] = createToastContext(PROVIDER_NAME$1);
var ToastProvider$1 = (props) => {
  const {
    __scopeToast,
    label = "Notification",
    duration = 5e3,
    swipeDirection = "right",
    swipeThreshold = 50,
    children
  } = props;
  const [viewport, setViewport] = reactExports.useState(null);
  const [toastCount, setToastCount] = reactExports.useState(0);
  const isFocusedToastEscapeKeyDownRef = reactExports.useRef(false);
  const isClosePausedRef = reactExports.useRef(false);
  if (!label.trim()) {
    console.error(
      `Invalid prop \`label\` supplied to \`${PROVIDER_NAME$1}\`. Expected non-empty \`string\`.`
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: __scopeToast, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ToastProviderProvider,
    {
      scope: __scopeToast,
      label,
      duration,
      swipeDirection,
      swipeThreshold,
      toastCount,
      viewport,
      onViewportChange: setViewport,
      onToastAdd: reactExports.useCallback(() => setToastCount((prevCount) => prevCount + 1), []),
      onToastRemove: reactExports.useCallback(() => setToastCount((prevCount) => prevCount - 1), []),
      isFocusedToastEscapeKeyDownRef,
      isClosePausedRef,
      children
    }
  ) });
};
ToastProvider$1.displayName = PROVIDER_NAME$1;
var VIEWPORT_NAME = "ToastViewport";
var VIEWPORT_DEFAULT_HOTKEY = ["F8"];
var VIEWPORT_PAUSE = "toast.viewportPause";
var VIEWPORT_RESUME = "toast.viewportResume";
var ToastViewport$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, {
      __scopeToast,
      hotkey = VIEWPORT_DEFAULT_HOTKEY,
      label = "Notifications ({hotkey})"
    } = _a, viewportProps = __objRest(_a, [
      "__scopeToast",
      "hotkey",
      "label"
    ]);
    const context = useToastProviderContext(VIEWPORT_NAME, __scopeToast);
    const getItems = useCollection(__scopeToast);
    const wrapperRef = reactExports.useRef(null);
    const headFocusProxyRef = reactExports.useRef(null);
    const tailFocusProxyRef = reactExports.useRef(null);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    const hasToasts = context.toastCount > 0;
    reactExports.useEffect(() => {
      const handleKeyDown = (event) => {
        var _a2;
        const isHotkeyPressed = hotkey.length !== 0 && hotkey.every((key) => event[key] || event.code === key);
        if (isHotkeyPressed) (_a2 = ref.current) == null ? void 0 : _a2.focus();
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [hotkey]);
    reactExports.useEffect(() => {
      const wrapper = wrapperRef.current;
      const viewport = ref.current;
      if (hasToasts && wrapper && viewport) {
        const handlePause = () => {
          if (!context.isClosePausedRef.current) {
            const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
            viewport.dispatchEvent(pauseEvent);
            context.isClosePausedRef.current = true;
          }
        };
        const handleResume = () => {
          if (context.isClosePausedRef.current) {
            const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
            viewport.dispatchEvent(resumeEvent);
            context.isClosePausedRef.current = false;
          }
        };
        const handleFocusOutResume = (event) => {
          const isFocusMovingOutside = !wrapper.contains(event.relatedTarget);
          if (isFocusMovingOutside) handleResume();
        };
        const handlePointerLeaveResume = () => {
          const isFocusInside = wrapper.contains(document.activeElement);
          if (!isFocusInside) handleResume();
        };
        wrapper.addEventListener("focusin", handlePause);
        wrapper.addEventListener("focusout", handleFocusOutResume);
        wrapper.addEventListener("pointermove", handlePause);
        wrapper.addEventListener("pointerleave", handlePointerLeaveResume);
        window.addEventListener("blur", handlePause);
        window.addEventListener("focus", handleResume);
        return () => {
          wrapper.removeEventListener("focusin", handlePause);
          wrapper.removeEventListener("focusout", handleFocusOutResume);
          wrapper.removeEventListener("pointermove", handlePause);
          wrapper.removeEventListener("pointerleave", handlePointerLeaveResume);
          window.removeEventListener("blur", handlePause);
          window.removeEventListener("focus", handleResume);
        };
      }
    }, [hasToasts, context.isClosePausedRef]);
    const getSortedTabbableCandidates = reactExports.useCallback(
      ({ tabbingDirection }) => {
        const toastItems = getItems();
        const tabbableCandidates = toastItems.map((toastItem) => {
          const toastNode = toastItem.ref.current;
          const toastTabbableCandidates = [toastNode, ...getTabbableCandidates(toastNode)];
          return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
        });
        return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
      },
      [getItems]
    );
    reactExports.useEffect(() => {
      const viewport = ref.current;
      if (viewport) {
        const handleKeyDown = (event) => {
          var _a2, _b, _c;
          const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
          const isTabKey = event.key === "Tab" && !isMetaKey;
          if (isTabKey) {
            const focusedElement = document.activeElement;
            const isTabbingBackwards = event.shiftKey;
            const targetIsViewport = event.target === viewport;
            if (targetIsViewport && isTabbingBackwards) {
              (_a2 = headFocusProxyRef.current) == null ? void 0 : _a2.focus();
              return;
            }
            const tabbingDirection = isTabbingBackwards ? "backwards" : "forwards";
            const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection });
            const index = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
            if (focusFirst(sortedCandidates.slice(index + 1))) {
              event.preventDefault();
            } else {
              isTabbingBackwards ? (_b = headFocusProxyRef.current) == null ? void 0 : _b.focus() : (_c = tailFocusProxyRef.current) == null ? void 0 : _c.focus();
            }
          }
        };
        viewport.addEventListener("keydown", handleKeyDown);
        return () => viewport.removeEventListener("keydown", handleKeyDown);
      }
    }, [getItems, getSortedTabbableCandidates]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Branch,
      {
        ref: wrapperRef,
        role: "region",
        "aria-label": label.replace("{hotkey}", hotkeyLabel),
        tabIndex: -1,
        style: { pointerEvents: hasToasts ? void 0 : "none" },
        children: [
          hasToasts && /* @__PURE__ */ jsxRuntimeExports.jsx(
            FocusProxy,
            {
              ref: headFocusProxyRef,
              onFocusFromOutsideViewport: () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "forwards"
                });
                focusFirst(tabbableCandidates);
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeToast, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.ol, __spreadProps(__spreadValues({ tabIndex: -1 }, viewportProps), { ref: composedRefs })) }),
          hasToasts && /* @__PURE__ */ jsxRuntimeExports.jsx(
            FocusProxy,
            {
              ref: tailFocusProxyRef,
              onFocusFromOutsideViewport: () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "backwards"
                });
                focusFirst(tabbableCandidates);
              }
            }
          )
        ]
      }
    );
  }
);
ToastViewport$1.displayName = VIEWPORT_NAME;
var FOCUS_PROXY_NAME = "ToastFocusProxy";
var FocusProxy = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeToast, onFocusFromOutsideViewport } = _a, proxyProps = __objRest(_a, ["__scopeToast", "onFocusFromOutsideViewport"]);
    const context = useToastProviderContext(FOCUS_PROXY_NAME, __scopeToast);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      VisuallyHidden,
      __spreadProps(__spreadValues({
        "aria-hidden": true,
        tabIndex: 0
      }, proxyProps), {
        ref: forwardedRef,
        style: { position: "fixed" },
        onFocus: (event) => {
          var _a2;
          const prevFocusedElement = event.relatedTarget;
          const isFocusFromOutsideViewport = !((_a2 = context.viewport) == null ? void 0 : _a2.contains(prevFocusedElement));
          if (isFocusFromOutsideViewport) onFocusFromOutsideViewport();
        }
      })
    );
  }
);
FocusProxy.displayName = FOCUS_PROXY_NAME;
var TOAST_NAME = "Toast";
var TOAST_SWIPE_START = "toast.swipeStart";
var TOAST_SWIPE_MOVE = "toast.swipeMove";
var TOAST_SWIPE_CANCEL = "toast.swipeCancel";
var TOAST_SWIPE_END = "toast.swipeEnd";
var Toast$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { forceMount, open: openProp, defaultOpen, onOpenChange } = _a, toastProps = __objRest(_a, ["forceMount", "open", "defaultOpen", "onOpenChange"]);
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen != null ? defaultOpen : true,
      onChange: onOpenChange,
      caller: TOAST_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToastImpl,
      __spreadProps(__spreadValues({
        open
      }, toastProps), {
        ref: forwardedRef,
        onClose: () => setOpen(false),
        onPause: useCallbackRef(props.onPause),
        onResume: useCallbackRef(props.onResume),
        onSwipeStart: composeEventHandlers(props.onSwipeStart, (event) => {
          event.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: composeEventHandlers(props.onSwipeMove, (event) => {
          const { x, y } = event.detail.delta;
          event.currentTarget.setAttribute("data-swipe", "move");
          event.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${x}px`);
          event.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`);
        }),
        onSwipeCancel: composeEventHandlers(props.onSwipeCancel, (event) => {
          event.currentTarget.setAttribute("data-swipe", "cancel");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-end-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: composeEventHandlers(props.onSwipeEnd, (event) => {
          const { x, y } = event.detail.delta;
          event.currentTarget.setAttribute("data-swipe", "end");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
          event.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${x}px`);
          event.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`);
          setOpen(false);
        })
      })
    ) });
  }
);
Toast$1.displayName = TOAST_NAME;
var [ToastInteractiveProvider, useToastInteractiveContext] = createToastContext(TOAST_NAME, {
  onClose() {
  }
});
var ToastImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, {
      __scopeToast,
      type = "foreground",
      duration: durationProp,
      open,
      onClose,
      onEscapeKeyDown,
      onPause,
      onResume,
      onSwipeStart,
      onSwipeMove,
      onSwipeCancel,
      onSwipeEnd
    } = _a, toastProps = __objRest(_a, [
      "__scopeToast",
      "type",
      "duration",
      "open",
      "onClose",
      "onEscapeKeyDown",
      "onPause",
      "onResume",
      "onSwipeStart",
      "onSwipeMove",
      "onSwipeCancel",
      "onSwipeEnd"
    ]);
    const context = useToastProviderContext(TOAST_NAME, __scopeToast);
    const [node, setNode] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const pointerStartRef = reactExports.useRef(null);
    const swipeDeltaRef = reactExports.useRef(null);
    const duration = durationProp || context.duration;
    const closeTimerStartTimeRef = reactExports.useRef(0);
    const closeTimerRemainingTimeRef = reactExports.useRef(duration);
    const closeTimerRef = reactExports.useRef(0);
    const { onToastAdd, onToastRemove } = context;
    const handleClose = useCallbackRef(() => {
      var _a2;
      const isFocusInToast = node == null ? void 0 : node.contains(document.activeElement);
      if (isFocusInToast) (_a2 = context.viewport) == null ? void 0 : _a2.focus();
      onClose();
    });
    const startTimer = reactExports.useCallback(
      (duration2) => {
        if (!duration2 || duration2 === Infinity) return;
        window.clearTimeout(closeTimerRef.current);
        closeTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
        closeTimerRef.current = window.setTimeout(handleClose, duration2);
      },
      [handleClose]
    );
    reactExports.useEffect(() => {
      const viewport = context.viewport;
      if (viewport) {
        const handleResume = () => {
          startTimer(closeTimerRemainingTimeRef.current);
          onResume == null ? void 0 : onResume();
        };
        const handlePause = () => {
          const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.current;
          closeTimerRemainingTimeRef.current = closeTimerRemainingTimeRef.current - elapsedTime;
          window.clearTimeout(closeTimerRef.current);
          onPause == null ? void 0 : onPause();
        };
        viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
        viewport.addEventListener(VIEWPORT_RESUME, handleResume);
        return () => {
          viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
          viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
        };
      }
    }, [context.viewport, duration, onPause, onResume, startTimer]);
    reactExports.useEffect(() => {
      if (open && !context.isClosePausedRef.current) startTimer(duration);
    }, [open, duration, context.isClosePausedRef, startTimer]);
    reactExports.useEffect(() => {
      onToastAdd();
      return () => onToastRemove();
    }, [onToastAdd, onToastRemove]);
    const announceTextContent = reactExports.useMemo(() => {
      return node ? getAnnounceTextContent(node) : null;
    }, [node]);
    if (!context.viewport) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      announceTextContent && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ToastAnnounce,
        {
          __scopeToast,
          role: "status",
          "aria-live": type === "foreground" ? "assertive" : "polite",
          "aria-atomic": true,
          children: announceTextContent
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToastInteractiveProvider, { scope: __scopeToast, onClose: handleClose, children: reactDomExports.createPortal(
        /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeToast, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          {
            asChild: true,
            onEscapeKeyDown: composeEventHandlers(onEscapeKeyDown, () => {
              if (!context.isFocusedToastEscapeKeyDownRef.current) handleClose();
              context.isFocusedToastEscapeKeyDownRef.current = false;
            }),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Primitive.li,
              __spreadProps(__spreadValues({
                role: "status",
                "aria-live": "off",
                "aria-atomic": true,
                tabIndex: 0,
                "data-state": open ? "open" : "closed",
                "data-swipe-direction": context.swipeDirection
              }, toastProps), {
                ref: composedRefs,
                style: __spreadValues({ userSelect: "none", touchAction: "none" }, props.style),
                onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                  if (event.key !== "Escape") return;
                  onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event.nativeEvent);
                  if (!event.nativeEvent.defaultPrevented) {
                    context.isFocusedToastEscapeKeyDownRef.current = true;
                    handleClose();
                  }
                }),
                onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
                  if (event.button !== 0) return;
                  pointerStartRef.current = { x: event.clientX, y: event.clientY };
                }),
                onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
                  if (!pointerStartRef.current) return;
                  const x = event.clientX - pointerStartRef.current.x;
                  const y = event.clientY - pointerStartRef.current.y;
                  const hasSwipeMoveStarted = Boolean(swipeDeltaRef.current);
                  const isHorizontalSwipe = ["left", "right"].includes(context.swipeDirection);
                  const clamp = ["left", "up"].includes(context.swipeDirection) ? Math.min : Math.max;
                  const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
                  const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
                  const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
                  const delta = { x: clampedX, y: clampedY };
                  const eventDetail = { originalEvent: event, delta };
                  if (hasSwipeMoveStarted) {
                    swipeDeltaRef.current = delta;
                    handleAndDispatchCustomEvent(TOAST_SWIPE_MOVE, onSwipeMove, eventDetail, {
                      discrete: false
                    });
                  } else if (isDeltaInDirection(delta, context.swipeDirection, moveStartBuffer)) {
                    swipeDeltaRef.current = delta;
                    handleAndDispatchCustomEvent(TOAST_SWIPE_START, onSwipeStart, eventDetail, {
                      discrete: false
                    });
                    event.target.setPointerCapture(event.pointerId);
                  } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) {
                    pointerStartRef.current = null;
                  }
                }),
                onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
                  const delta = swipeDeltaRef.current;
                  const target = event.target;
                  if (target.hasPointerCapture(event.pointerId)) {
                    target.releasePointerCapture(event.pointerId);
                  }
                  swipeDeltaRef.current = null;
                  pointerStartRef.current = null;
                  if (delta) {
                    const toast2 = event.currentTarget;
                    const eventDetail = { originalEvent: event, delta };
                    if (isDeltaInDirection(delta, context.swipeDirection, context.swipeThreshold)) {
                      handleAndDispatchCustomEvent(TOAST_SWIPE_END, onSwipeEnd, eventDetail, {
                        discrete: true
                      });
                    } else {
                      handleAndDispatchCustomEvent(
                        TOAST_SWIPE_CANCEL,
                        onSwipeCancel,
                        eventDetail,
                        {
                          discrete: true
                        }
                      );
                    }
                    toast2.addEventListener("click", (event2) => event2.preventDefault(), {
                      once: true
                    });
                  }
                })
              })
            )
          }
        ) }),
        context.viewport
      ) })
    ] });
  }
);
var ToastAnnounce = (props) => {
  const _a = props, { __scopeToast, children } = _a, announceProps = __objRest(_a, ["__scopeToast", "children"]);
  const context = useToastProviderContext(TOAST_NAME, __scopeToast);
  const [renderAnnounceText, setRenderAnnounceText] = reactExports.useState(false);
  const [isAnnounced, setIsAnnounced] = reactExports.useState(false);
  useNextFrame(() => setRenderAnnounceText(true));
  reactExports.useEffect(() => {
    const timer = window.setTimeout(() => setIsAnnounced(true), 1e3);
    return () => window.clearTimeout(timer);
  }, []);
  return isAnnounced ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisuallyHidden, __spreadProps(__spreadValues({}, announceProps), { children: renderAnnounceText && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    context.label,
    " ",
    children
  ] }) })) });
};
var TITLE_NAME = "ToastTitle";
var ToastTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeToast } = _a, titleProps = __objRest(_a, ["__scopeToast"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, __spreadProps(__spreadValues({}, titleProps), { ref: forwardedRef }));
  }
);
ToastTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "ToastDescription";
var ToastDescription$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeToast } = _a, descriptionProps = __objRest(_a, ["__scopeToast"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, __spreadProps(__spreadValues({}, descriptionProps), { ref: forwardedRef }));
  }
);
ToastDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "ToastAction";
var ToastAction$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { altText } = _a, actionProps = __objRest(_a, ["altText"]);
    if (!altText.trim()) {
      console.error(
        `Invalid prop \`altText\` supplied to \`${ACTION_NAME}\`. Expected non-empty \`string\`.`
      );
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastAnnounceExclude, { altText, asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToastClose$1, __spreadProps(__spreadValues({}, actionProps), { ref: forwardedRef })) });
  }
);
ToastAction$1.displayName = ACTION_NAME;
var CLOSE_NAME = "ToastClose";
var ToastClose$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeToast } = _a, closeProps = __objRest(_a, ["__scopeToast"]);
    const interactiveContext = useToastInteractiveContext(CLOSE_NAME, __scopeToast);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastAnnounceExclude, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      __spreadProps(__spreadValues({
        type: "button"
      }, closeProps), {
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, interactiveContext.onClose)
      })
    ) });
  }
);
ToastClose$1.displayName = CLOSE_NAME;
var ToastAnnounceExclude = reactExports.forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeToast, altText } = _a, announceExcludeProps = __objRest(_a, ["__scopeToast", "altText"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    __spreadProps(__spreadValues({
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": altText || void 0
    }, announceExcludeProps), {
      ref: forwardedRef
    })
  );
});
function getAnnounceTextContent(container) {
  const textContent = [];
  const childNodes = Array.from(container.childNodes);
  childNodes.forEach((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
    if (isHTMLElement(node)) {
      const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
      const isExcluded = node.dataset.radixToastAnnounceExclude === "";
      if (!isHidden) {
        if (isExcluded) {
          const altText = node.dataset.radixToastAnnounceAlt;
          if (altText) textContent.push(altText);
        } else {
          textContent.push(...getAnnounceTextContent(node));
        }
      }
    }
  });
  return textContent;
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const currentTarget = detail.originalEvent.currentTarget;
  const event = new CustomEvent(name, { bubbles: true, cancelable: true, detail });
  if (handler) currentTarget.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(currentTarget, event);
  } else {
    currentTarget.dispatchEvent(event);
  }
}
var isDeltaInDirection = (delta, direction, threshold = 0) => {
  const deltaX = Math.abs(delta.x);
  const deltaY = Math.abs(delta.y);
  const isDeltaX = deltaX > deltaY;
  if (direction === "left" || direction === "right") {
    return isDeltaX && deltaX > threshold;
  } else {
    return !isDeltaX && deltaY > threshold;
  }
};
function useNextFrame(callback = () => {
}) {
  const fn = useCallbackRef(callback);
  useLayoutEffect2(() => {
    let raf1 = 0;
    let raf2 = 0;
    raf1 = window.requestAnimationFrame(() => raf2 = window.requestAnimationFrame(fn));
    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [fn]);
}
function isHTMLElement(node) {
  return node.nodeType === node.ELEMENT_NODE;
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement) return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
var Provider$1 = ToastProvider$1;
var Viewport = ToastViewport$1;
var Root2 = Toast$1;
var Title = ToastTitle$1;
var Description = ToastDescription$1;
var Action = ToastAction$1;
var Close = ToastClose$1;
const falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let _a = param, { class: cvClass, className: cvClassName } = _a, compoundVariantOptions = __objRest(_a, ["class", "className"]);
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes(__spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key]) : __spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = Provider$1;
const ToastViewport = reactExports.forwardRef((_b, ref) => {
  var _c = _b, { className } = _c, props = __objRest(_c, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Viewport,
    __spreadValues({
      ref,
      className: cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )
    }, props)
  );
});
ToastViewport.displayName = Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = reactExports.forwardRef((_d, ref) => {
  var _e = _d, { className, variant } = _e, props = __objRest(_e, ["className", "variant"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, __spreadValues({ ref, className: cn(toastVariants({ variant }), className) }, props));
});
Toast.displayName = Root2.displayName;
const ToastAction = reactExports.forwardRef((_f, ref) => {
  var _g = _f, { className } = _g, props = __objRest(_g, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Action,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
        className
      )
    }, props)
  );
});
ToastAction.displayName = Action.displayName;
const ToastClose = reactExports.forwardRef((_h, ref) => {
  var _i = _h, { className } = _i, props = __objRest(_i, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Close,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      ),
      "toast-close": ""
    }, props), {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
    })
  );
});
ToastClose.displayName = Close.displayName;
const ToastTitle = reactExports.forwardRef((_j, ref) => {
  var _k = _j, { className } = _k, props = __objRest(_k, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, __spreadValues({ ref, className: cn("text-sm font-semibold", className) }, props));
});
ToastTitle.displayName = Title.displayName;
const ToastDescription = reactExports.forwardRef((_l, ref) => {
  var _m = _l, { className } = _m, props = __objRest(_m, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, __spreadValues({ ref, className: cn("text-sm opacity-90", className) }, props));
});
ToastDescription.displayName = Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToastProvider, { children: [
    toasts.map(function(_a) {
      var _b = _a, { id, title, description, action } = _b, props = __objRest(_b, ["id", "title", "description", "action"]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Toast, __spreadProps(__spreadValues({}, props), { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxRuntimeExports.jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ToastClose, {})
      ] }), id);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToastViewport, {})
  ] });
}
var P = ["light", "dark"], E = "(prefers-color-scheme: dark)", L = reactExports.createContext(void 0), D = { setTheme: (e) => {
}, themes: [] }, j = () => {
  var e;
  return (e = reactExports.useContext(L)) != null ? e : D;
};
reactExports.memo(({ forcedTheme: e, storageKey: a, attribute: n, enableSystem: g, enableColorScheme: m, defaultTheme: c, value: o, attrs: y, nonce: h }) => {
  let k = c === "system", w = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${y.map((u) => `'${u}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, i = m ? (P.includes(c) ? c : null) ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", d = (l, u = false, R = true) => {
    let f = o ? o[l] : l, p = u ? l + "|| ''" : `'${f}'`, $ = "";
    return m && R && !u && P.includes(l) && ($ += `d.style.colorScheme = '${l}';`), n === "class" ? u || f ? $ += `c.add(${p})` : $ += "null" : f && ($ += `d[s](n,${p})`), $;
  }, S = e ? `!function(){${w}${d(e)}}()` : g ? `!function(){try{${w}var e=localStorage.getItem('${a}');if('system'===e||(!e&&${k})){var t='${E}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${d(o ? "x[e]" : "e", true)}}${k ? "" : "else{" + d(c, false, false) + "}"}${i}}catch(e){}}()` : `!function(){try{${w}var e=localStorage.getItem('${a}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${d(o ? "x[e]" : "e", true)}}else{${d(c, false, false)};}${i}}catch(t){}}();`;
  return reactExports.createElement("script", { nonce: h, dangerouslySetInnerHTML: { __html: S } });
});
var jt = (n) => {
  switch (n) {
    case "success":
      return ee;
    case "info":
      return ae;
    case "warning":
      return oe;
    case "error":
      return se;
    default:
      return null;
  }
}, te = Array(12).fill(0), Yt = ({ visible: n, className: e }) => React.createElement("div", { className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "), "data-visible": n }, React.createElement("div", { className: "sonner-spinner" }, te.map((t, a) => React.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${a}` })))), ee = React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, React.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), oe = React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, React.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), ae = React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, React.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), se = React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, React.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Ot = React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }));
var Ft = () => {
  let [n, e] = React.useState(document.hidden);
  return React.useEffect(() => {
    let t = () => {
      e(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), n;
};
var bt = 1, yt = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    });
    this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    };
    this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    };
    this.create = (e) => {
      var S;
      let _a = e, { message: t } = _a, a = __objRest(_a, ["message"]), u = typeof (e == null ? void 0 : e.id) == "number" || ((S = e.id) == null ? void 0 : S.length) > 0 ? e.id : bt++, f = this.toasts.find((g) => g.id === u), w = e.dismissible === void 0 ? true : e.dismissible;
      return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), f ? this.toasts = this.toasts.map((g) => g.id === u ? (this.publish(__spreadProps(__spreadValues(__spreadValues({}, g), e), { id: u, title: t })), __spreadProps(__spreadValues(__spreadValues({}, g), e), { id: u, dismissible: w, title: t })) : g) : this.addToast(__spreadProps(__spreadValues({ title: t }, a), { dismissible: w, id: u })), u;
    };
    this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((a) => a({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: true })), e);
    this.message = (e, t) => this.create(__spreadProps(__spreadValues({}, t), { message: e }));
    this.error = (e, t) => this.create(__spreadProps(__spreadValues({}, t), { message: e, type: "error" }));
    this.success = (e, t) => this.create(__spreadProps(__spreadValues({}, t), { type: "success", message: e }));
    this.info = (e, t) => this.create(__spreadProps(__spreadValues({}, t), { type: "info", message: e }));
    this.warning = (e, t) => this.create(__spreadProps(__spreadValues({}, t), { type: "warning", message: e }));
    this.loading = (e, t) => this.create(__spreadProps(__spreadValues({}, t), { type: "loading", message: e }));
    this.promise = (e, t) => {
      if (!t) return;
      let a;
      t.loading !== void 0 && (a = this.create(__spreadProps(__spreadValues({}, t), { promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 })));
      let u = e instanceof Promise ? e : e(), f = a !== void 0, w, S = u.then((i) => __async(this, null, function* () {
        if (w = ["resolve", i], React.isValidElement(i)) f = false, this.create({ id: a, type: "default", message: i });
        else if (ie(i) && !i.ok) {
          f = false;
          let T = typeof t.error == "function" ? yield t.error(`HTTP error! status: ${i.status}`) : t.error, F = typeof t.description == "function" ? yield t.description(`HTTP error! status: ${i.status}`) : t.description;
          this.create({ id: a, type: "error", message: T, description: F });
        } else if (t.success !== void 0) {
          f = false;
          let T = typeof t.success == "function" ? yield t.success(i) : t.success, F = typeof t.description == "function" ? yield t.description(i) : t.description;
          this.create({ id: a, type: "success", message: T, description: F });
        }
      })).catch((i) => __async(this, null, function* () {
        if (w = ["reject", i], t.error !== void 0) {
          f = false;
          let D2 = typeof t.error == "function" ? yield t.error(i) : t.error, T = typeof t.description == "function" ? yield t.description(i) : t.description;
          this.create({ id: a, type: "error", message: D2, description: T });
        }
      })).finally(() => {
        var i;
        f && (this.dismiss(a), a = void 0), (i = t.finally) == null || i.call(t);
      }), g = () => new Promise((i, D2) => S.then(() => w[0] === "reject" ? D2(w[1]) : i(w[1])).catch(D2));
      return typeof a != "string" && typeof a != "number" ? { unwrap: g } : Object.assign(a, { unwrap: g });
    };
    this.custom = (e, t) => {
      let a = (t == null ? void 0 : t.id) || bt++;
      return this.create(__spreadValues({ jsx: e(a), id: a }, t)), a;
    };
    this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id));
    this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, v = new yt(), ne = (n, e) => {
  let t = (e == null ? void 0 : e.id) || bt++;
  return v.addToast(__spreadProps(__spreadValues({ title: n }, e), { id: t })), t;
}, ie = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", le = ne, ce = () => v.toasts, de = () => v.getActiveToasts();
Object.assign(le, { success: v.success, info: v.info, warning: v.warning, error: v.error, custom: v.custom, message: v.message, promise: v.promise, dismiss: v.dismiss, loading: v.loading }, { getHistory: ce, getToasts: de });
function wt(n, { insertAt: e } = {}) {
  if (typeof document == "undefined") return;
  let t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.type = "text/css", e === "top" && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(document.createTextNode(n));
}
wt(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function tt(n) {
  return n.label !== void 0;
}
var pe = 3, me = "32px", ge = "16px", Wt = 4e3, he = 356, be = 14, ye = 20, we = 200;
function M(...n) {
  return n.filter(Boolean).join(" ");
}
function xe(n) {
  let [e, t] = n.split("-"), a = [];
  return e && a.push(e), t && a.push(t), a;
}
var ve = (n) => {
  var Dt, Pt, Nt, Bt, Ct, kt, It, Mt, Ht, At, Lt;
  let { invert: e, toast: t, unstyled: a, interacting: u, setHeights: f, visibleToasts: w, heights: S, index: g, toasts: i, expanded: D2, removeToast: T, defaultRichColors: F, closeButton: et, style: ut, cancelButtonStyle: ft, actionButtonStyle: l, className: ot = "", descriptionClassName: at = "", duration: X2, position: st, gap: pt, loadingIcon: rt, expandByDefault: B, classNames: s, icons: P2, closeButtonAriaLabel: nt = "Close toast", pauseWhenPageIsHidden: it } = n, [Y, C] = React.useState(null), [lt, J] = React.useState(null), [W, H] = React.useState(false), [A, mt] = React.useState(false), [L2, z] = React.useState(false), [ct, d] = React.useState(false), [h, y] = React.useState(false), [R, j2] = React.useState(0), [p, _] = React.useState(0), O = React.useRef(t.duration || X2 || Wt), G = React.useRef(null), k = React.useRef(null), Vt = g === 0, Ut = g + 1 <= w, N = t.type, V = t.dismissible !== false, Kt = t.className || "", Xt = t.descriptionClassName || "", dt = React.useMemo(() => S.findIndex((r) => r.toastId === t.id) || 0, [S, t.id]), Jt = React.useMemo(() => {
    var r;
    return (r = t.closeButton) != null ? r : et;
  }, [t.closeButton, et]), Tt = React.useMemo(() => t.duration || X2 || Wt, [t.duration, X2]), gt = React.useRef(0), U = React.useRef(0), St = React.useRef(0), K = React.useRef(null), [Gt, Qt] = st.split("-"), Rt = React.useMemo(() => S.reduce((r, m, c) => c >= dt ? r : r + m.height, 0), [S, dt]), Et = Ft(), qt = t.invert || e, ht = N === "loading";
  U.current = React.useMemo(() => dt * pt + Rt, [dt, Rt]), React.useEffect(() => {
    O.current = Tt;
  }, [Tt]), React.useEffect(() => {
    H(true);
  }, []), React.useEffect(() => {
    let r = k.current;
    if (r) {
      let m = r.getBoundingClientRect().height;
      return _(m), f((c) => [{ toastId: t.id, height: m, position: t.position }, ...c]), () => f((c) => c.filter((b) => b.toastId !== t.id));
    }
  }, [f, t.id]), React.useLayoutEffect(() => {
    if (!W) return;
    let r = k.current, m = r.style.height;
    r.style.height = "auto";
    let c = r.getBoundingClientRect().height;
    r.style.height = m, _(c), f((b) => b.find((x) => x.toastId === t.id) ? b.map((x) => x.toastId === t.id ? __spreadProps(__spreadValues({}, x), { height: c }) : x) : [{ toastId: t.id, height: c, position: t.position }, ...b]);
  }, [W, t.title, t.description, f, t.id]);
  let $ = React.useCallback(() => {
    mt(true), j2(U.current), f((r) => r.filter((m) => m.toastId !== t.id)), setTimeout(() => {
      T(t);
    }, we);
  }, [t, T, f, U]);
  React.useEffect(() => {
    if (t.promise && N === "loading" || t.duration === 1 / 0 || t.type === "loading") return;
    let r;
    return D2 || u || it && Et ? (() => {
      if (St.current < gt.current) {
        let b = (/* @__PURE__ */ new Date()).getTime() - gt.current;
        O.current = O.current - b;
      }
      St.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      O.current !== 1 / 0 && (gt.current = (/* @__PURE__ */ new Date()).getTime(), r = setTimeout(() => {
        var b;
        (b = t.onAutoClose) == null || b.call(t, t), $();
      }, O.current));
    })(), () => clearTimeout(r);
  }, [D2, u, t, N, it, Et, $]), React.useEffect(() => {
    t.delete && $();
  }, [$, t.delete]);
  function Zt() {
    var r, m, c;
    return P2 != null && P2.loading ? React.createElement("div", { className: M(s == null ? void 0 : s.loader, (r = t == null ? void 0 : t.classNames) == null ? void 0 : r.loader, "sonner-loader"), "data-visible": N === "loading" }, P2.loading) : rt ? React.createElement("div", { className: M(s == null ? void 0 : s.loader, (m = t == null ? void 0 : t.classNames) == null ? void 0 : m.loader, "sonner-loader"), "data-visible": N === "loading" }, rt) : React.createElement(Yt, { className: M(s == null ? void 0 : s.loader, (c = t == null ? void 0 : t.classNames) == null ? void 0 : c.loader), visible: N === "loading" });
  }
  return React.createElement("li", { tabIndex: 0, ref: k, className: M(ot, Kt, s == null ? void 0 : s.toast, (Dt = t == null ? void 0 : t.classNames) == null ? void 0 : Dt.toast, s == null ? void 0 : s.default, s == null ? void 0 : s[N], (Pt = t == null ? void 0 : t.classNames) == null ? void 0 : Pt[N]), "data-sonner-toast": "", "data-rich-colors": (Nt = t.richColors) != null ? Nt : F, "data-styled": !(t.jsx || t.unstyled || a), "data-mounted": W, "data-promise": !!t.promise, "data-swiped": h, "data-removed": A, "data-visible": Ut, "data-y-position": Gt, "data-x-position": Qt, "data-index": g, "data-front": Vt, "data-swiping": L2, "data-dismissible": V, "data-type": N, "data-invert": qt, "data-swipe-out": ct, "data-swipe-direction": lt, "data-expanded": !!(D2 || B && W), style: __spreadValues(__spreadValues({ "--index": g, "--toasts-before": g, "--z-index": i.length - g, "--offset": `${A ? R : U.current}px`, "--initial-height": B ? "auto" : `${p}px` }, ut), t.style), onDragEnd: () => {
    z(false), C(null), K.current = null;
  }, onPointerDown: (r) => {
    ht || !V || (G.current = /* @__PURE__ */ new Date(), j2(U.current), r.target.setPointerCapture(r.pointerId), r.target.tagName !== "BUTTON" && (z(true), K.current = { x: r.clientX, y: r.clientY }));
  }, onPointerUp: () => {
    var x, Q, q, Z;
    if (ct || !V) return;
    K.current = null;
    let r = Number(((x = k.current) == null ? void 0 : x.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), m = Number(((Q = k.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), c = (/* @__PURE__ */ new Date()).getTime() - ((q = G.current) == null ? void 0 : q.getTime()), b = Y === "x" ? r : m, I = Math.abs(b) / c;
    if (Math.abs(b) >= ye || I > 0.11) {
      j2(U.current), (Z = t.onDismiss) == null || Z.call(t, t), J(Y === "x" ? r > 0 ? "right" : "left" : m > 0 ? "down" : "up"), $(), d(true), y(false);
      return;
    }
    z(false), C(null);
  }, onPointerMove: (r) => {
    var Q, q, Z, zt;
    if (!K.current || !V || ((Q = window.getSelection()) == null ? void 0 : Q.toString().length) > 0) return;
    let c = r.clientY - K.current.y, b = r.clientX - K.current.x, I = (q = n.swipeDirections) != null ? q : xe(st);
    !Y && (Math.abs(b) > 1 || Math.abs(c) > 1) && C(Math.abs(b) > Math.abs(c) ? "x" : "y");
    let x = { x: 0, y: 0 };
    Y === "y" ? (I.includes("top") || I.includes("bottom")) && (I.includes("top") && c < 0 || I.includes("bottom") && c > 0) && (x.y = c) : Y === "x" && (I.includes("left") || I.includes("right")) && (I.includes("left") && b < 0 || I.includes("right") && b > 0) && (x.x = b), (Math.abs(x.x) > 0 || Math.abs(x.y) > 0) && y(true), (Z = k.current) == null || Z.style.setProperty("--swipe-amount-x", `${x.x}px`), (zt = k.current) == null || zt.style.setProperty("--swipe-amount-y", `${x.y}px`);
  } }, Jt && !t.jsx ? React.createElement("button", { "aria-label": nt, "data-disabled": ht, "data-close-button": true, onClick: ht || !V ? () => {
  } : () => {
    var r;
    $(), (r = t.onDismiss) == null || r.call(t, t);
  }, className: M(s == null ? void 0 : s.closeButton, (Bt = t == null ? void 0 : t.classNames) == null ? void 0 : Bt.closeButton) }, (Ct = P2 == null ? void 0 : P2.close) != null ? Ct : Ot) : null, t.jsx || reactExports.isValidElement(t.title) ? t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title : React.createElement(React.Fragment, null, N || t.icon || t.promise ? React.createElement("div", { "data-icon": "", className: M(s == null ? void 0 : s.icon, (kt = t == null ? void 0 : t.classNames) == null ? void 0 : kt.icon) }, t.promise || t.type === "loading" && !t.icon ? t.icon || Zt() : null, t.type !== "loading" ? t.icon || (P2 == null ? void 0 : P2[N]) || jt(N) : null) : null, React.createElement("div", { "data-content": "", className: M(s == null ? void 0 : s.content, (It = t == null ? void 0 : t.classNames) == null ? void 0 : It.content) }, React.createElement("div", { "data-title": "", className: M(s == null ? void 0 : s.title, (Mt = t == null ? void 0 : t.classNames) == null ? void 0 : Mt.title) }, typeof t.title == "function" ? t.title() : t.title), t.description ? React.createElement("div", { "data-description": "", className: M(at, Xt, s == null ? void 0 : s.description, (Ht = t == null ? void 0 : t.classNames) == null ? void 0 : Ht.description) }, typeof t.description == "function" ? t.description() : t.description) : null), reactExports.isValidElement(t.cancel) ? t.cancel : t.cancel && tt(t.cancel) ? React.createElement("button", { "data-button": true, "data-cancel": true, style: t.cancelButtonStyle || ft, onClick: (r) => {
    var m, c;
    tt(t.cancel) && V && ((c = (m = t.cancel).onClick) == null || c.call(m, r), $());
  }, className: M(s == null ? void 0 : s.cancelButton, (At = t == null ? void 0 : t.classNames) == null ? void 0 : At.cancelButton) }, t.cancel.label) : null, reactExports.isValidElement(t.action) ? t.action : t.action && tt(t.action) ? React.createElement("button", { "data-button": true, "data-action": true, style: t.actionButtonStyle || l, onClick: (r) => {
    var m, c;
    tt(t.action) && ((c = (m = t.action).onClick) == null || c.call(m, r), !r.defaultPrevented && $());
  }, className: M(s == null ? void 0 : s.actionButton, (Lt = t == null ? void 0 : t.classNames) == null ? void 0 : Lt.actionButton) }, t.action.label) : null));
};
function _t() {
  if (typeof window == "undefined" || typeof document == "undefined") return "ltr";
  let n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
function Te(n, e) {
  let t = {};
  return [n, e].forEach((a, u) => {
    let f = u === 1, w = f ? "--mobile-offset" : "--offset", S = f ? ge : me;
    function g(i) {
      ["top", "right", "bottom", "left"].forEach((D2) => {
        t[`${w}-${D2}`] = typeof i == "number" ? `${i}px` : i;
      });
    }
    typeof a == "number" || typeof a == "string" ? g(a) : typeof a == "object" ? ["top", "right", "bottom", "left"].forEach((i) => {
      a[i] === void 0 ? t[`${w}-${i}`] = S : t[`${w}-${i}`] = typeof a[i] == "number" ? `${a[i]}px` : a[i];
    }) : g(S);
  }), t;
}
var $e = reactExports.forwardRef(function(e, t) {
  let { invert: a, position: u = "bottom-right", hotkey: f = ["altKey", "KeyT"], expand: w, closeButton: S, className: g, offset: i, mobileOffset: D2, theme: T = "light", richColors: F, duration: et, style: ut, visibleToasts: ft = pe, toastOptions: l, dir: ot = _t(), gap: at = be, loadingIcon: X2, icons: st, containerAriaLabel: pt = "Notifications", pauseWhenPageIsHidden: rt } = e, [B, s] = React.useState([]), P2 = React.useMemo(() => Array.from(new Set([u].concat(B.filter((d) => d.position).map((d) => d.position)))), [B, u]), [nt, it] = React.useState([]), [Y, C] = React.useState(false), [lt, J] = React.useState(false), [W, H] = React.useState(T !== "system" ? T : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = React.useRef(null), mt = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L2 = React.useRef(null), z = React.useRef(false), ct = React.useCallback((d) => {
    s((h) => {
      var y;
      return (y = h.find((R) => R.id === d.id)) != null && y.delete || v.dismiss(d.id), h.filter(({ id: R }) => R !== d.id);
    });
  }, []);
  return React.useEffect(() => v.subscribe((d) => {
    if (d.dismiss) {
      s((h) => h.map((y) => y.id === d.id ? __spreadProps(__spreadValues({}, y), { delete: true }) : y));
      return;
    }
    setTimeout(() => {
      ReactDOM.flushSync(() => {
        s((h) => {
          let y = h.findIndex((R) => R.id === d.id);
          return y !== -1 ? [...h.slice(0, y), __spreadValues(__spreadValues({}, h[y]), d), ...h.slice(y + 1)] : [d, ...h];
        });
      });
    });
  }), []), React.useEffect(() => {
    if (T !== "system") {
      H(T);
      return;
    }
    if (T === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window == "undefined") return;
    let d = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      d.addEventListener("change", ({ matches: h }) => {
        H(h ? "dark" : "light");
      });
    } catch (h) {
      d.addListener(({ matches: y }) => {
        try {
          H(y ? "dark" : "light");
        } catch (R) {
          console.error(R);
        }
      });
    }
  }, [T]), React.useEffect(() => {
    B.length <= 1 && C(false);
  }, [B]), React.useEffect(() => {
    let d = (h) => {
      var R, j2;
      f.every((p) => h[p] || h.code === p) && (C(true), (R = A.current) == null || R.focus()), h.code === "Escape" && (document.activeElement === A.current || (j2 = A.current) != null && j2.contains(document.activeElement)) && C(false);
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [f]), React.useEffect(() => {
    if (A.current) return () => {
      L2.current && (L2.current.focus({ preventScroll: true }), L2.current = null, z.current = false);
    };
  }, [A.current]), React.createElement("section", { ref: t, "aria-label": `${pt} ${mt}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true }, P2.map((d, h) => {
    var j2;
    let [y, R] = d.split("-");
    return B.length ? React.createElement("ol", { key: d, dir: ot === "auto" ? _t() : ot, tabIndex: -1, ref: A, className: g, "data-sonner-toaster": true, "data-theme": W, "data-y-position": y, "data-lifted": Y && B.length > 1 && !w, "data-x-position": R, style: __spreadValues(__spreadValues({ "--front-toast-height": `${((j2 = nt[0]) == null ? void 0 : j2.height) || 0}px`, "--width": `${he}px`, "--gap": `${at}px` }, ut), Te(i, D2)), onBlur: (p) => {
      z.current && !p.currentTarget.contains(p.relatedTarget) && (z.current = false, L2.current && (L2.current.focus({ preventScroll: true }), L2.current = null));
    }, onFocus: (p) => {
      p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || z.current || (z.current = true, L2.current = p.relatedTarget);
    }, onMouseEnter: () => C(true), onMouseMove: () => C(true), onMouseLeave: () => {
      lt || C(false);
    }, onDragEnd: () => C(false), onPointerDown: (p) => {
      p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || J(true);
    }, onPointerUp: () => J(false) }, B.filter((p) => !p.position && h === 0 || p.position === d).map((p, _) => {
      var O, G;
      return React.createElement(ve, { key: p.id, icons: st, index: _, toast: p, defaultRichColors: F, duration: (O = l == null ? void 0 : l.duration) != null ? O : et, className: l == null ? void 0 : l.className, descriptionClassName: l == null ? void 0 : l.descriptionClassName, invert: a, visibleToasts: ft, closeButton: (G = l == null ? void 0 : l.closeButton) != null ? G : S, interacting: lt, position: d, style: l == null ? void 0 : l.style, unstyled: l == null ? void 0 : l.unstyled, classNames: l == null ? void 0 : l.classNames, cancelButtonStyle: l == null ? void 0 : l.cancelButtonStyle, actionButtonStyle: l == null ? void 0 : l.actionButtonStyle, removeToast: ct, toasts: B.filter((k) => k.position == p.position), heights: nt.filter((k) => k.position == p.position), setHeights: it, expandByDefault: w, gap: at, loadingIcon: X2, expanded: Y, pauseWhenPageIsHidden: rt, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
const Toaster = (_n) => {
  var props = __objRest(_n, []);
  const { theme = "system" } = j();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    $e,
    __spreadValues({
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      }
    }, props)
  );
};
var [createTooltipContext] = createContextScope("Tooltip", [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider$1 = (props) => {
  const {
    __scopeTooltip,
    delayDuration = DEFAULT_DELAY_DURATION,
    skipDelayDuration = 300,
    disableHoverableContent = false,
    children
  } = props;
  const isOpenDelayedRef = reactExports.useRef(true);
  const isPointerInTransitRef = reactExports.useRef(false);
  const skipDelayTimerRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TooltipProviderContextProvider,
    {
      scope: __scopeTooltip,
      isOpenDelayedRef,
      delayDuration,
      onOpen: reactExports.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        isOpenDelayedRef.current = false;
      }, []),
      onClose: reactExports.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => isOpenDelayedRef.current = true,
          skipDelayDuration
        );
      }, [skipDelayDuration]),
      isPointerInTransitRef,
      onPointerInTransitChange: reactExports.useCallback((inTransit) => {
        isPointerInTransitRef.current = inTransit;
      }, []),
      disableHoverableContent,
      children
    }
  );
};
TooltipProvider$1.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var TRIGGER_NAME = "TooltipTrigger";
var TooltipTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeTooltip } = _a, triggerProps = __objRest(_a, ["__scopeTooltip"]);
    const context = useTooltipContext(TRIGGER_NAME, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = reactExports.useRef(false);
    const hasPointerMoveOpenedRef = reactExports.useRef(false);
    const handlePointerUp = reactExports.useCallback(() => isPointerDownRef.current = false, []);
    reactExports.useEffect(() => {
      return () => document.removeEventListener("pointerup", handlePointerUp);
    }, [handlePointerUp]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, __spreadProps(__spreadValues({ asChild: true }, popperScope), { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      __spreadProps(__spreadValues({
        "aria-describedby": context.open ? context.contentId : void 0,
        "data-state": context.stateAttribute
      }, triggerProps), {
        ref: composedRefs,
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          if (event.pointerType === "touch") return;
          if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
            context.onTriggerEnter();
            hasPointerMoveOpenedRef.current = true;
          }
        }),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
          context.onTriggerLeave();
          hasPointerMoveOpenedRef.current = false;
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, () => {
          if (context.open) {
            context.onClose();
          }
          isPointerDownRef.current = true;
          document.addEventListener("pointerup", handlePointerUp, { once: true });
        }),
        onFocus: composeEventHandlers(props.onFocus, () => {
          if (!isPointerDownRef.current) context.onOpen();
        }),
        onBlur: composeEventHandlers(props.onBlur, context.onClose),
        onClick: composeEventHandlers(props.onClick, context.onClose)
      })
    ) }));
  }
);
TooltipTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal";
var [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, {
  forceMount: void 0
});
var CONTENT_NAME = "TooltipContent";
var TooltipContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeTooltip);
    const _a = props, { forceMount = portalContext.forceMount, side = "top" } = _a, contentProps = __objRest(_a, ["forceMount", "side"]);
    const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.disableHoverableContent ? /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContentImpl, __spreadProps(__spreadValues({ side }, contentProps), { ref: forwardedRef })) : /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContentHoverable, __spreadProps(__spreadValues({ side }, contentProps), { ref: forwardedRef })) });
  }
);
var TooltipContentHoverable = reactExports.forwardRef((props, forwardedRef) => {
  const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
  const providerContext = useTooltipProviderContext(CONTENT_NAME, props.__scopeTooltip);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = reactExports.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = reactExports.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [onPointerInTransitChange]);
  const handleCreateGraceArea = reactExports.useCallback(
    (event, hoverTarget) => {
      const currentTarget = event.currentTarget;
      const exitPoint = { x: event.clientX, y: event.clientY };
      const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
      const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
      const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
      const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
      setPointerGraceArea(graceArea);
      onPointerInTransitChange(true);
    },
    [onPointerInTransitChange]
  );
  reactExports.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [handleRemoveGraceArea]);
  reactExports.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
  reactExports.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = { x: event.clientX, y: event.clientY };
        const hasEnteredTarget = (trigger == null ? void 0 : trigger.contains(target)) || (content == null ? void 0 : content.contains(target));
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) {
          handleRemoveGraceArea();
        } else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContentImpl, __spreadProps(__spreadValues({}, props), { ref: composedRefs }));
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: false });
var Slottable = createSlottable("TooltipContent");
var TooltipContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, {
      __scopeTooltip,
      children,
      "aria-label": ariaLabel,
      onEscapeKeyDown,
      onPointerDownOutside
    } = _a, contentProps = __objRest(_a, [
      "__scopeTooltip",
      "children",
      "aria-label",
      "onEscapeKeyDown",
      "onPointerDownOutside"
    ]);
    const context = useTooltipContext(CONTENT_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const { onClose } = context;
    reactExports.useEffect(() => {
      document.addEventListener(TOOLTIP_OPEN, onClose);
      return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
    }, [onClose]);
    reactExports.useEffect(() => {
      if (context.trigger) {
        const handleScroll = (event) => {
          const target = event.target;
          if (target == null ? void 0 : target.contains(context.trigger)) onClose();
        };
        window.addEventListener("scroll", handleScroll, { capture: true });
        return () => window.removeEventListener("scroll", handleScroll, { capture: true });
      }
    }, [context.trigger, onClose]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DismissableLayer,
      {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event) => event.preventDefault(),
        onDismiss: onClose,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content,
          __spreadProps(__spreadValues(__spreadValues({
            "data-state": context.stateAttribute
          }, popperScope), contentProps), {
            ref: forwardedRef,
            style: __spreadValues(__spreadValues({}, contentProps.style), {
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(VisuallyHiddenContentContextProvider, { scope: __scopeTooltip, isInside: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Root$1, { id: context.contentId, role: "tooltip", children: ariaLabel || children }) })
            ]
          })
        )
      }
    );
  }
);
TooltipContent$1.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow";
var TooltipArrow = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeTooltip } = _a, arrowProps = __objRest(_a, ["__scopeTooltip"]);
    const popperScope = usePopperScope(__scopeTooltip);
    const visuallyHiddenContentContext = useVisuallyHiddenContentContext(
      ARROW_NAME,
      __scopeTooltip
    );
    return visuallyHiddenContentContext.isInside ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, __spreadProps(__spreadValues(__spreadValues({}, popperScope), arrowProps), { ref: forwardedRef }));
  }
);
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "bottom":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      );
      break;
    case "left":
      paddedExitPoints.push(
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "right":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      );
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j2 = polygon.length - 1; i < polygon.length; j2 = i++) {
    const ii = polygon[i];
    const jj = polygon[j2];
    const xi = ii.x;
    const yi = ii.y;
    const xj = jj.x;
    const yj = jj.y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
}
var Provider = TooltipProvider$1;
var Content2 = TooltipContent$1;
const TooltipProvider = Provider;
const TooltipContent = reactExports.forwardRef((_o, ref) => {
  var _p = _o, { className, sideOffset = 4 } = _p, props = __objRest(_p, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
TooltipContent.displayName = Content2.displayName;
const VariantContextInternal = reactExports.createContext(void 0);
const STORAGE_KEY = "novaqy_variant";
const VariantProvider = ({ children }) => {
  const [variant, setVariant] = reactExports.useState("customer");
  reactExports.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "business" || stored === "customer") setVariant(stored);
  }, []);
  const setVariantPersist = reactExports.useCallback((v2) => {
    setVariant(v2);
    localStorage.setItem(STORAGE_KEY, v2);
  }, []);
  const toggle = reactExports.useCallback(() => setVariantPersist(variant === "customer" ? "business" : "customer"), [variant, setVariantPersist]);
  const value = reactExports.useMemo(() => ({ variant, setVariant: setVariantPersist, toggle }), [variant, setVariantPersist, toggle]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(VariantContextInternal.Provider, { value, children });
};
function createNoopSupabase() {
  const noop = (..._args) => __async(null, null, function* () {
    return { data: null, error: null };
  });
  const client2 = {
    auth: {
      getUser: () => __async(null, null, function* () {
        return { data: { user: null }, error: null };
      }),
      onAuthStateChange: (_cb) => ({ data: { subscription: { unsubscribe: () => {
      } } } }),
      signInWithPassword: noop,
      signUp: noop,
      signOut: noop,
      signInWithOAuth: noop
    },
    from: () => ({ insert: noop, update: noop, eq: noop, select: noop })
  };
  return client2;
}
let supabase;
{
  console.warn("Supabase environment variables are missing. Auth and database features are disabled.");
  supabase = createNoopSupabase();
}
function useAdminAllowlist() {
  return reactExports.useMemo(() => {
    return /* @__PURE__ */ new Set();
  }, []);
}
function ProtectedRoute({ children, requireAdmin = false }) {
  const location = useLocation();
  const adminAllowlist = useAdminAllowlist();
  const [checking, setChecking] = reactExports.useState(true);
  const [isAuthed, setIsAuthed] = reactExports.useState(false);
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let mounted = true;
    function checkAuth() {
      return __async(this, null, function* () {
        var _a;
        try {
          const { data, error } = yield supabase.auth.getUser();
          if (error) {
            if (mounted) {
              setIsAuthed(false);
              setIsAdmin(false);
            }
            return;
          }
          const user = (_a = data == null ? void 0 : data.user) != null ? _a : null;
          const authed = Boolean(user);
          let admin = false;
          if (user) {
            const email = (user.email || "").toLowerCase();
            if (adminAllowlist.has(email)) {
              admin = true;
            }
            const meta = user.app_metadata;
            const role = typeof (meta == null ? void 0 : meta.role) === "string" ? meta.role : void 0;
            if (role && role.toLowerCase() === "admin") {
              admin = true;
            }
          }
          if (mounted) {
            setIsAuthed(authed);
            setIsAdmin(admin);
          }
        } finally {
          if (mounted) setChecking(false);
        }
      });
    }
    checkAuth();
    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      setChecking(true);
      checkAuth();
    });
    return () => {
      var _a;
      mounted = false;
      (_a = sub.subscription) == null ? void 0 : _a.unsubscribe();
    };
  }, [adminAllowlist]);
  if (checking) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Checking authentication…" }) });
  }
  if (!isAuthed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login", replace: true, state: { from: location } });
  }
  if (requireAdmin && !isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/", replace: true });
  }
  return children;
}
class ActivityTrackingService {
  constructor() {
    __publicField(this, "sessionId");
    __publicField(this, "deviceFingerprint");
    __publicField(this, "initialized", false);
    this.sessionId = this.generateSessionId();
    this.deviceFingerprint = this.generateDeviceFingerprint();
    this.waitForDOMAndInitialize();
  }
  waitForDOMAndInitialize() {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        this.initializeTracking();
      });
    } else {
      this.initializeTracking();
    }
  }
  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  generateDeviceFingerprint() {
    if (typeof window === "undefined" || typeof document === "undefined" || typeof navigator === "undefined" || typeof screen === "undefined") {
      return `server_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx == null ? void 0 : ctx.fillText("fingerprint", 10, 10);
      const fingerprint = [
        navigator.userAgent,
        navigator.language,
        screen.width + "x" + screen.height,
        (/* @__PURE__ */ new Date()).getTimezoneOffset(),
        !!window.sessionStorage,
        !!window.localStorage,
        !!window.indexedDB,
        canvas.toDataURL()
      ].join("|");
      return btoa(fingerprint).substr(0, 50);
    } catch (error) {
      return `fallback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  }
  initializeTracking() {
    return __async(this, null, function* () {
      if (this.initialized) return;
      this.initialized = true;
      if (typeof window === "undefined" || typeof document === "undefined") {
        return;
      }
      try {
        yield this.trackActivity("page_load", {
          page_title: document.title,
          load_time: performance.now()
        });
        yield this.createSession();
        this.setupEventListeners();
      } catch (error) {
        console.error("Failed to initialize activity tracking:", error);
      }
    });
  }
  setupEventListeners() {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    try {
      document.addEventListener("visibilitychange", () => {
        this.trackActivity("page_visibility_change", {
          hidden: document.hidden,
          visibility_state: document.visibilityState
        });
      });
      window.addEventListener("beforeunload", () => {
        this.trackActivity("page_unload", {
          time_spent: performance.now()
        });
      });
      document.addEventListener("click", (event) => {
        var _a;
        const target = event.target;
        if (target) {
          const elementInfo = {
            tag_name: target.tagName,
            element_id: target.id,
            element_class: target.className,
            text_content: (_a = target.textContent) == null ? void 0 : _a.substr(0, 100),
            href: target.getAttribute("href"),
            data_attributes: this.getDataAttributes(target)
          };
          this.trackActivity("element_click", elementInfo);
        }
      });
      document.addEventListener("submit", (event) => {
        const form = event.target;
        if (form) {
          const formData = new FormData(form);
          const formInfo = {
            form_id: form.id,
            form_action: form.action,
            form_method: form.method,
            fields: Array.from(formData.keys())
          };
          this.trackActivity("form_submit", formInfo);
        }
      });
      this.trackPaymentActivities();
    } catch (error) {
      console.error("Failed to setup event listeners:", error);
    }
  }
  getDataAttributes(element) {
    const dataAttributes = {};
    for (const attr of element.attributes) {
      if (attr.name.startsWith("data-")) {
        dataAttributes[attr.name] = attr.value;
      }
    }
    return dataAttributes;
  }
  trackPaymentActivities() {
    if (typeof document === "undefined") {
      return;
    }
    try {
      const paymentForms = document.querySelectorAll('form[data-payment="true"]');
      paymentForms.forEach((form) => {
        form.addEventListener("input", (event) => {
          var _a, _b;
          const input = event.target;
          if (input.type === "password" || ((_a = input.name) == null ? void 0 : _a.includes("cvv")) || ((_b = input.name) == null ? void 0 : _b.includes("card"))) {
            return;
          }
          this.trackActivity("payment_form_input", {
            field_name: input.name,
            field_type: input.type,
            form_id: form.id
          });
        });
      });
    } catch (error) {
      console.error("Failed to setup payment activity tracking:", error);
    }
  }
  trackActivity(activityType, activityData, customSessionId) {
    return __async(this, null, function* () {
      try {
        let userId = null;
        if (typeof window !== "undefined") {
          try {
            const { data: { user } } = yield supabase.auth.getUser();
            userId = (user == null ? void 0 : user.id) || null;
          } catch (error2) {
            console.log("No authenticated user, tracking as guest");
          }
        }
        const isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";
        const logData = {
          user_id: userId,
          session_id: customSessionId || this.sessionId,
          activity_type: activityType,
          activity_data: activityData,
          page_url: isBrowser ? window.location.href : void 0,
          referrer_url: isBrowser ? document.referrer : void 0,
          user_agent: isBrowser ? navigator.userAgent : void 0,
          device_info: isBrowser ? {
            screen_resolution: `${screen.width}x${screen.height}`,
            viewport: `${window.innerWidth}x${window.innerHeight}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language: navigator.language,
            platform: navigator.platform,
            cookie_enabled: navigator.cookieEnabled,
            online: navigator.onLine
          } : void 0
        };
        const { error } = yield supabase.from("activity_logs").insert(logData);
        if (error) {
          console.error("Failed to track activity:", error);
        }
      } catch (error) {
        console.error("Activity tracking error:", error);
      }
    });
  }
  createSession() {
    return __async(this, null, function* () {
      try {
        let userId = null;
        if (typeof window !== "undefined") {
          try {
            const { data: { user } } = yield supabase.auth.getUser();
            userId = (user == null ? void 0 : user.id) || null;
          } catch (error2) {
            console.log("No authenticated user, creating guest session");
          }
        }
        const isBrowser = typeof navigator !== "undefined";
        const sessionData = {
          user_id: userId,
          session_token: this.sessionId,
          user_agent: isBrowser ? navigator.userAgent : void 0,
          device_fingerprint: this.deviceFingerprint
        };
        const { error } = yield supabase.from("user_sessions").insert(sessionData);
        if (error) {
          console.error("Failed to create session:", error);
        }
      } catch (error) {
        console.error("Session creation error:", error);
      }
    });
  }
  updateSession(activityCount) {
    return __async(this, null, function* () {
      try {
        const { error } = yield supabase.from("user_sessions").update({
          page_views: activityCount,
          events_count: activityCount
        }).eq("session_token", this.sessionId);
        if (error) {
          console.error("Failed to update session:", error);
        }
      } catch (error) {
        console.error("Session update error:", error);
      }
    });
  }
  endSession() {
    return __async(this, null, function* () {
      try {
        const { error } = yield supabase.from("user_sessions").update({
          end_time: (/* @__PURE__ */ new Date()).toISOString(),
          is_active: false
        }).eq("session_token", this.sessionId);
        if (error) {
          console.error("Failed to end session:", error);
        }
      } catch (error) {
        console.error("Session end error:", error);
      }
    });
  }
  logAuditEvent(auditData) {
    return __async(this, null, function* () {
      try {
        let performedBy = null;
        if (typeof window !== "undefined") {
          try {
            const { data: { user } } = yield supabase.auth.getUser();
            performedBy = (user == null ? void 0 : user.id) || null;
          } catch (error2) {
            console.log("No authenticated user for audit event");
          }
        }
        const isBrowser = typeof navigator !== "undefined";
        const auditLog = __spreadProps(__spreadValues({}, auditData), {
          performed_by: performedBy,
          ip_address: yield this.getClientIP(),
          user_agent: isBrowser ? navigator.userAgent : void 0
        });
        const { error } = yield supabase.from("audit_logs").insert(auditLog);
        if (error) {
          console.error("Failed to log audit event:", error);
        }
      } catch (error) {
        console.error("Audit logging error:", error);
      }
    });
  }
  getClientIP() {
    return __async(this, null, function* () {
      try {
        return "unknown";
      } catch (e) {
        return "unknown";
      }
    });
  }
  // Utility methods for specific tracking scenarios
  trackPaymentAttempt(paymentData) {
    return __async(this, null, function* () {
      yield this.trackActivity("payment_attempt", __spreadProps(__spreadValues({}, paymentData), {
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }));
    });
  }
  trackPaymentSuccess(paymentId, amount) {
    return __async(this, null, function* () {
      yield this.trackActivity("payment_success", {
        payment_id: paymentId,
        amount,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    });
  }
  trackPaymentFailure(reason, paymentData) {
    return __async(this, null, function* () {
      yield this.trackActivity("payment_failure", __spreadProps(__spreadValues({
        reason
      }, paymentData), {
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }));
    });
  }
  trackUserRegistration(userData) {
    return __async(this, null, function* () {
      yield this.trackActivity("user_registration", userData);
    });
  }
  trackSubscriptionChange(subscriptionId, action) {
    return __async(this, null, function* () {
      yield this.trackActivity("subscription_change", {
        subscription_id: subscriptionId,
        action,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    });
  }
  trackSupportTicket(ticketId, action) {
    return __async(this, null, function* () {
      yield this.trackActivity("support_ticket", {
        ticket_id: ticketId,
        action,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    });
  }
}
const activityTracker = new ActivityTrackingService();
const browserDetect = {
  isSafari() {
    const ua = navigator.userAgent;
    return /^((?!chrome|android).)*safari/i.test(ua);
  },
  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  },
  isWebkit() {
    return "WebkitAppearance" in document.documentElement.style;
  },
  isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  },
  isFirefox() {
    return navigator.userAgent.toLowerCase().includes("firefox");
  }
};
const safariUtils = {
  // Force Safari to recognize touch events
  enableTouchSupport() {
    if (browserDetect.isSafari() && browserDetect.isIOS()) {
      document.addEventListener("touchstart", () => {
      }, { passive: true });
    }
  },
  // Fix Safari momentum scrolling
  fixMomentumScrolling() {
    if (browserDetect.isWebkit()) {
      const style = document.createElement("style");
      style.textContent = `
        * {
          -webkit-overflow-scrolling: touch;
        }
      `;
      document.head.appendChild(style);
    }
  },
  // Prevent Safari from zooming on text inputs
  preventZoomOnInputs() {
    if (browserDetect.isIOS()) {
      const viewport = document.querySelector("meta[name=viewport]");
      if (viewport) {
        const content = viewport.getAttribute("content");
        if (!(content == null ? void 0 : content.includes("user-scalable=no"))) {
          viewport.setAttribute("content", `${content}, user-scalable=no`);
        }
      }
    }
  },
  // Enable full height support on mobile Safari
  enableFullHeight() {
    if (browserDetect.isIOS()) {
      const style = document.createElement("style");
      style.textContent = `
        #root, html, body {
          height: 100vh;
          height: -webkit-fill-available;
          min-height: 100vh;
          min-height: -webkit-fill-available;
        }
      `;
      document.head.appendChild(style);
    }
  }
};
const navUtils = {
  // Fix hash navigation in Safari
  fixHashNavigation() {
    if (browserDetect.isSafari()) {
      window.addEventListener("hashchange", () => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, false);
    }
  },
  // Fix back/forward button issues
  fixHistoryNavigation() {
    if (browserDetect.isSafari()) {
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;
      history.pushState = function(state, title, url) {
        const result = originalPushState.apply(this, [state, title, url]);
        window.dispatchEvent(new PopStateEvent("popstate", { state }));
        return result;
      };
      history.replaceState = function(state, title, url) {
        const result = originalReplaceState.apply(this, [state, title, url]);
        window.dispatchEvent(new PopStateEvent("popstate", { state }));
        return result;
      };
    }
  }
};
function initSafariCompatibility() {
  if (typeof window === "undefined") return;
  safariUtils.enableTouchSupport();
  safariUtils.fixMomentumScrolling();
  safariUtils.preventZoomOnInputs();
  safariUtils.enableFullHeight();
  navUtils.fixHashNavigation();
  navUtils.fixHistoryNavigation();
  if (browserDetect.isSafari()) {
    document.body.classList.add("safari-browser");
  }
  if (browserDetect.isIOS()) {
    document.body.classList.add("ios-browser");
  }
  if (browserDetect.isWebkit()) {
    document.body.classList.add("webkit-browser");
  }
  console.log("Safari compatibility layer initialized");
}
class AnalyticsCollector {
  constructor() {
    __publicField(this, "analytics", []);
    __publicField(this, "sessionMap", /* @__PURE__ */ new Map());
  }
  /**
   * Track user interaction
   */
  trackEvent(eventType, data, userId, sessionId) {
    const analyticsData = {
      eventType,
      data: __spreadProps(__spreadValues({}, data), { userId, sessionId }),
      timestamp: /* @__PURE__ */ new Date(),
      userId,
      sessionId,
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    this.analytics.push(analyticsData);
    if (sessionId) {
      if (!this.sessionMap.has(sessionId)) {
        this.sessionMap.set(sessionId, { startTime: /* @__PURE__ */ new Date(), events: [] });
      }
      this.sessionMap.get(sessionId).events.push(analyticsData);
    }
    activityTracker.trackActivity(eventType, data);
    this.sendToExternalService(analyticsData);
  }
  /**
   * Start user session tracking
   */
  startSession(userId, sessionId) {
    if (!this.sessionMap.has(sessionId)) {
      this.sessionMap.set(sessionId, { startTime: /* @__PURE__ */ new Date(), events: [] });
    }
    this.trackEvent("session_start", { userId }, userId, sessionId);
  }
  /**
   * End user session tracking
   */
  endSession(sessionId) {
    var _a;
    const session = this.sessionMap.get(sessionId);
    if (session) {
      const duration = Date.now() - session.startTime.getTime();
      this.trackEvent("session_end", {
        duration,
        eventCount: session.events.length
      }, (_a = session.events[0]) == null ? void 0 : _a.userId, sessionId);
      this.sessionMap.delete(sessionId);
    }
  }
  /**
   * Track page views
   */
  trackPageView(page, userId, sessionId) {
    this.trackEvent("page_view", { page }, userId, sessionId);
  }
  /**
   * Track user interactions
   */
  trackInteraction(elementId, action, value, userId, sessionId) {
    this.trackEvent("user_interaction", {
      elementId,
      action,
      value
    }, userId, sessionId);
  }
  /**
   * Track conversion events
   */
  trackConversion(event, value, userId, sessionId) {
    this.trackEvent("conversion", {
      event,
      value: value || 0,
      currency: "USD"
    }, userId, sessionId);
  }
  /**
   * Track performance metrics
   */
  trackPerformanceMetric(metric, value, userId, sessionId) {
    this.trackEvent("performance_metric", {
      metric,
      value,
      unit: this.getMetricUnit(metric)
    }, userId, sessionId);
  }
  /**
   * Send analytics to external services
   */
  sendToExternalService(data) {
    return __async(this, null, function* () {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", data.eventType, __spreadValues({
          custom_dimension_user_id: data.userId,
          custom_dimension_session_id: data.sessionId
        }, data.data));
      }
      if (data.eventType === "error" || data.eventType === "performance_error") {
        try {
          yield fetch("/api/analytics", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
          });
        } catch (e) {
        }
      }
    });
  }
  /**
   * Get metric unit
   */
  getMetricUnit(metric) {
    const unitMap = {
      "pageLoadTime": "ms",
      "firstPaint": "ms",
      "largestContentfulPaint": "ms",
      "firstInputDelay": "ms",
      "cumulativeLayoutShift": "",
      "imageLoadTime": "ms",
      "apiResponseTime": "ms",
      "bundleSize": "KB",
      "cacheHitRate": "%"
    };
    return unitMap[metric] || "";
  }
  /**
   * Export analytics data
   */
  exportData(period) {
    const startDate = /* @__PURE__ */ new Date();
    switch (period) {
      case "last7days":
        startDate.setDate(startDate.getDate() - 7);
        break;
      case "last30days":
        startDate.setMonth(startDate.getMonth() - 1);
        break;
      case "last90days":
        startDate.setMonth(startDate.getMonth() - 3);
        break;
      default:
        startDate.setMonth(startDate.getMonth() - 1);
    }
    return this.analytics.filter((data) => data.timestamp >= startDate);
  }
}
const analyticsCollector = new AnalyticsCollector();
function initializeAnalytics() {
  if (typeof window !== "undefined") {
    analyticsCollector.trackPageView(window.location.href);
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const userId = (localStorage == null ? void 0 : localStorage.getItem("userId")) || void 0;
    analyticsCollector.startSession(userId || "anonymous", sessionId);
    if ("performance" in window && "getEntriesByType" in window.performance) {
      const navigationTimings = window.performance.getEntriesByType("navigation");
      if (navigationTimings.length > 0) {
        const timing = navigationTimings[0];
        analyticsCollector.trackPerformanceMetric("largestContentfulPaint", timing.loadEventStart - timing.responseStart);
        analyticsCollector.trackPerformanceMetric("firstInputDelay", timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart);
      }
    }
    const userIdForAnalytics = userId;
    const sessionIdForAnalytics = sessionId;
    window.trackAnalytics = {
      event: (eventType, data) => analyticsCollector.trackEvent(eventType, data, userIdForAnalytics, sessionIdForAnalytics),
      pageView: (page) => analyticsCollector.trackPageView(page, userIdForAnalytics, sessionIdForAnalytics),
      interaction: (elementId, action, value) => analyticsCollector.trackInteraction(elementId, action, value, userIdForAnalytics, sessionIdForAnalytics),
      conversion: (event, value) => analyticsCollector.trackConversion(event, value, userIdForAnalytics, sessionIdForAnalytics),
      performance: (metric, value) => analyticsCollector.trackPerformanceMetric(metric, value, userIdForAnalytics, sessionIdForAnalytics)
    };
    window.addEventListener("beforeunload", () => {
      analyticsCollector.endSession(sessionIdForAnalytics);
    });
  }
  console.log("Advanced analytics and reporting initialized");
}
const SkipLinks = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sr-only focus-within:not-sr-only focus-within:absolute focus-within:top-0 focus-within:left-0 focus-within:z-50 focus-within:bg-background focus-within:p-4 focus-within:border focus-within:border-border focus-within:rounded-md focus-within:shadow-lg", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "#main-content",
      className: "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-3 py-2 bg-primary text-primary-foreground hover:bg-primary/90 mr-2",
      children: "Skip to main content"
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "#navigation",
      className: "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-3 py-2 bg-primary text-primary-foreground hover:bg-primary/90",
      children: "Skip to navigation"
    }
  )
] });
const Index = React.lazy(() => __vitePreload(() => import("./Index2.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0));
const NotFound = React.lazy(() => __vitePreload(() => import("./NotFound.js"), true ? __vite__mapDeps([11,1,2]) : void 0));
const Pricing = React.lazy(() => __vitePreload(() => import("./Pricing.js"), true ? __vite__mapDeps([12,1,2,3,4,5,6,13,7,8,9,10]) : void 0));
const PersonalPricing = React.lazy(() => __vitePreload(() => import("./PersonalPricing.js"), true ? __vite__mapDeps([14,1,2,3,4,5,6,13,7,8,9,10]) : void 0));
const BusinessPricing = React.lazy(() => __vitePreload(() => import("./BusinessPricing.js"), true ? __vite__mapDeps([15,1,2,3,4,5,6,13,7,8,9,10]) : void 0));
const About = React.lazy(() => __vitePreload(() => import("./About.js"), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10]) : void 0));
const Contact = React.lazy(() => __vitePreload(() => import("./Contact.js"), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,18,19,8,9,10]) : void 0));
const Login = React.lazy(() => __vitePreload(() => import("./Login.js"), true ? __vite__mapDeps([20,1,2,4,19,7,6,21,5,9,10]) : void 0));
const Signup = React.lazy(() => __vitePreload(() => import("./Signup.js"), true ? __vite__mapDeps([22,1,2,4,19,7,6,23,5,9,10]) : void 0));
const ResetPassword = React.lazy(() => __vitePreload(() => import("./ResetPassword.js"), true ? __vite__mapDeps([24,1,2,4,19,7,21,5,9,10]) : void 0));
const FAQ = React.lazy(() => __vitePreload(() => import("./FAQ.js"), true ? __vite__mapDeps([25,1,2,3,4,5,6,8,9,10]) : void 0));
const Blog = React.lazy(() => __vitePreload(() => import("./Blog.js"), true ? __vite__mapDeps([26,1,2,3,4,5,6,7,8,27,9,10]) : void 0));
const BlogPost = React.lazy(() => __vitePreload(() => import("./BlogPost.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,8,7,27,9,10]) : void 0));
const CaseStudies = React.lazy(() => __vitePreload(() => import("./CaseStudies.js"), true ? __vite__mapDeps([29,1,2,3,4,5,6,7,8,27,9,10]) : void 0));
const CaseStudy = React.lazy(() => __vitePreload(() => import("./CaseStudy.js"), true ? __vite__mapDeps([30,1,2,3,4,5,6,9,10]) : void 0));
const CustomerStories = React.lazy(() => __vitePreload(() => import("./CustomerStories.js"), true ? __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10]) : void 0));
const Terms = React.lazy(() => __vitePreload(() => import("./Terms.js"), true ? __vite__mapDeps([32,1,2,3,4,5,6,9,10]) : void 0));
const ReturnRefund = React.lazy(() => __vitePreload(() => import("./ReturnRefund.js"), true ? __vite__mapDeps([33,1,2,3,4,5,6,9,10]) : void 0));
const Cookies = React.lazy(() => __vitePreload(() => import("./Cookies.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,9,10]) : void 0));
const CookieScanner = React.lazy(() => __vitePreload(() => import("./CookieScanner.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,8,21,9,10]) : void 0));
const PrivacySettings = React.lazy(() => __vitePreload(() => import("./PrivacySettings.js"), true ? __vite__mapDeps([36,1,2,3,4,5,6,7,8,21,9,10]) : void 0));
const RemoteDisclaimer = React.lazy(() => __vitePreload(() => import("./RemoteDisclaimer.js"), true ? __vite__mapDeps([37,1,2,3,4,5,6,9,10]) : void 0));
const AcceptableUse = React.lazy(() => __vitePreload(() => import("./AcceptableUse.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,9,10]) : void 0));
const Shipping = React.lazy(() => __vitePreload(() => import("./Shipping.js"), true ? __vite__mapDeps([39,1,2,3,4,5,6,9,10]) : void 0));
const EndUserAgreement = React.lazy(() => __vitePreload(() => import("./EndUserAgreement.js"), true ? __vite__mapDeps([40,1,2,3,4,5,6,9,10]) : void 0));
const Payment = React.lazy(() => __vitePreload(() => import("./Payment.js"), true ? __vite__mapDeps([41,1,2,3,4,5,6,19,7,23,8,42,9,43,10]) : void 0));
const PaymentSuccess = React.lazy(() => __vitePreload(() => import("./PaymentSuccess.js"), true ? __vite__mapDeps([44,1,2,3,4,5,6,7,23,19,8,43,9,42,10]) : void 0));
const PaymentFailed = React.lazy(() => __vitePreload(() => import("./PaymentFailed.js"), true ? __vite__mapDeps([45,1,2,3,4,5,6,7,9,10]) : void 0));
const Careers = React.lazy(() => __vitePreload(() => import("./Careers.js"), true ? __vite__mapDeps([46,1,2,3,4,5,6,9,10]) : void 0));
const Admin = React.lazy(() => __vitePreload(() => import("./Admin.js"), true ? __vite__mapDeps([47,1,2,3,4,5,6,7,8,19,18,27,48,9,10]) : void 0));
const Dashboard = React.lazy(() => __vitePreload(() => import("./Dashboard.js"), true ? __vite__mapDeps([49,1,2,3,4,5,6,7,8,21,43,9,10]) : void 0));
const BusinessServices = React.lazy(() => __vitePreload(() => import("./BusinessServices.js"), true ? __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,10]) : void 0));
const queryClient = new QueryClient();
const App = () => {
  reactExports.useEffect(() => {
    console.log("Activity tracking initialized");
    initSafariCompatibility();
    initializeAnalytics();
  }, []);
  const isSafari2 = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari2) {
    console.log("Safari detected - rendering simple component");
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Safari Test" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If you can see this, Safari is working!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "User Agent: ",
        navigator.userAgent
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SkipLinks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VariantProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Index, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/pricing", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/pricing/personal", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PersonalPricing, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/pricing/business", element: /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessPricing, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/login", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Login, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/signup", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Signup, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/reset-password", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ResetPassword, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/faq", element: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Blog, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/blog/:slug", element: /* @__PURE__ */ jsxRuntimeExports.jsx(BlogPost, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/case-studies", element: /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudies, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/case-studies/:slug", element: /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudy, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/customer-stories", element: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomerStories, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Terms, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/return-refund", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ReturnRefund, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/cookies", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Cookies, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/cookie-scanner", element: /* @__PURE__ */ jsxRuntimeExports.jsx(CookieScanner, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/privacy-settings", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivacySettings, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/remote-disclaimer", element: /* @__PURE__ */ jsxRuntimeExports.jsx(RemoteDisclaimer, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/acceptable-use", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AcceptableUse, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/shipping", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Shipping, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/end-user-agreement", element: /* @__PURE__ */ jsxRuntimeExports.jsx(EndUserAgreement, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/payment", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Payment, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/payment/success", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentSuccess, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/payment/failed", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentFailed, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/careers", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Careers, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/admin",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { requireAdmin: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Admin, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/dashboard",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/business", element: /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessServices, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFound, {}) })
    ] }) }) }) })
  ] }) });
};
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
console.log("Browser detection:", { isSafari, userAgent: navigator.userAgent });
if (isSafari) {
  console.log("Safari detected - checking module support...");
  console.log("Script type:", (_q = document.currentScript) == null ? void 0 : _q.type);
  console.log("Module support check passed");
}
clientExports.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
export {
  VariantContextInternal as V,
  activityTracker as a,
  cva as b,
  cn as c,
  supabase as s,
  useToast as u
};
