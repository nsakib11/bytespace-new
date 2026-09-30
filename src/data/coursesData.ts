export interface Instructor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  studentsCount: number;
  coursesCount: number;
  rating: number;
}

export interface Lesson {
  title: string;
  duration: string;
  isPreview?: boolean;
}

export interface CourseModule {
  title: string;
  lessonsCount: number;
  totalDuration: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: "Development" | "Design" | "Marketing" | "Business" | "Data Science";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  lessonsCount: number;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  price: number;
  originalPrice: number;
  image: string;
  badge?: string;
  featured?: boolean;
  instructor: Instructor;
  shortDescription: string;
  overview: string;
  whatYouWillLearn: string[];
  modules: CourseModule[];
}

export const MOCK_INSTRUCTORS: Record<string, Instructor> = {
  sarah: {
    id: "inst-1",
    name: "Sarah Jenkins",
    role: "Lead UX Architect @ Stripe",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    bio: "Sarah has over 10 years of experience designing scalable design systems and intuitive user interfaces for high-growth tech enterprises.",
    studentsCount: 34200,
    coursesCount: 6,
    rating: 4.9,
  },
  david: {
    id: "inst-2",
    name: "David Chen",
    role: "Principal Engineer @ Google",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    bio: "David specializes in full-stack architecture, high-performance distributed systems, and modern web application development with React and Next.js.",
    studentsCount: 48900,
    coursesCount: 8,
    rating: 4.95,
  },
  elena: {
    id: "inst-3",
    name: "Elena Rostova",
    role: "Senior AI Researcher @ Anthropic",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    bio: "Elena teaches foundational and cutting-edge machine learning, deep neural networks, and generative AI engineering.",
    studentsCount: 28400,
    coursesCount: 5,
    rating: 4.88,
  },
  marcus: {
    id: "inst-4",
    name: "Marcus Vance",
    role: "Head of Growth @ Linear",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    bio: "Marcus has driven viral user acquisition, product-led growth, and scalable marketing funnels for top tier SaaS unicorns.",
    studentsCount: 19800,
    coursesCount: 4,
    rating: 4.82,
  },
};

