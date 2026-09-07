export type Project = {
  id: string;
  name: string;
  index: string;
  tagline: string;
  category: string;
  status: string;
  role: string;
  whatIBuilt: string;
  whatItDoes: string;
  purpose: string;
  keyFeatures: string[];
  techStack: {
    languages: string[];
    frameworks: string[];
    libraries: string[];
    tools: string[];
  };
  live?: string;
  source?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "acynova",
    name: "ACYNOVA",
    index: "01",
    tagline: "A development identity for building websites and software experiences.",
    category: "Brand / Studio",
    status: "Active",
    role: "Founder · Design · Development",
    whatIBuilt:
      "A complete development identity and brand system under the name ACYNOVA, including a portfolio site, service structure and visual language for my own software work.",
    whatItDoes:
      "It acts as the umbrella brand for websites, web applications and digital products I build, giving client work and personal projects a single credible home.",
    purpose:
      "Client work and personal software needed a single identity that felt credible instead of freelance-generic.",
    keyFeatures: [
      "Brand system and visual identity",
      "Service structure",
      "Work presentation",
      "Contact flow",
      "Fast static deployment",
    ],
    techStack: {
      languages: ["TypeScript", "HTML", "CSS"],
      frameworks: ["Next.js"],
      libraries: ["Tailwind CSS"],
      tools: ["Git", "GitHub", "Vercel", "VS Code"],
    },
    featured: true,
  },
  {
    id: "napepgo",
    name: "NAPEPGO",
    index: "02",
    tagline: "Transportation platform connecting passengers with car and Keke Napep drivers.",
    category: "Platform / Product",
    status: "In development",
    role: "Product · Frontend · Backend",
    whatIBuilt:
      "A two-sided transportation platform with passenger and driver experiences, ride requests, a wallet system, fare calculation, driver management, an admin dashboard and safety controls.",
    whatItDoes:
      "Passengers request rides, drivers accept them, and the system handles fares, wallets, platform commission and trip records.",
    purpose:
      "Local rides are arranged informally, with no fare clarity, no driver accountability and no record of a trip.",
    keyFeatures: [
      "Passenger experience",
      "Driver experience",
      "Ride requests",
      "Wallet",
      "Fare calculation",
      "Driver management",
      "Admin dashboard",
      "Platform commission",
      "Account controls",
      "Safety mechanisms",
    ],
    techStack: {
      languages: ["JavaScript"],
      frameworks: ["React", "Node.js", "Express.js"],
      libraries: [],
      tools: ["MongoDB", "Git", "GitHub", "VS Code", "REST APIs"],
    },
    featured: true,
  },
  {
    id: "vonzale",
    name: "VONZALE",
    index: "03",
    tagline: "Clothing and fashion e-commerce brand with a full shopping experience.",
    category: "E-commerce / Brand",
    status: "In development",
    role: "Branding · Design · Development",
    whatIBuilt:
      "A fashion e-commerce brand with editorial product presentation, a full catalogue, shopping cart and checkout flow.",
    whatItDoes:
      "It presents clothing as a brand experience rather than an inventory list, letting customers browse, select and move toward purchase.",
    purpose:
      "Fashion catalogues online usually look like inventory lists, not like a brand.",
    keyFeatures: [
      "Editorial product presentation",
      "Catalogue",
      "Cart flow",
      "Brand identity",
      "Mobile-first layout",
    ],
    techStack: {
      languages: ["JavaScript"],
      frameworks: ["React", "Node.js"],
      libraries: ["Tailwind CSS"],
      tools: ["MongoDB", "Git", "GitHub", "VS Code"],
    },
    featured: true,
  },
  {
    id: "sy-autos",
    name: "S.Y AUTOS",
    index: "04",
    tagline: "Automotive advertising and vehicle showcase.",
    category: "Business / Showcase",
    status: "Live concept",
    role: "Design · Development",
    whatIBuilt:
      "A dedicated vehicle showcase and advertising site where each vehicle is presented properly and enquiries land directly.",
    whatItDoes:
      "It gives vehicle listings a permanent, trustworthy home instead of letting them disappear in social feeds.",
    purpose:
      "Vehicle adverts get lost in social feeds with no permanent, trustworthy home.",
    keyFeatures: [
      "Vehicle listings",
      "Product photography layout",
      "Vehicle detail pages",
      "Customer contact",
      "Fast static loading",
    ],
    techStack: {
      languages: ["HTML", "CSS", "JavaScript"],
      frameworks: [],
      libraries: [],
      tools: ["Git", "GitHub", "VS Code"],
    },
  },
  {
    id: "prime-mssn",
    name: "PRIME UNIVERSITY / MSSN",
    index: "05",
    tagline: "Institutional and community website concept for university users.",
    category: "Institutional",
    status: "Concept",
    role: "Design · Development",
    whatIBuilt:
      "An institutional and community website concept that holds announcements, activities and membership information in one structured place.",
    whatItDoes:
      "It gives a campus community a central reference point for news, events and membership details.",
    purpose:
      "Campus communities communicate through scattered groups with no central reference point.",
    keyFeatures: [
      "Information architecture",
      "Announcements",
      "Activities",
      "Membership info",
      "Accessible semantic structure",
    ],
    techStack: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["React"],
      libraries: ["Tailwind CSS"],
      tools: ["Git", "GitHub", "VS Code"],
    },
  },
  {
    id: "yusuf-foods",
    name: "YUSUF FOODS",
    index: "06",
    tagline: "Food business website focused on product presentation and ordering clarity.",
    category: "Business",
    status: "Concept",
    role: "Design · Development",
    whatIBuilt:
      "A food business website focused on product presentation, clear pricing and a simple path from browsing to contacting the business.",
    whatItDoes:
      "It shows what is available, how much it costs and how to place an order.",
    purpose:
      "Small food businesses lose orders because pricing and availability are unclear.",
    keyFeatures: [
      "Menu presentation",
      "Pricing clarity",
      "Order enquiry",
      "Mobile-first layout",
      "Fast static build",
    ],
    techStack: {
      languages: ["HTML", "CSS", "JavaScript"],
      frameworks: [],
      libraries: [],
      tools: ["Git", "GitHub", "VS Code"],
    },
  },
  {
    id: "ramadan",
    name: "RAMADAN COUNTDOWN",
    index: "07",
    tagline: "Interactive countdown experience built around timing and presentation.",
    category: "Web experience",
    status: "Live concept",
    role: "Design · Development",
    whatIBuilt:
      "An interactive countdown experience that tracks time to Ramadan and responds visually as the date approaches.",
    whatItDoes:
      "It shows how much time remains and uses motion and state changes to create a sense of occasion.",
    purpose:
      "Countdown pages are usually one static number with no sense of occasion.",
    keyFeatures: [
      "Live countdown",
      "Date logic",
      "Animated states",
      "Responsive layout",
      "Drift-safe intervals",
    ],
    techStack: {
      languages: ["JavaScript", "CSS", "HTML"],
      frameworks: [],
      libraries: [],
      tools: ["REST APIs", "Git", "GitHub", "VS Code"],
    },
  },
  {
    id: "prayer-qibla",
    name: "PRAYER TIMES / QIBLA",
    index: "08",
    tagline: "Utility web experience for prayer times and Qibla direction.",
    category: "Utility",
    status: "In development",
    role: "Design · Development",
    whatIBuilt:
      "A focused utility that answers two questions immediately: when the next prayer is, and which direction to face.",
    whatItDoes:
      "It fetches location-based prayer times and calculates Qibla direction with a clean, readable interface.",
    purpose:
      "Existing tools are cluttered with adverts and hard to read at a glance.",
    keyFeatures: [
      "Location-based times",
      "Qibla direction",
      "Next-prayer state",
      "Offline-friendly UI",
      "Graceful permission fallbacks",
    ],
    techStack: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: [],
      libraries: [],
      tools: ["REST APIs", "Geolocation API", "Git", "GitHub", "VS Code"],
    },
  },
  {
    id: "chess",
    name: "CHESS",
    index: "09",
    tagline: "Interactive chess with real move validation.",
    category: "Game / Logic",
    status: "Live concept",
    role: "Engineering · Interface",
    whatIBuilt:
      "An interactive chess game with a board engine that handles move generation, turn state, capture and check conditions.",
    whatItDoes:
      "It lets two players play chess with legal move enforcement rather than just moving pieces freely.",
    purpose:
      "Rendering a board is easy; enforcing legal chess is where most versions stop.",
    keyFeatures: [
      "Move validation",
      "Turn state",
      "Capture handling",
      "Clean board interface",
      "Pure-function game state",
    ],
    techStack: {
      languages: ["TypeScript", "JavaScript"],
      frameworks: ["React"],
      libraries: [],
      tools: ["Git", "GitHub", "VS Code"],
    },
  },
  {
    id: "yusuf-hanma",
    name: "YUSUF HANMA",
    index: "10",
    tagline: "Fitness course website built around conversion.",
    category: "Course / Marketing",
    status: "Concept",
    role: "Design · Development",
    whatIBuilt:
      "A fitness course marketing site that presents a training programme and drives sign-ups through clear hierarchy.",
    whatItDoes:
      "It explains the programme, proves the content and asks for the sign-up once, clearly.",
    purpose:
      "Course pages bury the offer under paragraphs of text.",
    keyFeatures: [
      "Course presentation",
      "Educational content blocks",
      "Visual hierarchy",
      "Conversion path",
      "Mobile-first layout",
    ],
    techStack: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["React"],
      libraries: ["Tailwind CSS"],
      tools: ["Git", "GitHub", "VS Code"],
    },
  },
  {
    id: "carlton",
    name: "CARLTON / HOTEL",
    index: "11",
    tagline: "Hotel and apartment marketing site with a luxury presentation layer.",
    category: "Hospitality",
    status: "Concept",
    role: "Design · Development",
    whatIBuilt:
      "A luxury hotel and apartment marketing site with a restrained, high-end presentation of rooms, apartments and amenities.",
    whatItDoes:
      "It presents the property in a way that matches its value and leads visitors to a booking enquiry.",
    purpose:
      "Hospitality sites often feel cheaper than the property they represent.",
    keyFeatures: [
      "Rooms",
      "Apartments",
      "Amenities",
      "Booking / contact experience",
      "Luxury spacing and typography",
    ],
    techStack: {
      languages: ["TypeScript", "HTML", "CSS"],
      frameworks: ["Next.js"],
      libraries: ["Tailwind CSS"],
      tools: ["Git", "GitHub", "Vercel", "VS Code"],
    },
  },
  {
    id: "real-estate",
    name: "REAL ESTATE",
    index: "12",
    tagline: "Property discovery and listing experience.",
    category: "Marketplace",
    status: "In development",
    role: "Design · Development",
    whatIBuilt:
      "A property discovery and listing platform with search, filtering and detail pages that answer the buyer's real questions.",
    whatItDoes:
      "It lets users find properties through filters and view detailed listings with contact options.",
    purpose:
      "Property hunting online means scrolling endlessly with no useful filtering.",
    keyFeatures: [
      "Property discovery",
      "Listings",
      "Search & filters",
      "Property detail",
      "Contact",
    ],
    techStack: {
      languages: ["JavaScript"],
      frameworks: ["React", "Node.js"],
      libraries: [],
      tools: ["MongoDB", "Git", "GitHub", "VS Code", "REST APIs"],
    },
  },
  {
    id: "whatsapp-market",
    name: "WHATSAPP MARKET",
    index: "13",
    tagline: "Marketplace built around how people already sell — on WhatsApp.",
    category: "Marketplace",
    status: "In development",
    role: "Product · Development",
    whatIBuilt:
      "A marketplace that gives every product a permanent page and a direct WhatsApp chat handoff, built around how people already sell.",
    whatItDoes:
      "It lets sellers list products, share them and hand buyers off to WhatsApp to complete the conversation.",
    purpose:
      "Sellers trade in WhatsApp groups where products vanish as the chat scrolls.",
    keyFeatures: [
      "Product discovery",
      "Seller profiles",
      "Product sharing",
      "WhatsApp handoff",
      "Simple purchase flow",
    ],
    techStack: {
      languages: ["JavaScript"],
      frameworks: ["React", "Node.js"],
      libraries: [],
      tools: ["MongoDB", "Git", "GitHub", "VS Code", "REST APIs"],
    },
  },
  {
    id: "sy-bot",
    name: "S.Y.BOT",
    index: "14",
    tagline: "Experimental WhatsApp automation project.",
    category: "Automation / Experimental",
    status: "Experimental",
    role: "Engineering",
    whatIBuilt:
      "An experimental WhatsApp automation layer that responds to commands, routes tasks and handles sessions without supervision.",
    whatItDoes:
      "It absorbs repetitive message handling through a command-driven bot interface.",
    purpose:
      "Repetitive message handling eats hours that software should absorb.",
    keyFeatures: [
      "Command handling",
      "Automated responses",
      "Task routing",
      "Session persistence",
      "Modular command registry",
    ],
    techStack: {
      languages: ["JavaScript"],
      frameworks: ["Node.js"],
      libraries: [],
      tools: ["REST APIs", "Git", "GitHub", "VS Code"],
    },
  },
];

