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
import { a as reactExports, k as useNavigate, L as Link } from "./react-vendor.js";
import { B as Button, I as Input } from "./input.js";
import { L as Label } from "./label.js";
import { C as Card, b as CardHeader, d as CardTitle, e as CardDescription, a as CardContent } from "./card.js";
import { S as Separator } from "./separator.js";
import { C as Checkbox } from "./checkbox.js";
import { u as useToast, s as supabase, a as activityTracker } from "./index.js";
import { E as EyeOff, m as Eye } from "./utils-vendor.js";
import "./auth-vendor.js";
import "./query-vendor.js";
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
const validatePhoneNumber = (phone) => {
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
  const cleanPhone = phone.replace(/[\s\-().]/g, "");
  return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10 && cleanPhone.length <= 15;
};
const validateZipCode = (zipCode) => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
};
const Signup = () => {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = reactExports.useState(false);
  const [isProcessing, setIsProcessing] = reactExports.useState(false);
  const [fieldErrors, setFieldErrors] = reactExports.useState({});
  const [passwordStrength, setPasswordStrength] = reactExports.useState(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = reactExports.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    agreeToTerms: false,
    agreeToPrivacy: false
  });
  const handleSocialAuth = (provider) => __async(null, null, function* () {
    try {
      setIsProcessing(true);
      const { error } = yield supabase.auth.signInWithOAuth({
        provider,
        options: {
          // Always redirect back to the app after OAuth completes (works for local and prod)
          redirectTo: `${window.location.origin}/dashboard`
        }
      });
      if (error) {
        throw error;
      }
      yield activityTracker.trackActivity("social_auth_attempt", {
        provider,
        method: "signup"
      });
    } catch (error) {
      console.error(`${provider} auth error:`, error);
      toast({
        title: "Authentication failed",
        description: `Failed to sign up with ${provider}. Please try again.`,
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  });
  const handleInputChange = (field, value) => {
    setFormData((prev) => __spreadProps(__spreadValues({}, prev), { [field]: value }));
    if (field === "email") {
      if (value && !validateEmailFormat(value)) {
        setFieldErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "Please enter a valid email address" }));
      } else {
        setFieldErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "" }));
      }
    }
    if (field === "phone") {
      if (value && !validatePhoneNumber(value)) {
        setFieldErrors((prev) => __spreadProps(__spreadValues({}, prev), { phone: "Please enter a valid phone number" }));
      } else {
        setFieldErrors((prev) => __spreadProps(__spreadValues({}, prev), { phone: "" }));
      }
    }
    if (field === "zipCode") {
      if (value && !validateZipCode(value)) {
        setFieldErrors((prev) => __spreadProps(__spreadValues({}, prev), { zipCode: "Please enter a valid ZIP code (e.g., 12345 or 12345-6789)" }));
      } else {
        setFieldErrors((prev) => __spreadProps(__spreadValues({}, prev), { zipCode: "" }));
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
    if (field === "confirmPassword") {
      if (value && value !== formData.password) {
        setFieldErrors((prev) => __spreadProps(__spreadValues({}, prev), { confirmPassword: "Passwords do not match" }));
      } else {
        setFieldErrors((prev) => __spreadProps(__spreadValues({}, prev), { confirmPassword: "" }));
      }
    }
  };
  const handleSubmit = (e) => __async(null, null, function* () {
    e.preventDefault();
    const newFieldErrors = {};
    if (!formData.firstName.trim()) {
      newFieldErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newFieldErrors.lastName = "Last name is required";
    }
    if (!formData.email) {
      newFieldErrors.email = "Email is required";
    } else if (!validateEmailFormat(formData.email)) {
      newFieldErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone) {
      newFieldErrors.phone = "Phone number is required";
    } else if (!validatePhoneNumber(formData.phone)) {
      newFieldErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.address.trim()) {
      newFieldErrors.address = "Address is required";
    }
    if (!formData.city.trim()) {
      newFieldErrors.city = "City is required";
    }
    if (!formData.state.trim()) {
      newFieldErrors.state = "State is required";
    }
    if (!formData.zipCode) {
      newFieldErrors.zipCode = "ZIP code is required";
    } else if (!validateZipCode(formData.zipCode)) {
      newFieldErrors.zipCode = "Please enter a valid ZIP code";
    }
    if (!formData.password) {
      newFieldErrors.password = "Password is required";
    } else if (passwordStrength && passwordStrength.score < 3) {
      newFieldErrors.password = "Password is too weak. " + passwordStrength.feedback;
    }
    if (!formData.confirmPassword) {
      newFieldErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newFieldErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.agreeToTerms) {
      newFieldErrors.terms = "You must agree to the Terms of Service";
    }
    if (!formData.agreeToPrivacy) {
      newFieldErrors.privacy = "You must agree to the Privacy Policy";
    }
    setFieldErrors(newFieldErrors);
    if (Object.keys(newFieldErrors).length > 0) {
      toast({
        title: "Please correct the errors",
        description: "Some fields have validation errors. Please check and try again.",
        variant: "destructive"
      });
      return;
    }
    setIsProcessing(true);
    try {
      const { data: authData, error: authError } = yield supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zip_code: formData.zipCode
          }
        }
      });
      if (authError) {
        throw authError;
      }
      if (authData.user) {
        if (!authData.user.email_confirmed_at) {
          toast({
            title: "Account created successfully!",
            description: "Please check your email and click the verification link to complete your registration. Don't forget to check your spam folder!",
            duration: 8e3
          });
          yield activityTracker.trackActivity("email_verification_pending", {
            email: formData.email,
            registration_method: "email"
          });
          return;
        }
        yield activityTracker.trackUserRegistration({
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          registration_method: "email"
        });
        toast({
          title: "Account created successfully!",
          description: "Welcome to Novaqy! You are now logged in."
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Account created successfully!",
          description: "Please check your email and click the verification link to complete your registration."
        });
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast({
        title: "Signup failed",
        description: error instanceof Error ? error.message : "An error occurred during signup. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  });
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "Create Your Account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Join Novaqy for professional tech support services" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "w-full",
              type: "button",
              onClick: () => handleSocialAuth("google"),
              disabled: isProcessing,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-5 h-5 mr-2", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "currentColor", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "currentColor", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "currentColor", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "currentColor", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" })
                ] }),
                "Sign up with Google"
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
              disabled: isProcessing,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5 mr-2", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) }),
                "Sign up with Facebook"
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
              disabled: isProcessing,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5 mr-2", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" }) }),
                "Sign up with Apple"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-background px-4 text-sm text-muted-foreground", children: "OR" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "firstName", children: "First Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "firstName",
                  type: "text",
                  value: formData.firstName,
                  onChange: (e) => handleInputChange("firstName", e.target.value),
                  placeholder: "John",
                  required: true,
                  className: fieldErrors.firstName ? "border-red-500" : ""
                }
              ),
              fieldErrors.firstName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: fieldErrors.firstName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "lastName", children: "Last Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "lastName",
                  type: "text",
                  value: formData.lastName,
                  onChange: (e) => handleInputChange("lastName", e.target.value),
                  placeholder: "Doe",
                  required: true,
                  className: fieldErrors.lastName ? "border-red-500" : ""
                }
              ),
              fieldErrors.lastName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: fieldErrors.lastName })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "email",
                type: "email",
                value: formData.email,
                onChange: (e) => handleInputChange("email", e.target.value),
                placeholder: "john.doe@example.com",
                required: true,
                className: fieldErrors.email ? "border-red-500" : ""
              }
            ),
            fieldErrors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: fieldErrors.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "phone",
                type: "tel",
                value: formData.phone,
                onChange: (e) => handleInputChange("phone", e.target.value),
                placeholder: "(123) 456-7890",
                required: true,
                className: fieldErrors.phone ? "border-red-500" : ""
              }
            ),
            fieldErrors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: fieldErrors.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "address", children: "Street Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "address",
                value: formData.address,
                onChange: (e) => handleInputChange("address", e.target.value),
                placeholder: "123 Main St",
                required: true,
                className: fieldErrors.address ? "border-red-500" : ""
              }
            ),
            fieldErrors.address && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: fieldErrors.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "city", children: "City" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "city",
                  value: formData.city,
                  onChange: (e) => handleInputChange("city", e.target.value),
                  placeholder: "New York",
                  required: true,
                  className: fieldErrors.city ? "border-red-500" : ""
                }
              ),
              fieldErrors.city && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: fieldErrors.city })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "state", children: "State" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "state",
                  value: formData.state,
                  onChange: (e) => handleInputChange("state", e.target.value),
                  placeholder: "NY",
                  required: true,
                  className: fieldErrors.state ? "border-red-500" : ""
                }
              ),
              fieldErrors.state && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: fieldErrors.state })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "zipCode", children: "ZIP Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "zipCode",
                value: formData.zipCode,
                onChange: (e) => handleInputChange("zipCode", e.target.value),
                placeholder: "10001",
                required: true,
                className: fieldErrors.zipCode ? "border-red-500" : ""
              }
            ),
            fieldErrors.zipCode && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: fieldErrors.zipCode })
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
                  placeholder: "Create a strong password",
                  required: true,
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "confirmPassword", children: "Confirm Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "confirmPassword",
                  type: showConfirmPassword ? "text" : "password",
                  value: formData.confirmPassword,
                  onChange: (e) => handleInputChange("confirmPassword", e.target.value),
                  placeholder: "Confirm your password",
                  required: true,
                  className: fieldErrors.confirmPassword ? "border-red-500" : ""
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
            ] }),
            fieldErrors.confirmPassword && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: fieldErrors.confirmPassword })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  id: "terms",
                  checked: formData.agreeToTerms,
                  onCheckedChange: (checked) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { agreeToTerms: checked })),
                  className: fieldErrors.terms ? "border-red-500" : ""
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "terms", className: "text-sm leading-relaxed", children: [
                "I agree to the",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "text-primary hover:underline", children: "Terms of Service" })
              ] })
            ] }),
            fieldErrors.terms && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500 ml-6", children: fieldErrors.terms }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  id: "privacy",
                  checked: formData.agreeToPrivacy,
                  onCheckedChange: (checked) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { agreeToPrivacy: checked })),
                  className: fieldErrors.privacy ? "border-red-500" : ""
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "privacy", className: "text-sm leading-relaxed", children: [
                "I agree to the",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cookies", className: "text-primary hover:underline", children: "Privacy Policy" })
              ] })
            ] }),
            fieldErrors.privacy && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500 ml-6", children: fieldErrors.privacy })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", disabled: isProcessing, children: isProcessing ? "Creating Account..." : "Create Account" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-primary hover:underline font-medium", children: "Log in" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "By creating an account, you agree to our",
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
  Signup as default
};
