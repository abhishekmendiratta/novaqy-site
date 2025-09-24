import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { C as Card, b as CardHeader, d as CardTitle, e as CardDescription, a as CardContent } from "./card.js";
import { B as Badge } from "./badge.js";
import { I as Input, B as Button } from "./input.js";
import { a as reactExports, L as Link } from "./react-vendor.js";
import { d as dataService } from "./dataService.js";
import { o as Search, k as Clock, A as ArrowRight } from "./utils-vendor.js";
import "./index.js";
import "./auth-vendor.js";
import "./query-vendor.js";
import "./separator.js";
const Blog = () => {
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [blogPosts, setBlogPosts] = reactExports.useState([]);
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  reactExports.useEffect(() => {
    const loadBlogPosts = () => {
      const posts = dataService.getPublishedBlogPosts();
      setBlogPosts(posts);
    };
    loadBlogPosts();
    const unsubscribe = dataService.subscribe("blog_posts", loadBlogPosts);
    return unsubscribe;
  }, []);
  const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category || "Uncategorized").filter(Boolean)))];
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-20 pb-16 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-6", children: "Blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold mb-6", children: "Practical learnings, resources, and guides to help you build your business" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Stay updated with the latest insights on business banking, financial technology, and industry trends." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search articles...",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value),
            className: "pl-10"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: selectedCategory === category ? "default" : "outline",
        size: "sm",
        onClick: () => setSelectedCategory(category),
        children: category
      },
      category
    )) }) }) }),
    featuredPost && selectedCategory === "All" && !searchTerm && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "max-w-4xl mx-auto overflow-hidden hover:shadow-large transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-1/2", children: featuredPost.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: featuredPost.imageUrl,
          alt: featuredPost.title,
          className: "w-full h-full object-cover"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-gradient-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-1/2 p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-4", children: "Featured" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "p-0 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: `/blog/${featuredPost.slug}`,
              className: "hover:text-primary transition-colors",
              children: featuredPost.title
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-base", children: featuredPost.excerpt })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm text-muted-foreground mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "By ",
            featuredPost.author
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(featuredPost.publishedAt).toLocaleDateString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 mr-1" }),
              featuredPost.readTime
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/blog/${featuredPost.slug}`, children: [
          "Read Article",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
        ] }) })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: regularPosts.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: regularPosts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "hover:shadow-medium transition-all duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48", children: post.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: post.imageUrl,
          alt: post.title,
          className: "w-full h-full object-cover"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-gradient-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
            post.readTime
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `/blog/${post.slug}`,
            className: "hover:text-primary transition-colors",
            children: post.title
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: post.excerpt })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm text-muted-foreground mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "By ",
            post.author
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(post.publishedAt).toLocaleDateString() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/blog/${post.slug}`, children: [
          "Read More",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
        ] }) })
      ] })
    ] }, post.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "No articles found matching your criteria." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          onClick: () => {
            setSearchTerm("");
            setSelectedCategory("All");
          },
          children: "Show all articles"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Stay updated with our latest insights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Get the latest articles on business banking, financial technology, and industry trends delivered to your inbox." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex max-w-sm mx-auto space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", placeholder: "Enter your email", className: "flex-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Subscribe" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  Blog as default
};
