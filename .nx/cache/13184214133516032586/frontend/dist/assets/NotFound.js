import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { u as useLocation, a as reactExports } from "./react-vendor.js";
const NotFound = () => {
  const location = useLocation();
  reactExports.useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-4 text-4xl font-bold", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xl text-gray-600", children: "Oops! Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "text-blue-500 underline hover:text-blue-700", children: "Return to Home" })
  ] }) });
};
export {
  NotFound as default
};
