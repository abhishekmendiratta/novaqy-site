import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { u as useLocation, k as useNavigate, a as reactExports } from "./react-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { B as Button } from "./input.js";
import { C as Card, b as CardHeader, d as CardTitle, e as CardDescription, a as CardContent } from "./card.js";
import { u as TriangleAlert, R as RefreshCw, y as House } from "./utils-vendor.js";
import "./index.js";
import "./auth-vendor.js";
import "./query-vendor.js";
import "./separator.js";
const PaymentFailed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getFailureDetails = () => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.has("txnid")) {
      return {
        txnid: urlParams.get("txnid"),
        amount: urlParams.get("amount"),
        productinfo: urlParams.get("productinfo"),
        error: urlParams.get("error") || urlParams.get("error_Message") || "Payment was cancelled or failed",
        status: urlParams.get("status")
      };
    }
    return null;
  };
  const failureDetails = getFailureDetails();
  reactExports.useEffect(() => {
  }, [failureDetails]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-20 h-20 text-red-600 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-4 text-red-600", children: "Payment Failed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-4", children: "We're sorry, but your payment could not be processed at this time." }),
        failureDetails && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left bg-muted/30 p-4 rounded-lg mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: "Payment Details:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
            failureDetails.txnid && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Transaction ID:" }),
              " ",
              failureDetails.txnid
            ] }),
            failureDetails.amount && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Amount:" }),
              " $",
              failureDetails.amount
            ] }),
            failureDetails.productinfo && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Plan:" }),
              " ",
              failureDetails.productinfo
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Reason:" }),
              " ",
              failureDetails.error
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "What happened?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "There are several reasons why a payment might fail:" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-left space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Insufficient funds in your account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Incorrect card details or expiry date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Bank security restrictions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Network connectivity issues" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Payment was cancelled by the user" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Don't worry! You can try again or contact our support team for assistance." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => navigate("/pricing"), className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 mr-2" }),
            "Try Again"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => navigate("/contact"), className: "flex-1", children: "Contact Support" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => navigate("/"), className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-4 h-4 mr-2" }),
            "Go Home"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  PaymentFailed as default
};
