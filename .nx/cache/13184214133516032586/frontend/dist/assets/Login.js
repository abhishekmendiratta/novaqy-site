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
import { o as createDialogScope, j as jsxRuntimeExports, p as Root, q as Portal, u as useComposedRefs, W as WarningProvider, c as createContextScope, r as Content, e as composeEventHandlers, l as createSlottable, T as Title, s as Description, t as Close, O as Overlay, v as Trigger } from "./ui-vendor.js";
import { a as reactExports, k as useNavigate, L as Link } from "./react-vendor.js";
import { b as buttonVariants, B as Button, I as Input } from "./input.js";
import { L as Label } from "./label.js";
import { C as Card, b as CardHeader, d as CardTitle, e as CardDescription, a as CardContent } from "./card.js";
import { S as Separator } from "./separator.js";
import { A as Alert, a as AlertDescription } from "./alert.js";
import { c as cn, u as useToast, s as supabase, a as activityTracker } from "./index.js";
import { b as Shield, l as CircleAlert, E as EyeOff, m as Eye } from "./utils-vendor.js";
import "./auth-vendor.js";
import "./query-vendor.js";
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
  const _a = props, { __scopeAlertDialog } = _a, alertDialogProps = __objRest(_a, ["__scopeAlertDialog"]);
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, __spreadProps(__spreadValues(__spreadValues({}, dialogScope), alertDialogProps), { modal: true }));
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAlertDialog } = _a, triggerProps = __objRest(_a, ["__scopeAlertDialog"]);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, __spreadProps(__spreadValues(__spreadValues({}, dialogScope), triggerProps), { ref: forwardedRef }));
  }
);
AlertDialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
  const _a = props, { __scopeAlertDialog } = _a, portalProps = __objRest(_a, ["__scopeAlertDialog"]);
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, __spreadValues(__spreadValues({}, dialogScope), portalProps));
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAlertDialog } = _a, overlayProps = __objRest(_a, ["__scopeAlertDialog"]);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, __spreadProps(__spreadValues(__spreadValues({}, dialogScope), overlayProps), { ref: forwardedRef }));
  }
);
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = createSlottable("AlertDialogContent");
var AlertDialogContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAlertDialog, children } = _a, contentProps = __objRest(_a, ["__scopeAlertDialog", "children"]);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = reactExports.useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content,
          __spreadProps(__spreadValues(__spreadValues({
            role: "alertdialog"
          }, dialogScope), contentProps), {
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              var _a2;
              event.preventDefault();
              (_a2 = cancelRef.current) == null ? void 0 : _a2.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef })
            ]
          })
        ) })
      }
    );
  }
);
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAlertDialog } = _a, titleProps = __objRest(_a, ["__scopeAlertDialog"]);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, __spreadProps(__spreadValues(__spreadValues({}, dialogScope), titleProps), { ref: forwardedRef }));
  }
);
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = reactExports.forwardRef((props, forwardedRef) => {
  const _a = props, { __scopeAlertDialog } = _a, descriptionProps = __objRest(_a, ["__scopeAlertDialog"]);
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, __spreadProps(__spreadValues(__spreadValues({}, dialogScope), descriptionProps), { ref: forwardedRef }));
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAlertDialog } = _a, actionProps = __objRest(_a, ["__scopeAlertDialog"]);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, __spreadProps(__spreadValues(__spreadValues({}, dialogScope), actionProps), { ref: forwardedRef }));
  }
);
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, { __scopeAlertDialog } = _a, cancelProps = __objRest(_a, ["__scopeAlertDialog"]);
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, __spreadProps(__spreadValues(__spreadValues({}, dialogScope), cancelProps), { ref }));
  }
);
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  reactExports.useEffect(() => {
    var _a;
    const hasDescription = document.getElementById(
      (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root2 = AlertDialog$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
const AlertDialog = Root2;
const AlertDialogPortal = Portal2;
const AlertDialogOverlay = reactExports.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay2,
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
AlertDialogOverlay.displayName = Overlay2.displayName;
const AlertDialogContent = reactExports.forwardRef((_c, ref) => {
  var _d = _c, { className } = _d, props = __objRest(_d, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2,
      __spreadValues({
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )
      }, props)
    )
  ] });
});
AlertDialogContent.displayName = Content2.displayName;
const AlertDialogHeader = (_e) => {
  var _f = _e, { className } = _f, props = __objRest(_f, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues({ className: cn("flex flex-col space-y-2 text-center sm:text-left", className) }, props));
};
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = (_g) => {
  var _h = _g, { className } = _h, props = __objRest(_h, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues({ className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props));
};
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = reactExports.forwardRef((_i, ref) => {
  var _j = _i, { className } = _j, props = __objRest(_j, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Title2, __spreadValues({ ref, className: cn("text-lg font-semibold", className) }, props));
});
AlertDialogTitle.displayName = Title2.displayName;
const AlertDialogDescription = reactExports.forwardRef((_k, ref) => {
  var _l = _k, { className } = _l, props = __objRest(_l, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description2, __spreadValues({ ref, className: cn("text-sm text-muted-foreground", className) }, props));
});
AlertDialogDescription.displayName = Description2.displayName;
const AlertDialogAction = reactExports.forwardRef((_m, ref) => {
  var _n = _m, { className } = _n, props = __objRest(_n, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Action, __spreadValues({ ref, className: cn(buttonVariants(), className) }, props));
});
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = reactExports.forwardRef((_o, ref) => {
  var _p = _o, { className } = _p, props = __objRest(_p, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cancel,
    __spreadValues({
      ref,
      className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)
    }, props)
  );
});
AlertDialogCancel.displayName = Cancel.displayName;
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};
const validateEmailFormat = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};
const getPasswordStrength = (password) => {
  let score = 0;
  const feedback = [];
  if (password.length >= 8) score += 1;
  else feedback.push("Use at least 8 characters");
  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push("Add uppercase letter");
  if (/[a-z]/.test(password)) score += 1;
  else feedback.push("Add lowercase letter");
  if (/\d/.test(password)) score += 1;
  else feedback.push("Add number");
  if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?/]/.test(password)) score += 1;
  else feedback.push("Add special character");
  if (password.length >= 12) score += 1;
  const strengthLevels = [
    { score: 0, feedback: "Very weak", color: "text-red-500" },
    { score: 2, feedback: "Weak", color: "text-orange-500" },
    { score: 4, feedback: "Fair", color: "text-yellow-500" },
    { score: 5, feedback: "Good", color: "text-blue-500" },
    { score: 6, feedback: "Strong", color: "text-green-500" }
  ];
  const level = strengthLevels[Math.min(score, strengthLevels.length - 1)];
  return {
    score,
    feedback: feedback.length > 0 ? feedback.join(", ") : level.feedback,
    color: level.color
  };
};
const Login = () => {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [fieldErrors, setFieldErrors] = reactExports.useState({});
  const [fieldTouched, setFieldTouched] = reactExports.useState({});
  const [loginAttempts, setLoginAttempts] = reactExports.useState(0);
  const [lastAttemptTime, setLastAttemptTime] = reactExports.useState(null);
  const [errors, setErrors] = reactExports.useState([]);
  const [showResendButton, setShowResendButton] = reactExports.useState(false);
  const [isResending, setIsResending] = reactExports.useState(false);
  const [showPasswordReset, setShowPasswordReset] = reactExports.useState(false);
  const [resetEmail, setResetEmail] = reactExports.useState("");
  const [isResetting, setIsResetting] = reactExports.useState(false);
  const [passwordStrength, setPasswordStrength] = reactExports.useState(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const handleSocialAuth = (provider) => __async(null, null, function* () {
    try {
      setIsLoading(true);
      const { error } = yield supabase.auth.signInWithOAuth({
        provider,
        options: {
          // Always redirect back to the app after OAuth completes
          // Works for local development (port 8093) and production
          redirectTo: `${window.location.origin}/dashboard`
        }
      });
      if (error) {
        throw error;
      }
      yield activityTracker.trackActivity("social_auth_attempt", {
        provider,
        method: "login"
      });
    } catch (error) {
      console.error(`${provider} auth error:`, error);
      toast({
        title: "Authentication failed",
        description: `Failed to sign in with ${provider}. Please try again.`,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  });
  const handleSubmit = (e) => __async(null, null, function* () {
    e.preventDefault();
    setErrors([]);
    const newFieldErrors = {};
    if (!formData.email) {
      newFieldErrors.email = "Email is required";
    } else if (!validateEmailFormat(formData.email)) {
      newFieldErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      newFieldErrors.password = "Password is required";
    } else if (passwordStrength && passwordStrength.score < 3) {
      newFieldErrors.password = "Password is too weak. " + passwordStrength.feedback;
    }
    setFieldErrors(newFieldErrors);
    if (Object.keys(newFieldErrors).length > 0) {
      setErrors(["Please correct the errors above"]);
      return;
    }
    setIsLoading(true);
    try {
      const { data, error } = yield supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });
      if (error) {
        throw error;
      }
      if (data.user) {
        yield activityTracker.trackActivity("user_login", {
          email: formData.email,
          method: "email"
        });
        toast({
          title: "Login successful",
          description: "Welcome back to Novaqy!"
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      let errorMessage = "Invalid email or password";
      let showResend = false;
      const err = error;
      if (err.message) {
        if (err.message.includes("Email not confirmed") || err.message.includes("email_not_confirmed")) {
          errorMessage = "Please confirm your email address before signing in. Check your inbox for the verification email.";
          showResend = true;
        } else if (err.message.includes("Invalid login credentials") || err.message.includes("invalid_credentials")) {
          errorMessage = "Invalid email or password. Please check your credentials and try again.";
        } else if (err.message.includes("Too many requests") || err.message.includes("rate_limit")) {
          errorMessage = "Too many login attempts. Please wait a few minutes before trying again.";
        } else if (err.message.includes("User not found") || err.message.includes("user_not_found")) {
          errorMessage = "No account found with this email address. Please sign up first.";
        } else if (err.message.includes("Email link is invalid") || err.message.includes("invalid_email")) {
          errorMessage = "Invalid email format. Please enter a valid email address.";
        } else {
          errorMessage = err.message;
        }
      }
      setErrors([errorMessage]);
      setShowResendButton(showResend);
      toast({
        title: "Login failed",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  });
  const handleResendVerification = () => __async(null, null, function* () {
    if (!formData.email) {
      toast({
        title: "Email required",
        description: "Please enter your email address first.",
        variant: "destructive"
      });
      return;
    }
    setIsResending(true);
    try {
      const { error } = yield supabase.auth.resend({
        type: "signup",
        email: formData.email
      });
      if (error) {
        throw error;
      }
      toast({
        title: "Verification email sent",
        description: "Please check your inbox for the verification email."
      });
      setShowResendButton(false);
    } catch (error) {
      console.error("Resend error:", error);
      const err = error;
      toast({
        title: "Failed to resend",
        description: err.message || "Failed to resend verification email. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsResending(false);
    }
  });
  const handlePasswordReset = () => __async(null, null, function* () {
    if (!resetEmail) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    if (!validateEmail(resetEmail)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    setIsResetting(true);
    try {
      const { error } = yield supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/reset-password`
      });
      if (error) {
        throw error;
      }
      toast({
        title: "Password reset email sent",
        description: "Please check your inbox for password reset instructions."
      });
      setShowPasswordReset(false);
      setResetEmail("");
    } catch (error) {
      console.error("Password reset error:", error);
      const err = error;
      toast({
        title: "Failed to send reset email",
        description: err.message || "Failed to send password reset email. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsResetting(false);
    }
  });
  const handleInputChange = (field, value) => {
    setFormData((prev) => __spreadProps(__spreadValues({}, prev), { [field]: value }));
    if (errors.length > 0) {
      setErrors([]);
    }
    if (field === "email") {
      if (value && !validateEmailFormat(value)) {
        setFieldErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "Please enter a valid email address" }));
      } else {
        setFieldErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "" }));
      }
    }
    if (field === "password") {
      const strength = getPasswordStrength(value);
      setPasswordStrength(strength);
      if (value && strength.score < 3) {
        setFieldErrors((prev) => __spreadProps(__spreadValues({}, prev), { password: "Password is too weak. " + strength.feedback }));
      } else {
        setFieldErrors((prev) => __spreadProps(__spreadValues({}, prev), { password: "" }));
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-subtle flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center space-x-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/logo.png",
          alt: "Novaqy logo",
          className: "h-12 w-auto object-contain",
          loading: "eager",
          decoding: "async"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold", children: "Novaqy" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "Secure Log In" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Access your account with enhanced security" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "Your login is protected with advanced security measures including rate limiting and CSRF protection." })
        ] }),
        errors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside space-y-1", children: errors.map((error, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: error }, index)) }) })
        ] }),
        showResendButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Didn't receive the verification email?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: handleResendVerification,
                disabled: isResending,
                className: "ml-2",
                children: isResending ? "Sending..." : "Resend Email"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "w-full",
              type: "button",
              onClick: () => handleSocialAuth("google"),
              disabled: isLoading,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-5 h-5 mr-2", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "currentColor", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "currentColor", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "currentColor", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "currentColor", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" })
                ] }),
                "Continue with Google"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "w-full",
              type: "button",
              onClick: () => handleSocialAuth("facebook"),
              disabled: isLoading,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5 mr-2", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) }),
                "Continue with Facebook"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "w-full",
              type: "button",
              onClick: () => handleSocialAuth("apple"),
              disabled: isLoading,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5 mr-2", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" }) }),
                "Continue with Apple"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-background px-4 text-sm text-muted-foreground", children: "OR" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "email",
                type: "email",
                value: formData.email,
                onChange: (e) => handleInputChange("email", e.target.value),
                placeholder: "Enter your email",
                required: true,
                maxLength: 254,
                autoComplete: "email",
                className: fieldErrors.email ? "border-red-500" : ""
              }
            ),
            fieldErrors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: fieldErrors.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "password",
                  type: showPassword ? "text" : "password",
                  value: formData.password,
                  onChange: (e) => handleInputChange("password", e.target.value),
                  placeholder: "Enter your password",
                  required: true,
                  maxLength: 128,
                  autoComplete: "current-password",
                  className: fieldErrors.password ? "border-red-500" : ""
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  className: "absolute right-0 top-0 h-full px-3 hover:bg-transparent",
                  onClick: () => setShowPassword(!showPassword),
                  disabled: isLoading,
                  children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                }
              )
            ] }),
            passwordStrength && formData.password && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `h-2 rounded-full transition-all duration-300 ${passwordStrength.score <= 2 ? "bg-red-500 w-1/3" : passwordStrength.score <= 4 ? "bg-yellow-500 w-2/3" : passwordStrength.score <= 5 ? "bg-blue-500 w-4/5" : "bg-green-500 w-full"}`
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${passwordStrength.color}`, children: passwordStrength.feedback })
            ] }),
            fieldErrors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: fieldErrors.password })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "link",
              className: "p-0 h-auto text-sm text-primary hover:underline",
              type: "button",
              onClick: () => setShowPasswordReset(true),
              disabled: isLoading,
              children: "Forgot password?"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", disabled: isLoading, children: isLoading ? "Signing In..." : "Sign In Securely" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
            " Social authentication requires configuration in Supabase Dashboard. Email authentication is ready to use."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: "text-primary hover:underline font-medium", children: "Create your account" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: showPasswordReset, onOpenChange: setShowPasswordReset, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Reset Your Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: "Enter your email address and we'll send you a link to reset your password." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "resetEmail", children: "Email Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "resetEmail",
            type: "email",
            value: resetEmail,
            onChange: (e) => setResetEmail(e.target.value),
            placeholder: "Enter your email address",
            required: true
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { disabled: isResetting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertDialogAction,
          {
            onClick: handlePasswordReset,
            disabled: isResetting || !resetEmail,
            children: isResetting ? "Sending..." : "Send Reset Link"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "By signing in, you agree to our",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "hover:underline", children: "Terms of Service" }),
      " ",
      "and",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cookies", className: "hover:underline", children: "Privacy Policy" })
    ] }) })
  ] }) });
};
export {
  Login as default
};
