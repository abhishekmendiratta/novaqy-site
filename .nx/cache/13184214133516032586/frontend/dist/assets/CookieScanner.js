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
import { j as jsxRuntimeExports, c as createContextScope, P as Primitive } from "./ui-vendor.js";
import { a as reactExports } from "./react-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { B as Button } from "./input.js";
import { C as Card, b as CardHeader, d as CardTitle, e as CardDescription, a as CardContent } from "./card.js";
import { B as Badge } from "./badge.js";
import { c as cn } from "./index.js";
import { A as Alert, a as AlertDescription } from "./alert.js";
import { s as Scan, R as RefreshCw, d as CircleCheckBig, D as Download, u as TriangleAlert } from "./utils-vendor.js";
import "./separator.js";
import "./auth-vendor.js";
import "./query-vendor.js";
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const _a = props, {
      __scopeProgress,
      value: valueProp = null,
      max: maxProp,
      getValueLabel = defaultGetValueLabel
    } = _a, progressProps = __objRest(_a, [
      "__scopeProgress",
      "value",
      "max",
      "getValueLabel"
    ]);
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
      console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max)) {
      console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressProvider, { scope: __scopeProgress, value, max, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      __spreadProps(__spreadValues({
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": getProgressState(value, max),
        "data-value": value != null ? value : void 0,
        "data-max": max
      }, progressProps), {
        ref: forwardedRef
      })
    ) });
  }
);
Progress$1.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    var _b;
    const _a = props, { __scopeProgress } = _a, indicatorProps = __objRest(_a, ["__scopeProgress"]);
    const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      __spreadProps(__spreadValues({
        "data-state": getProgressState(context.value, context.max),
        "data-value": (_b = context.value) != null ? _b : void 0,
        "data-max": context.max
      }, indicatorProps), {
        ref: forwardedRef
      })
    );
  }
);
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value === "number";
}
function isValidMaxNumber(max) {
  return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root = Progress$1;
var Indicator = ProgressIndicator;
const Progress = reactExports.forwardRef((_a, ref) => {
  var _b = _a, { className, value } = _b, props = __objRest(_b, ["className", "value"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)
    }, props), {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Indicator,
        {
          className: "h-full w-full flex-1 bg-primary transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    })
  );
});
Progress.displayName = Root.displayName;
const Table = reactExports.forwardRef(
  (_c, ref) => {
    var _d = _c, { className } = _d, props = __objRest(_d, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", __spreadValues({ ref, className: cn("w-full caption-bottom text-sm", className) }, props)) });
  }
);
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(
  (_e, ref) => {
    var _f = _e, { className } = _f, props = __objRest(_f, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("thead", __spreadValues({ ref, className: cn("[&_tr]:border-b", className) }, props));
  }
);
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(
  (_g, ref) => {
    var _h = _g, { className } = _h, props = __objRest(_h, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", __spreadValues({ ref, className: cn("[&_tr:last-child]:border-0", className) }, props));
  }
);
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(
  (_i, ref) => {
    var _j = _i, { className } = _j, props = __objRest(_j, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("tfoot", __spreadValues({ ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className) }, props));
  }
);
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(
  (_k, ref) => {
    var _l = _k, { className } = _l, props = __objRest(_l, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "tr",
      __spreadValues({
        ref,
        className: cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className)
      }, props)
    );
  }
);
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(
  (_m, ref) => {
    var _n = _m, { className } = _n, props = __objRest(_n, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "th",
      __spreadValues({
        ref,
        className: cn(
          "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
          className
        )
      }, props)
    );
  }
);
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(
  (_o, ref) => {
    var _p = _o, { className } = _p, props = __objRest(_p, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("td", __spreadValues({ ref, className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className) }, props));
  }
);
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(
  (_q, ref) => {
    var _r = _q, { className } = _r, props = __objRest(_r, ["className"]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("caption", __spreadValues({ ref, className: cn("mt-4 text-sm text-muted-foreground", className) }, props));
  }
);
TableCaption.displayName = "TableCaption";
const CookieScanner = () => {
  const [isScanning, setIsScanning] = reactExports.useState(false);
  const [scanProgress, setScanProgress] = reactExports.useState(0);
  const [scanComplete, setScanComplete] = reactExports.useState(false);
  const [cookies, setCookies] = reactExports.useState([]);
  const [lastScanDate, setLastScanDate] = reactExports.useState(null);
  const mockCookies = [
    {
      name: "_ga",
      domain: ".novaqy.com",
      category: "Analytics",
      purpose: "Google Analytics tracking",
      retention: "2 years",
      thirdParty: true,
      secure: true,
      httpOnly: false
    },
    {
      name: "session_id",
      domain: "novaqy.com",
      category: "Strictly Necessary",
      purpose: "User session management",
      retention: "Session",
      thirdParty: false,
      secure: true,
      httpOnly: true
    },
    {
      name: "preferences",
      domain: "novaqy.com",
      category: "Functional",
      purpose: "Store user preferences",
      retention: "1 year",
      thirdParty: false,
      secure: true,
      httpOnly: false
    },
    {
      name: "_fbp",
      domain: ".novaqy.com",
      category: "Advertising",
      purpose: "Facebook pixel tracking",
      retention: "3 months",
      thirdParty: true,
      secure: true,
      httpOnly: false
    }
  ];
  reactExports.useEffect(() => {
    const savedScanDate = localStorage.getItem("cookie-scan-date");
    if (savedScanDate) {
      setLastScanDate(savedScanDate);
    }
    const savedCookies = localStorage.getItem("cookie-scan-results");
    if (savedCookies) {
      setCookies(JSON.parse(savedCookies));
      setScanComplete(true);
    }
  }, []);
  const startScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setScanComplete(false);
    const scanInterval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(scanInterval);
          completeScan();
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
  const completeScan = () => {
    setIsScanning(false);
    setScanComplete(true);
    const now = (/* @__PURE__ */ new Date()).toISOString();
    setCookies(mockCookies);
    setLastScanDate(now);
    localStorage.setItem("cookie-scan-results", JSON.stringify(mockCookies));
    localStorage.setItem("cookie-scan-date", now);
  };
  const exportResults = () => {
    const exportData = {
      scanDate: lastScanDate,
      cookies,
      exportDate: (/* @__PURE__ */ new Date()).toISOString()
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cookie-scan-results.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const getCategoryColor = (category) => {
    switch (category) {
      case "Strictly Necessary":
        return "bg-red-100 text-red-800";
      case "Functional":
        return "bg-blue-100 text-blue-800";
      case "Analytics":
        return "bg-green-100 text-green-800";
      case "Advertising":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container py-20 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-4", children: "Cookie Scanner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Scan and analyze cookies on our website to maintain transparency and compliance with privacy regulations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Scan, { className: "w-5 h-5" }),
            "Cookie Scan"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Perform a comprehensive scan of cookies currently set on this website." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Scan Status" }),
              lastScanDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                "Last scan: ",
                new Date(lastScanDate).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: startScan,
                disabled: isScanning,
                className: "flex items-center gap-2",
                children: isScanning ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }),
                  "Scanning..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Scan, { className: "w-4 h-4" }),
                  "Start Scan"
                ] })
              }
            )
          ] }),
          isScanning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scanning cookies..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                scanProgress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: scanProgress, className: "w-full" })
          ] }),
          scanComplete && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "border-green-200 bg-green-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-green-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "text-green-800", children: [
              "Scan completed successfully. Found ",
              cookies.length,
              " cookies."
            ] })
          ] })
        ] }) })
      ] }),
      scanComplete && cookies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center justify-between", children: [
            "Scan Results",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: exportResults, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-2" }),
              "Export Results"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Detailed analysis of cookies found during the scan." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Domain" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Purpose" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Retention" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Third Party" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Security" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: cookies.map((cookie, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-sm", children: cookie.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-sm", children: cookie.domain }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: getCategoryColor(cookie.category), children: cookie.category }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "max-w-xs truncate", title: cookie.purpose, children: cookie.purpose }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: cookie.retention }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: cookie.thirdParty ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", children: "Yes" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: "No" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
              cookie.secure && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "Secure" }),
              cookie.httpOnly && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "HttpOnly" })
            ] }) })
          ] }, index)) })
        ] }) }) })
      ] }),
      scanComplete && cookies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Cookie Categories Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Breakdown of cookies by category and compliance status." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: ["Strictly Necessary", "Functional", "Analytics", "Advertising"].map((category) => {
          const categoryCookies = cookies.filter((c) => c.category === category);
          const thirdPartyCount = categoryCookies.filter((c) => c.thirdParty).length;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Total: ",
                categoryCookies.length
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "Third Party: ",
                thirdPartyCount
              ] }),
              thirdPartyCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3 text-yellow-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-yellow-600", children: "Requires consent" })
              ] })
            ] })
          ] }, category);
        }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Compliance Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "How we use cookie scanning results for privacy compliance." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "GDPR Compliance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Regular scanning ensures up-to-date cookie inventory" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Identifies cookies requiring prior consent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Supports lawful basis documentation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Enables Data Protection Impact Assessments" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: "PIPEDA Compliance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Maintains transparency about data collection" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Supports meaningful consent mechanisms" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Documents privacy management practices" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Enables accountability reporting" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: "This scanner provides a snapshot of cookies at scan time. Cookie usage may change based on user interactions and consent preferences." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  CookieScanner as default
};
