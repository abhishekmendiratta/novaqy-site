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
import { u as useLocation, k as useNavigate, a as reactExports } from "./react-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { I as Input, B as Button } from "./input.js";
import { L as Label } from "./label.js";
import { C as Card, b as CardHeader, d as CardTitle, a as CardContent, e as CardDescription } from "./card.js";
import { C as Checkbox } from "./checkbox.js";
import { B as Badge } from "./badge.js";
import { u as useToast, a as activityTracker } from "./index.js";
import { S as SHA512, e as encHex } from "./enc-hex.js";
import { p as paymentService } from "./supabaseService.js";
import { e as Check, b as Shield, L as Lock, w as CreditCard } from "./utils-vendor.js";
import "./separator.js";
import "./auth-vendor.js";
import "./query-vendor.js";
const Payment = () => {
  var _a, _b;
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const selectedPlan = ((_a = location.state) == null ? void 0 : _a.selectedPlan) || "Essential Care";
  const planType = ((_b = location.state) == null ? void 0 : _b.planType) || "personal";
  const planDetails = {
    "Essential Care": {
      name: "Essential Care",
      price: 99,
      period: "year",
      features: [
        "3 on-demand tech support sessions per year (remote)",
        "PC health check & optimization (1× per year)",
        "Basic antivirus setup (BYOL – bring your own license or trial)",
        "Email support during business hours"
      ]
    },
    "Advanced Care": {
      name: "Advanced Care",
      price: 149,
      period: "year",
      features: [
        "Unlimited remote support sessions (1 device)",
        "Antivirus license included (1 device, 1 year)",
        "Monthly PC tune-up & malware scans",
        "Printer, email, and software troubleshooting",
        "Priority support (faster response)"
      ]
    },
    "Premium Care": {
      name: "Premium Care",
      price: 249,
      period: "year",
      features: [
        "Unlimited remote support for up to 3 devices (PC, tablet, phone)",
        "Quarterly PC optimization + patching",
        "Assistance with apps, online payments, and cloud storage",
        "Priority support (8:30AM - 8:30PM EST)"
      ]
    },
    "Family / Elite Care": {
      name: "Family Care",
      price: 449,
      period: "year",
      features: [
        "Unlimited support for up to 5 devices",
        "Full software setup (Zoom, email, cloud, banking apps)",
        "Smart home/IoT troubleshooting (Wi-Fi, Alexa, TVs, routers)",
        "Priority support with toll-free number (8:30AM - 8:30PM EST)"
      ]
    }
  };
  const plan = planDetails[selectedPlan] || planDetails["Essential Care"];
  const [formData, setFormData] = reactExports.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    agreeToPolicies: false,
    agreeToServiceDelivery: false
  });
  const [isProcessing, setIsProcessing] = reactExports.useState(false);
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, "");
    if (phoneNumber.length === 0) return "";
    if (phoneNumber.startsWith("1") && phoneNumber.length === 11) {
      return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 11)}`;
    }
    if (phoneNumber.length === 10) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
    if (phoneNumber.length >= 11) {
      const countryCode = phoneNumber.slice(0, phoneNumber.length - 10);
      const nationalNumber = phoneNumber.slice(-10);
      return `+${countryCode} (${nationalNumber.slice(0, 3)}) ${nationalNumber.slice(3, 6)}-${nationalNumber.slice(6, 10)}`;
    }
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    }
  };
  const handleSubmit = (e) => __async(null, null, function* () {
    e.preventDefault();
    yield activityTracker.trackPaymentAttempt({
      plan_name: plan.name,
      plan_type: planType,
      amount: plan.price,
      currency: "USD",
      user_email: formData.email,
      user_name: `${formData.firstName} ${formData.lastName}`
    });
    const requiredFields = ["firstName", "lastName", "email", "phone", "address", "city", "state", "zipCode"];
    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    if (!formData.agreeToPolicies || !formData.agreeToServiceDelivery) {
      toast({
        title: "Agreement Required",
        description: "Please agree to both the policies and service delivery terms.",
        variant: "destructive"
      });
      return;
    }
    setIsProcessing(true);
    try {
      const txnid = "TXN" + Date.now() + Math.random().toString(36).substr(2, 9);
      const key = "xhkupK";
      const salt = "yUmEyYcZ3xI1BuXdSvmnz6RU1AP1mam2";
      const amount = plan.price.toString();
      const productinfo = plan.name;
      const firstname = formData.firstName;
      const email = formData.email;
      const phone = formData.phone.replace(/\D/g, "");
      const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
      const hash = SHA512(hashString).toString(encHex);
      const paymentData = {
        user_id: null,
        // Will be set when user is created after PayU callback
        transaction_id: txnid,
        amount: plan.price,
        currency: "USD",
        status: "pending",
        payment_method: "payu",
        plan_name: plan.name,
        plan_type: planType,
        payu_response: {},
        payment_gateway: "payu",
        gateway_transaction_id: null
      };
      const savedPayment = yield paymentService.createPayment(paymentData);
      if (!savedPayment) {
        yield activityTracker.trackPaymentFailure("Database save failed", {
          transaction_id: txnid,
          amount: plan.price
        });
        toast({
          title: "Database Error",
          description: "Failed to save payment data. Please try again.",
          variant: "destructive"
        });
        setIsProcessing(false);
        return;
      }
      yield activityTracker.trackActivity("payment_initiated", {
        transaction_id: txnid,
        amount: plan.price,
        plan_name: plan.name,
        gateway: "payu"
      });
      const payuForm = document.createElement("form");
      payuForm.method = "POST";
      payuForm.action = false ? "https://test.payu.in/_payment" : "https://secure.payu.in/_payment";
      const successUrl = `${window.location.origin}/payment/success?txnid=${txnid}`;
      const failureUrl = `${window.location.origin}/payment/failed?txnid=${txnid}`;
      const fields = {
        key,
        txnid,
        amount,
        productinfo,
        firstname,
        email,
        phone,
        surl: successUrl,
        furl: failureUrl,
        hash,
        service_provider: "payu_paisa"
      };
      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        payuForm.appendChild(input);
      });
      document.body.appendChild(payuForm);
      payuForm.submit();
    } catch (error) {
      console.error("Payment initiation error:", error);
      yield activityTracker.trackPaymentFailure("Payment initiation error", {
        error: error instanceof Error ? error.message : "Unknown error",
        plan_name: plan.name,
        amount: plan.price
      });
      toast({
        title: "Payment Error",
        description: "There was an error initiating payment. Please try again.",
        variant: "destructive"
      });
      setIsProcessing(false);
    }
  });
  const subtotal = plan.price;
  const total = subtotal;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-4", children: "Complete Your Purchase" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: "Secure checkout for your Novaqy subscription" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "sticky top-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-green-600" }),
            "Order Summary"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4 bg-muted/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg", children: plan.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mt-1", children: planType === "personal" ? "Personal Plan" : "Business Plan" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
                    "$",
                    plan.price
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
                    "per ",
                    plan.period
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm", children: "What's included:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: plan.features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-muted-foreground flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" }),
                  feature
                ] }, `${plan.name}-feature-${index}`)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-lg font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "$",
                total.toFixed(2)
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 pt-4 border-t", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }),
                "SSL Secured"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }),
                "256-bit Encryption"
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Billing Information" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Please provide your billing details" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "firstName", children: "First Name *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "firstName",
                      value: formData.firstName,
                      onChange: (e) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { firstName: e.target.value })),
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "lastName", children: "Last Name *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "lastName",
                      value: formData.lastName,
                      onChange: (e) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { lastName: e.target.value })),
                      required: true
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email Address *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    value: formData.email,
                    onChange: (e) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { email: e.target.value })),
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone Number *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "phone",
                    type: "tel",
                    value: formData.phone,
                    onChange: (e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      setFormData((prev) => __spreadProps(__spreadValues({}, prev), { phone: formatted }));
                    },
                    placeholder: "(123) 456-7890 or +1 (123) 456-7890",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "address", children: "Street Address *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "address",
                    value: formData.address,
                    onChange: (e) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { address: e.target.value })),
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "city", children: "City *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "city",
                      value: formData.city,
                      onChange: (e) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { city: e.target.value })),
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "state", children: "State *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "state",
                      value: formData.state,
                      onChange: (e) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { state: e.target.value })),
                      required: true
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "zipCode", children: "ZIP Code *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "zipCode",
                    value: formData.zipCode,
                    onChange: (e) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { zipCode: e.target.value })),
                    required: true
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-5 h-5" }),
                "Payment Information"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "You will be redirected to PayU's secure payment gateway to complete your payment" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-12 h-12 text-green-600 mx-auto mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Your payment information will be securely processed by PayU, a trusted payment gateway." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Terms & Agreements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Please review and agree to the following terms" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: "policies",
                    checked: formData.agreeToPolicies,
                    onCheckedChange: (checked) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { agreeToPolicies: checked }))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "policies", className: "text-sm leading-relaxed", children: [
                  "I agree to the",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/terms", target: "_blank", className: "text-primary hover:underline", children: "Terms of Service" }),
                  ",",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/return-refund", target: "_blank", className: "text-primary hover:underline", children: "Return & Refund Policy" }),
                  ",",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/remote-disclaimer", target: "_blank", className: "text-primary hover:underline", children: "Remote Support Disclaimer" }),
                  ", and",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/end-user-agreement", target: "_blank", className: "text-primary hover:underline", children: "End User License Agreement" }),
                  " ",
                  "*"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: "service-delivery",
                    checked: formData.agreeToServiceDelivery,
                    onCheckedChange: (checked) => setFormData((prev) => __spreadProps(__spreadValues({}, prev), { agreeToServiceDelivery: checked }))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "service-delivery", className: "text-sm leading-relaxed", children: [
                  "I agree to electronic service delivery and acknowledge that software licenses will be delivered via email within 24-48 hours, and I understand the",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/shipping", target: "_blank", className: "text-primary hover:underline", children: "Shipping Policy" }),
                  " ",
                  "for any physical items *"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => navigate("/pricing"),
                className: "flex-1",
                children: "Back to Pricing"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: isProcessing || !formData.agreeToPolicies || !formData.agreeToServiceDelivery,
                className: `flex-1 transition-all duration-200 ${formData.agreeToPolicies && formData.agreeToServiceDelivery ? "bg-green-600 hover:bg-green-700 text-white shadow-lg scale-105" : "bg-gray-400 cursor-not-allowed"}`,
                children: isProcessing ? "Redirecting to PayU..." : `Proceed to Payment - $${total.toFixed(2)}`
              }
            )
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  Payment as default
};
