import { j as jsxRuntimeExports } from "./ui-vendor.js";
import { H as Header, F as Footer } from "./Footer.js";
import { B as Badge } from "./badge.js";
import { B as Button } from "./input.js";
import { C as Card, a as CardContent } from "./card.js";
import { m as useParams, a as reactExports, L as Link } from "./react-vendor.js";
import { d as dataService } from "./dataService.js";
import { p as ArrowLeft, k as Clock, q as Share2, r as Bookmark } from "./utils-vendor.js";
import "./index.js";
import "./auth-vendor.js";
import "./query-vendor.js";
import "./separator.js";
const BlogPost = () => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const loadBlogPost = () => {
      if (!slug) {
        setError("Blog post slug not found");
        setLoading(false);
        return;
      }
      try {
        const posts = dataService.getPublishedBlogPosts();
        let post = posts.find((p) => p.slug === slug);
        if (!post) {
          const id = parseInt(slug);
          if (!isNaN(id)) {
            post = posts.find((p) => p.id === id);
          }
        }
        if (post) {
          setBlogPost(post);
        } else {
          setError("Blog post not found");
        }
      } catch (err) {
        console.error("Error loading blog post:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };
    loadBlogPost();
  }, [slug]);
  const formatContent = (content) => {
    return content.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mt-8 mb-4 text-primary", children: paragraph.replace("## ", "") }, index);
      }
      if (paragraph.includes("\n- ")) {
        const [title, ...items] = paragraph.split("\n- ");
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside space-y-2 text-muted-foreground", children: items.map((item, itemIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "leading-relaxed", children: item }, itemIndex)) })
        ] }, index);
      }
      if (paragraph.includes("\n1) ") || paragraph.includes("\n2) ")) {
        const [title, ...items] = paragraph.split(/\n\d+\) /);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-3", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "list-decimal list-inside space-y-2 text-muted-foreground", children: items.map((item, itemIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "leading-relaxed", children: item }, itemIndex)) })
        ] }, index);
      }
      if (paragraph.includes("**") && paragraph.includes("**")) {
        const parts = paragraph.split(/(\*\*.*?\*\*)/g);
        return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 leading-relaxed", children: parts.map((part, partIndex) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-primary", children: part.slice(2, -2) }, partIndex);
          }
          return part;
        }) }, index);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 leading-relaxed text-muted-foreground", children: paragraph }, index);
    });
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-pulse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 bg-muted rounded mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted rounded mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted rounded mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted rounded mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 bg-muted rounded" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  if (error || !blogPost) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container py-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold mb-4", children: "Blog Post Not Found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: error || "The blog post you're looking for doesn't exist." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
          "Back to Blog"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-20 pb-16 bg-gradient-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
        "Back to Blog"
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-4", children: blogPost.category || "Article" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6 leading-tight", children: blogPost.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-8 leading-relaxed", children: blogPost.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "By ",
            blogPost.author
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(blogPost.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }),
          blogPost.readTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 mr-1" }),
            blogPost.readTime
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4 mr-2" }),
            "Share"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "w-4 h-4 mr-2" }),
            "Save"
          ] })
        ] })
      ] })
    ] }) }) }),
    blogPost.imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: blogPost.imageUrl,
        alt: blogPost.title,
        className: "w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
      }
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg max-w-none", children: formatContent(blogPost.content) }),
      blogPost.tags && blogPost.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-8 border-t", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Tags" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: blogPost.tags.map((tag, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: tag }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: blogPost.author.charAt(0) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: blogPost.author }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Technology expert and content creator at Novaqy Cloud LLP" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-6", children: "Related Articles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: dataService.getPublishedBlogPosts().filter((post) => post.id !== blogPost.id).slice(0, 2).map((relatedPost) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "hover:shadow-medium transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "mb-3", children: relatedPost.category || "Article" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: `/blog/${relatedPost.slug}`,
              className: "hover:text-primary transition-colors",
              children: relatedPost.title
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: relatedPost.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(relatedPost.publishedAt).toLocaleDateString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/blog/${relatedPost.slug}`, children: "Read More" }) })
          ] })
        ] }) }, relatedPost.id)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  BlogPost as default
};
