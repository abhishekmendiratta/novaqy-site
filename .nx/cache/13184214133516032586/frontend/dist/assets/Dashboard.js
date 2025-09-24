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
import { k as useNavigate, a as reactExports } from "./react-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { B as Button } from "./input.js";
import { C as Card, a as CardContent, b as CardHeader, d as CardTitle, e as CardDescription } from "./card.js";
import { B as Badge } from "./badge.js";
import { A as Alert, a as AlertDescription } from "./alert.js";
import { s as supabase, a as activityTracker } from "./index.js";
import { s as subscriptionService } from "./supabaseService.js";
import { R as RefreshCw, l as CircleAlert, X, U as User, w as CreditCard, J as MessageSquare, S as Settings, D as Download, i as Mail, m as Eye, P as Phone, L as Lock, _ as Calendar } from "./utils-vendor.js";
import "./separator.js";
import "./auth-vendor.js";
import "./query-vendor.js";
const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const [payments, setPayments] = reactExports.useState([]);
  const [subscription, setSubscription] = reactExports.useState(null);
  const [isRefreshing, setIsRefreshing] = reactExports.useState(false);
  const [showCancelDialog, setShowCancelDialog] = reactExports.useState(false);
  const [cancellationReason, setCancellationReason] = reactExports.useState("");
  const [isProcessingAction, setIsProcessingAction] = reactExports.useState(false);
  const [devices, setDevices] = reactExports.useState([]);
  const [deviceStatistics, setDeviceStatistics] = reactExports.useState(null);
  const [supportTickets, setSupportTickets] = reactExports.useState([]);
  const [ticketStatistics, setTicketStatistics] = reactExports.useState(null);
  const [analytics, setAnalytics] = reactExports.useState(null);
  const fetchDashboardData = reactExports.useCallback(() => __async(null, null, function* () {
    try {
      setError(null);
      const { data: { user: user2 }, error: authError } = yield supabase.auth.getUser();
      if (authError) {
        setError({ type: "auth", message: "Authentication error. Please log in again." });
        navigate("/login");
        return;
      }
      if (!user2) {
        navigate("/login");
        return;
      }
      setUser(user2);
      try {
        const { data: subs, error: subError } = yield supabase.from("subscriptions").select("*").eq("user_id", user2.id).order("created_at", { ascending: false }).limit(1);
        if (subError) {
          console.error("Error fetching subscription:", subError);
          setSubscription(null);
        } else {
          setSubscription(subs && subs.length > 0 ? subs[0] : null);
        }
      } catch (error2) {
        console.error("Subscription fetch error:", error2);
        setSubscription(null);
      }
      try {
        const { data: pays, error: paysError } = yield supabase.from("payments").select("*").eq("user_id", user2.id).order("created_at", { ascending: false }).limit(10);
        if (paysError) {
          console.error("Error fetching payments:", paysError);
          setPayments([]);
        } else {
          setPayments(pays || []);
        }
      } catch (error2) {
        console.error("Payments fetch error:", error2);
        setPayments([]);
      }
    } catch (error2) {
      console.error("Dashboard data fetch error:", error2);
      setError({ type: "network", message: "Failed to load dashboard data. Please try again." });
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }), [navigate]);
  const handleRefresh = reactExports.useCallback(() => __async(null, null, function* () {
    setIsRefreshing(true);
    yield fetchDashboardData();
    if (user) {
      yield activityTracker.trackActivity("dashboard_refresh", {
        refreshed_at: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
  }), [fetchDashboardData, user]);
  reactExports.useCallback(() => __async(null, null, function* () {
    if (!subscription || !user) return;
    setIsProcessingAction(true);
    try {
      const success = yield subscriptionService.cancelSubscription(subscription.id, cancellationReason);
      if (success) {
        setError(null);
        yield fetchDashboardData();
        yield activityTracker.trackSubscriptionChange(subscription.id, "cancelled");
        setShowCancelDialog(false);
        setCancellationReason("");
      } else {
        setError({ type: "data", message: "Failed to cancel subscription. Please try again." });
      }
    } catch (error2) {
      console.error("Error cancelling subscription:", error2);
      setError({ type: "network", message: "Failed to cancel subscription. Please check your connection." });
    } finally {
      setIsProcessingAction(false);
    }
  }), [subscription, user, cancellationReason, fetchDashboardData]);
  reactExports.useCallback((newPlan) => __async(null, null, function* () {
    navigate("/payment", {
      state: {
        upgrade: true,
        currentPlan: subscription == null ? void 0 : subscription.plan_name,
        newPlan
      }
    });
    yield activityTracker.trackActivity("plan_upgrade_initiated", {
      current_plan: subscription == null ? void 0 : subscription.plan_name,
      target_plan: newPlan,
      initiated_at: (/* @__PURE__ */ new Date()).toISOString()
    });
  }), [subscription, navigate]);
  reactExports.useEffect(() => {
    fetchDashboardData();
    const { data: { subscription: subscription2 } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        navigate("/login");
      }
    });
    return () => subscription2.unsubscribe();
  }, [fetchDashboardData, navigate]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading dashboard..." })
    ] }) });
  }
  const currentPlan = subscription ? {
    name: subscription.plan_name || "Plan",
    price: subscription.plan_type === "business" ? "$199" : "$99",
    period: "/yr",
    renewsOn: subscription.end_date ? `Renews/Ends on ${new Date(subscription.end_date).toLocaleDateString()}` : "",
    status: (subscription.status || "active").replace(/\b\w/g, (c) => c.toUpperCase())
  } : {
    name: "Standard",
    price: "$49",
    period: "/month",
    renewsOn: "March 15, 2024",
    status: "Active"
  };
  const paymentHistory = payments && payments.length > 0 ? payments.map((p) => ({
    id: p.id,
    date: p.created_at ? new Date(p.created_at).toLocaleDateString() : "",
    amount: `${p.currency || "USD"} ${Number(p.amount || 0).toFixed(2)}`,
    status: (p.status || "").toString().toLowerCase() === "completed" ? "Paid" : p.status || "Pending",
    description: `${p.plan_name || "Plan"}${p.plan_type ? ` - ${p.plan_type}` : ""}`
  })) : [
    { id: 1, date: "Feb 15, 2024", amount: "$49.00", status: "Paid", description: "Standard Plan - Monthly" },
    { id: 2, date: "Jan 15, 2024", amount: "$49.00", status: "Paid", description: "Standard Plan - Monthly" },
    { id: 3, date: "Dec 15, 2023", amount: "$49.00", status: "Paid", description: "Standard Plan - Monthly" }
  ];
  function OverviewSection({ plan }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5" }),
          "Current Plan"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: plan.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: plan.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                plan.price,
                plan.period,
                " ",
                plan.renewsOn ? `• ${plan.renewsOn}` : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Upgrade Plan" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4 pt-4 border-t", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: "15" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Support Sessions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: "24/7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Monitoring" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary", children: "5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Devices Managed" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Quick Actions" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "h-auto p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-6 h-6 mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Request Support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Get help with your devices" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "h-auto p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-6 h-6 mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Download Remote Tool" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Allow technician access" })
          ] }) })
        ] }) })
      ] })
    ] });
  }
  const supportMessages = [
    { id: 1, date: "Today", message: "Your system optimization is complete. Everything is running smoothly!", from: "Tech Support" },
    { id: 2, date: "Yesterday", message: "Scheduled maintenance completed successfully. No action required.", from: "System Admin" },
    { id: 3, date: "3 days ago", message: "Monthly security scan completed. No threats detected.", from: "Security Team" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold mb-2", children: "Customer Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage your account and view support details" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleRefresh,
              disabled: isRefreshing,
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${isRefreshing ? "animate-spin" : ""}` }),
                "Refresh"
              ]
            }
          )
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDescription, { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: error.message }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => setError(null),
                className: "h-auto p-1",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: activeTab === "overview" ? "default" : "ghost",
              className: "w-full justify-start",
              onClick: () => setActiveTab("overview"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 mr-2" }),
                "Overview"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: activeTab === "billing" ? "default" : "ghost",
              className: "w-full justify-start",
              onClick: () => setActiveTab("billing"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-4 h-4 mr-2" }),
                "Billing"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: activeTab === "support" ? "default" : "ghost",
              className: "w-full justify-start",
              onClick: () => setActiveTab("support"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4 mr-2" }),
                "Support"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: activeTab === "settings" ? "default" : "ghost",
              className: "w-full justify-start",
              onClick: () => setActiveTab("settings"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4 mr-2" }),
                "Settings"
              ]
            }
          )
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-6", children: [
          activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewSection, { plan: currentPlan }),
          activeTab === "billing" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Payment History" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "View your billing history and download invoices" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: paymentHistory.map((payment) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: payment.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: payment.date })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: payment.amount }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: payment.status === "Paid" ? "secondary" : "destructive", children: payment.status })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }) })
              ] }, payment.id)) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Upgrade Your Plan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Get more features with our premium plans" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: "Premium Plan" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold mb-1", children: [
                    "$99",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: "/month" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "24/7 priority support + advanced monitoring" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", children: "Upgrade to Premium" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: "Enterprise Plan" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold mb-1", children: [
                    "$199",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: "/month" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Dedicated technician + unlimited devices" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "w-full", children: "Contact Sales" })
                ] })
              ] }) })
            ] })
          ] }),
          activeTab === "support" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Support Messages" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Recent updates from our support team" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: supportMessages.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border rounded-lg p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: message.from }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: message.date })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: message.message })
            ] }, message.id)) }) })
          ] }),
          activeTab === "settings" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Account Settings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Manage your account information and preferences" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Email Address" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "customer@example.com" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Phone Number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "+1 (555) 123-4567" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "Password" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Last changed 3 months ago" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", children: "Change" })
              ] })
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  Dashboard as default
};
