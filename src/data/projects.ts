
export type ProjectCategory = 'Apps' | 'AI' | 'SaaS' | 'Web App';

export interface ProjectStat {
  icon: LucideIcon;
  value: string;
  label: string;
}


export interface ProjectSection {
  type: 'idea' | 'challenges' | 'solution';
  title: string;
  content: string | string[];
  highlights?: string[];
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  company: string;
  position: string;
  content: string;
}

export interface TechStack {
  frameworks: string[];
  languages: string[];
  cloud: string[];
  database: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  slug: string;
  category: ProjectCategory;
  heroImage: string;
  colorVariant: number;
  stats: ProjectStat[];
  sections: ProjectSection[];
  techStack: TechStack;
  features: ProjectFeature[];
  process: ProcessStep[];
  team: TeamMember[];
  testimonial?: Testimonial;
  images?: string[];
}

import {
  Clock,
  Users,
  Zap,
  TrendingUp,
  UserCheck,
  BarChart,
  Palette,
  Server,
  Lightbulb,
  CheckCircle,
  TestTube,
  Code,
  Search,
  Box,
  Mouse,
  Link,
  Brain,
  Download,
  Smile,
  Globe,
  Leaf,
  Truck,
  Star,
  MessageSquare,
  Package,
  LayoutGrid,
  UserPlus,
  Shield,
  FileText,
  Heart,
  Briefcase,
  Map,
  BookOpen,
  ShoppingCart,
  RefreshCw,
  FileCode,
  Rocket,
  MapPin
} from 'lucide-react';

// Import images
import architourImage from "@/assets/architour-app.jpg";
import carzentraImage from "@/assets/carzentra-app.jpg";
import retailxImage from "@/assets/retailx-dashboard.jpg";
import nextstopImage from "@/assets/nextstop-app.jpg";
import tradexImage from "@/assets/tradex-app.jpg";
import finnovaImage from "@/assets/finnova-app.jpg";
import bigoHealthImage from "@/assets/bigohealth-app.jpg";
import jiviImage from "@/assets/jivi-app.jpg";
import siyaAyurvedaImage from "@/assets/siya-ayurveda.jpg";
import amrutamImage from "@/assets/amrutam-global.jpg";
import theBumpImage from "@/assets/the-bump-app.jpg";
import nationwideVisasImage from "@/assets/nationwide-visas.jpg";
import divineBibleImage from "@/assets/divine-bible-app.jpg";
import solAlgoImage from "@/assets/solalgo-app.jpg";