export const COURSES: Course[] = [
  {
    id: "1",
    slug: "modern-ui-ux-design-systems-masterclass",
    title: "Modern UI/UX & Design Systems Masterclass 2026",
    category: "Design",
    level: "All Levels",
    duration: "18 hrs 40 mins",
    lessonsCount: 42,
    rating: 4.9,
    reviewsCount: 1240,
    studentsCount: 8900,
    price: 49.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller",
    featured: true,
    instructor: MOCK_INSTRUCTORS.sarah,
    shortDescription: "Learn to design production-ready Figma design systems, micro-interactions, responsive mobile interfaces, and accessible design tokens.",
    overview: "This comprehensive design masterclass takes you from foundational visual aesthetics to advanced responsive components, auto-layout wizardry, variant properties, and developer handoff best practices.",
    whatYouWillLearn: [
      "Master Figma advanced auto-layout, nested component properties, and design tokens",
      "Build a scalable 200+ component design system used by modern enterprise teams",
      "Conduct actionable user research, create wireframes, and design high-fidelity prototypes",
      "Design accessible interfaces that pass WCAG AA and AAA color contrast standards",
      "Streamline developer handoff with clear documentation and design specs",
    ],
    modules: [
      {
        title: "Module 1: Foundations of Contemporary UI Design",
        lessonsCount: 6,
        totalDuration: "2 hrs 15 mins",
        lessons: [
          { title: "Visual Hierarchy, Spacing, & 8pt Grid Systems", duration: "18:30", isPreview: true },
          { title: "Typography Scales and Font Pairing Strategies", duration: "24:10", isPreview: true },
          { title: "Color Theory & Crafting Accessible Color Palettes", duration: "28:45" },
          { title: "Figma Setup & Essential Shortcuts for Speed", duration: "22:00" },
        ],
      },
      {
        title: "Module 2: Advanced Figma Auto Layout & Components",
        lessonsCount: 8,
        totalDuration: "3 hrs 40 mins",
        lessons: [
          { title: "Auto Layout 5.0 Deep Dive: Wrapping & Min/Max Constraints", duration: "32:15", isPreview: true },
          { title: "Creating Resilient Button & Input Component Sets", duration: "27:40" },
          { title: "Interactive Component States (Hover, Active, Disabled, Focus)", duration: "31:10" },
          { title: "Component Variants, Booleans, and Text Swaps", duration: "35:00" },
        ],
      },
      {
        title: "Module 3: Scalable Design Systems in Practice",
        lessonsCount: 10,
        totalDuration: "4 hrs 50 mins",
        lessons: [
          { title: "Structuring Global Styles and Design Tokens", duration: "29:30" },
          { title: "Dark Mode Theming and Semantic Color Swapping", duration: "34:15" },
          { title: "Publishing & Versioning Team Component Libraries", duration: "26:50" },
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "full-stack-nextjs-typescript-mastery",
    title: "Full-Stack Next.js 16 & TypeScript Production Mastery",
    category: "Development",
    level: "Intermediate",
    duration: "24 hrs 15 mins",
    lessonsCount: 56,
    rating: 4.95,
    reviewsCount: 1820,
    studentsCount: 14200,
    price: 59.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    badge: "Trending",
    featured: true,
    instructor: MOCK_INSTRUCTORS.david,
    shortDescription: "Architect, build, test, and deploy resilient web apps with Next.js App Router, Server Actions, TypeScript, Tailwind, and Prisma.",
    overview: "Step into full-stack modern engineering. Learn how to architect zero-latency server components, manage optimistic updates, implement secure JWT and OAuth authentication, and deploy to Vercel and edge runtimes.",
    whatYouWillLearn: [
      "Deep understanding of React Server Components, Streaming, and Suspense",
      "Robust data mutations with Next.js Server Actions and Zod validation",
      "Authentication and RBAC using NextAuth/Auth.js with multi-provider login",
      "Database schema modeling and migrations with PostgreSQL and Prisma",
      "End-to-end type safety across client, server, and database layers",
    ],
    modules: [
      {
        title: "Module 1: Next.js App Router Core Architecture",
        lessonsCount: 7,
        totalDuration: "3 hrs 10 mins",
        lessons: [
          { title: "Server Components vs Client Components Demystified", duration: "22:15", isPreview: true },
          { title: "Dynamic Routing, Intercepting Routes, and Parallel Routes", duration: "30:40", isPreview: true },
          { title: "Streaming UI with Suspense Boundaries and Skeleton Fallbacks", duration: "25:20" },
        ],
      },
      {
        title: "Module 2: Server Actions, Forms, & Validation",
        lessonsCount: 8,
        totalDuration: "3 hrs 45 mins",
        lessons: [
          { title: "Form Mutations with Server Actions & useActionState", duration: "28:10" },
          { title: "Validating User Inputs with Zod Schemas", duration: "24:50" },
          { title: "Optimistic UI Updates with useOptimistic Hook", duration: "26:30" },
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "practical-ai-llm-application-engineering",
    title: "Practical AI & LLM Application Engineering with Python",
    category: "Data Science",
    level: "Beginner",
    duration: "16 hrs 30 mins",
    lessonsCount: 38,
    rating: 4.88,
    reviewsCount: 960,
    studentsCount: 7100,
    price: 44.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    featured: true,
    instructor: MOCK_INSTRUCTORS.elena,
    shortDescription: "Build real-world GenAI products: embeddings, vector databases, RAG pipelines, and autonomous AI agents using Python and LangChain.",
    overview: "Unlock the power of modern AI. Learn how LLMs function under the hood, how to optimize prompt architectures, build low-latency Retrieval-Augmented Generation (RAG) engines, and orchestrate multi-agent workflows.",
    whatYouWillLearn: [
      "Integrate state-of-the-art LLMs via REST APIs and SDKs",
      "Construct hybrid RAG systems using Pinecone, Qdrant, and ChromaDB",
      "Implement automated evaluations, hallucinations detectors, and semantic caching",
      "Deploy scalable AI microservices with FastAPI and Docker containerization",
    ],
    modules: [
      {
        title: "Module 1: Foundations of Modern Large Language Models",
        lessonsCount: 5,
        totalDuration: "2 hrs 20 mins",
        lessons: [
          { title: "Tokenization, Context Windows, and Temperature Parameters", duration: "21:00", isPreview: true },
          { title: "Structured JSON Output & Function Calling Workflows", duration: "32:15", isPreview: true },
        ],
      },
    ],
  },
  {
    id: "4",
    slug: "growth-marketing-data-driven-acquisition",
    title: "Growth Marketing & Data-Driven Customer Acquisition",
    category: "Marketing",
    level: "All Levels",
    duration: "14 hrs 10 mins",
    lessonsCount: 32,
    rating: 4.82,
    reviewsCount: 740,
    studentsCount: 5400,
    price: 39.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    badge: "Featured",
    featured: true,
    instructor: MOCK_INSTRUCTORS.marcus,
    shortDescription: "Master modern SEO, viral loops, paid performance campaigns, conversion rate optimization (CRO), and cohort retention analytics.",
    overview: "Scale any product sustainably. Discover how industry leaders run high-velocity growth experiments, optimize landing page conversion funnels, and calculate LTV/CAC ratios.",
    whatYouWillLearn: [
      "Build high-converting acquisition funnels and viral loops",
      "Execute high-ROI Meta, Google, and LinkedIn ad strategies",
      "A/B testing methodologies and statistical significance analysis",
      "Customer retention cohort analysis using Mixpanel and PostHog",
    ],
    modules: [
      {
        title: "Module 1: The Growth Engine Framework",
        lessonsCount: 6,
        totalDuration: "2 hrs 40 mins",
        lessons: [
          { title: "Defining North Star Metrics & Pirate Funnel (AARRR)", duration: "25:30", isPreview: true },
          { title: "Designing Frictionless Onboarding Experiences", duration: "31:40" },
        ],
      },
    ],
  },
  {
    id: "5",
    slug: "react-native-cross-platform-mobile-dev",
    title: "React Native & Expo: Cross-Platform iOS and Android",
    category: "Development",
    level: "Intermediate",
    duration: "21 hrs 00 mins",
    lessonsCount: 48,
    rating: 4.91,
    reviewsCount: 1110,
    studentsCount: 6900,
    price: 54.99,
    originalPrice: 109.99,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    badge: "Updated",
    instructor: MOCK_INSTRUCTORS.david,
    shortDescription: "Ship native iOS and Android apps with a single React codebase using Expo Router, NativeWind, and gestures.",
    overview: "Build native-feeling, butter-smooth mobile applications. Learn file-based mobile navigation, offline synchronization, push notifications, and App Store submission.",
    whatYouWillLearn: [
      "Build cross-platform mobile apps with Expo Router and TypeScript",
      "Integrate native hardware sensors (Camera, Location, Biometrics)",
      "Style mobile apps responsively using NativeWind (Tailwind CSS for mobile)",
      "Prepare and publish production builds to Apple App Store and Google Play",
    ],
    modules: [],
  },
  {
    id: "6",
    slug: "saas-product-strategy-business-models",
    title: "SaaS Product Strategy & Scalable Business Models",
    category: "Business",
    level: "All Levels",
    duration: "12 hrs 50 mins",
    lessonsCount: 28,
    rating: 4.87,
    reviewsCount: 590,
    studentsCount: 4200,
    price: 49.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    instructor: MOCK_INSTRUCTORS.marcus,
    shortDescription: "Learn how to validate product ideas, price tiers, calculate SaaS unit economics, and negotiate enterprise contracts.",
    overview: "From inception to multi-million ARR. Understand product-market fit metrics, pricing psychology, churn mitigation strategies, and investor pitch deck creation.",
    whatYouWillLearn: [
      "Evaluate market opportunities and validate product-market fit",
      "Formulate tiered value metrics and dynamic pricing models",
      "Optimize expansion revenue and reduce customer churn",
    ],
    modules: [],
  },
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Alex Morgan",
    role: "Product Designer @ Figma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    quote: "ByteSpace completely transformed how I approach design systems. The mentors give specific, actionable feedback that you simply can't find in static tutorials. Within 2 months, I landed my dream role!",
  },
  {
    id: "test-2",
    name: "Liam O'Connor",
    role: "Senior Frontend Engineer @ Stripe",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    quote: "The Next.js and TypeScript curriculum is world class. Every concept is accompanied by production-grade exercises rather than toy examples. Highly recommended for anyone serious about engineering.",
  },
  {
    id: "test-3",
    name: "Sophia Martinez",
    role: "Growth Lead @ Notion",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    quote: "Finding a platform that bridges practical hands-on data analytics with real-world growth case studies was impossible until I found ByteSpace. The community alone is worth 10x the price!",
  },
];

export const STATS = [
  { value: "2,000+", label: "Verified Courses" },
  { value: "50,000+", label: "Active Learners" },
  { value: "450+", label: "Industry Mentors" },
  { value: "98.4%", label: "Satisfaction Rate" },
];

export const PARTNERS = [
  { name: "Slack", logo: "SLACK" },
  { name: "Netflix", logo: "NETFLIX" },
  { name: "Google", logo: "GOOGLE" },
  { name: "Spotify", logo: "SPOTIFY" },
  { name: "Microsoft", logo: "MICROSOFT" },
  { name: "Amazon", logo: "AMAZON" },
];