export type Tech = {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools & Infrastructure";
  use: string;
  projects: number;
};

export const stack: Tech[] = [
  { name: "HTML", category: "Frontend", use: "Semantic document structure", projects: 14 },
  { name: "CSS", category: "Frontend", use: "Layout, motion and design systems", projects: 14 },
  { name: "JavaScript", category: "Frontend", use: "Interaction and application logic", projects: 14 },
  { name: "React", category: "Frontend", use: "Component architecture and state", projects: 9 },
  { name: "Next.js", category: "Frontend", use: "Routing, rendering and production builds", projects: 3 },
  { name: "Tailwind CSS", category: "Frontend", use: "Token-driven styling at speed", projects: 8 },
  { name: "TypeScript", category: "Frontend", use: "Type safety across larger codebases", projects: 5 },
  { name: "Node.js", category: "Backend", use: "Server runtime for APIs and automation", projects: 5 },
  { name: "Express.js", category: "Backend", use: "HTTP routing and middleware", projects: 3 },
  { name: "Python", category: "Backend", use: "Scripting and data work", projects: 2 },
  { name: "MongoDB", category: "Database", use: "Document storage for products, users and trips", projects: 5 },
  { name: "Git", category: "Tools & Infrastructure", use: "Version control and history", projects: 14 },
  { name: "GitHub", category: "Tools & Infrastructure", use: "Code hosting and collaboration", projects: 14 },
  { name: "Vercel", category: "Tools & Infrastructure", use: "Frontend deployment", projects: 6 },
  { name: "Render", category: "Tools & Infrastructure", use: "Backend service hosting", projects: 3 },
  { name: "VS Code", category: "Tools & Infrastructure", use: "Primary development environment", projects: 14 },
  { name: "REST APIs", category: "Tools & Infrastructure", use: "Service contracts between client and server", projects: 8 },
];

