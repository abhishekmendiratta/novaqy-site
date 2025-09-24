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
import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { a as reactExports, k as useNavigate, l as useSearchParams, L as Link } from "./react-vendor.js";
import { B as Button, I as Input } from "./input.js";
import { L as Label } from "./label.js";
import { C as Card, b as CardHeader, d as CardTitle, e as CardDescription, a as CardContent } from "./card.js";
import { A as Alert, a as AlertDescription } from "./alert.js";
import { u as useToast, s as supabase } from "./index.js";
import { d as CircleCheckBig, l as CircleAlert, E as EyeOff, m as Eye } from "./utils-vendor.js";
import "./auth-vendor.js";
import "./query-vendor.js";
const ResetPassword = () => {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [isSuccess, setIsSuccess] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState([]);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  reactExports.useEffect(() => {
    const accessToken = searchParams.get("access_token");
    const refreshToken = searchParams.get("refresh_token");
    const type = searchParams.get("type");
    if (type === "recovery" && accessToken && refreshToken) {
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken
      });
    } else if (!accessToken) {
      toast({
        title: "Invalid reset link",
        description: "This password reset link is invalid or has expired. Please request a new one.",
        variant: "destructive"
      });
      navigate("/login");
    }
  }, [searchParams, navigate, toast]);
  const validatePassword = (password) => {
    const errors2 = [];
    if (password.length < 8) {
      errors2.push("Password must be at least 8 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      errors2.push("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors2.push("Password must contain at least one lowercase letter");
    }
    if (!/\d/.test(password)) {
      errors2.push("Password must contain at least one number");
    }
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?/]/.test(password)) {
      errors2.push("Password must contain at least one special character");
    }
    return { isValid: errors2.length === 0, errors: errors2 };
  };
  const handleSubmit = (e) => __async(null, null, function* () {
    e.preventDefault();
    setErrors([]);
    if (formData.password !== formData.confirmPassword) {
      setErrors(["Passwords do not match"]);
      return;
    }
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      setErrors(passwordValidation.errors);
      return;
    }
    setIsLoading(true);
    try {
      const { error } = yield supabase.auth.updateUser({
        password: formData.password
      });
      if (error) {
        throw error;
      }
      setIsSuccess(true);
      toast({
        title: "Password updated successfully!",
        description: "Your password has been reset. You can now log in with your new password."
      });
      setTimeout(() => {
        navigate("/login");
      }, 3e3);
    } catch (error) {
      console.error("Password reset error:", error);
      const err = error;
      toast({
        title: "Failed to reset password",
        description: err.message || "An error occurred while resetting your password. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  });
  if (isSuccess) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-subtle flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-6 w-6 text-green-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl text-green-600", children: "Password Reset Successful!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Your password has been updated successfully. You will be redirected to the login page shortly." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate("/login"), className: "w-full", children: "Go to Login" }) })
    ] }) });
  }
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "Reset Your Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Enter your new password below" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
        errors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside space-y-1", children: errors.map((error, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: error }, index)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "New Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "password",
                  type: showPassword ? "text" : "password",
                  value: formData.password,
                  onChange: (e) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { password: e.target.value })),
                  placeholder: "Enter your new password",
                  required: true
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
                  children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "confirmPassword", children: "Confirm New Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "confirmPassword",
                  type: showConfirmPassword ? "text" : "password",
                  value: formData.confirmPassword,
                  onChange: (e) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { confirmPassword: e.target.value })),
                  placeholder: "Confirm your new password",
                  required: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  className: "absolute right-0 top-0 h-full px-3 hover:bg-transparent",
                  onClick: () => setShowConfirmPassword(!showConfirmPassword),
                  children: showConfirmPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", disabled: isLoading, children: isLoading ? "Updating Password..." : "Update Password" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm", children: [
          "Remember your password?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-primary hover:underline font-medium", children: "Back to login" })
        ] })
      ] })
    ] })
  ] }) });
};
export {
  ResetPassword as default
};