export const projects: Project[] = [
  {
    id: "1",
    title: "ArchiTour: Vision Pro Real Estate App Solution",
    subtitle: "Immersive property walkthroughs. No flights needed.",
    description: "ArchiTour is a Vision Pro real estate app solution built on visionOS. It allows buyers, investors, and decision-makers to walk through properties in immersive 360° using Apple Vision Pro. Designed specifically for spatial computing, ArchiTour transforms static real estate visuals into dynamic, interactive environments helping teams close deals faster and more effectively.",
    shortDescription: "VisionOS-Based App Development for Virtual Property Tours",
    slug: "architour-vision-pro-real-estate",
    category: "Apps",
    heroImage: architourImage,
    colorVariant: 4,
    stats: [
      { icon: Clock, value: "45%", label: "Shortened sales cycles for international clients" },
      { icon: Users, value: "2x", label: "Higher client satisfaction during early-stage presentations" },
      { icon: Zap, value: "60%", label: "Faster project approvals from remote stakeholders" },
      { icon: TrendingUp, value: "65%", label: "Greater engagement with immersive 360° walkthroughs" }
    ],
    sections: [
      {
        type: "idea",
        title: "Transforming Remote Real Estate Visualization",
        content: "Real estate buyers, especially those based overseas, often struggle to visualize a space through flat images or even 3D animations. They want to feel the layout, not just look at it. Our goal: build a visionOS real estate app where clients can move through projects as if they were physically inside. The experience had to be responsive, natural, and optimized for remote property sales using Apple Vision Pro."
      },
      {
        type: "challenges",
        title: "Overcoming Limitations in Traditional Real Estate Sales",
        content: [
          "Traditional 3D visuals lacked interactivity and emotional connection",
          "Remote buyers couldn't judge scale, flow, or layout effectively", 
          "In-person visits were costly, slow, or not feasible",
          "No existing visionOS solutions tailored for real estate firms",
          "Admin-side tools lacked scalability for dynamic property uploads"
        ]
      },
      {
        type: "solution",
        title: "Building an Immersive VisionOS Real Estate App",
        content: "We built ArchiTour. A custom real estate showcase app designed for Apple Vision Pro and powered by visionOS-native spatial interactions.",
        highlights: [
          "Gesture-based and gaze-controlled navigation through projects",
          "Full 360° room-by-room immersive walkthroughs",
          "Context-aware content browsing and project selection",
          "Web-based admin panel for listing uploads and access control",
          "Role-based user views",
          "Real-time project updates and seamless user access"
        ]
      }
    ],
    techStack: {
      frameworks: ["visionOS SDK", "RealityKit"],
      languages: ["SwiftUI"],
      cloud: ["Firebase", "CloudKit"],
      database: ["PostgreSQL"]
    },
    features: [
      {
        title: "360° Property Walkthroughs",
        description: "Navigate immersive rooms and spaces using gestures and gaze tracking"
      },
      {
        title: "Project Search & Role-Based Access", 
        description: "Clients, employees, and customers can access only relevant properties"
      },
      {
        title: "Web-Based Admin Panel",
        description: "Upload projects, categorize images, assign access roles, manage employees"
      }
    ],
    process: [
      {
        title: "Discovery & Planning",
        description: "Defined client needs, user roles, and spatial goals",
        icon: Search
      },
      {
        title: "Design & Asset Structuring",
        description: "Prepared UI/UX flows and media handling models for 360° walkthroughs",
        icon: Palette
      },
      {
        title: "visionOS Development",
        description: "Implemented SwiftUI app and built spatial interactions",
        icon: Code
      },
      {
        title: "Testing & Deployment",
        description: "Tested gestures, security flows, and Vision Pro responsiveness",
        icon: TestTube
      }
    ],
    team: [
      {
        title: "visionOS Developers",
        description: "SwiftUI, RealityKit, Firebase",
        icon: Users
      },
      {
        title: "Spatial UI Designers",
        description: "3D navigation, gesture optimization",
        icon: Palette
      },
      {
        title: "Admin Panel Engineers",
        description: "Secure, scalable backend architecture",
        icon: Server
      }
    ],
    testimonial: {
      company: "Global Real Estate Firm",
      position: "VP, Product Innovation",
      content: "With ArchiTour, we've finally given our clients the experience they expect; immersive, premium, and remotely accessible. Our sales cycle has improved dramatically, and our presentations feel like real walkthroughs, not slideshows."
    }
  },
  {
    id: "2",
    title: "Carzentra: VisionOS Car Exploration App",
    subtitle: "Immersive car exploration and virtual sales experience.",
    description: "Revolutionary VisionOS-based application that transforms car shopping with immersive 360° vehicle exploration, allowing customers to experience cars virtually before making purchase decisions.",
    shortDescription: "VisionOS-Based App for Immersive Car Exploration and Virtual Sales",
    slug: "carzentra-visionos-car-app",
    category: "Apps",
    heroImage: carzentraImage,
    colorVariant: 1,
    stats: [
      { icon: "Clock", value: "50%", label: "Reduced showroom visit time" },
      { icon: "Users", value: "3x", label: "Increased customer engagement" },
      { icon: "Zap", value: "40%", label: "Faster purchase decisions" },
      { icon: "TrendingUp", value: "75%", label: "Higher conversion rates" }
    ],
    sections: [
      {
        type: "idea",
        title: "Revolutionizing Car Shopping Experience",
        content: "Traditional car buying involves lengthy showroom visits and limited vehicle exploration. Customers often struggle to visualize car features and make informed decisions. Our solution: create an immersive VisionOS app for comprehensive car exploration."
      },
      {
        type: "challenges",
        title: "Challenges in Traditional Car Sales",
        content: [
          "Limited time for thorough vehicle inspection",
          "Difficulty comparing multiple models",
          "Lack of interactive feature demonstrations",
          "Geographical constraints for remote buyers"
        ]
      },
      {
        type: "solution",
        title: "Immersive Car Exploration Platform",
        content: "Carzentra provides a comprehensive VisionOS solution for virtual car exploration.",
        highlights: [
          "360° interior and exterior vehicle exploration",
          "Interactive feature demonstrations",
          "Virtual test drive simulations",
          "Comparison tools for multiple models",
          "Real-time configuration and customization"
        ]
      }
    ],
    techStack: {
      frameworks: ["visionOS SDK", "RealityKit"],
      languages: ["SwiftUI"],
      cloud: ["Firebase", "CloudKit"],
      database: ["PostgreSQL"]
    },
    features: [
      {
        title: "360° Vehicle Exploration",
        description: "Explore every angle and detail of vehicles in immersive virtual environments"
      },
      {
        title: "Interactive Features Demo",
        description: "Experience car features and functionalities through spatial interactions"
      },
      {
        title: "Virtual Test Drive",
        description: "Simulate driving experiences using advanced VisionOS capabilities"
      }
    ],
    process: [
      {
        title: "Market Research",
        description: "Analyzed car buying behaviors and pain points",
        icon: "Search"
      },
      {
        title: "3D Modeling",
        description: "Created detailed vehicle models for VisionOS",
        icon: "Box"
      },
      {
        title: "VisionOS Development",
        description: "Built immersive car exploration features",
        icon: "Code"
      },
      {
        title: "Testing & Launch",
        description: "Validated user experience and deployed to market",
        icon: "Rocket"
      }
    ],
    team: [
      {
        title: "VisionOS Developers",
        description: "Spatial computing and car visualization",
        icon: "Users"
      },
      {
        title: "3D Artists",
        description: "High-fidelity vehicle modeling",
        icon: "Palette"
      },
      {
        title: "UX Designers",
        description: "Intuitive spatial navigation design",
        icon: "Mouse"
      }
    ]
  },
  {
    id: "3",
    title: "RetailX: AI-Powered Inventory Management",
    subtitle: "Smart inventory optimization for modern retailers.",
    description: "Advanced AI-powered eCommerce inventory management software that predicts demand, optimizes stock levels, and automates reordering processes for maximum efficiency and profitability.",
    shortDescription: "AI-Powered eCommerce Inventory Management Software",
    slug: "retailx-ai-ecommerce-inventory",
    category: "AI",
    heroImage: retailxImage,
    colorVariant: 2,
    stats: [
      { icon: "TrendingUp", value: "35%", label: "Reduction in inventory costs" },
      { icon: "Zap", value: "90%", label: "Faster reorder processing" },
      { icon: "BarChart", value: "25%", label: "Increase in profit margins" },
      { icon: "Clock", value: "80%", label: "Time saved on manual processes" }
    ],
    sections: [
      {
        type: "idea",
        title: "Smart Inventory Revolution",
        content: "Traditional inventory management relies on manual processes and outdated forecasting methods. RetailX leverages AI to predict demand patterns, optimize stock levels, and automate critical inventory decisions."
      },
      {
        type: "challenges",
        title: "Inventory Management Pain Points",
        content: [
          "Inaccurate demand forecasting",
          "Manual reorder processes",
          "Overstocking and stockouts",
          "Poor visibility across channels",
          "Lack of real-time insights"
        ]
      },
      {
        type: "solution",
        title: "AI-Driven Inventory Optimization",
        content: "RetailX provides intelligent automation for all aspects of inventory management.",
        highlights: [
          "Machine learning demand forecasting",
          "Automated reorder suggestions",
          "Multi-channel inventory tracking",
          "Real-time analytics dashboard",
          "Supplier performance monitoring"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Node.js", "TensorFlow"],
      languages: ["TypeScript", "Python"],
      cloud: ["AWS", "Docker"],
      database: ["PostgreSQL", "Redis"]
    },
    features: [
      {
        title: "Demand Forecasting",
        description: "AI-powered predictions based on historical data and market trends"
      },
      {
        title: "Automated Reordering",
        description: "Smart reorder points and quantities based on demand patterns"
      },
      {
        title: "Multi-Channel Sync",
        description: "Real-time inventory synchronization across all sales channels"
      }
    ],
    process: [
      {
        title: "Data Analysis",
        description: "Analyzed inventory patterns and inefficiencies",
        icon: "BarChart"
      },
      {
        title: "AI Model Development",
        description: "Built machine learning models for demand prediction",
        icon: "Brain"
      },
      {
        title: "Platform Development",
        description: "Created comprehensive inventory management dashboard",
        icon: "Code"
      },
      {
        title: "Integration & Testing",
        description: "Integrated with existing systems and validated accuracy",
        icon: "Link"
      }
    ],
    team: [
      {
        title: "AI/ML Engineers",
        description: "Demand forecasting and optimization algorithms",
        icon: "Brain"
      },
      {
        title: "Full-Stack Developers",
        description: "Dashboard and API development",
        icon: "Code"
      },
      {
        title: "Data Scientists",
        description: "Statistical modeling and analysis",
        icon: "BarChart"
      }
    ]
  },
  {
    id: "4",
    title: "NextStop: VisionOS Travel Planning App",
    subtitle: "Spatial travel discovery and immersive planning.",
    description: "Revolutionary spatial VisionOS app for 360° travel planning and discovery, transforming how travelers explore destinations and plan their journeys with immersive virtual experiences.",
    shortDescription: "Spatial VisionOS App for 360° Travel Planning and Discovery",
    slug: "nextstop-visionos-travel-app",
    category: "Apps",
    heroImage:nextstopImage,
    colorVariant: 3,
    stats: [
      { icon: "Clock", value: "60%", label: "Reduced trip planning time" },
      { icon: "Users", value: "4x", label: "Increased user engagement with destinations" },
      { icon: "TrendingUp", value: "85%", label: "Higher booking conversion rates" },
      { icon: "Zap", value: "70%", label: "Faster decision making" }
    ],
    sections: [
      {
        type: "idea",
        title: "Reimagining Travel Planning",
        content: "Traditional travel planning relies on static images and reviews, making it difficult for travelers to truly understand destinations. NextStop leverages VisionOS to provide immersive 360° destination exploration before booking."
      },
      {
        type: "challenges",
        title: "Travel Planning Limitations",
        content: [
          "Static destination imagery lacks immersion",
          "Difficulty assessing location suitability",
          "Complex itinerary planning processes",
          "Limited preview of accommodations and attractions"
        ]
      },
      {
        type: "solution",
        title: "Immersive Travel Discovery Platform",
        content: "NextStop provides spatial travel planning with virtual destination experiences.",
        highlights: [
          "360° destination walkthroughs",
          "Virtual hotel and attraction tours",
          "Interactive itinerary planning",
          "Real-time booking integration",
          "Social travel sharing features"
        ]
      }
    ],
    techStack: {
      frameworks: ["visionOS SDK", "RealityKit", "MapKit"],
      languages: ["SwiftUI"],
      cloud: ["CloudKit", "Firebase"],
      database: ["Core Data", "PostgreSQL"]
    },
    features: [
      {
        title: "Virtual Destination Tours",
        description: "Explore destinations in immersive 360° before traveling"
      },
      {
        title: "Spatial Itinerary Planning",
        description: "Plan trips using intuitive spatial interfaces and gestures"
      },
      {
        title: "Real-time Booking",
        description: "Book hotels, flights, and activities directly within the app"
      }
    ],
    process: [
      {
        title: "Travel Behavior Analysis",
        description: "Studied user travel planning patterns and pain points",
        icon: "Search"
      },
      {
        title: "360° Content Creation",
        description: "Captured immersive destination content",
        icon: "Palette"
      },
      {
        title: "VisionOS Implementation",
        description: "Built spatial travel planning interfaces",
        icon: "Code"
      },
      {
        title: "Partner Integration",
        description: "Integrated with travel booking services",
        icon: "Link"
      }
    ],
    team: [
      {
        title: "VisionOS Developers",
        description: "Spatial computing and travel visualization",
        icon: "Users"
      },
      {
        title: "Travel Industry Experts",
        description: "Domain knowledge and partnerships",
        icon: "Lightbulb"
      },
      {
        title: "Content Creators",
        description: "360° destination photography and videos",
        icon: "Palette"
      }
    ]
  },
  {
    id: "5",
    title: "TradEX: AI Stock Trading Platform",
    subtitle: "Intelligent trading powered by machine learning.",
    description: "Advanced AI-powered stock trading platform that uses machine learning algorithms to analyze market patterns, predict trends, and provide intelligent trading recommendations for both novice and experienced traders.",
    shortDescription: "Unique Stock Trading App that uses AI",
    slug: "tradex-ai-stock-trading",
    category: "AI",
    heroImage: tradexImage,
    colorVariant: 5,
    stats: [
      { icon: "TrendingUp", value: "75%", label: "Average portfolio performance improvement" },
      { icon: "Zap", value: "10ms", label: "Ultra-fast trade execution" },
      { icon: "BarChart", value: "95%", label: "Prediction accuracy on market trends" },
      { icon: "Users", value: "500K+", label: "Active traders using the platform" }
    ],
    sections: [
      {
        type: "idea",
        title: "Democratizing Smart Trading",
        content: "Stock trading often requires extensive market knowledge and constant monitoring. TradEX uses AI to level the playing field, providing intelligent insights and automated trading strategies accessible to all skill levels."
      },
      {
        type: "challenges",
        title: "Traditional Trading Limitations",
        content: [
          "Requires extensive market knowledge",
          "Time-intensive analysis and monitoring",
          "Emotional decision making leads to losses",
          "Limited access to institutional-grade tools",
          "Complex risk management"
        ]
      },
      {
        type: "solution",
        title: "AI-Powered Trading Intelligence",
        content: "TradEX combines advanced machine learning with intuitive interfaces for smart trading.",
        highlights: [
          "Real-time market analysis using ML algorithms",
          "Automated risk management and portfolio optimization",
          "Personalized trading recommendations",
          "Social trading and copy-trading features",
          "Advanced charting and technical analysis tools"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Django", "TensorFlow"],
      languages: ["Python", "JavaScript", "TypeScript"],
      cloud: ["AWS", "Kubernetes"],
      database: ["PostgreSQL", "Redis", "TimescaleDB"]
    },
    features: [
      {
        title: "AI Market Analysis",
        description: "Machine learning algorithms analyze market data and predict trends in real-time"
      },
      {
        title: "Automated Trading",
        description: "Set up AI-powered trading bots with customizable strategies and risk parameters"
      },
      {
        title: "Portfolio Optimization",
        description: "AI-driven portfolio management with automatic rebalancing and risk assessment"
      }
    ],
    process: [
      {
        title: "Market Research",
        description: "Analyzed trading behaviors and market inefficiencies",
        icon: "Search"
      },
      {
        title: "AI Model Training",
        description: "Developed and trained machine learning models on historical market data",
        icon: "Brain"
      },
      {
        title: "Platform Development",
        description: "Built secure, scalable trading platform with real-time capabilities",
        icon: "Code"
      },
      {
        title: "Regulatory Compliance",
        description: "Ensured compliance with financial regulations and security standards",
        icon: "CheckCircle"
      }
    ],
    team: [
      {
        title: "Quantitative Analysts",
        description: "Financial modeling and algorithm development",
        icon: "BarChart"
      },
      {
        title: "AI/ML Engineers",
        description: "Trading algorithms and predictive models",
        icon: "Brain"
      },
      {
        title: "Financial Compliance",
        description: "Regulatory compliance and security",
        icon: "CheckCircle"
      }
    ]
  },
  {
    id: "6",
    title: "FinNova: AI Lending Platform",
    subtitle: "Smart risk assessment for modern lending.",
    description: "Intelligent lending platform that uses advanced AI algorithms to assess credit risk, predict loan defaults, and streamline the approval process while ensuring fair and responsible lending practices.",
    shortDescription: "Lending made smarter, FinNova predicts risk before you approve.",
    slug: "finnova-ai-lending-platform",
    category: "SaaS",
    heroImage: finnovaImage,
    colorVariant: 6,
    stats: [
      { icon: "Clock", value: "90%", label: "Faster loan processing time" },
      { icon: "BarChart", value: "40%", label: "Reduction in default rates" },
      { icon: "TrendingUp", value: "95%", label: "Risk assessment accuracy" },
      { icon: "Users", value: "85%", label: "Customer satisfaction rate" }
    ],
    sections: [
      {
        type: "idea",
        title: "Revolutionizing Credit Risk Assessment",
        content: "Traditional lending relies on limited credit history and manual processes, often missing qualified borrowers or approving risky loans. FinNova uses AI to analyze hundreds of data points for more accurate, fair, and efficient lending decisions."
      },
      {
        type: "challenges",
        title: "Traditional Lending Problems",
        content: [
          "Limited credit history data for assessment",
          "Manual, time-intensive approval processes",
          "High default rates due to poor risk assessment",
          "Bias in lending decisions",
          "Difficulty serving underbanked populations"
        ]
      },
      {
        type: "solution",
        title: "AI-Driven Lending Intelligence",
        content: "FinNova provides comprehensive AI-powered lending solutions for financial institutions.",
        highlights: [
          "Advanced credit scoring using alternative data",
          "Real-time fraud detection and prevention",
          "Automated loan processing and approval",
          "Fair lending compliance monitoring",
          "Portfolio risk management and optimization"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Django REST", "Scikit-learn"],
      languages: ["Python", "TypeScript"],
      cloud: ["AWS", "Docker"],
      database: ["PostgreSQL", "MongoDB"]
    },
    features: [
      {
        title: "AI Credit Scoring",
        description: "Advanced algorithms analyze traditional and alternative data for accurate credit assessment"
      },
      {
        title: "Automated Processing",
        description: "Streamlined loan approval workflow with minimal manual intervention"
      },
      {
        title: "Risk Monitoring",
        description: "Continuous portfolio monitoring with early warning systems for potential defaults"
      }
    ],
    process: [
      {
        title: "Financial Analysis",
        description: "Studied lending patterns and risk factors across different markets",
        icon: "BarChart"
      },
      {
        title: "AI Model Development",
        description: "Built machine learning models for credit scoring and risk prediction",
        icon: "Brain"
      },
      {
        title: "Platform Integration",
        description: "Integrated with existing banking systems and regulatory frameworks",
        icon: "Link"
      },
      {
        title: "Compliance Testing",
        description: "Validated fair lending practices and regulatory compliance",
        icon: "CheckCircle"
      }
    ],
    team: [
      {
        title: "Risk Analysts",
        description: "Credit risk modeling and validation",
        icon: "BarChart"
      },
      {
        title: "Data Scientists",
        description: "AI model development and optimization",
        icon: "Brain"
      },
      {
        title: "Compliance Experts",
        description: "Regulatory adherence and fair lending practices",
        icon: "CheckCircle"
      }
    ]
  },
  {
    id: "7",
    title: "BigoHealth: Telemedicine Platform",
    subtitle: "Accessible and affordable healthcare for rural India.",
    description: "BigoHealth is a holistic telemedicine platform that enables underserved patients in rural areas to access high-quality, affordable healthcare. It connects patients with curated doctors for consultations, second opinions, lab test bookings, and surgery care, bridging the urban-rural healthcare divide.",
    shortDescription: "Telemedicine & healthcare platform for rural India.",
    slug: "bigohealth-telemedicine-platform",
    category: "Healthcare",
    heroImage: "bigohealthImage",
    colorVariant: 1,
    stats: [
      { icon: "Users", value: "75K+", label: "Patients served in Tier-3 & Tier-4 cities" },
      { icon: "Clock", value: "80%", label: "Reduction in travel time for consultations" },
      { icon: "TrendingUp", value: "₹1 Cr+", label: "Savings in patient treatment costs" },
      { icon: "UserCheck", value: "700+", label: "Verified specialist doctors on platform" }
    ],
    sections: [
      {
        type: "idea",
        title: "Bridging the Rural Healthcare Gap",
        content: "Quality healthcare is often concentrated in urban centers, forcing rural populations to travel long distances and incur significant costs. Our goal was to create a technology-driven platform that makes specialist doctors and comprehensive healthcare services accessible and affordable for everyone, regardless of their location."
      },
      {
        type: "challenges",
        title: "Barriers to Quality Rural Healthcare",
        content: [
          "Limited availability of specialist doctors in remote areas",
          "High costs associated with travel and accommodation for treatment",
          "Lack of a unified platform for consultations, lab tests, and surgery care",
          "Low digital literacy and unreliable internet connectivity",
          "Fragmented patient records and follow-up processes"
        ]
      },
      {
        type: "solution",
        title: "An Integrated Digital Healthcare Ecosystem",
        content: "We developed BigoHealth, a comprehensive mobile and web platform that brings a full suite of healthcare services to the user's fingertips.",
        highlights: [
          "Secure video consultations with multi-specialty doctors",
          "Expert second opinion services and Virtual Tumor Board for cancer care",
          "Integrated booking for lab tests and health checkups",
          "End-to-end surgery care and hospitalization assistance",
          "Digital health record management and follow-up reminders"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Node.js"],
      languages: ["JavaScript", "TypeScript"],
      cloud: ["AWS", "Firebase"],
      database: ["PostgreSQL", "MongoDB"]
    },
    features: [
      {
        title: "Doctor Consultations",
        description: "Book and attend video consultations with verified doctors across various specialties."
      },
      {
        title: "Surgery Care",
        description: "Receive comprehensive assistance for hospitalization and surgical procedures."
      },
      {
        title: "Lab Test Booking",
        description: "Schedule diagnostic tests and health checkups from accredited labs."
      },
      {
        title: "Digital Health Records",
        description: "Securely store and access all your medical records and prescriptions in one place."
      }
    ],
    process: [
      { title: "Needs Assessment", description: "Analyzed healthcare gaps in rural and semi-urban areas", icon: "Search" },
      { title: "Platform Architecture", description: "Designed a scalable, secure, and user-friendly telemedicine infrastructure", icon: "Server" },
      { title: "Agile Development", description: "Built the application using an iterative approach for mobile and web", icon: "Code" },
      { title: "Doctor Network Onboarding", description: "Vetted and partnered with a network of specialist doctors", icon: "UserCheck" }
    ],
    team: [
      { title: "Healthcare Strategists", description: "Domain experts in medical operations", icon: "Lightbulb" },
      { title: "Mobile & Backend Developers", description: "React Native, Node.js, AWS", icon: "Code" },
      { title: "Medical Partnership Managers", description: "Onboarding doctors and hospitals", icon: "Users" },
      { title: "QA Engineers", description: "Ensuring platform reliability and HIPAA compliance", icon: "CheckCircle" }
    ],
    testimonial: {
      company: "Rural Patient Family",
      position: "Caregiver",
      content: "BigoHealth made it possible for my father to get a second opinion from a top oncologist without traveling to the city. The entire process, from consultation to lab tests, was managed through the app. It saved us time, money, and a lot of stress."
    }
  },
  {
    id: "8",
    title: "Jivi AI: Your Personal AI Doctor",
    subtitle: "Transforming healthcare for 8 billion people with AI.",
    description: "Jivi AI is a personal AI doctor that provides 24/7 instant medical advice, wellness plans, lab analysis, and mental health support. It uses an advanced AI-powered clinical agentic platform to deliver diagnostic support and personalized healthcare.",
    shortDescription: "AI-powered personal health companion for instant advice.",
    slug: "jivi-ai-personal-doctor",
    category: "AI",
    heroImage: "jiviImage",
    colorVariant: 2,
    stats: [
      { icon: "Download", value: "1.2M+", label: "App installs across 170+ countries" },
      { icon: "Smile", value: "99.7%", label: "User satisfaction rate" },
      { icon: "Brain", value: "10K+", label: "Medical conditions analyzed by AI" },
      { icon: "Zap", value: "Instant", label: "Response time for medical queries" }
    ],
    sections: [
      {
        type: "idea",
        title: "Democratizing Medical Expertise with AI",
        content: "Access to immediate medical guidance is a global challenge. We envisioned an AI-powered health companion that could understand symptoms, analyze lab reports, and provide personalized wellness advice, making preliminary healthcare accessible to everyone, anytime."
      },
      {
        type: "challenges",
        title: "Limitations in Traditional Healthcare Access",
        content: [
          "Long wait times for doctor appointments",
          "Difficulty understanding complex medical lab reports",
          "Lack of personalized and continuous health monitoring",
          "High costs associated with primary consultations",
          "Inaccessible mental health support"
        ]
      },
      {
        type: "solution",
        title: "An AI-Powered Clinical Agentic Platform",
        content: "We built Jivi AI, a comprehensive mobile app that acts as a personal doctor, offering a suite of intelligent health services.",
        highlights: [
          "Conversational AI for symptom checking and medical advice",
          "AI-driven analysis of lab reports with clear insights",
          "Customized wellness, diet, and meal plans",
          "Integrated stress checker and mental health support",
          "Diagnostic assistance tools for medical professionals"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Python", "TensorFlow"],
      languages: ["JavaScript", "Python"],
      cloud: ["AWS", "Google Cloud"],
      database: ["MongoDB", "PostgreSQL"]
    },
    features: [
      {
        title: "AI Doctor",
        description: "Get instant, confidential answers to your medical questions from an AI."
      },
      {
        title: "Lab Report Analysis",
        description: "Upload lab reports and receive an easy-to-understand analysis of your results."
      },
      {
        title: "Personalized Wellness Plans",
        description: "Receive customized diet, fitness, and lifestyle plans based on your health goals."
      },
      {
        title: "Mental Health Support",
        description: "Utilize the stress checker and access resources for mental well-being."
      }
    ],
    process: [
      { title: "Research & Data Training", description: "Trained AI models on vast, anonymized medical datasets", icon: "Brain" },
      { title: "Platform Development", description: "Built a secure and intuitive mobile application", icon: "Code" },
      { title: "Clinical Validation", description: "Worked with medical professionals to validate AI responses and accuracy", icon: "CheckCircle" },
      { title: "User Feedback & Iteration", description: "Continuously improving the AI based on user interactions and feedback", icon: "Users" }
    ],
    team: [
      { title: "AI/ML Engineers", description: "Natural Language Processing, Predictive Modeling", icon: "Brain" },
      { title: "Medical Experts", description: "Doctors and clinicians for data validation", icon: "UserCheck" },
      { title: "Mobile App Developers", description: "React Native specialists", icon: "Code" },
      { title: "Data Scientists", description: "Managing and interpreting health data", icon: "BarChart" }
    ],
    testimonial: {
      company: "Early Adopter",
      position: "User",
      content: "Jivi AI helped me understand my blood test results in simple terms before I could even see my doctor. The personalized diet plan has been incredibly helpful. It's like having a health expert in my pocket."
    }
  },
  {
    id: "9",
    title: "Siya Ayurveda: E-commerce Wellness",
    subtitle: "Natural Ayurvedic solutions for skin and hair care.",
    description: "Siya Ayurveda is a Shopify-based e-commerce platform offering a curated range of Ayurvedic products for chronic skin conditions like psoriasis and vitiligo, as well as general hair care. Their products are formulated with natural ingredients to heal and nourish.",
    shortDescription: "Shopify e-commerce for Ayurvedic skin & hair products.",
    slug: "siya-ayurveda-ecommerce-wellness",
    category: "E-commerce",
    heroImage: "siyaayurvedaImage",
    colorVariant: 3,
    stats: [
      { icon: "Leaf", value: "100%", label: "Natural and herbal ingredients" },
      { icon: "Users", value: "10K+", label: "Satisfied customers" },
      { icon: "Star", value: "4.5+", label: "Average product rating" },
      { icon: "Truck", value: "Nationwide", label: "Free shipping across India" }
    ],
    sections: [
      {
        type: "idea",
        title: "Harnessing the Healing Power of Ayurveda",
        content: "Many modern skincare products use harsh chemicals that offer temporary relief but fail to address root causes. We aimed to create an accessible online store offering authentic, natural Ayurvedic solutions that are gentle, effective, and target long-term skin and hair health."
      },
      {
        type: "challenges",
        title: "Limitations of Chemical-Based Skincare",
        content: [
          "Products often cause skin irritation and allergic reactions",
          "Lack of long-term solutions for chronic conditions like psoriasis",
          "Building customer trust in a market saturated with 'natural' claims",
          "Need for a seamless and secure online shopping experience"
        ]
      },
      {
        type: "solution",
        title: "A Trusted E-commerce Platform for Ayurveda",
        content: "We developed Siya Ayurveda on Shopify, creating a user-friendly and visually appealing online store to showcase their specialized product line.",
        highlights: [
          "Custom Shopify theme design to reflect the brand's natural ethos",
          "Specialized product collections for psoriasis, vitiligo, and hair care",
          "Integrated payment gateways for secure transactions",
          "Customer reviews and testimonials to build social proof",
          "SEO and content strategy to educate users on Ayurvedic benefits"
        ]
      }
    ],
    techStack: {
      frameworks: ["Shopify"],
      languages: ["Liquid", "JavaScript", "CSS"],
      cloud: ["Shopify Plus"],
      database: ["N/A (Managed by Shopify)"]
    },
    features: [
      {
        title: "Psoriasis & Vitiligo Care",
        description: "A dedicated range of products to manage and soothe chronic skin conditions."
      },
      {
        title: "Herbal Hair Care",
        description: "Natural oils, shampoos, and conditioners for hair fall, dandruff, and growth."
      },
      {
        title: "Secure Online Shopping",
        description: "A fully functional e-commerce store with easy navigation and secure checkout."
      }
    ],
    process: [
      { title: "Brand & Market Analysis", description: "Identified the target audience and niche in the Ayurvedic market", icon: "Search" },
      { title: "Shopify Store Setup", description: "Configured the e-commerce store, products, and payment systems", icon: "ShoppingCart" },
      { title: "Custom Theme Development", description: "Designed and developed a unique storefront to enhance user experience", icon: "Palette" },
      { title: "Launch & Marketing", description: "Deployed the store and initiated digital marketing campaigns", icon: "Rocket" }
    ],
    team: [
      { title: "Ayurvedic Experts", description: "Product formulation and knowledge base", icon: "Leaf" },
      { title: "Shopify Developers", description: "Theme customization and app integration", icon: "Code" },
      { title: "E-commerce Strategists", description: "Marketing, SEO, and conversion optimization", icon: "TrendingUp" }
    ],
    testimonial: {
      company: "Long-time Customer",
      position: "User",
      content: "I've struggled with psoriasis for years. Siya Ayurveda's products are the only ones that have given me consistent relief without any side effects. The website is easy to use, and the delivery is always prompt."
    }
  },
  {
    id: "10",
    title: "Daraz: Online Shopping Platform",
    subtitle: "South Asia's leading online marketplace.",
    description: "Daraz is the leading online marketplace in South Asia, empowering tens of thousands of sellers to connect with millions of customers. It offers an extensive range of products across diverse categories, ensuring a seamless, secure, and convenient shopping experience.",
    shortDescription: "The one-stop online marketplace for South Asia.",
    slug: "daraz-online-shopping-platform",
    category: "E-commerce",
    heroImage: "darazImage",
    colorVariant: 5,
    stats: [
      { icon: "Users", value: "4M+", label: "Daily active users" },
      { icon: "Package", value: "40M+", label: "Products available on the platform" },
      { icon: "LayoutGrid", value: "250+", label: "Product categories" },
      { icon: "Truck", value: "Nationwide", label: "Delivery network coverage" }
    ],
    sections: [
      {
        type: "idea",
        title: "Creating a Digital Mall for Everyone",
        content: "Our vision was to build a comprehensive digital marketplace that brings the entire mall experience into the user's pocket. We wanted to provide unparalleled access to a vast variety of goods for customers across South Asia, supported by a robust logistics network."
      },
      {
        type: "challenges",
        title: "E-commerce Hurdles in a Diverse Region",
        content: [
          "Complex logistics and last-mile delivery in varied terrains",
          "Building trust and promoting digital payments",
          "Catering to a multilingual and multicultural customer base",
          "Managing a massive inventory from thousands of sellers"
        ]
      },
      {
        type: "solution",
        title: "A Feature-Rich and Reliable E-commerce Ecosystem",
        content: "We engineered Daraz as a scalable and user-centric platform that addresses the core challenges of online retail in the region.",
        highlights: [
          "Daraz Mall for 100% authentic products from certified brands",
          "Advanced search and filtering for easy product discovery",
          "Secure and diverse payment options, including cash on delivery",
          "An interactive 'Daraz Live' feature for engaging shopping",
          "Easy returns and responsive 24/7 customer support"
        ]
      }
    ],
    techStack: {
      frameworks: ["Kotlin", "Swift", "React", "Node.js"],
      languages: ["Kotlin", "Swift", "JavaScript"],
      cloud: ["AWS", "Alibaba Cloud"],
      database: ["MySQL", "MongoDB", "Redis"]
    },
    features: [
      {
        title: "Official Brand Stores",
        description: "Shop directly from your favorite brands with authenticity guaranteed in Daraz Mall."
      },
      {
        title: "Personalized Recommendations",
        description: "AI-driven product suggestions based on your browsing and purchase history."
      },
      {
        title: "Easy & Secure Checkout",
        description: "Multiple payment methods with industry-leading security for safe transactions."
      }
    ],
    process: [
      { title: "Marketplace Architecture", description: "Designed a scalable multi-vendor e-commerce platform", icon: "Server" },
      { title: "Seller Onboarding Systems", description: "Created efficient tools for seller registration, product listing, and management", icon: "UserPlus" },
      { title: "Logistics Integration", description: "Built a network of logistics partners for efficient fulfillment", icon: "Truck" },
      { title: "Mobile-First Development", description: "Developed intuitive and high-performance iOS and Android applications", icon: "Code" }
    ],
    team: [
      { title: "Category Managers", description: "Experts curating product assortments", icon: "LayoutGrid" },
      { title: "Logistics & Operations", description: "Ensuring timely and reliable delivery", icon: "Truck" },
      { title: "Mobile Engineers", description: "Developing and maintaining the apps", icon: "Code" },
      { title: "Customer Experience Team", description: "Providing 24/7 support and service", icon: "Users" }
    ],
    testimonial: {
      company: "Frequent Shopper",
      position: "User",
      content: "Daraz is my go-to app for everything from electronics to groceries. The variety is amazing, the prices are competitive, and I trust the quality from Daraz Mall. It has completely changed how I shop."
    }
  },
  {
    id: "11",
    title: "Carrefour: Online Grocery & Shopping",
    subtitle: "Your daily supermarket needs, delivered.",
    description: "The MAF Carrefour App brings the entire supermarket to your fingertips. It allows users to shop for groceries, electronics, home goods, and more with features like express delivery, easy reordering, and exclusive in-app offers.",
    shortDescription: "Online grocery and retail shopping app.",
    slug: "maf-carrefour-online-shopping",
    category: "E-commerce",
    heroImage: "carrefourImage",
    colorVariant: 6,
    stats: [
      { icon: "ShoppingCart", value: "60-minute", label: "Express grocery delivery" },
      { icon: "Package", value: "100K+", label: "Products available to order" },
      { icon: "Users", value: "5M+", label: "App downloads" },
      { icon: "RefreshCw", value: "1-Click", label: "Easy reordering of past purchases" }
    ],
    sections: [
      {
        type: "idea",
        title: "Digitizing the Supermarket Experience",
        content: "The goal was to replicate the convenience and variety of a Carrefour hypermarket in a powerful mobile app. We wanted to provide a seamless online shopping journey, from browsing aisles virtually to receiving groceries at the doorstep within an hour."
      },
      {
        type: "challenges",
        title: "Complexities of Online Grocery Retail",
        content: [
          "Managing real-time inventory for perishable goods",
          "Ensuring fast and reliable 'last-mile' delivery logistics",
          "Maintaining product quality and freshness during transit",
          "Creating an intuitive UI to browse thousands of SKUs"
        ]
      },
      {
        type: "solution",
        title: "A Robust and User-Friendly E-commerce Platform",
        content: "We developed a high-performance mobile application that handles the complexities of online grocery and retail with ease.",
        highlights: [
          "Real-time inventory sync with physical stores",
          "Advanced order management system for pickers and drivers",
          "GPS-based delivery tracking for customers",
          "Personalized offers and loyalty program integration ('SHARE')",
          "Barcode scanner for quick product finding and reordering"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Node.js", "Express"],
      languages: ["JavaScript", "TypeScript"],
      cloud: ["Microsoft Azure"],
      database: ["Cosmos DB", "SQL Server"]
    },
    features: [
      {
        title: "Express Delivery",
        description: "Get your groceries and essentials delivered in as little as 60 minutes."
      },
      {
        title: "Click & Collect",
        description: "Order online and pick up your items at your preferred Carrefour store."
      },
      {
        title: "Personalized Shopping Lists",
        description: "Create and save shopping lists for quick and easy reordering of your favorite items."
      }
    ],
    process: [
      { title: "Requirement Analysis", description: "Mapped the in-store customer journey to a digital format", icon: "Search" },
      { title: "Inventory & Logistics Planning", description: "Designed the architecture for real-time stock and delivery management", icon: "Server" },
      { title: "Mobile App Development", description: "Built native-like experiences for iOS and Android using React Native", icon: "Code" },
      { title: "Testing & Rollout", description: "Conducted rigorous testing on order fulfillment and payment gateways", icon: "CheckCircle" }
    ],
    team: [
      { title: "E-commerce Product Managers", description: "Defining features and user flows", icon: "Lightbulb" },
      { title: "React Native Developers", description: "Building the cross-platform mobile app", icon: "Code" },
      { title: "Supply Chain Experts", description: "Optimizing inventory and delivery logistics", icon: "Truck" },
      { title: "UI/UX Designers", description: "Creating an intuitive shopping experience", icon: "Palette" }
    ],
    testimonial: {
      company: "Busy Parent",
      position: "User",
      content: "The Carrefour app is a lifesaver. I can do my entire weekly grocery shop in 15 minutes and have it delivered the same day. The express delivery is incredibly fast and reliable."
    }
  },
  {
    id: "12",
    title: "Bolt: Ride-Hailing & Mobility",
    subtitle: "Fast, affordable rides and scooter rentals at your fingertips.",
    description: "Bolt is a super-app offering ride-hailing, micromobility (scooters and e-bikes), food delivery, and car-sharing services. It connects millions of users with drivers to make urban travel easier, quicker, and more reliable.",
    shortDescription: "Super-app for rides, scooters, and food delivery.",
    slug: "bolt-ride-hailing-mobility",
    category: "Services",
    heroImage: "boltImage",
    colorVariant: 3,
    stats: [
      { icon: "Users", value: "100M+", label: "Active users globally" },
      { icon: "MapPin", value: "45+", label: "Countries of operation" },
      { icon: "Zap", value: "3 mins", label: "Average driver arrival time" },
      { icon: "Leaf", value: "100%", label: "Carbon-Neutral rides in Europe" }
    ],
    sections: [
      {
        type: "idea",
        title: "Solving Urban Mobility for Everyone",
        content: "Urban transportation is often inefficient, expensive, and fragmented. We set out to create a single app that provides multiple modes of transport—from cars to scooters—that are affordable, safe, and readily available for millions of people."
      },
      {
        type: "challenges",
        title: "Complexities of a Global Mobility Platform",
        content: [
          "Scaling across diverse markets with different regulations",
          "Ensuring driver and rider safety on a massive scale",
          "Managing real-time logistics and pricing for a massive fleet",
          "Intense competition from established global and local players"
        ]
      },
      {
        type: "solution",
        title: "An All-in-One Mobility Super-App",
        content: "We developed Bolt, a robust platform with a user-friendly interface and a powerful backend to manage millions of daily trips and deliveries efficiently.",
        highlights: [
          "Real-time driver matching algorithm for minimal wait times",
          "In-app safety features like trip sharing and an emergency assist button",
          "Integrated payments with multi-currency and regional options support",
          "Multi-modal options: cars, e-scooters, and e-bikes",
          "Bolt Food for restaurant and grocery delivery services"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Kotlin", "Swift", "Node.js"],
      languages: ["JavaScript", "Kotlin", "Swift", "Python"],
      cloud: ["AWS", "Google Maps Platform"],
      database: ["PostgreSQL", "Redis"]
    },
    features: [
      {
        title: "Ride-Hailing",
        description: "Request a ride in minutes from a community of trusted drivers."
      },
      {
        title: "Scooter & E-Bike Rentals",
        description: "Find and unlock micromobility vehicles for short, eco-friendly trips."
      },
      {
        title: "Bolt Food",
        description: "Get your favorite meals and groceries delivered quickly to your door."
      }
    ],
    process: [
      { title: "Market Analysis", description: "Identified opportunities in urban transportation markets", icon: "Search" },
      { title: "Platform Architecture", description: "Designed a highly scalable, real-time system for matching and payments", icon: "Server" },
      { title: "Driver Onboarding & Vetting", description: "Created a seamless and secure process for driver registration", icon: "UserCheck" },
      { title: "Global Rollout Strategy", description: "Executed a phased launch across cities in Europe, Africa, and Asia", icon: "Rocket" }
    ],
    team: [
      { title: "Logistics & Operations Managers", description: "Managing city-level supply and demand", icon: "Map" },
      { title: "Mobile & Backend Engineers", description: "Developing the core application and services", icon: "Code" },
      { title: "Data Scientists", description: "Optimizing pricing, ETAs, and matching algorithms", icon: "BarChart" },
      { title: "Safety & Compliance Team", description: "Ensuring regulatory adherence and user safety", icon: "Shield" }
    ],
    testimonial: {
      company: "Daily Commuter",
      position: "User",
      content: "Using Bolt for my daily commute has been a game-changer. It's reliable, the prices are fair, and I love having the option to grab a scooter for shorter trips. The app just works seamlessly."
    }
  },
  {
    id: "13",
    title: "LUV.com: Dating for Professionals",
    subtitle: "Curated connections for working singles.",
    description: "LUV.com is an exclusive dating platform designed for busy professionals. It focuses on quality over quantity, using a sophisticated matching algorithm to connect individuals based on career goals, lifestyle, and relationship intent.",
    shortDescription: "Exclusive dating app for career-focused singles.",
    slug: "luv-dating-for-professionals",
    category: "Apps",
    heroImage: "luvImage",
    colorVariant: 4,
    stats: [
      { icon: "UserCheck", value: "100%", label: "Profile verification process" },
      { icon: "TrendingUp", value: "85%", label: "Match success rate based on intent" },
      { icon: "MessageSquare", value: "3x", label: "More meaningful conversations" },
      { icon: "Users", value: "Curated", label: "Community of professionals" }
    ],
    sections: [
      {
        type: "idea",
        title: "Redefining Dating for the Ambitious",
        content: "Mainstream dating apps are often overwhelming and focus on endless swiping. We wanted to create a more intentional space for professionals who value their time and are looking for meaningful connections with like-minded individuals."
      },
      {
        type: "challenges",
        title: "Pitfalls of Modern Online Dating",
        content: [
          "Endless swiping leads to decision fatigue",
          "Prevalence of fake profiles and catfishing",
          "Mismatched intentions and relationship goals",
          "Lack of privacy and discretion for professionals"
        ]
      },
      {
        type: "solution",
        title: "A Curated and Intelligent Dating Platform",
        content: "We built LUV.com with a focus on creating a safe, exclusive, and effective environment for finding a partner.",
        highlights: [
          "AI-powered matchmaking based on values, career, and lifestyle",
          "Mandatory profile verification to ensure authenticity",
          "Limited number of high-quality matches per day",
          "Advanced privacy controls and incognito mode",
          "Integrated icebreakers and conversation starters"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Django REST"],
      languages: ["TypeScript", "Python"],
      cloud: ["AWS"],
      database: ["PostgreSQL", "Redis"]
    },
    features: [
      {
        title: "Smart Matching",
        description: "Receive a curated list of compatible matches daily, powered by our AI algorithm."
      },
      {
        title: "Profile Verification",
        description: "Our team verifies each profile to maintain a trusted community of genuine users."
      },
      {
        title: "Privacy Controls",
        description: "Control who sees your profile and when you are visible on the platform."
      }
    ],
    process: [
      { title: "Market Research", description: "Analyzed the needs and frustrations of professional singles", icon: "Search" },
      { title: "Algorithm Development", description: "Built a matching algorithm focused on deeper compatibility metrics", icon: "Brain" },
      { title: "Mobile App Development", description: "Created a sleek, intuitive, and secure mobile application", icon: "Code" },
      { title: "Community Building", description: "Launched an invite-only beta to build a high-quality user base", icon: "Users" }
    ],
    team: [
      { title: "Data Scientists", description: "Developing and refining the matching algorithm", icon: "Brain" },
      { title: "Mobile Developers", description: "Building the iOS and Android applications", icon: "Code" },
      { title: "Community & Trust Team", description: "Managing profile verification and user safety", icon: "Shield" },
      { title: "Relationship Experts", description: "Consulting on features that foster connection", icon: "Heart" }
    ],
    testimonial: {
      company: "Lawyer",
      position: "User",
      content: "LUV.com is a breath of fresh air. I don't have time for endless swiping. The matches are high-quality, and the conversations feel much more genuine than on other apps. I met my current partner here."
    }
  },
  {
    id: "14",
    title: "AIrena: The Generative AI Arena",
    subtitle: "Where AI models compete and creators collaborate.",
    description: "AIrena is the world's first competitive arena for generative AI models. It's a platform where developers can benchmark their models against others, and creators can discover and utilize the best-performing AIs for text, image, and code generation.",
    shortDescription: "Competitive platform for generative AI models.",
    slug: "airena-generative-ai-arena",
    category: "AI",
    heroImage: "airenaImage",
    colorVariant: 1,
    stats: [
      { icon: "BarChart", value: "100+", label: "Public AI model leaderboards" },
      { icon: "Code", value: "50K+", label: "Daily AI generation tasks" },
      { icon: "Users", value: "10K+", label: "Developers & AI creators" },
      { icon: "Zap", value: "Unified API", label: "Access to top models" }
    ],
    sections: [
      {
        type: "idea",
        title: "Creating a Competitive Benchmark for AI",
        content: "The generative AI landscape is exploding with new models daily, but it's hard to know which ones are truly best for specific tasks. We envisioned a platform that would allow for head-to-head competition, creating transparent leaderboards and a meritocracy for AI."
      },
      {
        type: "challenges",
        title: "The Fragmented AI Ecosystem",
        content: [
          "Difficult to objectively compare performance across different AI models",
          "Lack of a centralized place to discover and test new AIs",
          "High computational cost to benchmark models independently",
          "No unified API to access the best-performing models"
        ]
      },
      {
        type: "solution",
        title: "A Unified Platform for AI Competition and Discovery",
        content: "AIrena provides the infrastructure for developers to compete and for creators to find the best AI tools for their needs.",
        highlights: [
          "Standardized benchmarking for text, image, and audio models",
          "Real-time leaderboards based on user ratings and performance metrics",
          "A playground environment to test and compare models side-by-side",
          "A single, unified API that routes requests to the current top-ranked model",
          "Community hub for sharing prompts and results"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "FastAPI", "Docker"],
      languages: ["TypeScript", "Python"],
      cloud: ["AWS", "Kubernetes", "NVIDIA Triton"],
      database: ["PostgreSQL", "ClickHouse"]
    },
    features: [
      {
        title: "AI Leaderboards",
        description: "View real-time rankings of generative AI models based on objective and subjective scores."
      },
      {
        title: "AI Playground",
        description: "Directly compare outputs from multiple AI models for the same prompt."
      },
      {
        title: "Unified API",
        description: "Integrate the best of AI into your own applications with a single API call."
      }
    ],
    process: [
      { title: "Platform Concept", description: "Designed the architecture for a competitive AI benchmarking system", icon: "Lightbulb" },
      { title: "Model Integration", description: "Built a scalable backend to host and run various open-source and proprietary AI models", icon: "Server" },
      { title: "Frontend Development", description: "Created an interactive web interface for leaderboards and the playground", icon: "Code" },
      { title: "Community Launch", description: "Launched to the AI developer and creator community to start populating data", icon: "Rocket" }
    ],
    team: [
      { title: "MLOps Engineers", description: "Managing AI model deployment and scaling", icon: "Server" },
      { title: "Full-Stack Developers", description: "Building the web platform and APIs", icon: "Code" },
      { title: "AI Researchers", description: "Developing novel benchmarking metrics", icon: "Brain" },
      { title: "Community Managers", description: "Engaging with developers and creators", icon: "Users" }
    ],
    testimonial: {
      company: "AI Startup",
      position: "Founder",
      content: "AIrena has been invaluable for us. We were able to benchmark our new language model against the best in the industry and get immediate feedback. The unified API is a brilliant idea."
    }
  },
  {
    id: "15",
    title: "Polara: AI Content Creation Suite",
    subtitle: "Generate marketing copy and visuals, instantly.",
    description: "Polara is an AI-powered content creation platform designed for marketing teams. It helps generate high-quality ad copy, social media posts, blog articles, and stunning visuals from simple text prompts, streamlining the entire content workflow.",
    shortDescription: "AI platform for generating marketing copy and visuals.",
    slug: "polara-ai-content-creation",
    category: "SaaS",
    heroImage: "polaraImage",
    colorVariant: 5,
    stats: [
      { icon: "Clock", value: "10x", label: "Faster content creation workflow" },
      { icon: "TrendingUp", value: "30%", label: "Increase in content engagement rates" },
      { icon: "Users", value: "5K+", label: "Marketing teams using Polara" },
      { icon: "Palette", value: "1M+", label: "Images generated monthly" }
    ],
    sections: [
      {
        type: "idea",
        title: "Automating the Creative Grind",
        content: "Content creation is a bottleneck for most marketing teams. We wanted to build an AI co-pilot that could handle the heavy lifting of drafting copy and creating visuals, allowing marketers to focus on strategy and campaign execution."
      },
      {
        type: "challenges",
        title: "The Content Treadmill",
        content: [
          "Time-consuming to write copy for multiple platforms",
          "High cost of stock photography and graphic design",
          "Maintaining brand voice consistency across all content",
          "Creative block and idea generation"
        ]
      },
      {
        type: "solution",
        title: "A Centralized AI Content Engine",
        content: "We developed Polara as an intuitive SaaS platform that combines the power of language and diffusion models into a single workflow.",
        highlights: [
          "Generates copy for ads, emails, social media, and blogs",
          "Text-to-image generation for unique marketing visuals",
          "Brand Voice library to ensure content consistency",
          "Content templates and idea generators",
          "Team collaboration and approval workflows"
        ]
      }
    ],
    techStack: {
      frameworks: ["Next.js", "Python", "FastAPI"],
      languages: ["TypeScript", "Python"],
      cloud: ["Google Cloud", "Vercel"],
      database: ["PostgreSQL", "Supabase"]
    },
    features: [
      {
        title: "AI Copywriter",
        description: "Generate compelling marketing copy for any channel or format in seconds."
      },
      {
        title: "AI Image Generator",
        description: "Create custom, royalty-free images and ad creatives from text descriptions."
      },
      {
        title: "Brand Voice",
        description: "Train the AI on your brand's style guide to generate perfectly on-brand content every time."
      }
    ],
    process: [
      { title: "User Research", description: "Interviewed marketing teams to identify key pain points in content creation", icon: "Search" },
      { title: "Model Fine-tuning", description: "Fine-tuned language and image models for marketing-specific use cases", icon: "Brain" },
      { title: "SaaS Platform Development", description: "Built a scalable, multi-tenant web application", icon: "Code" },
      { title: "Beta Program", description: "Launched with a select group of agencies to refine the product", icon: "Users" }
    ],
    team: [
      { title: "AI/ML Engineers", description: "Prompt engineering and model fine-tuning", icon: "Brain" },
      { title: "Full-Stack Developers", description: "Building the Next.js and Python backend", icon: "Code" },
      { title: "UX/UI Designers", description: "Creating a simple and powerful user interface", icon: "Palette" },
      { title: "Marketing Experts", description: "Guiding product features and template creation", icon: "Lightbulb" }
    ],
    testimonial: {
      company: "Digital Marketing Agency",
      position: "Head of Content",
      content: "Polara has transformed our content workflow. We can now produce draft campaigns in a fraction of the time. The AI image generator is especially powerful for creating unique ad visuals."
    }
  },
  {
    id: "16",
    title: "Taikonz: NFT & Web3 Platform",
    subtitle: "Digital collectibles and immersive fan experiences.",
    description: "Taikonz is a premier Web3 platform that partners with major brands and icons to create exclusive NFT collections and immersive metaverse experiences. It provides a seamless marketplace for fans to buy, sell, and trade digital collectibles.",
    shortDescription: "Web3 platform for exclusive brand NFTs.",
    slug: "taikonz-nft-web3-platform",
    category: "Blockchain",
    heroImage: "taikonzImage",
    colorVariant: 6,
    stats: [
      { icon: "Users", value: "100K+", label: "Community members" },
      { icon: "Package", value: "50+", label: "Exclusive NFT drops" },
      { icon: "Globe", value: "Global", label: "Partnerships with top brands" },
      { icon: "Zap", value: "Fast & Secure", label: "Transactions on the blockchain" }
    ],
    sections: [
      {
        type: "idea",
        title: "The Future of Fandom and Ownership",
        content: "We believe the future of fan engagement lies in verifiable digital ownership. Our goal was to build a user-friendly platform that allows iconic brands to connect with their audience through exclusive digital collectibles and shared virtual experiences."
      },
      {
        type: "challenges",
        title: "Barriers to Mainstream Web3 Adoption",
        content: [
          "Complex and intimidating user experience for non-crypto natives",
          "Concerns over security and asset custody",
          "Lack of utility and real-world value for many NFTs",
          "Difficulty for brands to navigate the Web3 space"
        ]
      },
      {
        type: "solution",
        title: "An End-to-End Platform for Premium NFTs",
        content: "Taikonz simplifies the entire Web3 journey for both brands and collectors, from creation to secondary market trading.",
        highlights: [
          "Seamless user onboarding with credit card payment options",
          "Secure, audited smart contracts for all NFT collections",
          "Integration with metaverse platforms for virtual events",
          "A curated secondary marketplace for safe trading",
          "White-glove service for brand partners"
        ]
      }
    ],
    techStack: {
      frameworks: ["Next.js", "Ethers.js", "Hardhat"],
      languages: ["TypeScript", "Solidity"],
      cloud: ["AWS", "Vercel"],
      database: ["PostgreSQL", "The Graph"]
    },
    features: [
      {
        title: "Exclusive NFT Drops",
        description: "Access limited-edition digital collectibles from world-renowned brands and icons."
      },
      {
        title: "Secure Marketplace",
        description: "Buy, sell, and trade your NFTs in a secure and audited peer-to-peer marketplace."
      },
      {
        title: "Metaverse Integration",
        description: "Showcase your collectibles and attend exclusive events in partnered virtual worlds."
      }
    ],
    process: [
      { title: "Brand Partnerships", description: "Established relationships with iconic brands to secure exclusive content", icon: "Users" },
      { title: "Smart Contract Development", description: "Wrote and audited secure, gas-efficient smart contracts for NFT minting", icon: "FileCode" },
      { title: "Platform Build", description: "Developed the Next.js frontend and integrated with blockchain services", icon: "Code" },
      { title: "Community Launch", description: "Executed a multi-channel marketing campaign to build a collector community", icon: "Rocket" }
    ],
    team: [
      { title: "Blockchain Developers", description: "Solidity smart contract and backend development", icon: "Code" },
      { title: "Frontend Developers", description: "Building the user-facing marketplace with Next.js", icon: "Palette" },
      { title: "Business Development", description: "Forging partnerships with brands and creators", icon: "Briefcase" },
      { title: "Community Managers", description: "Engaging with users on Discord and Twitter", icon: "MessageSquare" }
    ],
    testimonial: {
      company: "Digital Art Collector",
      position: "User",
      content: "Taikonz has some of the best-curated NFT drops out there. The platform is super easy to use, even for someone who is not a crypto expert. I feel confident buying and selling here."
    }
  },
  {
    id: "17",
    title: "Tito: ICO Landing Page",
    subtitle: "Decentralized platform for event ticketing.",
    description: "Tito is a conceptual blockchain-based platform designed to eliminate ticket fraud and scalping. This ICO (Initial Coin Offering) page was developed to present the project's vision, tokenomics, and roadmap to potential early investors.",
    shortDescription: "ICO landing page for a blockchain ticketing project.",
    slug: "tito-ico-ticketing",
    category: "Blockchain",
    heroImage: "titoImage",
    colorVariant: 4,
    stats: [
      { icon: "FileText", value: "Clear", label: "Whitepaper presentation" },
      { icon: "BarChart", value: "Detailed", label: "Tokenomics breakdown" },
      { icon: "Map", value: "Strategic", label: "Project roadmap" },
      { icon: "Users", value: "Early", label: "Investor interest capture" }
    ],
    sections: [
      {
        type: "idea",
        title: "Bringing Transparency to Ticketing",
        content: "The event ticketing industry is plagued by fraud, scalping, and a lack of control for artists and venues. Our concept was to use blockchain to create a transparent, secure, and fair ticketing ecosystem where every ticket is a unique, traceable digital asset (NFT)."
      },
      {
        type: "challenges",
        title: "Problems in the Ticketing Industry",
        content: [
          "Widespread ticket fraud with counterfeit tickets",
          "Uncontrolled scalping on secondary markets drives up prices",
          "Artists and venues have no control over resale",
          "Lack of transparency in ticket distribution"
        ]
      },
      {
        type: "solution",
        title: "A Single-Page ICO Presentation",
        content: "We designed and developed a compelling ICO landing page to attract initial funding and build a community around the Tito concept.",
        highlights: [
          "Clear and concise explanation of the project's value proposition",
          "Interactive tokenomics and fund allocation charts",
          "A detailed, multi-phase project roadmap",
          "Team bios to build trust and credibility",
          "Email capture form for investor and community updates"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Next.js"],
      languages: ["TypeScript", "CSS"],
      cloud: ["Vercel"],
      database: ["N/A"]
    },
    features: [
      {
        title: "Project Vision",
        description: "Clearly articulates the problem and the blockchain-based solution."
      },
      {
        title: "Tokenomics",
        description: "Details the utility of the TITO token, its distribution, and allocation of funds."
      },
      {
        title: "Roadmap",
        description: "Visually represents the planned development stages of the project."
      }
    ],
    process: [
      { title: "Conceptualization", description: "Defined the core idea, token utility, and business model", icon: "Lightbulb" },
      { title: "Content & Design", description: "Crafted the narrative and designed a visually appealing, on-brand landing page", icon: "Palette" },
      { title: "Frontend Development", description: "Built a fast, responsive landing page using Next.js", icon: "Code" },
      { title: "Deployment", description: "Deployed the site globally via Vercel for high performance", icon: "Rocket" }
    ],
    team: [
      { title: "Blockchain Strategists", description: "Designing the tokenomics and ecosystem", icon: "Brain" },
      { title: "UI/UX Designers", description: "Creating a compelling and clear visual layout", icon: "Palette" },
      { title: "Frontend Developers", description: "Implementing the design with React/Next.js", icon: "Code" }
    ],
    testimonial: {
      company: "Crypto Investor",
      position: "Early Supporter",
      content: "The Tito ICO page was one of the clearest I've seen. It laid out the vision, the problem they're solving, and the tokenomics in a way that was easy to understand and inspired confidence in the project."
    }
  },
  {
    id: "18",
    title: "FinTrack: Personal Finance & Budgeting App",
    subtitle: "Your financial wellness in one place.",
    description: "FinTrack is an intelligent personal finance app that helps users track their spending, create budgets, monitor investments, and achieve their financial goals. It uses AI to provide personalized insights and recommendations for better financial health.",
    shortDescription: "AI-powered app for budgeting and expense tracking.",
    slug: "fintrack-personal-finance-app",
    category: "Fintech",
    heroImage: "fintrackImage",
    colorVariant: 2,
    stats: [
      { icon: "TrendingUp", value: "15%", label: "Average monthly savings increase" },
      { icon: "Zap", value: "Automatic", label: "Expense categorization" },
      { icon: "BarChart", value: "360°", label: "View of your financial health" },
      { icon: "Users", value: "1M+", label: "Users managing their finances" }
    ],
    sections: [
      {
        type: "idea",
        title: "Simplifying Financial Management",
        content: "Managing personal finances can be complex and stressful. We wanted to build a simple, beautiful, and intelligent app that automates the tedious parts of budgeting and provides clear, actionable insights to help users take control of their money."
      },
      {
        type: "challenges",
        title: "Why People Fail at Budgeting",
        content: [
          "Manual expense tracking is time-consuming and often forgotten",
          "Difficult to see all financial accounts in one place",
          "Lack of personalized advice and actionable insights",
          "Security concerns with connecting bank accounts"
        ]
      },
      {
        type: "solution",
        title: "An Automated Financial Wellness Coach",
        content: "FinTrack connects securely to your financial accounts and does the hard work for you, providing a complete picture of your financial life.",
        highlights: [
          "Securely links to thousands of banks and financial institutions",
          "AI-powered automatic categorization of all transactions",
          "Intuitive tools for creating and tracking custom budgets",
          "Subscription tracking and bill payment reminders",
          "Personalized insights to identify savings opportunities"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Node.js", "Plaid API"],
      languages: ["TypeScript", "JavaScript"],
      cloud: ["AWS"],
      database: ["PostgreSQL", "Redis"]
    },
    features: [
      {
        title: "Automated Expense Tracking",
        description: "Securely sync your bank accounts and credit cards to see all your spending in one place."
      },
      {
        title: "Smart Budgets",
        description: "Create flexible budgets that track your spending in real-time and notify you when you're nearing your limit."
      },
      {
        title: "Investment Monitoring",
        description: "Connect your brokerage accounts to track your portfolio performance alongside your spending."
      }
    ],
    process: [
      { title: "User Research", description: "Identified the primary challenges people face with personal finance", icon: "Search" },
      { title: "Security Architecture", description: "Designed a bank-level security infrastructure for handling sensitive data", icon: "Shield" },
      { title: "Mobile Development", description: "Built a cross-platform app with React Native for a seamless user experience", icon: "Code" },
      { title: "AI Insights Engine", description: "Developed algorithms to analyze spending patterns and provide useful tips", icon: "Brain" }
    ],
    team: [
      { title: "Fintech Product Managers", description: "Defining financial features and user journeys", icon: "Lightbulb" },
      { title: "Security Engineers", description: "Ensuring data protection and privacy", icon: "Shield" },
      { title: "Full-Stack Developers", description: "Building the app, backend, and API integrations", icon: "Code" },
      { title: "Data Analysts", description: "Analyzing anonymized data to improve insights", icon: "BarChart" }
    ],
    testimonial: {
      company: "Young Professional",
      position: "User",
      content: "FinTrack finally helped me understand where my money is going. The automatic tracking is amazing, and the smart insights have helped me save more than I thought possible. It's a must-have app."
    }
  },
  {
    id: "19",
    title: "TaskFlow: Agile Project Management SaaS",
    subtitle: "The simple, visual way to manage your team's work.",
    description: "TaskFlow is a collaborative project management tool that helps teams plan, track, and deliver projects on time. With visual boards, custom workflows, and powerful reporting, it streamlines communication and provides clarity on who is doing what, by when.",
    shortDescription: "Visual project management tool for agile teams.",
    slug: "taskflow-agile-project-management",
    category: "SaaS",
    heroImage: "taskflowImage",
    colorVariant: 1,
    stats: [
      { icon: "Clock", value: "25%", label: "Faster project completion rates" },
      { icon: "Users", value: "90%", label: "Adoption rate within teams" },
      { icon: "Zap", value: "50%", label: "Reduction in status update meetings" },
      { icon: "TrendingUp", value: "Clear", label: "Visibility into team workload" }
    ],
    sections: [
      {
        type: "idea",
        title: "Bringing Clarity to Collaboration",
        content: "Project management tools are often too complex or too simple. We wanted to create the perfect balance: a tool that is visually intuitive and easy for anyone to adopt, yet powerful enough to handle complex workflows for growing teams."
      },
      {
        type: "challenges",
        title: "Where Teamwork Breaks Down",
        content: [
          "Lack of clarity on task ownership and deadlines",
          "Information gets lost in emails and chat messages",
          "Difficulty tracking progress against goals",
          "Wasting time in excessive status update meetings"
        ]
      },
      {
        type: "solution",
        title: "A Flexible and Visual Workspace",
        content: "TaskFlow provides a central source of truth for all project work, making it easy for teams to stay aligned and focused.",
        highlights: [
          "Kanban boards for visualizing workflows",
          "Customizable task fields and templates",
          "Real-time collaboration with comments, @mentions, and file attachments",
          "Automated workflows to handle repetitive tasks",
          "Insightful dashboards and performance reports"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Ruby on Rails"],
      languages: ["TypeScript", "Ruby"],
      cloud: ["Heroku", "AWS"],
      database: ["PostgreSQL", "Redis"]
    },
    features: [
      {
        title: "Visual Boards",
        description: "Organize work on Kanban, Scrum, or custom boards that map to your team's workflow."
      },
      {
        title: "Automations",
        description: "Set up simple, code-free rules to automate actions like assigning tasks or updating statuses."
      },
      {
        title: "Dashboards & Reporting",
        description: "Get a high-level overview of project progress, team workload, and potential bottlenecks."
      }
    ],
    process: [
      { title: "Workflow Analysis", description: "Studied how high-performing teams manage their work", icon: "Search" },
      { title: "Platform Architecture", description: "Designed a real-time, collaborative backend infrastructure", icon: "Server" },
      { title: "Frontend Development", description: "Built a fast and interactive user interface with React", icon: "Code" },
      { title: "Customer Feedback Loop", description: "Launched and iterated based on continuous feedback from our users", icon: "Users" }
    ],
    team: [
      { title: "Product Managers", description: "Prioritizing features for team collaboration", icon: "Lightbulb" },
      { title: "Full-Stack Developers", description: "Building and maintaining the Rails and React codebase", icon: "Code" },
      { title: "UX/UI Designers", description: "Focusing on an intuitive and frictionless user experience", icon: "Palette" },
      { title: "Customer Success", description: "Helping teams onboard and optimize their workflows", icon: "MessageSquare" }
    ],
    testimonial: {
      company: "Marketing Team Lead",
      position: "Manager",
      content: "TaskFlow has been revolutionary for our team. Everyone knows exactly what they need to work on, and I have perfect visibility into our campaign progress without having to constantly ask for updates."
    }
  },
  {
    id: "20",
    title: "LearnSphere: AI-Powered Learning Platform",
    subtitle: "Personalized learning paths for professional growth.",
    description: "LearnSphere is an EdTech platform that uses AI to create personalized learning paths for individuals and corporate teams. It curates content from thousands of sources and adapts to each user's learning style and career goals to accelerate skill development.",
    shortDescription: "AI-driven EdTech platform for personalized learning.",
    slug: "learnsphere-ai-learning-platform",
    category: "EdTech",
    heroImage: "learnsphereImage",
    colorVariant: 5,
    stats: [
      { icon: "TrendingUp", value: "2x", label: "Faster skill acquisition" },
      { icon: "Users", value: "95%", label: "Course completion rate" },
      { icon: "Zap", value: "Personalized", label: "Learning paths for each user" },
      { icon: "BookOpen", value: "10K+", label: "Courses and learning resources" }
    ],
    sections: [
      {
        type: "idea",
        title: "Making Learning Truly Personal",
        content: "One-size-fits-all education doesn't work. We envisioned a platform that acts as a personal learning guide, understanding each user's goals and knowledge gaps, and then curating the perfect sequence of content to help them learn most effectively."
      },
      {
        type: "challenges",
        title: "Inefficiencies in Online Learning",
        content: [
          "Information overload with too many course options",
          "Low course completion rates due to lack of engagement",
          "Generic content that doesn't match individual needs",
          "Difficulty for companies to track team skill development"
        ]
      },
      {
        type: "solution",
        title: "An Adaptive and Intelligent Learning Experience",
        content: "LearnSphere uses AI to build a unique learning journey for every user, ensuring the content is always relevant, engaging, and impactful.",
        highlights: [
          "AI-driven skill gap analysis and learning path generation",
          "Content curation from top universities, companies, and creators",
          "Interactive quizzes, projects, and peer reviews",
          "Corporate dashboards for tracking team progress and ROI",
          "Integration with HR systems for seamless onboarding"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Python", "Django"],
      languages: ["TypeScript", "Python"],
      cloud: ["AWS"],
      database: ["PostgreSQL", "Elasticsearch"]
    },
    features: [
      {
        title: "Personalized Learning Paths",
        description: "Answer a few questions and our AI will build a custom curriculum tailored to your career goals."
      },
      {
        title: "Content Agnostic",
        description: "We curate the best articles, videos, podcasts, and courses from across the web, not just one library."
      },
      {
        title: "Enterprise Skill Management",
        description: "Companies can map team skills, identify gaps, and deploy targeted learning programs at scale."
      }
    ],
    process: [
      { title: "Pedagogical Research", description: "Studied the science of learning and skill acquisition", icon: "Search" },
      { title: "AI Engine Development", description: "Built the recommendation and personalization algorithms", icon: "Brain" },
      { title: "Platform Build", description: "Developed the learning management system and user-facing dashboards", icon: "Code" },
      { title: "Content Partnerships", description: "Partnered with leading content providers to build our library", icon: "Link" }
    ],
    team: [
      { title: "Learning Scientists", description: "Designing effective learning experiences", icon: "BookOpen" },
      { title: "AI/ML Engineers", description: "Powering the personalization engine", icon: "Brain" },
      { title: "Full-Stack Developers", description: "Building the core learning platform", icon: "Code" },
      { title: "Content Curators", description: "Vetting and tagging learning resources", icon: "FileText" }
    ],
    testimonial: {
      company: "Tech Company",
      position: "Head of L&D",
      content: "LearnSphere has revolutionized our employee training programs. The personalized paths keep our team engaged, and the analytics dashboard gives me clear insight into our skills inventory. Completion rates have never been higher."
    }
  }
];
    

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category?: ProjectCategory): Project[] => {
  if (!category) return projects;
  return projects.filter(project => project.category === category);
};

export const searchProjects = (query: string): Project[] => {
  if (!query.trim()) return projects;
  
  const searchTerm = query.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.shortDescription.toLowerCase().includes(searchTerm) ||
    project.category.toLowerCase().includes(searchTerm)
  );
};

export const filterProjects = (category?: ProjectCategory, search?: string): Project[] => {
  let filtered = projects;
  
  if (category) {
    filtered = getProjectsByCategory(category);
  }
  
  if (search) {
    const searchTerm = search.toLowerCase();
    filtered = filtered.filter(project => 
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.shortDescription.toLowerCase().includes(searchTerm)
    );
  }
  
  return filtered;
};