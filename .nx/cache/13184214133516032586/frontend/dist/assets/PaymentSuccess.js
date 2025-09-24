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
import { C as Card, b as CardHeader, d as CardTitle, e as CardDescription, a as CardContent } from "./card.js";
import { C as Checkbox } from "./checkbox.js";
import { L as Label } from "./label.js";
import { B as Badge } from "./badge.js";
import { u as useToast, a as activityTracker } from "./index.js";
import { a as paymentFlowService } from "./supabaseService.js";
import "./enc-hex.js";
import { d as CircleCheckBig, F as FileText, u as TriangleAlert, x as PenTool, b as Shield } from "./utils-vendor.js";
import "./separator.js";
import "./auth-vendor.js";
import "./query-vendor.js";
const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showAgreement, setShowAgreement] = reactExports.useState(false);
  const [isSigned, setIsSigned] = reactExports.useState(false);
  const [signature, setSignature] = reactExports.useState({
    fullName: "",
    email: "",
    date: "",
    ipAddress: "",
    timestamp: ""
  });
  const getPaymentDetails = () => {
    var _a, _b, _c;
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.has("txnid") && urlParams.has("status")) {
      const txnid = urlParams.get("txnid");
      const status = urlParams.get("status");
      if (status !== "success") {
        navigate("/payment/failed");
        return null;
      }
      const payuResponse = {
        txnid,
        status,
        firstname: urlParams.get("firstname"),
        amount: urlParams.get("amount"),
        productinfo: urlParams.get("productinfo"),
        email: urlParams.get("email"),
        phone: urlParams.get("phone"),
        mode: urlParams.get("mode"),
        bank_ref_num: urlParams.get("bank_ref_num"),
        bankcode: urlParams.get("bankcode"),
        cardnum: urlParams.get("cardnum"),
        cardhash: urlParams.get("cardhash"),
        hash: urlParams.get("hash")
      };
      return {
        transactionId: txnid,
        status,
        amount: parseFloat(payuResponse.amount || "0"),
        plan: payuResponse.productinfo || "Unknown Plan",
        customerEmail: payuResponse.email || "",
        payuResponse
      };
    }
    return {
      transactionId: "",
      status: "success",
      amount: ((_a = location.state) == null ? void 0 : _a.amount) || 0,
      plan: ((_b = location.state) == null ? void 0 : _b.plan) || "Unknown Plan",
      customerEmail: ((_c = location.state) == null ? void 0 : _c.customerEmail) || "",
      payuResponse: null
    };
  };
  const paymentDetails = getPaymentDetails();
  const plan = (paymentDetails == null ? void 0 : paymentDetails.plan) || "Unknown Plan";
  const amount = (paymentDetails == null ? void 0 : paymentDetails.amount) || 0;
  const customerEmail = (paymentDetails == null ? void 0 : paymentDetails.customerEmail) || "";
  const [processingPayment, setProcessingPayment] = reactExports.useState(false);
  const processPayUPayment = reactExports.useCallback(() => __async(null, null, function* () {
    if (!(paymentDetails == null ? void 0 : paymentDetails.payuResponse)) return;
    try {
      const userData = {
        first_name: paymentDetails.payuResponse.firstname || "",
        last_name: "",
        // PayU doesn't provide last name
        email: paymentDetails.payuResponse.email || "",
        phone: paymentDetails.payuResponse.phone || "",
        address: "",
        // We'll need to get this from somewhere else
        city: "",
        state: "",
        zip_code: ""
      };
      const result = yield paymentFlowService.processPaymentSuccess(
        paymentDetails.transactionId,
        paymentDetails.payuResponse,
        userData,
        paymentDetails.plan,
        "personal"
        // Default to personal, can be updated later
      );
      if (result) {
        yield activityTracker.trackPaymentSuccess(
          paymentDetails.transactionId,
          paymentDetails.amount
        );
        yield activityTracker.trackUserRegistration({
          email: userData.email,
          plan: paymentDetails.plan,
          amount: paymentDetails.amount
        });
      } else {
        toast({
          title: "Database Error",
          description: "Payment was successful but failed to save data. Please contact support.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error processing PayU payment:", error);
      yield activityTracker.trackActivity("payment_processing_error", {
        transaction_id: paymentDetails.transactionId,
        error: error instanceof Error ? error.message : "Unknown error",
        plan: paymentDetails.plan
      });
      toast({
        title: "Processing Error",
        description: "There was an error processing your payment data.",
        variant: "destructive"
      });
    } finally {
      setProcessingPayment(false);
    }
  }), [paymentDetails, toast]);
  reactExports.useEffect(() => {
    if (!paymentDetails) {
      navigate("/pricing");
      return;
    }
    if (paymentDetails.payuResponse && paymentDetails.transactionId && !processingPayment) {
      setProcessingPayment(true);
      processPayUPayment();
    }
    const timer = setTimeout(() => {
      setShowAgreement(true);
    }, 2e3);
    return () => clearTimeout(timer);
  }, [paymentDetails, navigate, processingPayment, processPayUPayment]);
  const handleSignature = () => {
    if (!signature.fullName.trim()) {
      toast({
        title: "Signature Required",
        description: "Please enter your full name to sign the agreement.",
        variant: "destructive"
      });
      return;
    }
    activityTracker.trackActivity("service_agreement_signed", {
      plan,
      amount,
      customer_email: customerEmail,
      signed_by: signature.fullName.trim(),
      transaction_id: paymentDetails == null ? void 0 : paymentDetails.transactionId
    });
    const now = /* @__PURE__ */ new Date();
    setSignature((prev) => __spreadProps(__spreadValues({}, prev), {
      email: customerEmail,
      date: now.toLocaleDateString(),
      timestamp: now.toISOString(),
      ipAddress: "Captured on form submission"
      // In real app, get from server
    }));
    setIsSigned(true);
    toast({
      title: "Agreement Signed Successfully",
      description: "Your service agreement has been digitally signed and recorded."
    });
    console.log("Service Agreement Signed:", {
      plan,
      amount,
      customerEmail,
      signature: __spreadProps(__spreadValues({}, signature), {
        fullName: signature.fullName.trim(),
        signedAt: now.toISOString()
      })
    });
  };
  if (!showAgreement) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-20 h-20 text-green-600 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-4 text-green-600", children: "Payment Successful!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl text-muted-foreground mb-4", children: [
            "Thank you for choosing Novaqy. Your payment of $",
            amount,
            " for ",
            plan,
            " has been processed successfully.",
            (paymentDetails == null ? void 0 : paymentDetails.transactionId) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-sm mt-2", children: [
              "Transaction ID: ",
              paymentDetails.transactionId
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-lg px-4 py-2", children: "Account Setup in Progress..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center space-x-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Preparing your service agreement..." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  if (!isSigned) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-16 h-16 text-green-600 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold mb-2", children: "Payment Successful!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
            "Your payment of $",
            amount,
            " for ",
            plan,
            " has been processed. Please review and sign your service agreement below."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5" }),
              "Service Agreement - ",
              plan
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Please read and digitally sign this service agreement. This legally binding document protects both parties and helps prevent chargeback disputes." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 p-6 rounded-lg space-y-4 text-sm leading-relaxed max-h-96 overflow-y-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg mb-2", children: "Novaqy Managed IT Services Agreement" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Effective Date:" }),
                  " ",
                  (/* @__PURE__ */ new Date()).toLocaleDateString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Customer:" }),
                  " ",
                  customerEmail
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Service Plan:" }),
                  " ",
                  plan
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Payment Amount:" }),
                  " $",
                  amount,
                  " USD (Annual Subscription)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Service Term:" }),
                  " 12 months from activation date"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "1. Services Provided" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Novaqy agrees to provide the managed IT services as described in the selected plan, including remote technical support, system monitoring, security services, and software management as outlined in the plan details. Services are delivered electronically and begin immediately upon payment processing." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "2. Payment Terms & Refund Policy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "Customer agrees to pay the full amount of $",
                  amount,
                  " for the selected annual service plan. Payment is due in full at the time of purchase. ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Refund Policy:" }),
                  " Due to the immediate delivery of digital services, refunds are available within 30 days of purchase if services have not been utilized. After 30 days or if services have been accessed, refunds are not available. Customer may cancel at any time, but no refunds will be provided for the remaining term."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "3. Service Delivery & Access" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Services will be delivered electronically via secure remote access. Customer grants Novaqy permission to access their systems for the purpose of providing technical support and maintenance as described in the service plan. All access is logged and secured according to industry standards. Customer may revoke access at any time by contacting support." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "4. Data Protection & Privacy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Novaqy will maintain appropriate security measures to protect customer data accessed during service delivery. Customer acknowledges that remote access may involve transmission of diagnostic information and system data necessary for service provision. All data handling complies with applicable privacy laws including PIPEDA (Canada) and relevant US state privacy laws." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "5. Service Availability & Support Hours" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Support is available Monday through Friday, 8:30 AM to 8:30 PM Eastern Time. Emergency monitoring is provided 24/7 for critical systems. Response times vary by service plan: Essential Care (24-48 hours), Advanced Care (12-24 hours), Premium Care (4-12 hours), Family Care (2-8 hours). Customer acknowledges that technology support involves inherent risks and that Novaqy cannot guarantee specific outcomes." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "6. Software Licenses & Third-Party Services" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Where included in the service plan, Novaqy will provide software licenses and manage third-party services. Customer acknowledges that software licenses are provided as-is and subject to the original vendor's terms. Novaqy is not responsible for third-party service outages or changes in vendor policies." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "7. Customer Responsibilities" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Customer agrees to: (a) provide accurate contact and system information, (b) maintain backup copies of important data, (c) follow Novaqy's security recommendations, (d) promptly report any security concerns or system issues, and (e) ensure their systems meet minimum requirements for service delivery." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "8. Limitation of Liability" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Novaqy's liability is limited to the amount paid for services in the preceding 12 months. Customer acknowledges that technology support involves inherent risks and that Novaqy cannot guarantee specific outcomes or prevent all possible issues. Novaqy is not liable for indirect, incidental, or consequential damages." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "9. Termination & Cancellation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Either party may terminate this agreement with 30 days written notice. Upon termination, Novaqy will cease service delivery and customer will retain access to any provided software licenses according to vendor terms. No refunds will be provided for partial months or unused services." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "10. Dispute Resolution" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Any disputes arising from this agreement will be resolved through good faith negotiation. If resolution cannot be reached, disputes will be subject to binding arbitration in accordance with applicable consumer protection laws. Customer agrees not to initiate chargebacks for digital services that have been delivered." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "11. Governing Law" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This agreement is governed by the laws of Ontario, Canada, and applicable US state laws where services are provided. Customer consents to electronic communication and acknowledges that digital signatures are legally binding and equivalent to handwritten signatures." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "12. Entire Agreement" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This agreement, together with the Terms of Service, Privacy Policy, and Refund Policy, constitutes the entire agreement between the parties. Customer acknowledges that they have read, understood, and agree to be bound by all terms and conditions." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-4 mt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: "Acknowledgment of Digital Service Delivery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Customer acknowledges that: (a) services are delivered digitally and begin immediately upon payment, (b) digital services cannot be returned once accessed, (c) customer has had opportunity to review service details before purchase, and (d) customer understands the refund policy and service terms." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "This agreement is legally binding and will be used to protect against chargeback disputes" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "fullName", children: "Full Name (Digital Signature) *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "fullName",
                      value: signature.fullName,
                      onChange: (e) => setSignature((prev) => __spreadProps(__spreadValues({}, prev), { fullName: e.target.value })),
                      placeholder: "Enter your full legal name",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Agreement Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: (/* @__PURE__ */ new Date()).toLocaleDateString(),
                      readOnly: true,
                      className: "bg-muted"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: "understand",
                    checked: signature.fullName.length > 0,
                    onCheckedChange: () => {
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "understand", className: "text-sm", children: "I have read and agree to the terms of this service agreement" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: handleSignature,
              disabled: !signature.fullName.trim(),
              className: "px-8 py-3 text-lg",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PenTool, { className: "w-5 h-5 mr-2" }),
                "Sign Agreement & Complete Setup"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "By signing, you acknowledge that this is a legally binding agreement" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-20 h-20 text-green-600 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-4 text-green-600", children: "Agreement Signed Successfully!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl text-muted-foreground mb-4", children: [
          "Welcome to Novaqy! Your ",
          plan,
          " is now fully activated and your service agreement has been digitally signed and recorded."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-lg px-4 py-2", children: "Account Active" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Service Agreement Summary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Plan:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: plan })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Amount Paid:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
              "$",
              amount
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Signed By:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: signature.fullName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Signed Date:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: signature.date })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Status:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", children: "Active" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
          "A copy of your signed agreement has been sent to ",
          customerEmail
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate("/dashboard"), className: "flex-1", children: "Go to Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => navigate("/contact"), className: "flex-1", children: "Contact Support" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  PaymentSuccess as default
};
