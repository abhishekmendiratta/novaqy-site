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
import { p as Root, j as jsxRuntimeExports, q as Portal, r as Content, t as Close, T as Title, s as Description, O as Overlay } from "./ui-vendor.js";
import { a as reactExports, k as useNavigate } from "./react-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { B as Button, I as Input } from "./input.js";
import { C as Card, a as CardContent, b as CardHeader, d as CardTitle, e as CardDescription } from "./card.js";
import { B as Badge } from "./badge.js";
import { L as Label } from "./label.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Textarea } from "./select.js";
import { c as cn, u as useToast, s as supabase } from "./index.js";
import { X, z as Upload, C as ChartColumn, I as Users, F as FileText, J as MessageSquare, w as CreditCard, K as Activity, T as TrendingUp, k as Clock, N as DollarSign, O as Plus, V as SquarePen, v as Trash2, d as CircleCheckBig, W as UserCheck, b as Shield, Y as Briefcase, u as TriangleAlert, _ as Calendar, $ as Filter, m as Eye, a0 as Save } from "./utils-vendor.js";
import { d as dataService } from "./dataService.js";
import { R as ResponsiveContainer, A as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Area, B as BarChart, b as Bar, P as PieChart, c as Pie, d as Cell } from "./charts-vendor.js";
import "./separator.js";
import "./auth-vendor.js";
import "./query-vendor.js";
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    __spreadValues({
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef((_c, ref) => {
  var _d = _c, { className, children } = _d, props = __objRest(_d, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
});
DialogContent.displayName = Content.displayName;
const DialogHeader = (_e) => {
  var _f = _e, { className } = _f, props = __objRest(_f, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues({ className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className) }, props));
};
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef((_g, ref) => {
  var _h = _g, { className } = _h, props = __objRest(_h, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    __spreadValues({
      ref,
      className: cn("text-lg font-semibold leading-none tracking-tight", className)
    }, props)
  );
});
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef((_i, ref) => {
  var _j = _i, { className } = _j, props = __objRest(_j, ["className"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, __spreadValues({ ref, className: cn("text-sm text-muted-foreground", className) }, props));
});
DialogDescription.displayName = Description.displayName;
const FileUpload = ({
  onFileSelect,
  onFileRemove,
  currentImageUrl,
  accept = "image/*",
  maxSize = 5,
  className = ""
}) => {
  const [isDragOver, setIsDragOver] = reactExports.useState(false);
  const [previewUrl, setPreviewUrl] = reactExports.useState(currentImageUrl || null);
  const [error, setError] = reactExports.useState(null);
  const fileInputRef = reactExports.useRef(null);
  const validateFile = reactExports.useCallback((file) => {
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return false;
    }
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      setError(`File size must be less than ${maxSize}MB`);
      return false;
    }
    setError(null);
    return true;
  }, [maxSize]);
  const handleFileSelect = reactExports.useCallback((file) => {
    if (validateFile(file)) {
      onFileSelect(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  }, [onFileSelect, validateFile]);
  const handleDrop = reactExports.useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);
  const handleDragOver = reactExports.useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);
  const handleDragLeave = reactExports.useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);
  const handleFileInputChange = reactExports.useCallback((e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);
  const handleRemove = reactExports.useCallback(() => {
    setPreviewUrl(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onFileRemove == null ? void 0 : onFileRemove();
  }, [onFileRemove]);
  const handleClick = reactExports.useCallback(() => {
    var _a;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `space-y-4 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "file-upload", children: "Upload Image" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: `border-2 border-dashed transition-colors cursor-pointer ${isDragOver ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-muted-foreground/50"}`,
        onDrop: handleDrop,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onClick: handleClick,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-center", children: previewUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: previewUrl,
                alt: "Preview",
                className: "max-w-full max-h-48 rounded-lg object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "destructive",
                size: "sm",
                className: "absolute -top-2 -right-2 h-6 w-6 rounded-full p-0",
                onClick: (e) => {
                  e.stopPropagation();
                  handleRemove();
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Click to change image or drag and drop a new one" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-6 w-6 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Drag and drop an image here, or click to browse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              "Supports JPG, PNG, GIF up to ",
              maxSize,
              "MB"
            ] })
          ] })
        ] }) })
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        ref: fileInputRef,
        id: "file-upload",
        type: "file",
        accept,
        onChange: handleFileInputChange,
        className: "hidden"
      }
    )
  ] });
};
class ImageService {
  /**
   * Validates an image file
   */
  static validateImage(file) {
    if (!this.ALLOWED_TYPES.includes(file.type)) {
      return {
        isValid: false,
        error: "Please select a valid image file (JPG, PNG, GIF, or WebP)"
      };
    }
    if (file.size > this.MAX_FILE_SIZE) {
      return {
        isValid: false,
        error: "File size must be less than 5MB"
      };
    }
    return { isValid: true };
  }
  /**
   * Converts a File to a base64 data URL
   */
  static fileToDataUrl(file) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsDataURL(file);
      });
    });
  }
  /**
   * Compresses an image file if it's too large
   */
  static compressImage(file, maxWidth = 1200, quality = 0.8) {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
          let { width, height } = img;
          if (width > maxWidth) {
            height = height * maxWidth / width;
            width = maxWidth;
          }
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob((blob) => {
            if (blob) {
              const compressedFile = new File([blob], file.name, {
                type: file.type,
                lastModified: Date.now()
              });
              resolve(compressedFile);
            } else {
              resolve(file);
            }
          }, file.type, quality);
        };
        img.src = URL.createObjectURL(file);
      });
    });
  }
  /**
   * Processes an image file: validates, compresses if needed, and converts to data URL
   */
  static processImage(file) {
    return __async(this, null, function* () {
      try {
        const validation = this.validateImage(file);
        if (!validation.isValid) {
          return { dataUrl: "", error: validation.error };
        }
        let processedFile = file;
        if (file.size > 1024 * 1024) {
          processedFile = yield this.compressImage(file);
        }
        const dataUrl = yield this.fileToDataUrl(processedFile);
        return { dataUrl };
      } catch (error) {
        return {
          dataUrl: "",
          error: error instanceof Error ? error.message : "Failed to process image"
        };
      }
    });
  }
  /**
   * Creates a thumbnail from an image
   */
  static createThumbnail(file, size = 200) {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
          canvas.width = size;
          canvas.height = size;
          const aspectRatio = img.width / img.height;
          let drawWidth = size;
          let drawHeight = size;
          if (aspectRatio > 1) {
            drawHeight = size / aspectRatio;
          } else {
            drawWidth = size * aspectRatio;
          }
          const x = (size - drawWidth) / 2;
          const y = (size - drawHeight) / 2;
          ctx.drawImage(img, x, y, drawWidth, drawHeight);
          resolve(canvas.toDataURL("image/jpeg", 0.8));
        };
        img.src = URL.createObjectURL(file);
      });
    });
  }
  /**
   * Gets image dimensions
   */
  static getImageDimensions(file) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ width: img.width, height: img.height });
        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = URL.createObjectURL(file);
      });
    });
  }
  /**
   * Generates a unique filename for uploaded images
   */
  static generateFileName(originalName) {
    const timestamp = Date.now();
    const extension = originalName.split(".").pop() || "jpg";
    return `cms-image-${timestamp}.${extension}`;
  }
}
__publicField(ImageService, "MAX_FILE_SIZE", 5 * 1024 * 1024);
// 5MB
__publicField(ImageService, "ALLOWED_TYPES", ["image/jpeg", "image/png", "image/gif", "image/webp"]);
const generateRevenueChartData = (payments) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return months.map((month, index) => {
    const monthRevenue = payments.filter(
      (payment) => payment.status === "completed" && new Date(payment.created_at).getMonth() === index && new Date(payment.created_at).getFullYear() === currentYear
    ).reduce((sum, payment) => sum + payment.amount, 0);
    return { month, revenue: monthRevenue };
  });
};
const generateUserGrowthChartData = (users) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return months.map((month, index) => {
    const monthUsers = users.filter(
      (user) => new Date(user.created_at).getMonth() === index && new Date(user.created_at).getFullYear() === currentYear
    ).length;
    return { month, users: monthUsers };
  });
};
const generatePlanDistributionData = (users) => {
  const planCounts = {};
  users.forEach((user) => {
    var _a;
    const plan = ((_a = user.user_metadata) == null ? void 0 : _a.plan) || "No Plan";
    planCounts[plan] = (planCounts[plan] || 0) + 1;
  });
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];
  return Object.entries(planCounts).map(([name, value], index) => ({
    name,
    value,
    color: colors[index % colors.length]
  }));
};
const generateRecentActivityData = (users, payments) => {
  const activities = [];
  users.slice(-3).forEach((user) => {
    var _a;
    activities.push({
      id: `user-${user.id}`,
      type: "user",
      description: `${((_a = user.user_metadata) == null ? void 0 : _a.full_name) || "New user"} joined`,
      timestamp: new Date(user.created_at).toLocaleString()
    });
  });
  payments.slice(-3).forEach((payment) => {
    activities.push({
      id: `payment-${payment.id}`,
      type: "payment",
      description: `Payment of $${payment.amount} ${payment.status}`,
      timestamp: new Date(payment.created_at).toLocaleString()
    });
  });
  return activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 5);
};
const Admin = () => {
  var _a;
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = reactExports.useState("dashboard");
  const [payments, setPayments] = reactExports.useState([]);
  const [paymentFilter, setPaymentFilter] = reactExports.useState("all");
  const [loading, setLoading] = reactExports.useState(true);
  const [stats, setStats] = reactExports.useState({
    totalCustomers: 0,
    activePlans: 0,
    supportTickets: 0,
    monthlyRevenue: "$0"
  });
  const [recentCustomers, setRecentCustomers] = reactExports.useState([]);
  const [loadingStats, setLoadingStats] = reactExports.useState(true);
  const [analyticsData, setAnalyticsData] = reactExports.useState({
    revenueChart: [],
    userGrowthChart: [],
    planDistribution: [],
    recentActivity: []
  });
  const [supportTickets, setSupportTickets] = reactExports.useState([]);
  const [ticketFilter, setTicketFilter] = reactExports.useState("all");
  const [showTicketDialog, setShowTicketDialog] = reactExports.useState(false);
  const [editingTicket, setEditingTicket] = reactExports.useState(null);
  const [staff, setStaff] = reactExports.useState([]);
  const [showStaffDialog, setShowStaffDialog] = reactExports.useState(false);
  const [editingStaff, setEditingStaff] = reactExports.useState(null);
  const [blogPostsData, setBlogPostsData] = reactExports.useState([]);
  const [caseStudiesData, setCaseStudiesData] = reactExports.useState([]);
  const [editingPost, setEditingPost] = reactExports.useState(null);
  const [editingStudy, setEditingStudy] = reactExports.useState(null);
  const [showPostDialog, setShowPostDialog] = reactExports.useState(false);
  const [showStudyDialog, setShowStudyDialog] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const enforceAuth = () => __async(null, null, function* () {
      const { data } = yield supabase.auth.getUser();
      const user = data == null ? void 0 : data.user;
      if (!user) {
        navigate("/login");
        return;
      }
      const adminEmails = "".split(",").map((e) => e.trim()).filter(Boolean);
      const isAdmin = user.user_metadata && user.user_metadata.role === "admin" || (user.email ? adminEmails.includes(user.email) : false);
      if (!isAdmin) {
        toast({
          title: "Not authorized",
          description: "You do not have permission to access the admin panel.",
          variant: "destructive"
        });
        navigate("/dashboard");
        return;
      }
      setLoading(false);
    });
    enforceAuth();
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        navigate("/login");
      }
    });
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate, toast]);
  reactExports.useEffect(() => {
    if (loading) return;
    setBlogPostsData(dataService.getBlogPosts());
    setCaseStudiesData(dataService.getCaseStudies());
  }, [loading]);
  reactExports.useEffect(() => {
    const fetchSupportTickets = () => __async(null, null, function* () {
      try {
        const { data: tickets, error } = yield supabase.from("support_tickets").select("*").order("created_at", { ascending: false });
        if (error) {
          console.error("Error fetching support tickets:", error);
        } else {
          setSupportTickets(tickets || []);
        }
      } catch (error) {
        console.error("Error fetching support tickets:", error);
      }
    });
    if (!loading) {
      fetchSupportTickets();
    }
  }, [loading]);
  reactExports.useEffect(() => {
    const fetchStats = () => __async(null, null, function* () {
      try {
        setLoadingStats(true);
        const { data: users, error: usersError } = yield supabase.from("users").select("id, created_at, user_metadata");
        if (usersError) {
          console.error("Error fetching users:", usersError);
        }
        const { data: paymentsData, error: paymentsError } = yield supabase.from("payments").select("amount, status, created_at");
        if (paymentsError) {
          console.error("Error fetching payments:", paymentsError);
        }
        const { data: ticketsData, error: ticketsError } = yield supabase.from("support_tickets").select("status");
        if (ticketsError) {
          console.error("Error fetching tickets:", ticketsError);
        }
        const supportTicketsCount = (ticketsData == null ? void 0 : ticketsData.filter(
          (ticket) => ticket.status === "open" || ticket.status === "in_progress"
        ).length) || 0;
        const totalCustomers = (users == null ? void 0 : users.length) || 0;
        const activePlans = (users == null ? void 0 : users.filter(
          (user) => {
            var _a2;
            return ((_a2 = user.user_metadata) == null ? void 0 : _a2.plan) && ["basic", "standard", "premium"].includes(user.user_metadata.plan.toLowerCase());
          }
        ).length) || 0;
        const monthlyRevenue = (paymentsData == null ? void 0 : paymentsData.filter(
          (payment) => payment.status === "completed" && new Date(payment.created_at) >= new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1)
        ).reduce((sum, payment) => sum + payment.amount, 0)) || 0;
        setStats({
          totalCustomers,
          activePlans,
          supportTickets: supportTicketsCount,
          monthlyRevenue: `$${monthlyRevenue.toLocaleString()}`
        });
        const revenueChart = generateRevenueChartData(paymentsData || []);
        const userGrowthChart = generateUserGrowthChartData(users || []);
        const planDistribution = generatePlanDistributionData(users || []);
        const recentActivity = generateRecentActivityData(users || [], paymentsData || []);
        setAnalyticsData({
          revenueChart,
          userGrowthChart,
          planDistribution,
          recentActivity
        });
        const recentUsers = (users == null ? void 0 : users.sort(
          (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        ).slice(0, 5)) || [];
        const recentCustomersData = recentUsers.map((user) => {
          var _a2, _b, _c;
          return {
            id: user.id,
            name: ((_a2 = user.user_metadata) == null ? void 0 : _a2.full_name) || ((_b = user.user_metadata) == null ? void 0 : _b.name) || "Unknown",
            plan: ((_c = user.user_metadata) == null ? void 0 : _c.plan) || "No Plan",
            status: "Active",
            joined: new Date(user.created_at).toLocaleDateString()
          };
        });
        setRecentCustomers(recentCustomersData);
      } catch (error) {
        console.error("Error fetching admin stats:", error);
        toast({
          title: "Error",
          description: "Failed to load admin statistics",
          variant: "destructive"
        });
      } finally {
        setLoadingStats(false);
      }
    });
    if (!loading) {
      fetchStats();
    }
  }, [loading, toast]);
  reactExports.useEffect(() => {
    const fetchPayments = () => __async(null, null, function* () {
      try {
        const { data: paymentsData, error } = yield supabase.from("payments").select("*").order("created_at", { ascending: false });
        if (error) {
          console.error("Error fetching payments:", error);
          const localPayments = localStorage.getItem("novaqy_payments");
          if (localPayments) {
            setPayments(JSON.parse(localPayments));
          }
        } else {
          setPayments(paymentsData || []);
        }
      } catch (error) {
        console.error("Error fetching payments:", error);
        const localPayments = localStorage.getItem("novaqy_payments");
        if (localPayments) {
          setPayments(JSON.parse(localPayments));
        }
      }
    });
    if (!loading) {
      fetchPayments();
    }
  }, [loading]);
  const handleCreatePost = reactExports.useCallback(() => {
    setEditingPost({
      id: 0,
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "Admin",
      publishedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      status: "draft",
      tags: [],
      imageUrl: ""
    });
    setShowPostDialog(true);
  }, []);
  const handleEditPost = reactExports.useCallback((post) => {
    setEditingPost(__spreadValues({}, post));
    setShowPostDialog(true);
  }, []);
  const handleSavePost = reactExports.useCallback((post) => __async(null, null, function* () {
    dataService.saveBlogPost(post);
    setBlogPostsData(dataService.getBlogPosts());
    setShowPostDialog(false);
    setEditingPost(null);
    toast({
      title: "Success",
      description: "Blog post saved successfully"
    });
  }), [toast]);
  const handleDeletePost = reactExports.useCallback((id) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      dataService.deleteBlogPost(id);
      setBlogPostsData(dataService.getBlogPosts());
      toast({
        title: "Success",
        description: "Blog post deleted successfully"
      });
    }
  }, [toast]);
  const handleCreateStudy = reactExports.useCallback(() => {
    setEditingStudy({
      id: 0,
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author: "Admin",
      publishedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      status: "draft",
      tags: [],
      imageUrl: ""
    });
    setShowStudyDialog(true);
  }, []);
  const handleEditStudy = reactExports.useCallback((study) => {
    setEditingStudy(__spreadValues({}, study));
    setShowStudyDialog(true);
  }, []);
  const handleSaveStudy = reactExports.useCallback((study) => __async(null, null, function* () {
    dataService.saveCaseStudy(study);
    setCaseStudiesData(dataService.getCaseStudies());
    setShowStudyDialog(false);
    setEditingStudy(null);
    toast({
      title: "Success",
      description: "Case study saved successfully"
    });
  }), [toast]);
  const handleDeleteStudy = reactExports.useCallback((id) => {
    if (confirm("Are you sure you want to delete this case study?")) {
      dataService.deleteCaseStudy(id);
      setCaseStudiesData(dataService.getCaseStudies());
      toast({
        title: "Success",
        description: "Case study deleted successfully"
      });
    }
  }, [toast]);
  const handleUpdateTicketStatus = (ticketId, status) => __async(null, null, function* () {
    try {
      const { error } = yield supabase.from("support_tickets").update({
        status,
        updated_at: (/* @__PURE__ */ new Date()).toISOString(),
        resolved_at: status === "resolved" ? (/* @__PURE__ */ new Date()).toISOString() : null
      }).eq("id", ticketId);
      if (error) throw error;
      const { data: tickets } = yield supabase.from("support_tickets").select("*").order("created_at", { ascending: false });
      setSupportTickets(tickets || []);
      toast({
        title: "Success",
        description: `Ticket status updated to ${status}`
      });
    } catch (error) {
      console.error("Error updating ticket:", error);
      toast({
        title: "Error",
        description: "Failed to update ticket status",
        variant: "destructive"
      });
    }
  });
  const handleCreateTicket = () => {
    setEditingTicket({
      id: "",
      user_id: "",
      ticket_number: "",
      subject: "",
      description: "",
      status: "open",
      priority: "medium",
      category: "",
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    });
    setShowTicketDialog(true);
  };
  const handleEditTicket = (ticket) => {
    setEditingTicket(__spreadValues({}, ticket));
    setShowTicketDialog(true);
  };
  const handleSaveTicket = (ticket) => __async(null, null, function* () {
    var _a2;
    try {
      if (ticket.id) {
        const { error } = yield supabase.from("support_tickets").update({
          subject: ticket.subject,
          description: ticket.description,
          status: ticket.status,
          priority: ticket.priority,
          category: ticket.category,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", ticket.id);
        if (error) throw error;
      } else {
        const ticketNumber = `TICK-${Date.now()}`;
        const { data: user } = yield supabase.auth.getUser();
        const { error } = yield supabase.from("support_tickets").insert({
          user_id: (_a2 = user.user) == null ? void 0 : _a2.id,
          ticket_number: ticketNumber,
          subject: ticket.subject,
          description: ticket.description,
          status: ticket.status,
          priority: ticket.priority,
          category: ticket.category
        });
        if (error) throw error;
      }
      const { data: tickets } = yield supabase.from("support_tickets").select("*").order("created_at", { ascending: false });
      setSupportTickets(tickets || []);
      setShowTicketDialog(false);
      setEditingTicket(null);
      toast({
        title: "Success",
        description: ticket.id ? "Ticket updated successfully" : "Ticket created successfully"
      });
    } catch (error) {
      console.error("Error saving ticket:", error);
      toast({
        title: "Error",
        description: "Failed to save ticket",
        variant: "destructive"
      });
    }
  });
  const fetchStaff = reactExports.useCallback(() => __async(null, null, function* () {
    try {
      const { data, error } = yield supabase.from("staff").select(`
          *,
          user:user_id (
            email,
            user_metadata
          )
        `).order("created_at", { ascending: false });
      if (error) throw error;
      setStaff(data || []);
    } catch (error) {
      console.error("Error fetching staff:", error);
      toast({
        title: "Error",
        description: "Failed to load staff members",
        variant: "destructive"
      });
    }
  }), [toast]);
  const handleCreateStaff = (staffData) => __async(null, null, function* () {
    try {
      const { data, error } = yield supabase.from("staff").insert([staffData]).select().single();
      if (error) throw error;
      setStaff((prev) => [data, ...prev]);
      setShowStaffDialog(false);
      toast({
        title: "Success",
        description: "Staff member created successfully"
      });
    } catch (error) {
      console.error("Error creating staff:", error);
      toast({
        title: "Error",
        description: "Failed to create staff member",
        variant: "destructive"
      });
    }
  });
  const handleUpdateStaff = (id, updates) => __async(null, null, function* () {
    try {
      const { data, error } = yield supabase.from("staff").update(updates).eq("id", id).select().single();
      if (error) throw error;
      setStaff((prev) => prev.map((member) => member.id === id ? data : member));
      setEditingStaff(null);
      toast({
        title: "Success",
        description: "Staff member updated successfully"
      });
    } catch (error) {
      console.error("Error updating staff:", error);
      toast({
        title: "Error",
        description: "Failed to update staff member",
        variant: "destructive"
      });
    }
  });
  const handleDeleteStaff = (id) => __async(null, null, function* () {
    if (!confirm("Are you sure you want to delete this staff member?")) return;
    try {
      const { error } = yield supabase.from("staff").delete().eq("id", id);
      if (error) throw error;
      setStaff((prev) => prev.filter((member) => member.id !== id));
      toast({
        title: "Success",
        description: "Staff member deleted successfully"
      });
    } catch (error) {
      console.error("Error deleting staff:", error);
      toast({
        title: "Error",
        description: "Failed to delete staff member",
        variant: "destructive"
      });
    }
  });
  const addPayment = reactExports.useCallback((paymentData) => {
    const newPayment = {
      id: `PAY-${String(payments.length + 1).padStart(3, "0")}`,
      customer_name: paymentData.customerName,
      customer_email: paymentData.customerEmail,
      plan: paymentData.plan,
      amount: paymentData.amount,
      payment_method: paymentData.paymentMethod,
      agreement_signed: paymentData.agreementSigned,
      status: "completed",
      date: (/* @__PURE__ */ new Date()).toISOString(),
      transaction_id: `txn_${Date.now()}`
    };
    const updatedPayments = [newPayment, ...payments];
    setPayments(updatedPayments);
    localStorage.setItem("novaqy_payments", JSON.stringify(updatedPayments));
  }, [payments]);
  reactExports.useEffect(() => {
    window.addPaymentToAdmin = addPayment;
  }, [addPayment]);
  reactExports.useEffect(() => {
    if (activeTab === "staff") {
      fetchStaff();
    }
  }, [activeTab, fetchStaff]);
  const filteredPayments = payments.filter((payment) => {
    if (paymentFilter === "all") return true;
    return payment.status === paymentFilter;
  });
  const paymentStats = {
    totalRevenue: payments.filter((p) => p.status === "completed").reduce((sum, p) => sum + p.amount, 0),
    pendingPayments: payments.filter((p) => p.status === "pending").length,
    completedPayments: payments.filter((p) => p.status === "completed").length,
    totalTransactions: payments.length
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Checking admin access…" })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold mb-2", children: "Admin Panel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Manage customers, content, and system settings" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: activeTab === "dashboard" ? "default" : "ghost",
              className: "w-full justify-start",
              onClick: () => setActiveTab("dashboard"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 mr-2" }),
                "Dashboard"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: activeTab === "customers" ? "default" : "ghost",
              className: "w-full justify-start",
              onClick: () => {
                setActiveTab("customers");
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 mr-2" }),
                "Customers"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: activeTab === "content" ? "default" : "ghost",
              className: "w-full justify-start",
              onClick: () => setActiveTab("content"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 mr-2" }),
                "Content CMS"
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
              variant: activeTab === "payments" ? "default" : "ghost",
              className: "w-full justify-start",
              onClick: () => setActiveTab("payments"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-4 h-4 mr-2" }),
                "Payments"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: activeTab === "staff" ? "default" : "ghost",
              className: "w-full justify-start",
              onClick: () => setActiveTab("staff"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 mr-2" }),
                "Staff"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: activeTab === "monitoring" ? "default" : "ghost",
              className: "w-full justify-start",
              onClick: () => setActiveTab("monitoring"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 mr-2" }),
                "Monitoring"
              ]
            }
          )
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-6", children: [
          activeTab === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-6 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Customers" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: stats.totalCustomers }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600 flex items-center mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3 mr-1" }),
                    "+12% from last month"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-primary" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Active Plans" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: stats.activePlans }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-blue-600 flex items-center mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3 h-3 mr-1" }),
                    Math.round(stats.activePlans / stats.totalCustomers * 100),
                    "% conversion"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-8 h-8 text-primary" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Open Tickets" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: stats.supportTickets }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-orange-600 flex items-center mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
                    "2 urgent"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-8 h-8 text-primary" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Monthly Revenue" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: stats.monthlyRevenue }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600 flex items-center mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3 mr-1" }),
                    "+8% from last month"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-8 h-8 text-green-600" })
              ] }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Revenue Overview" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Monthly revenue for the current year" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: analyticsData.revenueChart, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (value) => [`$${value}`, "Revenue"] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "revenue", stroke: "#8884d8", fill: "#8884d8", fillOpacity: 0.6 })
                ] }) }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "User Growth" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "New user registrations by month" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: analyticsData.userGrowthChart, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "users", fill: "#82ca9d" })
                ] }) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Plan Distribution" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Current subscription breakdown" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Pie,
                    {
                      data: analyticsData.planDistribution,
                      cx: "50%",
                      cy: "50%",
                      outerRadius: 60,
                      fill: "#8884d8",
                      dataKey: "value",
                      label: ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`,
                      children: analyticsData.planDistribution.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, `cell-${index}`))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {})
                ] }) }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Recent Activity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Latest system events and user actions" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: analyticsData.recentActivity.map((activity) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 border rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: activity.type === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-blue-600" }) : activity.type === "payment" ? /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-4 h-4 text-green-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-gray-600" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: activity.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: activity.timestamp })
                  ] })
                ] }, activity.id)) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Recent Customers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Latest customer registrations" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: recentCustomers.map((customer) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: customer.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
                    "Joined ",
                    customer.joined
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: customer.plan }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: customer.status === "Active" ? "secondary" : "destructive", children: customer.status })
                ] })
              ] }, customer.id)) }) })
            ] })
          ] }),
          activeTab === "content" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Blog Posts" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Manage your blog content with images" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleCreatePost, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
                  "New Post"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: blogPostsData.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                  post.imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: post.imageUrl,
                      alt: post.title,
                      className: "w-16 h-16 object-cover rounded"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: post.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
                      post.publishedAt,
                      " • ",
                      post.author
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: post.status === "published" ? "secondary" : "outline", children: post.status }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => handleEditPost(post), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => handleDeletePost(post.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
                ] })
              ] }, post.id)) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Case Studies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Manage your case studies with images" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleCreateStudy, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
                  "New Case Study"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: caseStudiesData.map((study) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                  study.imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: study.imageUrl,
                      alt: study.title,
                      className: "w-16 h-16 object-cover rounded"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: study.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
                      study.publishedAt,
                      " • ",
                      study.author
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: study.status === "published" ? "secondary" : "outline", children: study.status }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => handleEditStudy(study), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => handleDeleteStudy(study.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
                ] })
              ] }, study.id)) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Content Management" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Import and export content data" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
                    "Import JSON"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 mr-2" }),
                    "Export All Content"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Content is stored locally in /data/*.json files. Use import/export for backup and migration." })
              ] })
            ] })
          ] }),
          activeTab === "customers" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Customer Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "View and manage customer accounts" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: recentCustomers.map((customer) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: customer.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
                  customer.plan,
                  " Plan • Joined ",
                  customer.joined
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: customer.status === "Active" ? "secondary" : "destructive", children: customer.status }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", children: "View Details" })
              ] })
            ] }, customer.id)) }) })
          ] }),
          activeTab === "support" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-6 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Open Tickets" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: supportTickets.filter((t) => t.status === "open").length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-8 h-8 text-orange-600" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "In Progress" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: supportTickets.filter((t) => t.status === "in_progress").length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-8 h-8 text-blue-600" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Resolved" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: supportTickets.filter((t) => t.status === "resolved").length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-8 h-8 text-green-600" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Tickets" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: supportTickets.length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-8 h-8 text-purple-600" })
              ] }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex flex-row items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Support Tickets" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Manage customer support requests" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleCreateTicket, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
                  "New Ticket"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ticket-filter", children: "Filter by Status:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: ticketFilter, onValueChange: setTicketFilter, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Tickets" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "open", children: "Open" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "in_progress", children: "In Progress" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "resolved", children: "Resolved" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "closed", children: "Closed" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  supportTickets.filter((ticket) => ticketFilter === "all" || ticket.status === ticketFilter).map((ticket) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: ticket.subject }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
                            ticket.ticket_number,
                            " • ",
                            new Date(ticket.created_at).toLocaleDateString()
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: ticket.priority === "urgent" ? "destructive" : ticket.priority === "high" ? "secondary" : ticket.priority === "medium" ? "outline" : "default", children: ticket.priority }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: ticket.status === "open" ? "destructive" : ticket.status === "in_progress" ? "secondary" : ticket.status === "resolved" ? "default" : "outline", children: ticket.status.replace("_", " ") }),
                        ticket.category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: ticket.category })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Select,
                        {
                          value: ticket.status,
                          onValueChange: (value) => handleUpdateTicketStatus(ticket.id, value),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "open", children: "Open" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "in_progress", children: "In Progress" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "resolved", children: "Resolved" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "closed", children: "Closed" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => handleEditTicket(ticket), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" }) })
                    ] })
                  ] }, ticket.id)),
                  supportTickets.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-12 h-12 text-muted-foreground mx-auto mb-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No support tickets found." })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          activeTab === "staff" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Staff" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: staff.length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-blue-600" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Active Staff" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: staff.filter((s) => s.is_active).length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-8 h-8 text-green-600" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Admins" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: staff.filter((s) => s.role === "admin").length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8 text-red-600" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Managers" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: staff.filter((s) => s.role === "manager").length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-8 h-8 text-purple-600" })
              ] }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5" }),
                    "Staff Management"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Manage staff accounts, roles, and permissions" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setShowStaffDialog(true), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
                  "Add Staff Member"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: staff.length > 0 ? staff.map((member) => {
                var _a2, _b, _c, _d;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: ((_b = (_a2 = member.user) == null ? void 0 : _a2.user_metadata) == null ? void 0 : _b.full_name) || ((_c = member.user) == null ? void 0 : _c.email) || "Unknown" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: (_d = member.user) == null ? void 0 : _d.email })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: member.role === "admin" ? "destructive" : member.role === "manager" ? "default" : member.role === "support" ? "secondary" : "outline", children: member.role }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: member.department })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: member.is_active ? "secondary" : "outline", children: member.is_active ? "Active" : "Inactive" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                        "Hired: ",
                        new Date(member.hire_date).toLocaleDateString()
                      ] }),
                      member.last_login && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                        "Last login: ",
                        new Date(member.last_login).toLocaleDateString()
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        onClick: () => {
                          setEditingStaff(member);
                          setShowStaffDialog(true);
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        onClick: () => handleDeleteStaff(member.id),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                      }
                    )
                  ] })
                ] }, member.id);
              }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-12 h-12 text-muted-foreground mx-auto mb-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No staff members found." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "mt-4", onClick: () => setShowStaffDialog(true), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
                  "Add First Staff Member"
                ] })
              ] }) }) })
            ] })
          ] }),
          activeTab === "monitoring" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "System Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-green-600", children: "Healthy" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-8 h-8 text-green-600" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Active Users" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: stats.totalCustomers })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-blue-600" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Open Tickets" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: supportTickets.filter((t) => t.status === "open").length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-8 h-8 text-orange-600" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Response Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: "1.2s" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-8 h-8 text-purple-600" })
              ] }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-5 h-5" }),
                    "System Performance"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Real-time system metrics and performance indicators" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CPU Usage" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "45%" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-600 h-2 rounded-full w-[45%]" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Memory Usage" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "67%" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-600 h-2 rounded-full w-[67%]" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Disk Usage" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "23%" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-yellow-600 h-2 rounded-full w-[23%]" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Network I/O" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "12%" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-600 h-2 rounded-full w-[12%]" }) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5" }),
                    "System Alerts"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Recent system alerts and notifications" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 border rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: "System Health Check" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "All systems operational - 2 minutes ago" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 border rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-yellow-600 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: "High Memory Usage" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Memory usage above 60% threshold - 15 minutes ago" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 border rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: "Database Backup" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Daily backup completed successfully - 1 hour ago" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 border rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: "SSL Certificate" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Certificate renewed successfully - 2 days ago" })
                    ] })
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5" }),
                  "Recent Error Logs"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Monitor system errors and exceptions" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: "Payment Processing Error" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Failed to process payment for user ID: 12345" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "5 min ago" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", className: "text-xs", children: "High" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-yellow-500 rounded-full" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: "API Rate Limit" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Rate limit exceeded for endpoint /api/users" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "12 min ago" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: "Medium" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: "Database Connection" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Temporary connection timeout resolved" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "1 hour ago" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "Low" })
                  ] })
                ] })
              ] }) })
            ] })
          ] }),
          activeTab === "settings" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "System Settings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Configure system preferences and integrations" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium", children: "Payment Integration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Payment providers are currently STUBBED. Configure Stripe or Razorpay for production." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Configure Payment Provider" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium", children: "Email Settings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Support email: support@novaqy.example (placeholder)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Update Email Configuration" })
              ] })
            ] })
          ] }),
          activeTab === "payments" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Revenue" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold", children: [
                    "$",
                    paymentStats.totalRevenue.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-8 h-8 text-green-600" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Completed Payments" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: paymentStats.completedPayments })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-8 h-8 text-blue-600" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Pending Payments" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: paymentStats.pendingPayments })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-8 h-8 text-orange-600" })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Total Transactions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold", children: paymentStats.totalTransactions })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-8 h-8 text-purple-600" })
              ] }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "w-5 h-5" }),
                  "Payment Transactions"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "View and manage all payment transactions" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "status-filter", children: "Filter by Status:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: paymentFilter, onValueChange: setPaymentFilter, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Payments" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "completed", children: "Completed" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pending", children: "Pending" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "failed", children: "Failed" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredPayments.length > 0 ? filteredPayments.map((payment) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: payment.customer_name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: payment.customer_email })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: payment.plan }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: payment.payment_method })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: payment.status === "completed" ? "secondary" : payment.status === "pending" ? "outline" : "destructive", children: payment.status }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: new Date(payment.date).toLocaleDateString() }),
                      payment.agreement_signed && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: "Agreement Signed" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold", children: [
                      "$",
                      payment.amount
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: payment.id }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "mt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4 mr-1" }),
                      "Details"
                    ] })
                  ] })
                ] }, payment.id)) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-12 h-12 text-muted-foreground mx-auto mb-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No payments found matching the selected filter." })
                ] }) })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showPostDialog, onOpenChange: setShowPostDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: (editingPost == null ? void 0 : editingPost.id) ? "Edit Blog Post" : "Create New Blog Post" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: (editingPost == null ? void 0 : editingPost.id) ? "Update your blog post content and image" : "Create a new blog post with an image" })
      ] }),
      editingPost && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "post-title", children: "Title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "post-title",
                  value: editingPost.title,
                  onChange: (e) => setEditingPost(__spreadProps(__spreadValues({}, editingPost), { title: e.target.value })),
                  placeholder: "Enter blog post title"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "post-slug", children: "Slug" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "post-slug",
                  value: editingPost.slug,
                  onChange: (e) => setEditingPost(__spreadProps(__spreadValues({}, editingPost), { slug: e.target.value })),
                  placeholder: "url-friendly-slug"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "post-author", children: "Author" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "post-author",
                  value: editingPost.author,
                  onChange: (e) => setEditingPost(__spreadProps(__spreadValues({}, editingPost), { author: e.target.value })),
                  placeholder: "Author name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "post-status", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: editingPost.status,
                  onValueChange: (value) => setEditingPost(__spreadProps(__spreadValues({}, editingPost), { status: value })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "draft", children: "Draft" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "published", children: "Published" })
                    ] })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FileUpload,
              {
                onFileSelect: (file) => __async(null, null, function* () {
                  const result = yield ImageService.processImage(file);
                  if (result.dataUrl) {
                    setEditingPost(__spreadProps(__spreadValues({}, editingPost), { imageUrl: result.dataUrl }));
                  } else if (result.error) {
                    toast({
                      title: "Upload Error",
                      description: result.error,
                      variant: "destructive"
                    });
                  }
                }),
                onFileRemove: () => setEditingPost(__spreadProps(__spreadValues({}, editingPost), { imageUrl: "" })),
                currentImageUrl: editingPost.imageUrl
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "post-tags", children: "Tags (comma-separated)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "post-tags",
                  value: editingPost.tags.join(", "),
                  onChange: (e) => setEditingPost(__spreadProps(__spreadValues({}, editingPost), {
                    tags: e.target.value.split(",").map((tag) => tag.trim()).filter(Boolean)
                  })),
                  placeholder: "tech, tutorial, guide"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "post-excerpt", children: "Excerpt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "post-excerpt",
              value: editingPost.excerpt,
              onChange: (e) => setEditingPost(__spreadProps(__spreadValues({}, editingPost), { excerpt: e.target.value })),
              placeholder: "Brief description of the blog post",
              rows: 3
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "post-content", children: "Content" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "post-content",
              value: editingPost.content,
              onChange: (e) => setEditingPost(__spreadProps(__spreadValues({}, editingPost), { content: e.target.value })),
              placeholder: "Full blog post content (supports Markdown)",
              rows: 10
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => {
                setShowPostDialog(false);
                setEditingPost(null);
              },
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => handleSavePost(editingPost), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4 mr-2" }),
            "Save Post"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showStudyDialog, onOpenChange: setShowStudyDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: (editingStudy == null ? void 0 : editingStudy.id) ? "Edit Case Study" : "Create New Case Study" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: (editingStudy == null ? void 0 : editingStudy.id) ? "Update your case study content and image" : "Create a new case study with an image" })
      ] }),
      editingStudy && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "study-title", children: "Title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "study-title",
                  value: editingStudy.title,
                  onChange: (e) => setEditingStudy(__spreadProps(__spreadValues({}, editingStudy), { title: e.target.value })),
                  placeholder: "Enter case study title"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "study-slug", children: "Slug" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "study-slug",
                  value: editingStudy.slug,
                  onChange: (e) => setEditingStudy(__spreadProps(__spreadValues({}, editingStudy), { slug: e.target.value })),
                  placeholder: "url-friendly-slug"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "study-author", children: "Author" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "study-author",
                  value: editingStudy.author,
                  onChange: (e) => setEditingStudy(__spreadProps(__spreadValues({}, editingStudy), { author: e.target.value })),
                  placeholder: "Author name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "study-client", children: "Client" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "study-client",
                  value: editingStudy.client || "",
                  onChange: (e) => setEditingStudy(__spreadProps(__spreadValues({}, editingStudy), { client: e.target.value })),
                  placeholder: "Client name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "study-industry", children: "Industry" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "study-industry",
                  value: editingStudy.industry || "",
                  onChange: (e) => setEditingStudy(__spreadProps(__spreadValues({}, editingStudy), { industry: e.target.value })),
                  placeholder: "Industry sector"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "study-status", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: editingStudy.status,
                  onValueChange: (value) => setEditingStudy(__spreadProps(__spreadValues({}, editingStudy), { status: value })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "draft", children: "Draft" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "published", children: "Published" })
                    ] })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FileUpload,
              {
                onFileSelect: (file) => __async(null, null, function* () {
                  const result = yield ImageService.processImage(file);
                  if (result.dataUrl) {
                    setEditingStudy(__spreadProps(__spreadValues({}, editingStudy), { imageUrl: result.dataUrl }));
                  } else if (result.error) {
                    toast({
                      title: "Upload Error",
                      description: result.error,
                      variant: "destructive"
                    });
                  }
                }),
                onFileRemove: () => setEditingStudy(__spreadProps(__spreadValues({}, editingStudy), { imageUrl: "" })),
                currentImageUrl: editingStudy.imageUrl
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "study-tags", children: "Tags (comma-separated)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "study-tags",
                  value: editingStudy.tags.join(", "),
                  onChange: (e) => setEditingStudy(__spreadProps(__spreadValues({}, editingStudy), {
                    tags: e.target.value.split(",").map((tag) => tag.trim()).filter(Boolean)
                  })),
                  placeholder: "success, technology, implementation"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "study-results", children: "Results (one per line)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "study-results",
                  value: ((_a = editingStudy.results) == null ? void 0 : _a.join("\n")) || "",
                  onChange: (e) => setEditingStudy(__spreadProps(__spreadValues({}, editingStudy), {
                    results: e.target.value.split("\n").filter((line) => line.trim())
                  })),
                  placeholder: "Key results and outcomes",
                  rows: 4
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "study-excerpt", children: "Excerpt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "study-excerpt",
              value: editingStudy.excerpt,
              onChange: (e) => setEditingStudy(__spreadProps(__spreadValues({}, editingStudy), { excerpt: e.target.value })),
              placeholder: "Brief description of the case study",
              rows: 3
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "study-content", children: "Content" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "study-content",
              value: editingStudy.content,
              onChange: (e) => setEditingStudy(__spreadProps(__spreadValues({}, editingStudy), { content: e.target.value })),
              placeholder: "Full case study content (supports Markdown)",
              rows: 10
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => {
                setShowStudyDialog(false);
                setEditingStudy(null);
              },
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => handleSaveStudy(editingStudy), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4 mr-2" }),
            "Save Case Study"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showTicketDialog, onOpenChange: setShowTicketDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: (editingTicket == null ? void 0 : editingTicket.id) ? "Edit Support Ticket" : "Create New Support Ticket" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: (editingTicket == null ? void 0 : editingTicket.id) ? "Update ticket information" : "Create a new support ticket" })
      ] }),
      editingTicket && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ticket-subject", children: "Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "ticket-subject",
                value: editingTicket.subject,
                onChange: (e) => setEditingTicket(__spreadProps(__spreadValues({}, editingTicket), { subject: e.target.value })),
                placeholder: "Brief description of the issue"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ticket-priority", children: "Priority" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: editingTicket.priority,
                onValueChange: (value) => setEditingTicket(__spreadProps(__spreadValues({}, editingTicket), { priority: value })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "low", children: "Low" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "medium", children: "Medium" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "high", children: "High" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "urgent", children: "Urgent" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ticket-category", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "ticket-category",
                value: editingTicket.category,
                onChange: (e) => setEditingTicket(__spreadProps(__spreadValues({}, editingTicket), { category: e.target.value })),
                placeholder: "e.g., Technical, Billing, General"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ticket-status", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: editingTicket.status,
                onValueChange: (value) => setEditingTicket(__spreadProps(__spreadValues({}, editingTicket), { status: value })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "open", children: "Open" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "in_progress", children: "In Progress" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "resolved", children: "Resolved" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "closed", children: "Closed" })
                  ] })
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ticket-description", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "ticket-description",
              value: editingTicket.description,
              onChange: (e) => setEditingTicket(__spreadProps(__spreadValues({}, editingTicket), { description: e.target.value })),
              placeholder: "Detailed description of the issue",
              rows: 6
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => {
                setShowTicketDialog(false);
                setEditingTicket(null);
              },
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => handleSaveTicket(editingTicket), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4 mr-2" }),
            editingTicket.id ? "Update Ticket" : "Create Ticket"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showStaffDialog, onOpenChange: setShowStaffDialog, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editingStaff ? "Edit Staff Member" : "Add New Staff Member" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: editingStaff ? "Update staff member information and permissions" : "Create a new staff account with role and permissions" })
      ] }),
      editingStaff && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "staff-role", children: "Role" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: editingStaff.role,
                onValueChange: (value) => setEditingStaff(__spreadProps(__spreadValues({}, editingStaff), { role: value })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "admin", children: "Admin" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "manager", children: "Manager" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "support", children: "Support" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "analyst", children: "Analyst" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "staff-department", children: "Department" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "staff-department",
                value: editingStaff.department,
                onChange: (e) => setEditingStaff(__spreadProps(__spreadValues({}, editingStaff), { department: e.target.value })),
                placeholder: "e.g., Engineering, Support, Sales"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "staff-permissions", children: "Permissions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "staff-permissions",
              value: editingStaff.permissions.join(", "),
              onChange: (e) => setEditingStaff(__spreadProps(__spreadValues({}, editingStaff), {
                permissions: e.target.value.split(",").map((p) => p.trim()).filter(Boolean)
              })),
              placeholder: "read_users, write_posts, manage_tickets (comma-separated)",
              rows: 3
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              id: "staff-active",
              checked: editingStaff.is_active,
              onChange: (e) => setEditingStaff(__spreadProps(__spreadValues({}, editingStaff), { is_active: e.target.checked })),
              className: "rounded",
              title: "Active status"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "staff-active", children: "Active Staff Member" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "staff-hire-date", children: "Hire Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "staff-hire-date",
              type: "date",
              value: editingStaff.hire_date.split("T")[0],
              onChange: (e) => setEditingStaff(__spreadProps(__spreadValues({}, editingStaff), { hire_date: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => {
                setShowStaffDialog(false);
                setEditingStaff(null);
              },
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => {
            if (editingStaff.id) {
              handleUpdateStaff(editingStaff.id, {
                role: editingStaff.role,
                department: editingStaff.department,
                permissions: editingStaff.permissions,
                is_active: editingStaff.is_active,
                hire_date: editingStaff.hire_date
              });
            } else {
              handleCreateStaff({
                user_id: "",
                // This would need to be set when creating from user selection
                role: editingStaff.role,
                permissions: editingStaff.permissions,
                department: editingStaff.department,
                is_active: editingStaff.is_active,
                hire_date: editingStaff.hire_date
              });
            }
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4 mr-2" }),
            editingStaff.id ? "Update Staff" : "Create Staff"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  Admin as default
};
