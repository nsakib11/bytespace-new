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
  category: "Design" | "Development" | "IT & Software" | "Business" | "Marketing" | "Photography";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessonsCount: number;
  commentsCount: number;
  rating: number;
  studentsCount: number;
  studentsBadge: string;
  price: number;
  period: string;
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
  purepearl: {
    id: "purepearl",
    name: "purepearl studio",
    role: "Digital Design & Tech Creative Studio",
    avatar: "/assets/0577f0e9b7fca2f32639871454da0de95f951709.png",
    bio: "purepearl studio is a premier creative collective providing actionable, production-ready lessons in product design, modern software engineering, and digital growth.",
    studentsCount: 12000,
    coursesCount: 70,
    rating: 4.5,
  },
};

export const COURSES: Course[] = [
  {
    id: "1",
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    category: "Design",
    level: "Beginner",
    duration: "2 hours 16 mins",
    lessonsCount: 17,
    commentsCount: 59,
    rating: 4.5,
    studentsCount: 1240,
    studentsBadge: "26+",
    price: 25,
    period: "/lifetime",
    image: "/assets/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.png",
    badge: "Featured",
    featured: true,
    instructor: MOCK_INSTRUCTORS.purepearl,
    shortDescription: "Master modern UI/UX design in Figma from canvas navigation, auto layout, and responsive components to interactive design systems.",
    overview: "This foundational Figma course guides you step-by-step through the core tools of UI/UX design. Learn how to configure frames, constraints, design tokens, typography scales, auto layout v5, and build scalable interactive prototypes ready for development handoff.",
    whatYouWillLearn: [
      "Master Figma canvas, frames, and flexible grid systems",
      "Harness Auto Layout for responsive and adaptive UI components",
      "Create reusable typography and color design tokens",
      "Prototype modern micro-interactions and developer handoffs",
    ],
    modules: [
      {
        title: "Module 1: Figma Fundamentals & Auto Layout",
        lessonsCount: 6,
        totalDuration: "48 mins",
        lessons: [
          { title: "Introduction to the ByteSpace Figma Canvas", duration: "08:15", isPreview: true },
          { title: "Frames, Constraints, and Modern Grids", duration: "10:30", isPreview: true },
          { title: "Auto Layout Deep Dive: Padding & Resizing", duration: "14:20" },
          { title: "Component Sets and Variant Properties", duration: "15:00" },
        ],
      },
      {
        title: "Module 2: Design Systems & Dev Handoff",
        lessonsCount: 11,
        totalDuration: "1 hour 28 mins",
        lessons: [
          { title: "Color Palettes, Variables, and Design Tokens", duration: "16:45" },
          { title: "Interactive States & Micro-animations", duration: "18:20" },
          { title: "Organizing File Structures for Engineering", duration: "12:10" },
          { title: "Exporting Assets and Developer Specifications", duration: "14:40" },
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    category: "Development",
    level: "Beginner",
    duration: "2 hours 16 mins",
    lessonsCount: 17,
    commentsCount: 59,
    rating: 4.5,
    studentsCount: 980,
    studentsBadge: "26+",
    price: 25,
    period: "/lifetime",
    image: "/assets/c88264191d691ba3300ad4f82a942429bb912fa5.png",
    badge: "Popular",
    featured: true,
    instructor: MOCK_INSTRUCTORS.purepearl,
    shortDescription: "Learn how to architect, package, and launch production digital assets, code kits, and scalable templates that generate recurring revenue.",
    overview: "Understand the lifecycle of digital asset creation. From structuring clean source code and UI kits to documentation, licensing, automated CI/CD distribution, and monetization across digital marketplaces.",
    whatYouWillLearn: [
      "Identify high-demand digital asset niches and tooling requirements",
      "Package code libraries, components, and design assets cleanly",
      "Write automated tests, versioning scripts, and clear documentation",
      "Implement monetization funnels and customer licensing",
    ],
    modules: [
      {
        title: "Module 1: Concept & Asset Architecture",
        lessonsCount: 8,
        totalDuration: "1 hour 05 mins",
        lessons: [
          { title: "Market Research & Asset Validation", duration: "09:30", isPreview: true },
          { title: "Structuring Component Repositories", duration: "14:15" },
          { title: "Automated Packaging with npm & GitHub Releases", duration: "16:20" },
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    category: "IT & Software",
    level: "Beginner",
    duration: "2 hours 16 mins",
    lessonsCount: 17,
    commentsCount: 59,
    rating: 4.5,
    studentsCount: 1540,
    studentsBadge: "26+",
    price: 25,
    period: "/lifetime",
    image: "/assets/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.png",
    badge: "Trending",
    featured: true,
    instructor: MOCK_INSTRUCTORS.purepearl,
    shortDescription: "Demystify modern data pipelines, distributed systems, BigQuery, and scalable analytics for data-informed decision making.",
    overview: "Discover how world-class tech companies collect, process, query, and visualize massive datasets. Learn SQL query optimization, distributed storage architecture, ETL workflows, and real-time dashboard telemetry.",
    whatYouWillLearn: [
      "Understand Big Data architecture and distributed computing concepts",
      "Write high-efficiency SQL queries for analytical databases",
      "Design resilient ETL pipelines and automated sync intervals",
      "Transform raw analytical data into executive visual dashboards",
    ],
    modules: [
      {
        title: "Module 1: Big Data Fundamentals",
        lessonsCount: 9,
        totalDuration: "1 hour 12 mins",
        lessons: [
          { title: "Architecture of Modern Distributed Databases", duration: "12:40", isPreview: true },
          { title: "Querying Multi-Million Row Datasets", duration: "18:15" },
        ],
      },
    ],
  },
  {
    id: "4",
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    category: "Business",
    level: "Beginner",
    duration: "2 hours 16 mins",
    lessonsCount: 17,
    commentsCount: 59,
    rating: 4.5,
    studentsCount: 890,
    studentsBadge: "26+",
    price: 25,
    period: "/lifetime",
    image: "/assets/72e18d90fb9ddac1944e3483a501f3cdae505f57.png",
    badge: "Essential",
    featured: true,
    instructor: MOCK_INSTRUCTORS.purepearl,
    shortDescription: "Formulate sustainable work habits, deep focus routines, and energy management strategies for builders and creatives.",
    overview: "Prevent burnout while accelerating your creative and professional output. This course teaches evidence-based cognitive scheduling, digital minimalism, mindful breaks, and boundary setting for remote builders.",
    whatYouWillLearn: [
      "Implement time-blocking and asynchronous communication systems",
      "Mitigate cognitive overload and preserve uninterrupted focus blocks",
      "Build healthy physical and mental routines tailored for remote work",
      "Sustain long-term creative motivation without creative depletion",
    ],
    modules: [
      {
        title: "Module 1: Designing Your High-Leverage Schedule",
        lessonsCount: 7,
        totalDuration: "55 mins",
        lessons: [
          { title: "The Psychology of Deep Work and Distraction", duration: "11:20", isPreview: true },
          { title: "Crafting Non-Negotiable Rest Boundaries", duration: "13:45" },
        ],
      },
    ],
  },
  {
    id: "5",
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    category: "Business",
    level: "Beginner",
    duration: "2 hours 16 mins",
    lessonsCount: 17,
    commentsCount: 59,
    rating: 4.5,
    studentsCount: 1120,
    studentsBadge: "26+",
    price: 25,
    period: "/lifetime",
    image: "/assets/a89789455304dbf5cadc8e011bc26c97145aa56c.png",
    badge: "Finance",
    featured: true,
    instructor: MOCK_INSTRUCTORS.purepearl,
    shortDescription: "Gain clarity over cash flow, budget forecasting, business invoicing, and investment strategies tailored for creators and freelancers.",
    overview: "Take control of your personal and freelance finances. Discover smart bookkeeping, tax preparations, recurring billing models, emergency cash reserves, and automated investment portfolios.",
    whatYouWillLearn: [
      "Build automated personal and studio cash flow tracking systems",
      "Understand tax deductibility and invoicing structures for creators",
      "Price creative services profitably using value-based metrics",
      "Plan long-term financial freedom with diversified index investing",
    ],
    modules: [
      {
        title: "Module 1: Cash Flow & Bookkeeping Basics",
        lessonsCount: 8,
        totalDuration: "1 hour 02 mins",
        lessons: [
          { title: "Separating Personal and Business Finances", duration: "10:15", isPreview: true },
          { title: "Automating Income Distribution and Savings", duration: "14:30" },
        ],
      },
    ],
  },
  {
    id: "6",
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    category: "Business",
    level: "Beginner",
    duration: "2 hours 16 mins",
    lessonsCount: 17,
    commentsCount: 59,
    rating: 4.5,
    studentsCount: 2100,
    studentsBadge: "26+",
    price: 25,
    period: "/lifetime",
    image: "/assets/69362b026219ac3eb8b4e77e8bbe4e18c4464b44.png",
    badge: "Startup",
    featured: true,
    instructor: MOCK_INSTRUCTORS.purepearl,
    shortDescription: "Validate product ideas, launch minimum viable products (MVPs), acquire early customers, and scale your venture effectively.",
    overview: "Turn raw ideas into thriving, self-sustaining businesses. Learn lean validation techniques, no-code prototyping, rapid customer interview scripts, go-to-market strategies, and fundraising essentials.",
    whatYouWillLearn: [
      "Validate product concepts before writing a single line of code",
      "Build and launch rapid MVPs to measure real customer demand",
      "Acquire your first 100 paying customers through cold outreach and organic loops",
      "Scale operations, hire key contributors, and pitch investors confidently",
    ],
    modules: [
      {
        title: "Module 1: Validation & Rapid Prototyping",
        lessonsCount: 8,
        totalDuration: "1 hour 10 mins",
        lessons: [
          { title: "De-risking the Startup Hypothesis", duration: "11:50", isPreview: true },
          { title: "Customer Discovery Interviews That Reveal Truth", duration: "15:20" },
        ],
      },
    ],
  },
];

export const CATEGORIES = [
  {
    name: "Design",
    icon: "palette",
    count: "200+ Courses",
    description: "UI/UX, visual design, 3D modeling, illustration, and branding.",
  },
  {
    name: "Development",
    icon: "code",
    count: "350+ Courses",
    description: "Web development, React, Next.js, TypeScript, and full-stack systems.",
  },
  {
    name: "IT & Software",
    icon: "server",
    count: "180+ Courses",
    description: "Cloud computing, cybersecurity, devops, and database administration.",
  },
  {
    name: "Business",
    icon: "briefcase",
    count: "150+ Courses",
    description: "Entrepreneurship, financial modeling, startup strategy, and operations.",
  },
  {
    name: "Marketing",
    icon: "megaphone",
    count: "120+ Courses",
    description: "Digital acquisition, social media marketing, SEO, and brand growth.",
  },
  {
    name: "Photography",
    icon: "camera",
    count: "90+ Courses",
    description: "Commercial lighting, portraiture, video editing, and color grading.",
  },
];

export const FILTER_PILLS = [
  // Row 1
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  // Row 2
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  // Row 3
  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
    "+ More",
  ],
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/0577f0e9b7fca2f32639871454da0de95f951709.png",
    rating: 5,
    quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: "test-2",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/63c4be83222c85e6c852819bc5d4b24a87a87fb6.png",
    rating: 5,
    quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: "test-3",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/728c3b1d33fe647a46f9bf668322f8c1d94ed937.png",
    rating: 5,
    quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];
