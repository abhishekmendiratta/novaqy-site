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
const _DataService = class _DataService {
  constructor() {
    __publicField(this, "listeners", /* @__PURE__ */ new Map());
    this.initializeDefaultData();
  }
  static getInstance() {
    if (!_DataService.instance) {
      _DataService.instance = new _DataService();
    }
    return _DataService.instance;
  }
  initializeDefaultData() {
    const storedVersion = localStorage.getItem("cms_seed_version");
    const needsReseed = storedVersion !== _DataService.SEED_VERSION;
    if (needsReseed) {
      localStorage.removeItem("cms_blog_posts");
      localStorage.removeItem("cms_case_studies");
      localStorage.removeItem("cms_customer_stories");
    }
    if (!localStorage.getItem("cms_blog_posts")) this.loadFromJSONFiles();
    if (!localStorage.getItem("cms_case_studies")) this.loadCaseStudiesFromJSON();
    if (!localStorage.getItem("cms_customer_stories")) this.loadCustomerStoriesFromJSON();
    if (!localStorage.getItem("cms_page_content")) this.initializePageContent();
    if (needsReseed) localStorage.setItem("cms_seed_version", _DataService.SEED_VERSION);
  }
  loadFromJSONFiles() {
    return __async(this, null, function* () {
      try {
        const response = yield fetch("/data/blog-posts.json");
        const data = yield response.json();
        localStorage.setItem("cms_blog_posts", JSON.stringify(data));
      } catch (error) {
        console.error("Failed to load blog posts from JSON:", error);
        localStorage.setItem("cms_blog_posts", JSON.stringify([]));
      }
    });
  }
  loadCaseStudiesFromJSON() {
    return __async(this, null, function* () {
      try {
        const response = yield fetch("/data/case-studies.json");
        const data = yield response.json();
        localStorage.setItem("cms_case_studies", JSON.stringify(data));
      } catch (error) {
        console.error("Failed to load case studies from JSON:", error);
        localStorage.setItem("cms_case_studies", JSON.stringify([]));
      }
    });
  }
  loadCustomerStoriesFromJSON() {
    return __async(this, null, function* () {
      try {
        const response = yield fetch("/data/customer-stories.json");
        const data = yield response.json();
        localStorage.setItem("cms_customer_stories", JSON.stringify(data));
      } catch (error) {
        console.error("Failed to load customer stories from JSON:", error);
        localStorage.setItem("cms_customer_stories", JSON.stringify([]));
      }
    });
  }
  initializePageContent() {
    const defaultPages = [
      {
        id: "homepage",
        title: "Homepage",
        content: "Homepage content managed through CMS",
        metaTitle: "Novaqy Cloud LLP - Remote Tech Support & Managed Services",
        metaDescription: "Professional remote tech support and managed IT services for seniors and businesses. Trusted by 10,000+ customers in US & Canada.",
        lastModified: (/* @__PURE__ */ new Date()).toISOString(),
        status: "published"
      },
      {
        id: "about",
        title: "About Us",
        content: "About page content",
        metaTitle: "About Novaqy Cloud LLP",
        metaDescription: "Learn about Novaqy Cloud LLP, your trusted partner for remote tech support and managed IT services.",
        lastModified: (/* @__PURE__ */ new Date()).toISOString(),
        status: "published"
      }
    ];
    localStorage.setItem("cms_page_content", JSON.stringify(defaultPages));
  }
  // Blog Posts Management
  getBlogPosts() {
    const data = localStorage.getItem("cms_blog_posts");
    return data ? JSON.parse(data) : [];
  }
  getPublishedBlogPosts() {
    return this.getBlogPosts().filter((post) => post.status === "published");
  }
  getBlogPostBySlug(slug) {
    return this.getBlogPosts().find((post) => post.slug === slug) || null;
  }
  saveBlogPost(post) {
    const posts = this.getBlogPosts();
    const existingIndex = posts.findIndex((p) => p.id === post.id);
    if (existingIndex >= 0) {
      posts[existingIndex] = __spreadProps(__spreadValues({}, post), { publishedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] });
    } else {
      posts.push(__spreadProps(__spreadValues({}, post), { id: Date.now(), publishedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] }));
    }
    localStorage.setItem("cms_blog_posts", JSON.stringify(posts));
    this.notifyListeners("blog_posts");
  }
  deleteBlogPost(id) {
    const posts = this.getBlogPosts().filter((post) => post.id !== id);
    localStorage.setItem("cms_blog_posts", JSON.stringify(posts));
    this.notifyListeners("blog_posts");
  }
  // Case Studies Management
  getCaseStudies() {
    const data = localStorage.getItem("cms_case_studies");
    return data ? JSON.parse(data) : [];
  }
  getPublishedCaseStudies() {
    return this.getCaseStudies().filter((study) => study.status === "published");
  }
  saveCaseStudy(study) {
    const studies = this.getCaseStudies();
    const existingIndex = studies.findIndex((s) => s.id === study.id);
    if (existingIndex >= 0) {
      studies[existingIndex] = __spreadProps(__spreadValues({}, study), { publishedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] });
    } else {
      studies.push(__spreadProps(__spreadValues({}, study), { id: Date.now(), publishedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] }));
    }
    localStorage.setItem("cms_case_studies", JSON.stringify(studies));
    this.notifyListeners("case_studies");
  }
  deleteCaseStudy(id) {
    const studies = this.getCaseStudies().filter((study) => study.id !== id);
    localStorage.setItem("cms_case_studies", JSON.stringify(studies));
    this.notifyListeners("case_studies");
  }
  // Customer Stories Management
  getCustomerStories() {
    const data = localStorage.getItem("cms_customer_stories");
    return data ? JSON.parse(data) : [];
  }
  getPublishedCustomerStories() {
    return this.getCustomerStories().filter((story) => story.status === "published");
  }
  saveCustomerStory(story) {
    const stories = this.getCustomerStories();
    const existingIndex = stories.findIndex((s) => s.id === story.id);
    if (existingIndex >= 0) {
      stories[existingIndex] = __spreadProps(__spreadValues({}, story), { publishedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] });
    } else {
      stories.push(__spreadProps(__spreadValues({}, story), { id: Date.now(), publishedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] }));
    }
    localStorage.setItem("cms_customer_stories", JSON.stringify(stories));
    this.notifyListeners("customer_stories");
  }
  deleteCustomerStory(id) {
    const stories = this.getCustomerStories().filter((story) => story.id !== id);
    localStorage.setItem("cms_customer_stories", JSON.stringify(stories));
    this.notifyListeners("customer_stories");
  }
  // Page Content Management
  getPageContent(pageId) {
    const pages = this.getAllPageContent();
    return pages.find((page) => page.id === pageId) || null;
  }
  getAllPageContent() {
    const data = localStorage.getItem("cms_page_content");
    return data ? JSON.parse(data) : [];
  }
  savePageContent(page) {
    const pages = this.getAllPageContent();
    const existingIndex = pages.findIndex((p) => p.id === page.id);
    if (existingIndex >= 0) {
      pages[existingIndex] = __spreadProps(__spreadValues({}, page), { lastModified: (/* @__PURE__ */ new Date()).toISOString() });
    } else {
      pages.push(__spreadProps(__spreadValues({}, page), { lastModified: (/* @__PURE__ */ new Date()).toISOString() }));
    }
    localStorage.setItem("cms_page_content", JSON.stringify(pages));
    this.notifyListeners("page_content");
  }
  // Testimonials Management
  getTestimonials() {
    const data = localStorage.getItem("cms_testimonials");
    return data ? JSON.parse(data) : [];
  }
  saveTestimonial(testimonial) {
    const testimonials = this.getTestimonials();
    const existingIndex = testimonials.findIndex((t) => t.id === testimonial.id);
    if (existingIndex >= 0) {
      testimonials[existingIndex] = testimonial;
    } else {
      testimonials.push(__spreadProps(__spreadValues({}, testimonial), { id: Date.now() }));
    }
    localStorage.setItem("cms_testimonials", JSON.stringify(testimonials));
    this.notifyListeners("testimonials");
  }
  deleteTestimonial(id) {
    const testimonials = this.getTestimonials().filter((t) => t.id !== id);
    localStorage.setItem("cms_testimonials", JSON.stringify(testimonials));
    this.notifyListeners("testimonials");
  }
  // Event Listener System for Real-time Updates
  subscribe(eventType, callback) {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, /* @__PURE__ */ new Set());
    }
    this.listeners.get(eventType).add(callback);
    return () => {
      const listeners = this.listeners.get(eventType);
      if (listeners) {
        listeners.delete(callback);
      }
    };
  }
  notifyListeners(eventType) {
    const listeners = this.listeners.get(eventType);
    if (listeners) {
      listeners.forEach((callback) => callback());
    }
  }
  // Utility Methods
  exportData() {
    const data = {
      blogPosts: this.getBlogPosts(),
      caseStudies: this.getCaseStudies(),
      customerStories: this.getCustomerStories(),
      pageContent: this.getAllPageContent(),
      testimonials: this.getTestimonials(),
      exportedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return JSON.stringify(data, null, 2);
  }
  importData(jsonData) {
    try {
      const data = JSON.parse(jsonData);
      if (data.blogPosts) localStorage.setItem("cms_blog_posts", JSON.stringify(data.blogPosts));
      if (data.caseStudies) localStorage.setItem("cms_case_studies", JSON.stringify(data.caseStudies));
      if (data.customerStories) localStorage.setItem("cms_customer_stories", JSON.stringify(data.customerStories));
      if (data.pageContent) localStorage.setItem("cms_page_content", JSON.stringify(data.pageContent));
      if (data.testimonials) localStorage.setItem("cms_testimonials", JSON.stringify(data.testimonials));
      this.listeners.forEach((listeners, eventType) => {
        listeners.forEach((callback) => callback());
      });
      return true;
    } catch (error) {
      console.error("Failed to import data:", error);
      return false;
    }
  }
  clearAllData() {
    localStorage.removeItem("cms_blog_posts");
    localStorage.removeItem("cms_case_studies");
    localStorage.removeItem("cms_customer_stories");
    localStorage.removeItem("cms_page_content");
    localStorage.removeItem("cms_testimonials");
    this.initializeDefaultData();
    this.listeners.forEach((listeners, eventType) => {
      listeners.forEach((callback) => callback());
    });
  }
};
__publicField(_DataService, "instance");
__publicField(_DataService, "SEED_VERSION", "1.1.0");
let DataService = _DataService;
const dataService = DataService.getInstance();
export {
  dataService as d
};