export const labItems = [
  { name: "Cursor field", tag: "EXPERIMENTS", note: "Pointer-reactive particle grid rendered on canvas." },
  { name: "Shader plane", tag: "WEBGL", note: "Three.js surface driven by noise and time uniforms." },
  { name: "Prompt tools", tag: "AI", note: "Small AI interfaces for drafting and summarising." },
  { name: "Motion primitives", tag: "UI", note: "Reveal, stagger and scroll behaviours as reusable parts." },
  { name: "Message bots", tag: "AUTOMATION", note: "Command-driven automation over messaging APIs." },
  { name: "Board engines", tag: "GAMES", note: "Move generation and rule enforcement, no libraries." },
  { name: "Data probes", tag: "APIS", note: "Fetch, cache and normalise third-party endpoints." },
  { name: "Interface studies", tag: "PROTOTYPES", note: "Unfinished layouts kept for the ideas inside them." },
];

export const journey = [
  { phase: "00", title: "Software engineering", body: "Started formal study of software engineering and the fundamentals under it." },
  { phase: "01", title: "Web development", body: "HTML, CSS and JavaScript — building pages until the browser stopped being a mystery." },
  { phase: "02", title: "Frontend", body: "React, component architecture, state and interfaces that hold up under real use." },
  { phase: "03", title: "Backend", body: "Node.js, Express and MongoDB — APIs, data models and server-side thinking." },
  { phase: "04", title: "Full-stack", body: "Owning a product end to end instead of one half of it." },
  { phase: "05", title: "Interface & motion", body: "UI/UX experimentation: typography, spacing, motion and how things should feel." },
  { phase: "06", title: "Deployment", body: "Vercel, Render, environments and shipping to real users instead of localhost." },
  { phase: "07", title: "Products & brands", body: "ACYNOVA, NAPEPGO, VONZALE — projects with identities, not just repositories." },
];

export const contact = {
  whatsapp: { label: "+63 878-9844-8012", href: "https://wa.me/6387898448012" },
  phone: { label: "07016466056", href: "tel:07016466056" },
  email: { label: "yusufsul123000@gmail.com", href: "mailto:yusufsul123000@gmail.com" },
  github: { label: "github.com/Yusuf078996", href: "https://github.com/Yusuf078996" },
  linkedin: { label: "linkedin.com/in/yusuf-suleiman", href: "https://www.linkedin.com/in/yusuf-suleiman-51b158370" },
  instagram: { label: "instagram.com/dev._.dude", href: "https://www.instagram.com/dev._.dude/" },
};
