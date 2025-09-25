export type ProjectCategory = 'Apps' | 'AI' | 'SaaS' | 'Web App' | 'Healthcare' | 'E-commerce' | 'Services' | 'Blockchain' | 'Fintech' | 'EdTech';

export interface ProjectStat {
  icon: any; // Using any temporarily for icon flexibility
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
  icon: any; // Using any temporarily for icon flexibility
}

export interface TeamMember {
  title: string;
  description: string;
  icon: any; // Using any temporarily for icon flexibility
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
  Home,
  Video,
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
  MapPin,
  type LucideIcon
} from 'lucide-react';

// Import images
import architourImage from "@/assets/architour-app.jpg";
import carzentraImage from "@/assets/carzentra-app.jpg";
import retailxImage from "@/assets/retailx-dashboard.jpg";
import nextstopImage from "@/assets/nextstop-app.jpg";
import tradexImage from "@/assets/tradex-app.jpg";
import finnovaImage from "@/assets/finnova-app.jpg";
import bigoHealthImage from "@/assets/bigo.webp";
import jiviImage from "@/assets/jivi.webp";
import siyaAyurvedaImage from "@/assets/siyaayurveda.webp";
import amrutamImage from "@/assets/only_text_Amrutam_Logo_in_Green-09.webp";
import theBumpImage from "@/assets/Bump.png";
import nationwideVisasImage from "@/assets/nationwide-visas-logo.png";
import solAlgoImage from "@/assets/solAlgo.png";
import darazImage from "../assets/Daraz-Rebrand.png"
import carrefourImage from "../assets/Carrefour.webp"
import boltImage from "../assets/Bolt_logo.png"
import luvImage from "../assets/luv.webp"
import airena from "../assets/airena.jpeg"
import polaraImage from "../assets/getplara.png"
import taikonzImag from "../assets/taikonz.webp"
import titoImage from "../assets/Tito.png"
import fintrackImage from "../assets/fintrackImage.png"
import taskflowImage from "../assets/taskflow.png"
import learnsphereImage from "../assets/LearnSphere.jpeg"
import bayutImage from "../assets/bayut.png"



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
    title: "CarZentra: AI-Powered Car Marketplace",
    subtitle: "Smart car buying with AI recommendations",
    description: "CarZentra revolutionizes the car buying experience with AI-powered recommendations, virtual inspections, and seamless financing options. Our platform connects buyers with verified dealers while providing transparent pricing and comprehensive vehicle history reports.",
    shortDescription: "AI-Powered Automotive Marketplace Platform",
    slug: "carzentra-ai-car-marketplace",
    category: "AI",
    heroImage: carzentraImage,
    colorVariant: 1,
    stats: [
      { icon: Users, value: "50K+", label: "Active users monthly" },
      { icon: TrendingUp, value: "85%", label: "User satisfaction rate" },
      { icon: Zap, value: "3x", label: "Faster car discovery" },
      { icon: BarChart, value: "$2M+", label: "Transactions facilitated" }
    ],
    sections: [
      {
        type: "idea",
        title: "Reimagining Car Shopping Experience",
        content: "Traditional car shopping is time-consuming, overwhelming, and often lacks transparency. Buyers struggle to find the right vehicle that matches their needs, budget, and preferences. We envisioned an AI-powered platform that would make car buying as simple as online shopping while maintaining the trust and verification needed for such significant purchases."
      },
      {
        type: "challenges",
        title: "Solving Complex Marketplace Problems",
        content: [
          "Information asymmetry between buyers and sellers",
          "Lack of standardized vehicle condition assessment",
          "Complex financing options difficult to compare",
          "Geographic limitations in vehicle discovery",
          "Trust issues in online automotive transactions"
        ]
      },
      {
        type: "solution",
        title: "AI-Driven Automotive Marketplace",
        content: "CarZentra leverages machine learning algorithms to match buyers with their ideal vehicles while providing comprehensive verification and financing solutions.",
        highlights: [
          "AI-powered vehicle recommendations based on user preferences",
          "Virtual 360° vehicle inspections with AR overlay",
          "Integrated financing comparison and pre-approval",
          "Blockchain-verified vehicle history and ownership",
          "Real-time market pricing analytics",
          "Seamless dealer-buyer communication platform"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Node.js", "TensorFlow"],
      languages: ["TypeScript", "Python", "Swift"],
      cloud: ["AWS", "Google Cloud AI"],
      database: ["PostgreSQL", "Redis", "MongoDB"]
    },
    features: [
      {
        title: "Smart Vehicle Matching",
        description: "AI algorithms analyze user preferences, budget, and usage patterns to recommend perfect vehicle matches"
      },
      {
        title: "Virtual Inspection Suite",
        description: "360° vehicle tours with AR-powered damage detection and condition assessment"
      },
      {
        title: "Integrated Financing Hub",
        description: "Compare loan options, get pre-approved, and complete financing entirely within the app"
      }
    ],
    process: [
      {
        title: "Market Research",
        description: "Analyzed automotive marketplace pain points and user behavior patterns",
        icon: Search
      },
      {
        title: "AI Model Development",
        description: "Built recommendation engines and pricing prediction algorithms",
        icon: Brain
      },
      {
        title: "Platform Development",
        description: "Created mobile and web applications with seamless user experience",
        icon: Code
      },
      {
        title: "Launch & Optimization",
        description: "Deployed platform and continuously optimized based on user feedback",
        icon: Rocket
      }
    ],
    team: [
      {
        title: "AI/ML Engineers",
        description: "Recommendation systems, pricing algorithms",
        icon: Brain
      },
      {
        title: "Mobile Developers",
        description: "React Native, iOS, Android development",
        icon: Users
      },
      {
        title: "Backend Engineers",
        description: "Scalable APIs, database optimization",
        icon: Server
      }
    ],
    testimonial: {
      company: "CarZentra User",
      position: "First-time Car Buyer",
      content: "I was overwhelmed by the car buying process until I found CarZentra. The AI recommendations were spot-on, and I found my perfect car within days, not weeks. The financing was transparent and easy to understand."
    }
  },
  {
    id: "3",
    title: "RetailX: Smart Inventory Management",
    subtitle: "AI-powered retail operations platform",
    description: "RetailX transforms retail operations with predictive analytics, automated inventory management, and real-time sales insights. Our platform helps retailers optimize stock levels, reduce waste, and maximize profitability through intelligent automation.",
    shortDescription: "AI-Driven Retail Operations and Inventory Platform",
    slug: "retailx-smart-inventory-management",
    category: "SaaS",
    heroImage: retailxImage,
    colorVariant: 2,
    stats: [
      { icon: TrendingUp, value: "40%", label: "Reduction in inventory costs" },
      { icon: Zap, value: "60%", label: "Faster stock replenishment" },
      { icon: BarChart, value: "25%", label: "Increase in profit margins" },
      { icon: Users, value: "500+", label: "Retail locations served" }
    ],
    sections: [
      {
        type: "idea",
        title: "Revolutionizing Retail Operations",
        content: "Retail businesses struggle with inventory management, leading to overstocking, stockouts, and reduced profitability. Traditional methods rely on historical data and gut feelings, often missing market trends and seasonal variations. We aimed to create an intelligent system that predicts demand, optimizes inventory, and automates routine operations."
      },
      {
        type: "challenges",
        title: "Complex Retail Management Issues",
        content: [
          "Unpredictable demand patterns and seasonal variations",
          "Manual inventory tracking prone to human error",
          "Lack of real-time visibility across multiple locations",
          "Inefficient supplier communication and ordering",
          "Difficulty in identifying profitable product lines"
        ]
      },
      {
        type: "solution",
        title: "Intelligent Retail Management Platform",
        content: "RetailX combines machine learning, IoT sensors, and automated workflows to create a comprehensive retail operations platform.",
        highlights: [
          "Predictive demand forecasting with 95% accuracy",
          "Automated purchase order generation and supplier integration",
          "Real-time inventory tracking across all locations",
          "Dynamic pricing optimization based on market conditions",
          "Comprehensive analytics dashboard with actionable insights",
          "Mobile app for on-the-go inventory management"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Django", "TensorFlow"],
      languages: ["Python", "JavaScript", "SQL"],
      cloud: ["AWS", "Azure ML"],
      database: ["PostgreSQL", "InfluxDB", "Redis"]
    },
    features: [
      {
        title: "Predictive Analytics Engine",
        description: "Machine learning models predict demand patterns and optimize inventory levels automatically"
      },
      {
        title: "Multi-location Management",
        description: "Centralized dashboard to manage inventory, sales, and operations across multiple retail locations"
      },
      {
        title: "Supplier Integration Hub",
        description: "Automated ordering, delivery tracking, and supplier performance analytics"
      }
    ],
    process: [
      {
        title: "Requirements Analysis",
        description: "Studied retail workflows and identified automation opportunities",
        icon: Search
      },
      {
        title: "System Architecture",
        description: "Designed scalable platform architecture with ML integration",
        icon: Box
      },
      {
        title: "Development & Testing",
        description: "Built platform with extensive testing across different retail scenarios",
        icon: Code
      },
      {
        title: "Deployment & Training",
        description: "Rolled out platform with comprehensive user training and support",
        icon: Users
      }
    ],
    team: [
      {
        title: "Data Scientists",
        description: "Predictive modeling, demand forecasting",
        icon: BarChart
      },
      {
        title: "Full-stack Developers",
        description: "Platform development, API integration",
        icon: Code
      },
      {
        title: "DevOps Engineers",
        description: "Cloud infrastructure, deployment automation",
        icon: Server
      }
    ],
    testimonial: {
      company: "Metro Retail Chain",
      position: "Operations Director",
      content: "RetailX has transformed our operations completely. We've reduced inventory costs by 40% while improving product availability. The predictive analytics have been a game-changer for our business planning."
    }
  },
  {
    id: "4",
    title: "NextStop: Smart Transit App",
    subtitle: "Real-time public transportation companion",
    description: "NextStop provides real-time transit information, route optimization, and seamless payment integration for public transportation. Our app helps commuters navigate cities efficiently with live updates, crowd predictions, and multimodal journey planning.",
    shortDescription: "Real-time Public Transit Navigation and Payment App",
    slug: "nextstop-smart-transit-app",
    category: "Apps",
    heroImage: nextstopImage,
    colorVariant: 3,
    stats: [
      { icon: Users, value: "100K+", label: "Daily active users" },
      { icon: Clock, value: "30%", label: "Reduction in commute time" },
      { icon: Zap, value: "95%", label: "Real-time accuracy rate" },
      { icon: Globe, value: "15", label: "Cities supported" }
    ],
    sections: [
      {
        type: "idea",
        title: "Simplifying Urban Mobility",
        content: "Public transportation users face uncertainty with schedules, delays, and route changes. Existing apps often provide outdated information or lack integration with payment systems. We envisioned a comprehensive transit companion that provides real-time information, seamless payments, and intelligent route suggestions to make public transportation more reliable and user-friendly."
      },
      {
        type: "challenges",
        title: "Urban Transit Complexity",
        content: [
          "Inconsistent real-time data from different transit agencies",
          "Complex multimodal journey planning requirements",
          "Fragmented payment systems across different operators",
          "Varying data quality and API limitations",
          "Need for offline functionality in poor network areas"
        ]
      },
      {
        type: "solution",
        title: "Comprehensive Transit Platform",
        content: "NextStop aggregates data from multiple sources and provides a unified experience for urban mobility.",
        highlights: [
          "Real-time arrival predictions with machine learning corrections",
          "Multimodal route planning including walking, cycling, and transit",
          "Integrated payment system supporting multiple transit operators",
          "Crowd prediction and alternative route suggestions",
          "Offline maps and schedules for network-poor areas",
          "Accessibility features for users with disabilities"
        ]
      }
    ],
    techStack: {
      frameworks: ["Flutter", "Node.js", "Express"],
      languages: ["Dart", "JavaScript", "Python"],
      cloud: ["Google Cloud", "Firebase"],
      database: ["MongoDB", "Redis", "SQLite"]
    },
    features: [
      {
        title: "Live Transit Tracking",
        description: "Real-time vehicle locations, arrival predictions, and service alerts with high accuracy"
      },
      {
        title: "Smart Route Planning",
        description: "AI-powered multimodal journey planning with live traffic and transit conditions"
      },
      {
        title: "Unified Payment System",
        description: "Single app for payments across buses, trains, and other transit modes"
      }
    ],
    process: [
      {
        title: "Transit Data Integration",
        description: "Connected with multiple transit APIs and standardized data formats",
        icon: Link
      },
      {
        title: "Algorithm Development",
        description: "Built route optimization and prediction algorithms",
        icon: Brain
      },
      {
        title: "App Development",
        description: "Created cross-platform mobile app with intuitive interface",
        icon: Code
      },
      {
        title: "Testing & Launch",
        description: "Extensive testing with real commuters and gradual city rollout",
        icon: Rocket
      }
    ],
    team: [
      {
        title: "Mobile Developers",
        description: "Flutter, native iOS/Android development",
        icon: Users
      },
      {
        title: "Backend Engineers",
        description: "API integration, real-time data processing",
        icon: Server
      },
      {
        title: "UX Designers",
        description: "Transit-focused user experience design",
        icon: Palette
      }
    ],
    testimonial: {
      company: "Daily Commuter",
      position: "Software Engineer",
      content: "NextStop has made my daily commute so much easier. I always know exactly when my bus will arrive, and the route suggestions have saved me countless hours. The payment integration is seamless!"
    }
  },
  {
    id: "5",
    title: "TradeX: Crypto Trading Platform",
    subtitle: "Advanced cryptocurrency trading suite",
    description: "TradeX provides professional-grade cryptocurrency trading tools with advanced charting, automated strategies, and portfolio management. Our platform serves both novice and experienced traders with institutional-level features and bank-grade security.",
    shortDescription: "Professional Cryptocurrency Trading and Portfolio Platform",
    slug: "tradex-crypto-trading-platform",
    category: "Fintech",
    heroImage: tradexImage,
    colorVariant: 5,
    stats: [
      { icon: TrendingUp, value: "$50M+", label: "Trading volume monthly" },
      { icon: Users, value: "25K+", label: "Active traders" },
      { icon: Zap, value: "99.9%", label: "Platform uptime" },
      { icon: Shield, value: "0", label: "Security incidents" }
    ],
    sections: [
      {
        type: "idea",
        title: "Democratizing Professional Trading",
        content: "Cryptocurrency trading platforms often lack the sophisticated tools that professional traders need, while being too complex for beginners. We wanted to create a platform that provides institutional-grade features with an intuitive interface, making advanced trading accessible to everyone while maintaining the highest security standards."
      },
      {
        type: "challenges",
        title: "Complex Trading Platform Requirements",
        content: [
          "Need for real-time data processing with minimal latency",
          "Complex order matching and execution algorithms",
          "Regulatory compliance across multiple jurisdictions",
          "Scalable architecture for high-frequency trading",
          "Advanced security measures against sophisticated attacks"
        ]
      },
      {
        type: "solution",
        title: "Professional Trading Infrastructure",
        content: "TradeX combines cutting-edge technology with user-centric design to deliver a comprehensive trading platform.",
        highlights: [
          "Sub-millisecond order execution with advanced matching engine",
          "Professional charting tools with 100+ technical indicators",
          "Automated trading strategies with backtesting capabilities",
          "Multi-exchange arbitrage and portfolio rebalancing",
          "Institutional-grade security with cold storage integration",
          "Advanced risk management and position sizing tools"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Node.js", "WebSocket"],
      languages: ["TypeScript", "Go", "Rust"],
      cloud: ["AWS", "Kubernetes"],
      database: ["PostgreSQL", "Redis", "InfluxDB"]
    },
    features: [
      {
        title: "Advanced Trading Engine",
        description: "High-performance matching engine with sub-millisecond execution and advanced order types"
      },
      {
        title: "Professional Analytics",
        description: "Comprehensive charting tools, technical indicators, and market analysis features"
      },
      {
        title: "Automated Strategies",
        description: "Build, backtest, and deploy automated trading strategies with risk management"
      }
    ],
    process: [
      {
        title: "Architecture Design",
        description: "Designed high-performance, scalable trading infrastructure",
        icon: Box
      },
      {
        title: "Security Implementation",
        description: "Implemented multi-layer security with cold storage integration",
        icon: Shield
      },
      {
        title: "Trading Engine Development",
        description: "Built low-latency matching engine and order management system",
        icon: Zap
      },
      {
        title: "Testing & Compliance",
        description: "Extensive testing and regulatory compliance implementation",
        icon: CheckCircle
      }
    ],
    team: [
      {
        title: "Blockchain Engineers",
        description: "Smart contracts, DeFi integration",
        icon: Link
      },
      {
        title: "Backend Engineers",
        description: "High-performance trading systems",
        icon: Server
      },
      {
        title: "Security Specialists",
        description: "Cybersecurity, compliance, auditing",
        icon: Shield
      }
    ],
    testimonial: {
      company: "Professional Trader",
      position: "Quantitative Analyst",
      content: "TradeX provides the professional tools I need with the reliability I expect. The execution speed is excellent, and the advanced charting capabilities rival any institutional platform I've used."
    }
  },
  {
    id: "6",
    title: "Finnova: Personal Finance AI",
    subtitle: "Intelligent personal finance management",
    description: "Finnova uses AI to provide personalized financial advice, automated budgeting, and investment recommendations. Our platform helps users achieve their financial goals through intelligent insights, expense tracking, and goal-based savings strategies.",
    shortDescription: "AI-Powered Personal Finance and Investment Platform",
    slug: "finnova-personal-finance-ai",
    category: "Fintech",
    heroImage: finnovaImage,
    colorVariant: 1,
    stats: [
      { icon: Users, value: "75K+", label: "Users managing finances" },
      { icon: TrendingUp, value: "35%", label: "Average savings increase" },
      { icon: Zap, value: "90%", label: "Goal achievement rate" },
      { icon: BarChart, value: "$10M+", label: "Total savings tracked" }
    ],
    sections: [
      {
        type: "idea",
        title: "Making Financial Wellness Accessible",
        content: "Personal finance management is often overwhelming and time-consuming. Most people struggle with budgeting, saving, and making informed investment decisions. We envisioned an AI-powered platform that would act as a personal financial advisor, providing customized recommendations and automating routine financial tasks to help users build wealth and achieve financial security."
      },
      {
        type: "challenges",
        title: "Personal Finance Complexity",
        content: [
          "Lack of personalized financial advice for average consumers",
          "Difficulty in tracking expenses across multiple accounts",
          "Complex investment options overwhelming for beginners",
          "Need for real-time financial insights and alerts",
          "Security concerns with financial data aggregation"
        ]
      },
      {
        type: "solution",
        title: "AI-Driven Financial Companion",
        content: "Finnova leverages machine learning to provide personalized financial guidance and automate wealth-building strategies.",
        highlights: [
          "AI-powered expense categorization and budget optimization",
          "Personalized investment recommendations based on risk profile",
          "Automated savings goals with smart allocation strategies",
          "Real-time financial health scoring and improvement suggestions",
          "Bill prediction and cash flow forecasting",
          "Integration with 10,000+ financial institutions"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Django", "TensorFlow"],
      languages: ["Python", "JavaScript", "Swift"],
      cloud: ["AWS", "Google Cloud AI"],
      database: ["PostgreSQL", "Redis", "MongoDB"]
    },
    features: [
      {
        title: "Smart Budget Management",
        description: "AI automatically categorizes expenses and suggests budget optimizations based on spending patterns"
      },
      {
        title: "Investment Advisory",
        description: "Personalized investment recommendations with automated portfolio rebalancing"
      },
      {
        title: "Goal-Based Savings",
        description: "Intelligent savings strategies that automatically allocate funds toward financial goals"
      }
    ],
    process: [
      {
        title: "Financial Analysis",
        description: "Analyzed personal finance pain points and user behavior patterns",
        icon: BarChart
      },
      {
        title: "AI Model Training",
        description: "Developed machine learning models for financial predictions and recommendations",
        icon: Brain
      },
      {
        title: "Security Implementation",
        description: "Implemented bank-level security for financial data protection",
        icon: Shield
      },
      {
        title: "User Testing",
        description: "Extensive testing with real users to refine AI recommendations",
        icon: Users
      }
    ],
    team: [
      {
        title: "Data Scientists",
        description: "Financial modeling, AI algorithms",
        icon: BarChart
      },
      {
        title: "Mobile Developers",
        description: "Cross-platform app development",
        icon: Users
      },
      {
        title: "Security Engineers",
        description: "Financial data protection, compliance",
        icon: Shield
      }
    ],
    testimonial: {
      company: "Finnova User",
      position: "Marketing Manager",
      content: "Finnova has completely changed how I manage my money. The AI recommendations are spot-on, and I've saved more in the past year than I did in the previous three years combined. It's like having a personal financial advisor in my pocket."
    }
  },
  {
    id: "7",
    title: "Bigo Health: Telemedicine Platform",
    subtitle: "Comprehensive digital healthcare solution",
    description: "Bigo Health connects patients with healthcare providers through secure video consultations, digital prescriptions, and health monitoring. Our platform makes quality healthcare accessible and convenient while maintaining the highest standards of medical privacy and security.",
    shortDescription: "Telemedicine and Digital Health Management Platform",
    slug: "bigo-health-telemedicine-platform",
    category: "Healthcare",
    heroImage: bigoHealthImage,
    colorVariant: 2,
    stats: [
      { icon: Users, value: "50K+", label: "Patients served" },
      { icon: Clock, value: "24/7", label: "Healthcare availability" },
      { icon: Heart, value: "98%", label: "Patient satisfaction" },
      { icon: Globe, value: "100+", label: "Healthcare providers" }
    ],
    sections: [
      {
        type: "idea",
        title: "Democratizing Healthcare Access",
        content: "Healthcare access remains a significant challenge, especially in remote areas and during emergencies. Long wait times, geographical barriers, and high costs prevent many people from receiving timely medical care. We aimed to create a comprehensive telemedicine platform that would make quality healthcare accessible to everyone, anywhere, at any time."
      },
      {
        type: "challenges",
        title: "Healthcare Delivery Obstacles",
        content: [
          "Limited access to specialists in rural and remote areas",
          "Long waiting times for non-emergency consultations",
          "High costs of traditional healthcare delivery",
          "Need for secure, HIPAA-compliant communication",
          "Integration with existing healthcare systems and records"
        ]
      },
      {
        type: "solution",
        title: "Comprehensive Digital Health Platform",
        content: "Bigo Health provides end-to-end telemedicine services with integrated health monitoring and management tools.",
        highlights: [
          "Secure HD video consultations with medical professionals",
          "Digital prescription management and pharmacy integration",
          "Electronic health records with patient portal access",
          "AI-powered symptom checker and triage system",
          "Remote patient monitoring with IoT device integration",
          "Multi-language support and accessibility features"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Node.js", "WebRTC"],
      languages: ["TypeScript", "Python", "Swift"],
      cloud: ["AWS HIPAA", "Azure Health"],
      database: ["PostgreSQL", "MongoDB", "Redis"]
    },
    features: [
      {
        title: "Video Consultations",
        description: "Secure, high-quality video calls with healthcare providers, including screen sharing and digital examination tools"
      },
      {
        title: "Health Records Management",
        description: "Comprehensive electronic health records with patient access and provider collaboration features"
      },
      {
        title: "Remote Monitoring",
        description: "Integration with wearable devices and health sensors for continuous patient monitoring"
      }
    ],
    process: [
      {
        title: "Healthcare Analysis",
        description: "Studied healthcare delivery challenges and regulatory requirements",
        icon: Heart
      },
      {
        title: "Compliance Design",
        description: "Designed HIPAA-compliant architecture with end-to-end encryption",
        icon: Shield
      },
      {
        title: "Platform Development",
        description: "Built telemedicine platform with video, messaging, and records management",
        icon: Code
      },
      {
        title: "Provider Onboarding",
        description: "Recruited and trained healthcare providers on the platform",
        icon: Users
      }
    ],
    team: [
      {
        title: "Healthcare IT Specialists",
        description: "HIPAA compliance, medical workflows",
        icon: Heart
      },
      {
        title: "Video Technology Engineers",
        description: "WebRTC, real-time communication",
        icon: Video
      },
      {
        title: "Security Engineers",
        description: "Medical data protection, encryption",
        icon: Shield
      }
    ],
    testimonial: {
      company: "Rural Clinic Network",
      position: "Chief Medical Officer",
      content: "Bigo Health has revolutionized how we deliver care to our rural patients. The platform is intuitive for both providers and patients, and the security features give us confidence in protecting sensitive medical information."
    }
  },
  {
    id: "8",
    title: "Jivi: Mental Health Companion",
    subtitle: "AI-powered mental wellness platform",
    description: "Jivi provides personalized mental health support through AI-powered conversations, mood tracking, and professional therapy connections. Our platform offers 24/7 emotional support while connecting users with licensed therapists when needed.",
    shortDescription: "AI Mental Health Support and Therapy Platform",
    slug: "jivi-mental-health-companion",
    category: "Healthcare",
    heroImage: jiviImage,
    colorVariant: 3,
    stats: [
      { icon: Users, value: "30K+", label: "Users supported daily" },
      { icon: Heart, value: "85%", label: "Improvement in mood scores" },
      { icon: Clock, value: "24/7", label: "AI support availability" },
      { icon: UserCheck, value: "200+", label: "Licensed therapists" }
    ],
    sections: [
      {
        type: "idea",
        title: "Addressing Mental Health Crisis",
        content: "Mental health support is often inaccessible due to cost, stigma, and limited availability of professionals. Many people struggle in silence, unable to access timely help when they need it most. We envisioned an AI-powered platform that could provide immediate emotional support while seamlessly connecting users with professional help when appropriate."
      },
      {
        type: "challenges",
        title: "Mental Health Support Barriers",
        content: [
          "Limited availability and high cost of mental health professionals",
          "Stigma preventing people from seeking help",
          "Need for immediate support during crisis situations",
          "Difficulty in tracking and understanding mental health patterns",
          "Ensuring AI responses are empathetic and clinically appropriate"
        ]
      },
      {
        type: "solution",
        title: "Comprehensive Mental Wellness Platform",
        content: "Jivi combines AI-powered emotional support with professional therapy services and comprehensive mood tracking.",
        highlights: [
          "AI companion trained on therapeutic conversation techniques",
          "Mood tracking with personalized insights and patterns",
          "Crisis detection with immediate professional intervention",
          "Seamless connection to licensed therapists and counselors",
          "Guided meditation and mindfulness exercises",
          "Anonymous support groups and peer connections"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Flask", "TensorFlow"],
      languages: ["Python", "JavaScript", "Swift"],
      cloud: ["Google Cloud AI", "AWS"],
      database: ["PostgreSQL", "Redis", "MongoDB"]
    },
    features: [
      {
        title: "AI Emotional Support",
        description: "24/7 AI companion providing empathetic conversations and coping strategies based on therapeutic principles"
      },
      {
        title: "Professional Therapy Network",
        description: "Connect with licensed therapists for video sessions, messaging, and ongoing treatment plans"
      },
      {
        title: "Mood Analytics",
        description: "Track mood patterns, triggers, and progress with personalized insights and recommendations"
      }
    ],
    process: [
      {
        title: "Clinical Research",
        description: "Collaborated with mental health professionals to understand best practices",
        icon: BookOpen
      },
      {
        title: "AI Training",
        description: "Trained conversational AI on therapeutic techniques and crisis detection",
        icon: Brain
      },
      {
        title: "Platform Development",
        description: "Built secure, empathetic user experience with professional integration",
        icon: Code
      },
      {
        title: "Clinical Validation",
        description: "Validated platform effectiveness with clinical trials and user studies",
        icon: CheckCircle
      }
    ],
    team: [
      {
        title: "Clinical Psychologists",
        description: "Therapeutic protocols, AI training",
        icon: Heart
      },
      {
        title: "AI/ML Engineers",
        description: "Conversational AI, sentiment analysis",
        icon: Brain
      },
      {
        title: "Mobile Developers",
        description: "Secure, accessible app development",
        icon: Users
      }
    ],
    testimonial: {
      company: "Mental Health Advocate",
      position: "Licensed Clinical Social Worker",
      content: "Jivi fills a critical gap in mental health support. The AI companion provides excellent immediate support, and the seamless connection to professional services ensures users get the right level of care when they need it."
    }
  },
  {
    id: "9",
    title: "Siya Ayurveda: Holistic Health Platform",
    subtitle: "Traditional wellness meets modern technology",
    description: "Siya Ayurveda digitizes traditional Ayurvedic medicine with personalized consultations, herbal medicine delivery, and wellness tracking. Our platform connects users with certified Ayurvedic practitioners while providing educational resources and treatment tracking.",
    shortDescription: "Digital Ayurvedic Medicine and Wellness Platform",
    slug: "siya-ayurveda-holistic-health-platform",
    category: "Healthcare",
    heroImage: siyaAyurvedaImage,
    colorVariant: 4,
    stats: [
      { icon: Users, value: "15K+", label: "Wellness journeys started" },
      { icon: Leaf, value: "500+", label: "Herbal remedies available" },
      { icon: UserCheck, value: "50+", label: "Certified practitioners" },
      { icon: Heart, value: "92%", label: "User satisfaction rate" }
    ],
    sections: [
      {
        type: "idea",
        title: "Modernizing Ancient Wisdom",
        content: "Ayurvedic medicine offers holistic health solutions but often lacks accessibility and standardization in the modern world. People interested in natural wellness struggle to find qualified practitioners and authentic treatments. We aimed to create a platform that would make traditional Ayurvedic wisdom accessible through modern technology while maintaining authenticity and quality."
      },
      {
        type: "challenges",
        title: "Traditional Medicine Modernization",
        content: [
          "Limited access to qualified Ayurvedic practitioners",
          "Difficulty in sourcing authentic herbal medicines",
          "Lack of standardized treatment protocols and tracking",
          "Need for educational resources about Ayurvedic principles",
          "Integration of traditional practices with modern lifestyle"
        ]
      },
      {
        type: "solution",
        title: "Digital Ayurvedic Ecosystem",
        content: "Siya Ayurveda creates a comprehensive platform connecting users with authentic Ayurvedic treatments and practitioners.",
        highlights: [
          "Personalized consultations with certified Ayurvedic doctors",
          "Custom herbal medicine formulations and delivery",
          "Dosha assessment and personalized wellness plans",
          "Educational content library on Ayurvedic principles",
          "Treatment progress tracking and lifestyle recommendations",
          "Quality-assured herbal products with authenticity certificates"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Django", "React Native"],
      languages: ["Python", "JavaScript", "TypeScript"],
      cloud: ["AWS", "Firebase"],
      database: ["PostgreSQL", "MongoDB", "Redis"]
    },
    features: [
      {
        title: "Personalized Consultations",
        description: "Video consultations with certified Ayurvedic practitioners for personalized treatment plans"
      },
      {
        title: "Herbal Medicine Delivery",
        description: "Custom herbal formulations prepared and delivered based on individual prescriptions"
      },
      {
        title: "Wellness Tracking",
        description: "Track symptoms, progress, and lifestyle factors with Ayurvedic health insights"
      }
    ],
    process: [
      {
        title: "Practitioner Network",
        description: "Built network of certified Ayurvedic doctors and wellness experts",
        icon: Users
      },
      {
        title: "Supply Chain Setup",
        description: "Established quality-controlled herbal medicine sourcing and preparation",
        icon: Leaf
      },
      {
        title: "Platform Development",
        description: "Created consultation, prescription, and delivery management system",
        icon: Code
      },
      {
        title: "Quality Assurance",
        description: "Implemented quality controls for practitioners and herbal products",
        icon: CheckCircle
      }
    ],
    team: [
      {
        title: "Ayurvedic Doctors",
        description: "Traditional medicine expertise, treatment protocols",
        icon: Heart
      },
      {
        title: "Platform Developers",
        description: "Healthcare platform, e-commerce integration",
        icon: Code
      },
      {
        title: "Supply Chain Managers",
        description: "Herbal sourcing, quality control",
        icon: Package
      }
    ],
    testimonial: {
      company: "Wellness Enthusiast",
      position: "Yoga Instructor",
      content: "Siya Ayurveda has made authentic Ayurvedic treatment accessible to me. The practitioners are knowledgeable, the herbal medicines are high quality, and I love being able to track my wellness journey digitally."
    }
  },
  {
    id: "10",
    title: "Amrutam: Ayurvedic E-commerce",
    subtitle: "Premium Ayurvedic products marketplace",
    description: "Amrutam is a premium e-commerce platform specializing in authentic Ayurvedic products, supplements, and wellness items. Our platform ensures product authenticity, provides detailed ingredient information, and offers personalized product recommendations based on individual health needs.",
    shortDescription: "Premium Ayurvedic Products E-commerce Platform",
    slug: "amrutam-ayurvedic-ecommerce",
    category: "E-commerce",
    heroImage: amrutamImage,
    colorVariant: 5,
    stats: [
      { icon: Package, value: "1000+", label: "Authentic products" },
      { icon: Users, value: "25K+", label: "Satisfied customers" },
      { icon: Star, value: "4.8/5", label: "Average product rating" },
      { icon: Truck, value: "98%", label: "On-time delivery rate" }
    ],
    sections: [
      {
        type: "idea",
        title: "Authentic Ayurvedic Marketplace",
        content: "The market is flooded with low-quality Ayurvedic products that lack authenticity and proper certification. Consumers struggle to find genuine, high-quality Ayurvedic supplements and wellness products. We envisioned a premium marketplace that would curate only authentic products while providing comprehensive information to help customers make informed choices."
      },
      {
        type: "challenges",
        title: "Quality and Authenticity Issues",
        content: [
          "Proliferation of fake and low-quality Ayurvedic products",
          "Lack of transparency in ingredient sourcing and preparation",
          "Difficulty in verifying product authenticity and certifications",
          "Need for educational content about product usage and benefits",
          "Complex logistics for temperature-sensitive herbal products"
        ]
      },
      {
        type: "solution",
        title: "Premium Ayurvedic E-commerce Platform",
        content: "Amrutam creates a trusted marketplace for authentic Ayurvedic products with comprehensive quality assurance.",
        highlights: [
          "Rigorous vendor verification and product authentication process",
          "Detailed product information with ingredient transparency",
          "Personalized product recommendations based on health goals",
          "Expert consultations for product selection guidance",
          "Temperature-controlled logistics for product integrity",
          "Educational content library on Ayurvedic wellness"
        ]
      }
    ],
    techStack: {
      frameworks: ["Next.js", "Node.js", "React Native"],
      languages: ["TypeScript", "JavaScript", "Python"],
      cloud: ["AWS", "Cloudflare"],
      database: ["PostgreSQL", "Redis", "Elasticsearch"]
    },
    features: [
      {
        title: "Product Authentication",
        description: "Rigorous verification process ensuring all products are authentic and certified"
      },
      {
        title: "Personalized Recommendations",
        description: "AI-powered product suggestions based on individual health profiles and goals"
      },
      {
        title: "Expert Consultations",
        description: "Access to Ayurvedic experts for product selection and usage guidance"
      }
    ],
    process: [
      {
        title: "Vendor Curation",
        description: "Established strict criteria for vendor selection and product authentication",
        icon: CheckCircle
      },
      {
        title: "Platform Development",
        description: "Built e-commerce platform with advanced search and recommendation features",
        icon: Code
      },
      {
        title: "Logistics Setup",
        description: "Implemented specialized logistics for herbal product handling and delivery",
        icon: Truck
      },
      {
        title: "Quality Assurance",
        description: "Established ongoing quality monitoring and customer feedback systems",
        icon: Star
      }
    ],
    team: [
      {
        title: "E-commerce Developers",
        description: "Platform development, payment integration",
        icon: ShoppingCart
      },
      {
        title: "Quality Assurance Team",
        description: "Product verification, vendor management",
        icon: CheckCircle
      },
      {
        title: "Logistics Specialists",
        description: "Supply chain, delivery optimization",
        icon: Truck
      }
    ],
    testimonial: {
      company: "Health-conscious Consumer",
      position: "Wellness Coach",
      content: "Amrutam is my go-to source for authentic Ayurvedic products. The quality is consistently excellent, and I appreciate the detailed information provided about each product's ingredients and benefits."
    }
  },
  {
    id: "11",
    title: "The Bump: Pregnancy Companion",
    subtitle: "Comprehensive pregnancy and parenting app",
    description: "The Bump provides expectant parents with week-by-week pregnancy tracking, expert advice, and community support. Our app offers personalized content, appointment reminders, and connects parents with healthcare providers and other families on similar journeys.",
    shortDescription: "Pregnancy Tracking and Parenting Support Platform",
    slug: "the-bump-pregnancy-companion",
    category: "Healthcare",
    heroImage: theBumpImage,
    colorVariant: 1,
    stats: [
      { icon: Users, value: "100K+", label: "Expecting parents" },
      { icon: Heart, value: "95%", label: "User satisfaction" },
      { icon: MessageSquare, value: "50K+", label: "Community posts monthly" },
      { icon: BookOpen, value: "1000+", label: "Expert articles" }
    ],
    sections: [
      {
        type: "idea",
        title: "Supporting the Parenting Journey",
        content: "Pregnancy and early parenting can be overwhelming with countless questions and concerns. Expectant parents often struggle to find reliable, personalized information and support. We aimed to create a comprehensive platform that would guide parents through pregnancy and early childhood with expert advice, community support, and personalized tracking tools."
      },
      {
        type: "challenges",
        title: "Pregnancy and Parenting Support Gaps",
        content: [
          "Information overload with conflicting advice from various sources",
          "Lack of personalized guidance for individual pregnancy experiences",
          "Limited access to healthcare providers between appointments",
          "Need for peer support and community connection",
          "Tracking multiple aspects of pregnancy and baby development"
        ]
      },
      {
        type: "solution",
        title: "Comprehensive Pregnancy and Parenting Platform",
        content: "The Bump provides personalized pregnancy tracking with expert guidance and community support throughout the parenting journey.",
        highlights: [
          "Week-by-week pregnancy tracking with personalized insights",
          "Expert-reviewed articles and advice from healthcare professionals",
          "Community forums for peer support and experience sharing",
          "Appointment and milestone reminders with calendar integration",
          "Baby development tracking and growth charts",
          "Partner involvement features for shared pregnancy experience"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Django", "WebSocket"],
      languages: ["JavaScript", "Python", "Swift"],
      cloud: ["AWS", "Firebase"],
      database: ["PostgreSQL", "Redis", "MongoDB"]
    },
    features: [
      {
        title: "Pregnancy Tracking",
        description: "Comprehensive week-by-week tracking with personalized insights and milestone reminders"
      },
      {
        title: "Expert Content Library",
        description: "Curated articles and advice from healthcare professionals and parenting experts"
      },
      {
        title: "Community Support",
        description: "Connect with other parents, share experiences, and get support from the community"
      }
    ],
    process: [
      {
        title: "Medical Research",
        description: "Collaborated with healthcare professionals to ensure medical accuracy",
        icon: BookOpen
      },
      {
        title: "Content Curation",
        description: "Developed comprehensive library of expert-reviewed parenting content",
        icon: FileText
      },
      {
        title: "App Development",
        description: "Built user-friendly mobile app with tracking and community features",
        icon: Code
      },
      {
        title: "Community Building",
        description: "Established moderated community spaces for safe parent interactions",
        icon: Users
      }
    ],
    team: [
      {
        title: "Healthcare Professionals",
        description: "Medical accuracy, content review",
        icon: Heart
      },
      {
        title: "Mobile Developers",
        description: "Cross-platform app development",
        icon: Users
      },
      {
        title: "Community Managers",
        description: "User engagement, content moderation",
        icon: MessageSquare
      }
    ],
    testimonial: {
      company: "New Parent",
      position: "First-time Mother",
      content: "The Bump has been my constant companion throughout pregnancy and beyond. The weekly updates are so helpful, and the community support has been invaluable during challenging times."
    }
  },
  {
    id: "12",
    title: "Nationwide Visas: Immigration Services",
    subtitle: "Comprehensive immigration assistance platform",
    description: "Nationwide Visas streamlines the immigration process with document management, application tracking, and expert consultation services. Our platform simplifies complex immigration procedures while ensuring compliance with current regulations and requirements.",
    shortDescription: "Digital Immigration Services and Document Management Platform",
    slug: "nationwide-visas-immigration-services",
    category: "Services",
    heroImage: nationwideVisasImage,
    colorVariant: 2,
    stats: [
      { icon: Users, value: "10K+", label: "Successful applications" },
      { icon: Globe, value: "50+", label: "Countries supported" },
      { icon: CheckCircle, value: "95%", label: "Application success rate" },
      { icon: Clock, value: "60%", label: "Faster processing time" }
    ],
    sections: [
      {
        type: "idea",
        title: "Simplifying Immigration Complexity",
        content: "Immigration processes are notoriously complex, time-consuming, and stressful. Applicants often struggle with paperwork, changing regulations, and lengthy processing times. We envisioned a platform that would streamline the entire immigration journey, from initial consultation to application approval, while providing transparency and expert guidance throughout the process."
      },
      {
        type: "challenges",
        title: "Immigration Process Obstacles",
        content: [
          "Complex and frequently changing immigration regulations",
          "Extensive documentation requirements and deadlines",
          "Lack of transparency in application processing status",
          "High costs and limited access to immigration experts",
          "Risk of application rejection due to errors or omissions"
        ]
      },
      {
        type: "solution",
        title: "Comprehensive Immigration Platform",
        content: "Nationwide Visas provides end-to-end immigration services with digital tools and expert support.",
        highlights: [
          "Automated document checklist and requirement tracking",
          "Real-time application status updates and notifications",
          "Expert consultation and review services",
          "Secure document storage and sharing capabilities",
          "Regulatory updates and compliance monitoring",
          "Multi-language support for international applicants"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Node.js", "Express"],
      languages: ["TypeScript", "JavaScript", "Python"],
      cloud: ["AWS", "Azure"],
      database: ["PostgreSQL", "MongoDB", "Redis"]
    },
    features: [
      {
        title: "Document Management",
        description: "Secure upload, storage, and organization of immigration documents with automated checklists"
      },
      {
        title: "Application Tracking",
        description: "Real-time status updates and notifications throughout the immigration process"
      },
      {
        title: "Expert Consultation",
        description: "Access to immigration lawyers and consultants for personalized guidance and review"
      }
    ],
    process: [
      {
        title: "Regulatory Research",
        description: "Comprehensive analysis of immigration laws and requirements across countries",
        icon: BookOpen
      },
      {
        title: "Expert Network",
        description: "Built network of qualified immigration lawyers and consultants",
        icon: Users
      },
      {
        title: "Platform Development",
        description: "Created secure document management and application tracking system",
        icon: Code
      },
      {
        title: "Compliance Integration",
        description: "Integrated real-time regulatory updates and compliance monitoring",
        icon: CheckCircle
      }
    ],
    team: [
      {
        title: "Immigration Lawyers",
        description: "Legal expertise, regulatory compliance",
        icon: Briefcase
      },
      {
        title: "Platform Developers",
        description: "Secure document management, tracking systems",
        icon: Code
      },
      {
        title: "Customer Success Team",
        description: "Client support, application guidance",
        icon: Users
      }
    ],
    testimonial: {
      company: "Immigration Client",
      position: "Software Engineer",
      content: "Nationwide Visas made my visa application process so much smoother. The document checklist kept me organized, and having expert review gave me confidence that everything was correct before submission."
    }
  },
  {
    id: "13",
    title: "SolAlgo: Blockchain Trading Bot",
    subtitle: "Automated cryptocurrency trading algorithms",
    description: "SolAlgo provides sophisticated algorithmic trading bots for cryptocurrency markets with advanced strategy customization, backtesting capabilities, and risk management tools. Our platform enables both novice and professional traders to automate their trading strategies with institutional-grade algorithms.",
    shortDescription: "Algorithmic Cryptocurrency Trading Bot Platform",
    slug: "solalgo-blockchain-trading-bot",
    category: "Blockchain",
    heroImage: solAlgoImage,
    colorVariant: 3,
    stats: [
      { icon: TrendingUp, value: "150%", label: "Average annual returns" },
      { icon: Zap, value: "99.9%", label: "Uptime reliability" },
      { icon: Users, value: "5K+", label: "Active traders" },
      { icon: BarChart, value: "$25M+", label: "Assets under management" }
    ],
    sections: [
      {
        type: "idea",
        title: "Democratizing Algorithmic Trading",
        content: "Algorithmic trading has traditionally been available only to institutional investors with significant resources. Individual traders often lack the technical expertise and infrastructure to implement sophisticated trading strategies. We aimed to democratize access to professional-grade trading algorithms while providing the tools and education needed for successful automated trading."
      },
      {
        type: "challenges",
        title: "Algorithmic Trading Barriers",
        content: [
          "High technical barriers for implementing trading algorithms",
          "Lack of reliable backtesting and strategy validation tools",
          "Need for 24/7 market monitoring and execution",
          "Risk management complexity in volatile crypto markets",
          "Integration challenges with multiple cryptocurrency exchanges"
        ]
      },
      {
        type: "solution",
        title: "Professional Trading Algorithm Platform",
        content: "SolAlgo provides a comprehensive suite of trading algorithms with advanced customization and risk management capabilities.",
        highlights: [
          "Pre-built trading strategies with customizable parameters",
          "Advanced backtesting engine with historical market data",
          "Multi-exchange integration for optimal execution",
          "Real-time risk management and position sizing",
          "Portfolio diversification and correlation analysis",
          "24/7 automated execution with mobile monitoring"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Node.js", "WebSocket"],
      languages: ["Python", "JavaScript", "Rust"],
      cloud: ["AWS", "Docker"],
      database: ["PostgreSQL", "InfluxDB", "Redis"]
    },
    features: [
      {
        title: "Strategy Marketplace",
        description: "Access to proven trading strategies with performance metrics and customization options"
      },
      {
        title: "Advanced Backtesting",
        description: "Comprehensive backtesting engine with multiple years of historical data and performance analytics"
      },
      {
        title: "Risk Management Suite",
        description: "Sophisticated risk controls including stop-losses, position sizing, and portfolio correlation analysis"
      }
    ],
    process: [
      {
        title: "Algorithm Development",
        description: "Developed and tested trading algorithms using quantitative analysis methods",
        icon: Brain
      },
      {
        title: "Exchange Integration",
        description: "Integrated with major cryptocurrency exchanges for seamless execution",
        icon: Link
      },
      {
        title: "Backtesting Engine",
        description: "Built comprehensive backtesting infrastructure with historical data",
        icon: BarChart
      },
      {
        title: "Risk Management",
        description: "Implemented advanced risk controls and portfolio management features",
        icon: Shield
      }
    ],
    team: [
      {
        title: "Quantitative Analysts",
        description: "Trading strategy development, market analysis",
        icon: BarChart
      },
      {
        title: "Blockchain Engineers",
        description: "Exchange APIs, smart contract integration",
        icon: Link
      },
      {
        title: "Risk Management Specialists",
        description: "Portfolio optimization, risk modeling",
        icon: Shield
      }
    ],
    testimonial: {
      company: "Crypto Trader",
      position: "Portfolio Manager",
      content: "SolAlgo has transformed my trading approach. The backtesting capabilities are excellent, and the automated execution allows me to capture opportunities 24/7 without constant monitoring."
    }
  },
  {
    id: "14",
    title: "Daraz: E-commerce Marketplace",
    subtitle: "Leading online marketplace platform",
    description: "Daraz is a comprehensive e-commerce marketplace connecting millions of buyers and sellers across multiple categories. Our platform provides secure transactions, logistics solutions, and marketing tools to enable successful online commerce at scale.",
    shortDescription: "Multi-vendor E-commerce Marketplace Platform",
    slug: "daraz-ecommerce-marketplace",
    category: "E-commerce",
    heroImage: darazImage,
    colorVariant: 4,
    stats: [
      { icon: Users, value: "10M+", label: "Active users" },
      { icon: Package, value: "1M+", label: "Products listed" },
      { icon: Truck, value: "100K+", label: "Daily deliveries" },
      { icon: TrendingUp, value: "$500M+", label: "Annual GMV" }
    ],
    sections: [
      {
        type: "idea",
        title: "Building Digital Commerce Infrastructure",
        content: "E-commerce adoption in emerging markets faces challenges including payment infrastructure, logistics networks, and seller onboarding. Small businesses struggle to reach customers online while consumers lack access to diverse products. We aimed to build a comprehensive marketplace that would solve these challenges while providing a seamless shopping experience for all stakeholders."
      },
      {
        type: "challenges",
        title: "Marketplace Development Challenges",
        content: [
          "Complex multi-vendor platform with diverse seller needs",
          "Payment processing across multiple currencies and methods",
          "Logistics and fulfillment network development",
          "Trust and safety mechanisms for secure transactions",
          "Scalable infrastructure for millions of concurrent users"
        ]
      },
      {
        type: "solution",
        title: "Comprehensive E-commerce Ecosystem",
        content: "Daraz provides end-to-end e-commerce solutions for buyers, sellers, and logistics partners.",
        highlights: [
          "Multi-vendor marketplace with advanced seller tools",
          "Integrated payment gateway supporting multiple methods",
          "Comprehensive logistics network with last-mile delivery",
          "AI-powered product recommendations and search",
          "Seller analytics dashboard and marketing tools",
          "Mobile-first design optimized for emerging markets"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Spring Boot", "React Native"],
      languages: ["Java", "JavaScript", "Python"],
      cloud: ["AWS", "Kubernetes"],
      database: ["MySQL", "Redis", "Elasticsearch"]
    },
    features: [
      {
        title: "Seller Management System",
        description: "Comprehensive tools for inventory management, order processing, and performance analytics"
      },
      {
        title: "Payment Integration",
        description: "Secure payment processing with multiple payment methods and fraud detection"
      },
      {
        title: "Logistics Network",
        description: "End-to-end logistics solution with warehousing, delivery, and tracking capabilities"
      }
    ],
    process: [
      {
        title: "Market Analysis",
        description: "Analyzed e-commerce landscape and identified key market opportunities",
        icon: Search
      },
      {
        title: "Platform Architecture",
        description: "Designed scalable microservices architecture for marketplace operations",
        icon: Box
      },
      {
        title: "Seller Onboarding",
        description: "Developed comprehensive seller onboarding and support systems",
        icon: Users
      },
      {
        title: "Logistics Integration",
        description: "Built logistics network and integrated with delivery partners",
        icon: Truck
      }
    ],
    team: [
      {
        title: "E-commerce Engineers",
        description: "Marketplace platform, payment systems",
        icon: ShoppingCart
      },
      {
        title: "Logistics Specialists",
        description: "Supply chain, delivery optimization",
        icon: Truck
      },
      {
        title: "Data Scientists",
        description: "Recommendation engines, analytics",
        icon: BarChart
      }
    ],
    testimonial: {
      company: "Small Business Owner",
      position: "Online Retailer",
      content: "Daraz has been instrumental in growing our business online. The seller tools are comprehensive, and the logistics support has allowed us to reach customers we never could have served before."
    }
  },
  {
    id: "15",
    title: "Carrefour: Retail Digital Transformation",
    subtitle: "Omnichannel retail platform",
    description: "Carrefour's digital transformation includes mobile commerce, inventory management, and customer loyalty programs. Our platform integrates online and offline shopping experiences while providing real-time inventory visibility and personalized customer engagement.",
    shortDescription: "Omnichannel Retail Platform and Digital Transformation",
    slug: "carrefour-retail-digital-transformation",
    category: "E-commerce",
    heroImage: carrefourImage,
    colorVariant: 5,
    stats: [
      { icon: Users, value: "5M+", label: "Digital customers" },
      { icon: LayoutGrid, value: "200+", label: "Store locations" },
      { icon: TrendingUp, value: "300%", label: "Online sales growth" },
      { icon: Clock, value: "30min", label: "Average pickup time" }
    ],
    sections: [
      {
        type: "idea",
        title: "Transforming Traditional Retail",
        content: "Traditional retail faces disruption from e-commerce, changing consumer expectations, and the need for seamless omnichannel experiences. Customers expect to shop online, pick up in-store, and have consistent experiences across all touchpoints. We aimed to transform Carrefour's operations to meet these evolving expectations while leveraging their physical store network as a competitive advantage."
      },
      {
        type: "challenges",
        title: "Retail Transformation Obstacles",
        content: [
          "Integration of online and offline inventory systems",
          "Consistent customer experience across multiple channels",
          "Real-time inventory visibility across all locations",
          "Staff training and change management for digital tools",
          "Competing with pure-play e-commerce platforms"
        ]
      },
      {
        type: "solution",
        title: "Comprehensive Omnichannel Platform",
        content: "Carrefour's digital transformation creates seamless shopping experiences across all customer touchpoints.",
        highlights: [
          "Unified inventory management across online and offline channels",
          "Click-and-collect service with optimized pickup processes",
          "Personalized mobile app with loyalty program integration",
          "Real-time product availability and store locator features",
          "Staff mobile tools for customer service and inventory management",
          "Advanced analytics for demand forecasting and optimization"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Spring Boot", "Angular"],
      languages: ["Java", "TypeScript", "Python"],
      cloud: ["Microsoft Azure", "Docker"],
      database: ["SQL Server", "MongoDB", "Redis"]
    },
    features: [
      {
        title: "Omnichannel Shopping",
        description: "Seamless shopping experience across mobile app, website, and physical stores"
      },
      {
        title: "Inventory Integration",
        description: "Real-time inventory visibility and management across all channels and locations"
      },
      {
        title: "Customer Loyalty Platform",
        description: "Integrated loyalty program with personalized offers and rewards tracking"
      }
    ],
    process: [
      {
        title: "Digital Strategy",
        description: "Developed comprehensive digital transformation roadmap",
        icon: Map
      },
      {
        title: "System Integration",
        description: "Integrated existing systems with new digital platforms",
        icon: Link
      },
      {
        title: "Staff Training",
        description: "Comprehensive training program for digital tools adoption",
        icon: Users
      },
      {
        title: "Gradual Rollout",
        description: "Phased implementation across store network with continuous optimization",
        icon: TrendingUp
      }
    ],
    team: [
      {
        title: "Digital Transformation Specialists",
        description: "Strategy, change management",
        icon: RefreshCw
      },
      {
        title: "Enterprise Developers",
        description: "System integration, platform development",
        icon: Code
      },
      {
        title: "Retail Operations Experts",
        description: "Process optimization, staff training",
        icon: Users
      }
    ],
    testimonial: {
      company: "Carrefour Customer",
      position: "Regular Shopper",
      content: "The new Carrefour app has made shopping so much more convenient. I can check what's in stock, order online, and pick up at the store without any hassle. The loyalty rewards are great too!"
    }
  },
  {
    id: "16",
    title: "Bolt: Ride-hailing Platform",
    subtitle: "Smart urban mobility solution",
    description: "Bolt provides on-demand transportation services with real-time matching, dynamic pricing, and multi-modal transport options. Our platform optimizes routes, ensures safety, and provides affordable mobility solutions for urban environments.",
    shortDescription: "On-demand Transportation and Mobility Platform",
    slug: "bolt-ride-hailing-platform",
    category: "Apps",
    heroImage: boltImage,
    colorVariant: 1,
    stats: [
      { icon: Users, value: "50M+", label: "Registered users" },
      { icon: MapPin, value: "200+", label: "Cities served" },
      { icon: Clock, value: "3min", label: "Average wait time" },
      { icon: TrendingUp, value: "1B+", label: "Rides completed" }
    ],
    sections: [
      {
        type: "idea",
        title: "Revolutionizing Urban Transportation",
        content: "Urban transportation faces challenges including traffic congestion, limited parking, and inefficient public transit. Traditional taxi services often lack transparency in pricing and availability. We aimed to create a comprehensive mobility platform that would provide reliable, affordable, and efficient transportation options while optimizing urban traffic flow through smart matching algorithms."
      },
      {
        type: "challenges",
        title: "Urban Mobility Challenges",
        content: [
          "Real-time matching of riders and drivers at scale",
          "Dynamic pricing algorithms balancing supply and demand",
          "Safety and security measures for all platform users",
          "Regulatory compliance across multiple jurisdictions",
          "Integration with existing urban transportation infrastructure"
        ]
      },
      {
        type: "solution",
        title: "Comprehensive Mobility Ecosystem",
        content: "Bolt creates an integrated platform connecting riders, drivers, and urban transportation infrastructure.",
        highlights: [
          "AI-powered matching algorithm optimizing for time and cost",
          "Dynamic pricing with transparent fare calculation",
          "Comprehensive safety features including real-time tracking",
          "Multi-modal transport options including bikes and scooters",
          "Driver partner support with earnings optimization tools",
          "Integration with public transportation for seamless journeys"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Node.js", "Kafka"],
      languages: ["JavaScript", "Python", "Go"],
      cloud: ["AWS", "Google Maps API"],
      database: ["PostgreSQL", "Redis", "MongoDB"]
    },
    features: [
      {
        title: "Smart Matching Algorithm",
        description: "AI-powered system that optimally matches riders with nearby drivers for minimal wait times"
      },
      {
        title: "Safety & Security Suite",
        description: "Comprehensive safety features including real-time tracking, emergency contacts, and driver verification"
      },
      {
        title: "Multi-modal Transportation",
        description: "Integrated platform supporting cars, bikes, scooters, and public transport connections"
      }
    ],
    process: [
      {
        title: "Market Entry Strategy",
        description: "Analyzed urban mobility patterns and regulatory requirements",
        icon: Map
      },
      {
        title: "Algorithm Development",
        description: "Built matching and pricing algorithms optimized for local conditions",
        icon: Brain
      },
      {
        title: "Driver Onboarding",
        description: "Developed comprehensive driver partner recruitment and training program",
        icon: Users
      },
      {
        title: "Safety Implementation",
        description: "Implemented robust safety and security measures for all users",
        icon: Shield
      }
    ],
    team: [
      {
        title: "Algorithm Engineers",
        description: "Matching algorithms, route optimization",
        icon: Brain
      },
      {
        title: "Mobile Developers",
        description: "Cross-platform app development",
        icon: Users
      },
      {
        title: "Operations Specialists",
        description: "Driver relations, city operations",
        icon: MapPin
      }
    ],
    testimonial: {
      company: "Daily Commuter",
      position: "Marketing Executive",
      content: "Bolt has become my go-to transportation app. The wait times are consistently short, the pricing is fair and transparent, and I always feel safe during my rides. The app is intuitive and reliable."
    }
  },
  {
    id: "17",
    title: "Luv: Dating & Relationships App",
    subtitle: "Meaningful connections platform",
    description: "Luv focuses on building meaningful relationships through personality-based matching, video profiles, and conversation starters. Our platform emphasizes authenticity and compatibility over superficial connections, helping users find genuine romantic partnerships.",
    shortDescription: "Personality-based Dating and Relationship Platform",
    slug: "luv-dating-relationships-app",
    category: "Apps",
    heroImage: luvImage,
    colorVariant: 2,
    stats: [
      { icon: Users, value: "2M+", label: "Active users" },
      { icon: Heart, value: "85%", label: "Match satisfaction rate" },
      { icon: MessageSquare, value: "500K+", label: "Conversations started daily" },
      { icon: UserCheck, value: "50K+", label: "Successful relationships" }
    ],
    sections: [
      {
        type: "idea",
        title: "Fostering Authentic Connections",
        content: "Modern dating apps often focus on superficial attributes, leading to shallow connections and dating fatigue. Users struggle to find meaningful relationships in a swipe-based culture that prioritizes appearance over compatibility. We envisioned a platform that would prioritize personality, values, and genuine compatibility to help people form lasting romantic connections."
      },
      {
        type: "challenges",
        title: "Modern Dating Obstacles",
        content: [
          "Superficial matching based primarily on physical appearance",
          "Difficulty in conveying personality through static profiles",
          "High user churn due to dating app fatigue",
          "Safety concerns, especially for women users",
          "Lack of meaningful conversation starters and icebreakers"
        ]
      },
      {
        type: "solution",
        title: "Personality-Driven Dating Platform",
        content: "Luv creates deeper connections through personality assessment, video profiles, and meaningful conversation tools.",
        highlights: [
          "Comprehensive personality assessment for compatibility matching",
          "Video profile integration for authentic self-expression",
          "AI-generated conversation starters based on shared interests",
          "Safety features including photo verification and reporting",
          "Relationship coaching and dating advice resources",
          "Events and activities for in-person meetups"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Django", "WebRTC"],
      languages: ["JavaScript", "Python", "Swift"],
      cloud: ["AWS", "Firebase"],
      database: ["PostgreSQL", "Redis", "MongoDB"]
    },
    features: [
      {
        title: "Personality Matching",
        description: "Advanced compatibility algorithm based on personality traits, values, and relationship goals"
      },
      {
        title: "Video Profiles",
        description: "Video-first profiles allowing users to showcase their authentic personality and interests"
      },
      {
        title: "Safety & Verification",
        description: "Comprehensive safety features including photo verification, background checks, and reporting systems"
      }
    ],
    process: [
      {
        title: "Psychology Research",
        description: "Collaborated with relationship experts to develop matching algorithms",
        icon: Heart
      },
      {
        title: "Safety Framework",
        description: "Implemented comprehensive safety and verification systems",
        icon: Shield
      },
      {
        title: "App Development",
        description: "Built intuitive mobile app with video and messaging capabilities",
        icon: Code
      },
      {
        title: "Community Building",
        description: "Developed features and events to foster genuine connections",
        icon: Users
      }
    ],
    team: [
      {
        title: "Relationship Psychologists",
        description: "Matching algorithms, user behavior analysis",
        icon: Heart
      },
      {
        title: "Mobile Developers",
        description: "Video integration, real-time messaging",
        icon: Users
      },
      {
        title: "Safety Specialists",
        description: "User verification, content moderation",
        icon: Shield
      }
    ],
    testimonial: {
      company: "Luv Success Story",
      position: "Happy Couple",
      content: "We met on Luv and immediately connected over our shared values and interests. The personality matching really works - we've been together for two years now and couldn't be happier!"
    }
  },
  {
    id: "18",
    title: "Airena: Event Management Platform",
    subtitle: "Comprehensive event planning solution",
    description: "Airena streamlines event planning and management with venue booking, vendor coordination, and attendee management tools. Our platform serves event planners, venues, and attendees with integrated solutions for seamless event experiences.",
    shortDescription: "End-to-end Event Planning and Management Platform",
    slug: "airena-event-management-platform",
    category: "SaaS",
    heroImage: airena,
    colorVariant: 3,
    stats: [
      { icon: Users, value: "100K+", label: "Events managed" },
      { icon: MapPin, value: "5K+", label: "Venues listed" },
      { icon: TrendingUp, value: "95%", label: "Client satisfaction" },
      { icon: Clock, value: "70%", label: "Time saved in planning" }
    ],
    sections: [
      {
        type: "idea",
        title: "Simplifying Event Management",
        content: "Event planning involves coordinating multiple vendors, managing complex logistics, and ensuring seamless execution. Traditional event management relies on spreadsheets, phone calls, and manual coordination, leading to inefficiencies and errors. We aimed to create a comprehensive platform that would digitize and streamline the entire event planning process from initial concept to post-event analysis."
      },
      {
        type: "challenges",
        title: "Event Planning Complexities",
        content: [
          "Coordination between multiple vendors and service providers",
          "Real-time communication and updates during events",
          "Budget tracking and expense management across categories",
          "Attendee registration and engagement management",
          "Venue availability and booking coordination"
        ]
      },
      {
        type: "solution",
        title: "Integrated Event Management Ecosystem",
        content: "Airena provides end-to-end event management tools for planners, vendors, venues, and attendees.",
        highlights: [
          "Comprehensive vendor marketplace with ratings and reviews",
          "Real-time collaboration tools for planning teams",
          "Automated budget tracking and expense management",
          "Integrated attendee registration and check-in systems",
          "Venue booking with availability calendars and virtual tours",
          "Post-event analytics and feedback collection"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Node.js", "Socket.io"],
      languages: ["TypeScript", "JavaScript", "Python"],
      cloud: ["AWS", "Stripe API"],
      database: ["PostgreSQL", "Redis", "MongoDB"]
    },
    features: [
      {
        title: "Vendor Marketplace",
        description: "Comprehensive directory of event vendors with booking, reviews, and contract management"
      },
      {
        title: "Event Timeline Management",
        description: "Interactive timeline with task assignments, deadlines, and real-time collaboration"
      },
      {
        title: "Attendee Experience Suite",
        description: "Registration, ticketing, check-in, and engagement tools for seamless attendee experience"
      }
    ],
    process: [
      {
        title: "Industry Analysis",
        description: "Studied event planning workflows and identified pain points",
        icon: Search
      },
      {
        title: "Vendor Network",
        description: "Built comprehensive network of event service providers",
        icon: Users
      },
      {
        title: "Platform Development",
        description: "Created integrated planning and management tools",
        icon: Code
      },
      {
        title: "Market Launch",
        description: "Launched platform with pilot events and continuous optimization",
        icon: Rocket
      }
    ],
    team: [
      {
        title: "Event Industry Experts",
        description: "Workflow optimization, vendor relations",
        icon: Users
      },
      {
        title: "Platform Developers",
        description: "Full-stack development, API integration",
        icon: Code
      },
      {
        title: "UX Designers",
        description: "Event planning user experience",
        icon: Palette
      }
    ],
    testimonial: {
      company: "Corporate Event Planner",
      position: "Senior Event Manager",
      content: "Airena has revolutionized how we plan and execute events. The vendor coordination features alone have saved us countless hours, and our clients love the seamless attendee experience."
    }
  },
  {
    id: "19",
    title: "Polara: Social Commerce Platform",
    subtitle: "Social shopping and discovery app",
    description: "Polara combines social media with e-commerce, allowing users to discover products through social interactions, influencer recommendations, and peer reviews. Our platform creates engaging shopping experiences through social discovery and community-driven commerce.",
    shortDescription: "Social Commerce and Product Discovery Platform",
    slug: "polara-social-commerce-platform",
    category: "E-commerce",
    heroImage: polaraImage,
    colorVariant: 4,
    stats: [
      { icon: Users, value: "1M+", label: "Social shoppers" },
      { icon: TrendingUp, value: "200%", label: "Engagement vs traditional e-commerce" },
      { icon: Star, value: "4.7/5", label: "User rating" },
      { icon: ShoppingCart, value: "$50M+", label: "Social commerce GMV" }
    ],
    sections: [
      {
        type: "idea",
        title: "Merging Social and Commerce",
        content: "Traditional e-commerce lacks the social validation and discovery that influences modern purchasing decisions. Consumers increasingly rely on peer recommendations, influencer content, and social proof when making buying decisions. We envisioned a platform that would seamlessly blend social interaction with commerce, making shopping a social and engaging experience."
      },
      {
        type: "challenges",
        title: "Social Commerce Integration",
        content: [
          "Balancing social engagement with commercial objectives",
          "Creating authentic influencer-brand partnerships",
          "Managing user-generated content quality and authenticity",
          "Seamless integration of social features with e-commerce functionality",
          "Building trust in peer recommendations and reviews"
        ]
      },
      {
        type: "solution",
        title: "Integrated Social Shopping Experience",
        content: "Polara creates a native social commerce experience where discovery, engagement, and purchasing happen seamlessly.",
        highlights: [
          "Social product discovery through peer recommendations",
          "Influencer marketplace with authentic brand partnerships",
          "User-generated content integration with shopping features",
          "Social proof through real customer photos and reviews",
          "Group buying and social shopping experiences",
          "Gamified shopping with rewards and social challenges"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Django", "GraphQL"],
      languages: ["JavaScript", "Python", "TypeScript"],
      cloud: ["AWS", "CDN"],
      database: ["PostgreSQL", "Redis", "Elasticsearch"]
    },
    features: [
      {
        title: "Social Product Discovery",
        description: "Discover products through friends, influencers, and community recommendations with social validation"
      },
      {
        title: "Influencer Marketplace",
        description: "Connect brands with authentic influencers for product collaborations and sponsored content"
      },
      {
        title: "Community Shopping",
        description: "Group buying, social wishlists, and collaborative shopping experiences with friends"
      }
    ],
    process: [
      {
        title: "Social Commerce Research",
        description: "Analyzed social shopping behaviors and platform requirements",
        icon: Search
      },
      {
        title: "Influencer Network",
        description: "Built network of authentic influencers and content creators",
        icon: Users
      },
      {
        title: "Platform Development",
        description: "Created integrated social and commerce features",
        icon: Code
      },
      {
        title: "Community Building",
        description: "Fostered engaged shopping communities and user-generated content",
        icon: MessageSquare
      }
    ],
    team: [
      {
        title: "Social Media Specialists",
        description: "Community management, influencer relations",
        icon: MessageSquare
      },
      {
        title: "E-commerce Developers",
        description: "Shopping features, payment integration",
        icon: ShoppingCart
      },
      {
        title: "Content Moderators",
        description: "Quality control, authenticity verification",
        icon: CheckCircle
      }
    ],
    testimonial: {
      company: "Fashion Influencer",
      position: "Content Creator",
      content: "Polara has made it so easy to share products I love with my followers. The integration is seamless, and I love seeing my community discover new brands through my recommendations."
    }
  },
  {
    id: "20",
    title: "Taikonz: NFT Marketplace",
    subtitle: "Digital collectibles trading platform",
    description: "Taikonz is a comprehensive NFT marketplace supporting creation, trading, and collection of digital assets. Our platform provides tools for artists, collectors, and traders with advanced features for NFT discovery, authentication, and community engagement.",
    shortDescription: "NFT Creation, Trading, and Collection Platform",
    slug: "taikonz-nft-marketplace",
    category: "Blockchain",
    heroImage: taikonzImag,
    colorVariant: 5,
    stats: [
      { icon: Users, value: "250K+", label: "Registered users" },
      { icon: TrendingUp, value: "$100M+", label: "Trading volume" },
      { icon: Package, value: "1M+", label: "NFTs minted" },
      { icon: Star, value: "10K+", label: "Verified artists" }
    ],
    sections: [
      {
        type: "idea",
        title: "Democratizing Digital Art Ownership",
        content: "The NFT space needed a user-friendly platform that would make digital art creation and trading accessible to mainstream users. Existing platforms were often complex, expensive, and lacked proper curation. We aimed to create a comprehensive marketplace that would serve both experienced crypto users and newcomers to the NFT space with intuitive tools and fair pricing."
      },
      {
        type: "challenges",
        title: "NFT Marketplace Complexities",
        content: [
          "High gas fees making small transactions uneconomical",
          "Complex user experience deterring mainstream adoption",
          "Lack of proper curation and quality control",
          "Environmental concerns about blockchain energy consumption",
          "Need for artist verification and authenticity guarantees"
        ]
      },
      {
        type: "solution",
        title: "Comprehensive NFT Ecosystem",
        content: "Taikonz provides a complete NFT platform with creation tools, marketplace, and community features.",
        highlights: [
          "Low-cost minting with layer-2 blockchain integration",
          "Intuitive creation tools for artists of all skill levels",
          "Curated collections with verified artist profiles",
          "Advanced search and discovery with AI recommendations",
          "Social features including artist following and collections",
          "Eco-friendly blockchain options with carbon offset programs"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Node.js", "Web3.js"],
      languages: ["JavaScript", "Solidity", "Python"],
      cloud: ["AWS", "IPFS"],
      database: ["PostgreSQL", "MongoDB", "Redis"]
    },
    features: [
      {
        title: "NFT Creation Suite",
        description: "Comprehensive tools for creating, minting, and listing NFTs with minimal technical knowledge required"
      },
      {
        title: "Advanced Marketplace",
        description: "Feature-rich trading platform with auctions, fixed-price sales, and collection management"
      },
      {
        title: "Artist Verification System",
        description: "Comprehensive verification process ensuring authenticity and protecting against counterfeit NFTs"
      }
    ],
    process: [
      {
        title: "Blockchain Integration",
        description: "Integrated with multiple blockchains for optimal user experience and cost efficiency",
        icon: Link
      },
      {
        title: "Artist Onboarding",
        description: "Developed comprehensive artist verification and onboarding process",
        icon: Users
      },
      {
        title: "Marketplace Development",
        description: "Built advanced trading features and discovery algorithms",
        icon: Code
      },
      {
        title: "Community Building",
        description: "Fostered active community of artists, collectors, and traders",
        icon: MessageSquare
      }
    ],
    team: [
      {
        title: "Blockchain Engineers",
        description: "Smart contracts, Web3 integration",
        icon: Link
      },
      {
        title: "Frontend Developers",
        description: "User interface, Web3 wallet integration",
        icon: Code
      },
      {
        title: "Art Curators",
        description: "Quality control, artist verification",
        icon: Palette
      }
    ],
    testimonial: {
      company: "Digital Artist",
      position: "NFT Creator",
      content: "Taikonz has been amazing for launching my NFT career. The creation tools are intuitive, the fees are reasonable, and the community is very supportive. I've been able to build a real following here."
    }
  },
  {
    id: "21",
    title: "Tito: Task Management Platform",
    subtitle: "Smart productivity and collaboration tool",
    description: "Tito enhances team productivity with intelligent task management, automated workflows, and real-time collaboration features. Our platform uses AI to optimize task allocation, predict project timelines, and improve team efficiency across organizations.",
    shortDescription: "AI-Powered Task Management and Team Collaboration Platform",
    slug: "tito-task-management-platform",
    category: "SaaS",
    heroImage: titoImage,
    colorVariant: 1,
    stats: [
      { icon: Users, value: "50K+", label: "Teams using Tito" },
      { icon: TrendingUp, value: "40%", label: "Productivity increase" },
      { icon: Clock, value: "60%", label: "Faster project completion" },
      { icon: CheckCircle, value: "1M+", label: "Tasks completed" }
    ],
    sections: [
      {
        type: "idea",
        title: "Revolutionizing Team Productivity",
        content: "Teams struggle with fragmented communication, unclear task priorities, and inefficient project management processes. Traditional tools often create more overhead than value, leading to decreased productivity and team frustration. We envisioned an intelligent platform that would streamline task management while providing actionable insights to improve team performance and project outcomes."
      },
      {
        type: "challenges",
        title: "Team Productivity Obstacles",
        content: [
          "Fragmented communication across multiple tools and platforms",
          "Difficulty in prioritizing tasks and managing workloads",
          "Lack of visibility into project progress and bottlenecks",
          "Manual task allocation leading to uneven workload distribution",
          "Poor integration between planning and execution phases"
        ]
      },
      {
        type: "solution",
        title: "Intelligent Task Management Ecosystem",
        content: "Tito combines AI-powered task optimization with intuitive collaboration tools to enhance team productivity.",
        highlights: [
          "AI-powered task prioritization and workload balancing",
          "Real-time collaboration with integrated communication tools",
          "Automated workflow creation and task dependencies",
          "Predictive analytics for project timeline estimation",
          "Integration with popular development and business tools",
          "Customizable dashboards with team performance insights"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Node.js", "Socket.io"],
      languages: ["TypeScript", "Python", "JavaScript"],
      cloud: ["AWS", "Docker"],
      database: ["PostgreSQL", "Redis", "InfluxDB"]
    },
    features: [
      {
        title: "Smart Task Allocation",
        description: "AI algorithms automatically assign tasks based on team member skills, availability, and workload"
      },
      {
        title: "Real-time Collaboration",
        description: "Integrated chat, video calls, and document sharing within the task management interface"
      },
      {
        title: "Predictive Analytics",
        description: "Machine learning models predict project completion times and identify potential bottlenecks"
      }
    ],
    process: [
      {
        title: "Workflow Analysis",
        description: "Studied team productivity patterns and identified optimization opportunities",
        icon: BarChart
      },
      {
        title: "AI Development",
        description: "Built machine learning models for task optimization and prediction",
        icon: Brain
      },
      {
        title: "Platform Development",
        description: "Created intuitive interface with advanced collaboration features",
        icon: Code
      },
      {
        title: "Integration Testing",
        description: "Tested integrations with popular business and development tools",
        icon: Link
      }
    ],
    team: [
      {
        title: "AI/ML Engineers",
        description: "Task optimization algorithms, predictive analytics",
        icon: Brain
      },
      {
        title: "Full-stack Developers",
        description: "Platform development, real-time features",
        icon: Code
      },
      {
        title: "UX Designers",
        description: "Productivity-focused user experience",
        icon: Palette
      }
    ],
    testimonial: {
      company: "Tech Startup",
      position: "Engineering Manager",
      content: "Tito has transformed how our team works. The AI task allocation is incredibly smart, and the predictive analytics help us plan better. Our productivity has increased significantly since we started using it."
    }
  },
  {
    id: "22",
    title: "FinTrack: Personal Finance Tracker",
    subtitle: "Comprehensive financial management app",
    description: "FinTrack provides comprehensive personal finance management with expense tracking, budget planning, and investment monitoring. Our app helps users achieve financial goals through intelligent insights, automated categorization, and personalized recommendations.",
    shortDescription: "Personal Finance Tracking and Budget Management App",
    slug: "fintrack-personal-finance-tracker",
    category: "Fintech",
    heroImage: fintrackImage,
    colorVariant: 2,
    stats: [
      { icon: Users, value: "200K+", label: "Active users" },
      { icon: TrendingUp, value: "30%", label: "Average savings increase" },
      { icon: BarChart, value: "$500M+", label: "Transactions tracked" },
      { icon: CheckCircle, value: "85%", label: "Budget goal achievement" }
    ],
    sections: [
      {
        type: "idea",
        title: "Simplifying Personal Finance Management",
        content: "Personal finance management is often overwhelming and time-consuming for most people. Traditional budgeting methods are manual, error-prone, and fail to provide actionable insights. We aimed to create an intelligent finance tracker that would automate expense categorization, provide personalized insights, and help users achieve their financial goals through data-driven recommendations."
      },
      {
        type: "challenges",
        title: "Personal Finance Tracking Issues",
        content: [
          "Manual expense tracking leading to incomplete financial pictures",
          "Difficulty in categorizing and analyzing spending patterns",
          "Lack of actionable insights from financial data",
          "Complex investment tracking across multiple accounts",
          "Poor integration with banking and financial institutions"
        ]
      },
      {
        type: "solution",
        title: "Intelligent Finance Management Platform",
        content: "FinTrack automates financial tracking and provides personalized insights to improve financial health.",
        highlights: [
          "Automatic transaction categorization using machine learning",
          "Real-time budget tracking with spending alerts and recommendations",
          "Investment portfolio monitoring with performance analytics",
          "Bill prediction and cash flow forecasting",
          "Goal-based savings with automated allocation strategies",
          "Secure bank integration with 256-bit encryption"
        ]
      }
    ],
    techStack: {
      frameworks: ["React Native", "Django", "TensorFlow"],
      languages: ["JavaScript", "Python", "Swift"],
      cloud: ["AWS", "Plaid API"],
      database: ["PostgreSQL", "Redis", "MongoDB"]
    },
    features: [
      {
        title: "Automated Expense Tracking",
        description: "Connect bank accounts for automatic transaction import and intelligent categorization"
      },
      {
        title: "Smart Budget Management",
        description: "Dynamic budgets that adapt to spending patterns with proactive alerts and recommendations"
      },
      {
        title: "Investment Portfolio Tracking",
        description: "Comprehensive investment monitoring with performance analytics and rebalancing suggestions"
      }
    ],
    process: [
      {
        title: "Financial Analysis",
        description: "Analyzed personal finance pain points and user behavior patterns",
        icon: BarChart
      },
      {
        title: "Security Implementation",
        description: "Implemented bank-level security for financial data protection",
        icon: Shield
      },
      {
        title: "ML Model Training",
        description: "Developed machine learning models for transaction categorization and insights",
        icon: Brain
      },
      {
        title: "Bank Integration",
        description: "Integrated with financial institutions for seamless data synchronization",
        icon: Link
      }
    ],
    team: [
      {
        title: "Fintech Developers",
        description: "Banking APIs, security implementation",
        icon: Shield
      },
      {
        title: "Data Scientists",
        description: "Financial modeling, ML algorithms",
        icon: BarChart
      },
      {
        title: "Mobile Developers",
        description: "Cross-platform app development",
        icon: Users
      }
    ],
    testimonial: {
      company: "FinTrack User",
      position: "Young Professional",
      content: "FinTrack has completely changed how I manage my money. The automatic categorization saves me hours, and the insights have helped me identify spending patterns I never noticed before. I'm saving more than ever!"
    }
  },
  {
    id: "23",
    title: "TaskFlow: Workflow Automation",
    subtitle: "Business process automation platform",
    description: "TaskFlow automates repetitive business processes with drag-and-drop workflow builder, API integrations, and intelligent automation rules. Our platform helps businesses increase efficiency by automating routine tasks and optimizing operational workflows.",
    shortDescription: "Business Process Automation and Workflow Management Platform",
    slug: "taskflow-workflow-automation",
    category: "SaaS",
    heroImage: taskflowImage,
    colorVariant: 3,
    stats: [
      { icon: Users, value: "10K+", label: "Businesses automated" },
      { icon: Zap, value: "80%", label: "Time saved on routine tasks" },
      { icon: TrendingUp, value: "150%", label: "Productivity increase" },
      { icon: CheckCircle, value: "1M+", label: "Workflows executed" }
    ],
    sections: [
      {
        type: "idea",
        title: "Eliminating Manual Business Processes",
        content: "Businesses waste countless hours on repetitive, manual tasks that could be automated. Traditional automation solutions are often complex, expensive, and require technical expertise to implement. We envisioned a user-friendly platform that would allow any business user to create sophisticated automation workflows without coding, dramatically improving operational efficiency."
      },
      {
        type: "challenges",
        title: "Business Automation Barriers",
        content: [
          "Complex automation tools requiring technical expertise",
          "Lack of integration between different business applications",
          "Difficulty in identifying and mapping automation opportunities",
          "High costs of traditional enterprise automation solutions",
          "Resistance to change and adoption of new automated processes"
        ]
      },
      {
        type: "solution",
        title: "No-Code Automation Platform",
        content: "TaskFlow democratizes business automation with intuitive tools that anyone can use to streamline operations.",
        highlights: [
          "Drag-and-drop workflow builder with pre-built templates",
          "Extensive API integrations with popular business applications",
          "Intelligent automation suggestions based on usage patterns",
          "Real-time monitoring and analytics for workflow performance",
          "Collaborative workflow design with team sharing capabilities",
          "Scalable execution engine handling millions of workflow runs"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Node.js", "Apache Airflow"],
      languages: ["TypeScript", "Python", "JavaScript"],
      cloud: ["AWS", "Kubernetes"],
      database: ["PostgreSQL", "Redis", "MongoDB"]
    },
    features: [
      {
        title: "Visual Workflow Builder",
        description: "Intuitive drag-and-drop interface for creating complex automation workflows without coding"
      },
      {
        title: "API Integration Hub",
        description: "Pre-built connectors for 500+ popular business applications and services"
      },
      {
        title: "Intelligent Automation",
        description: "AI-powered suggestions for workflow optimization and automation opportunities"
      }
    ],
    process: [
      {
        title: "Process Analysis",
        description: "Studied common business processes and automation patterns",
        icon: Search
      },
      {
        title: "Integration Development",
        description: "Built extensive library of API connectors and integrations",
        icon: Link
      },
      {
        title: "Platform Development",
        description: "Created visual workflow builder and execution engine",
        icon: Code
      },
      {
        title: "User Testing",
        description: "Extensive testing with business users to ensure usability",
        icon: Users
      }
    ],
    team: [
      {
        title: "Automation Engineers",
        description: "Workflow engine, API integrations",
        icon: Zap
      },
      {
        title: "Frontend Developers",
        description: "Visual workflow builder, user interface",
        icon: Code
      },
      {
        title: "Business Analysts",
        description: "Process optimization, user requirements",
        icon: BarChart
      }
    ],
    testimonial: {
      company: "Mid-size Company",
      position: "Operations Manager",
      content: "TaskFlow has revolutionized our operations. We've automated dozens of manual processes that used to take hours each week. The visual builder makes it easy for anyone on our team to create workflows."
    }
  },
  {
    id: "24",
    title: "LearnSphere: Online Learning Platform",
    subtitle: "Interactive education and skill development",
    description: "LearnSphere provides comprehensive online learning experiences with interactive courses, live sessions, and skill assessments. Our platform serves educators and learners with advanced features for course creation, progress tracking, and collaborative learning.",
    shortDescription: "Interactive Online Learning and Course Management Platform",
    slug: "learnsphere-online-learning-platform",
    category: "EdTech",
    heroImage: learnsphereImage,
    colorVariant: 4,
    stats: [
      { icon: Users, value: "500K+", label: "Active learners" },
      { icon: BookOpen, value: "10K+", label: "Courses available" },
      { icon: UserCheck, value: "5K+", label: "Expert instructors" },
      { icon: TrendingUp, value: "90%", label: "Course completion rate" }
    ],
    sections: [
      {
        type: "idea",
        title: "Transforming Online Education",
        content: "Online learning often lacks the engagement and interactivity of traditional classroom experiences. Students struggle with motivation, course completion, and practical skill application. We aimed to create a comprehensive learning platform that would combine the flexibility of online education with the engagement and effectiveness of in-person instruction through innovative technology and pedagogical approaches."
      },
      {
        type: "challenges",
        title: "Online Learning Obstacles",
        content: [
          "Low engagement and high dropout rates in online courses",
          "Lack of practical, hands-on learning experiences",
          "Difficulty in assessing and validating skill acquisition",
          "Limited interaction between students and instructors",
          "One-size-fits-all approach not meeting individual learning needs"
        ]
      },
      {
        type: "solution",
        title: "Comprehensive Learning Ecosystem",
        content: "LearnSphere creates engaging, interactive learning experiences with personalized paths and practical skill development.",
        highlights: [
          "Interactive course content with simulations and virtual labs",
          "Personalized learning paths adapted to individual progress",
          "Live virtual classrooms with real-time collaboration tools",
          "Comprehensive skill assessments and certification programs",
          "Peer learning communities and study groups",
          "AI-powered learning analytics and progress insights"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Django", "WebRTC"],
      languages: ["JavaScript", "Python", "TypeScript"],
      cloud: ["AWS", "CloudFront"],
      database: ["PostgreSQL", "Redis", "MongoDB"]
    },
    features: [
      {
        title: "Interactive Course Builder",
        description: "Advanced authoring tools for creating engaging multimedia courses with assessments and simulations"
      },
      {
        title: "Live Learning Sessions",
        description: "Virtual classrooms with video conferencing, screen sharing, and collaborative whiteboards"
      },
      {
        title: "Adaptive Learning Engine",
        description: "AI-powered system that personalizes learning paths based on individual progress and preferences"
      }
    ],
    process: [
      {
        title: "Educational Research",
        description: "Studied learning methodologies and online education best practices",
        icon: BookOpen
      },
      {
        title: "Content Framework",
        description: "Developed comprehensive framework for interactive course creation",
        icon: FileCode
      },
      {
        title: "Platform Development",
        description: "Built scalable learning management system with advanced features",
        icon: Code
      },
      {
        title: "Instructor Onboarding",
        description: "Recruited and trained expert instructors across various domains",
        icon: Users
      }
    ],
    team: [
      {
        title: "Educational Technologists",
        description: "Learning design, pedagogical frameworks",
        icon: BookOpen
      },
      {
        title: "Platform Engineers",
        description: "LMS development, video streaming",
        icon: Code
      },
      {
        title: "Content Specialists",
        description: "Course curation, quality assurance",
        icon: FileText
      }
    ],
    testimonial: {
      company: "Professional Learner",
      position: "Software Developer",
      content: "LearnSphere has been incredible for my professional development. The interactive courses are engaging, and the live sessions with experts provide real value. I've completed 5 certifications already!"
    }
  },
  {
    id: "25",
    title: "Bayut: Real Estate Platform",
    subtitle: "Comprehensive property marketplace",
    description: "Bayut is a leading real estate platform connecting buyers, sellers, and renters with comprehensive property listings, virtual tours, and market analytics. Our platform provides tools for real estate professionals and consumers to make informed property decisions.",
    shortDescription: "Real Estate Marketplace and Property Management Platform",
    slug: "bayut-real-estate-platform",
    category: "Web App",
    heroImage: bayutImage,
    colorVariant: 5,
    stats: [
      { icon: Home, value: "500K+", label: "Property listings" },
      { icon: Users, value: "2M+", label: "Monthly users" },
      { icon: MapPin, value: "100+", label: "Cities covered" },
      { icon: TrendingUp, value: "95%", label: "User satisfaction" }
    ],
    sections: [
      {
        type: "idea",
        title: "Revolutionizing Property Search",
        content: "Real estate transactions are complex, time-consuming, and often lack transparency. Buyers and renters struggle to find accurate, up-to-date property information while sellers and agents need better tools to reach qualified prospects. We aimed to create a comprehensive platform that would streamline the entire real estate process from search to transaction completion."
      },
      {
        type: "challenges",
        title: "Real Estate Market Inefficiencies",
        content: [
          "Fragmented property information across multiple sources",
          "Lack of standardized property data and pricing transparency",
          "Difficulty in scheduling and conducting property viewings",
          "Limited market insights for informed decision making",
          "Complex transaction processes with multiple stakeholders"
        ]
      },
      {
        type: "solution",
        title: "Comprehensive Real Estate Ecosystem",
        content: "Bayut provides end-to-end real estate solutions for all stakeholders in the property market.",
        highlights: [
          "Comprehensive property database with detailed listings and photos",
          "Advanced search filters with map-based property discovery",
          "Virtual property tours and 360-degree viewing experiences",
          "Market analytics and price trend insights",
          "Agent and developer profiles with verified credentials",
          "Integrated mortgage calculator and financing options"
        ]
      }
    ],
    techStack: {
      frameworks: ["React", "Node.js", "React Native"],
      languages: ["JavaScript", "TypeScript", "Python"],
      cloud: ["AWS", "CloudFront"],
      database: ["PostgreSQL", "Elasticsearch", "Redis"]
    },
    features: [
      {
        title: "Advanced Property Search",
        description: "Sophisticated search engine with filters, map integration, and AI-powered recommendations"
      },
      {
        title: "Virtual Property Tours",
        description: "Immersive 360-degree virtual tours and high-quality property photography"
      },
      {
        title: "Market Intelligence",
        description: "Comprehensive market analytics, price trends, and neighborhood insights"
      }
    ],
    process: [
      {
        title: "Market Research",
        description: "Analyzed real estate market dynamics and user behavior patterns",
        icon: Search
      },
      {
        title: "Data Aggregation",
        description: "Built comprehensive property database with multiple data sources",
        icon: LayoutGrid
      },
      {
        title: "Platform Development",
        description: "Created user-friendly property search and listing management system",
        icon: Code
      },
      {
        title: "Agent Network",
        description: "Established network of verified real estate professionals",
        icon: Users
      }
    ],
    team: [
      {
        title: "Real Estate Experts",
        description: "Market analysis, industry insights",
        icon: Home
      },
      {
        title: "Platform Developers",
        description: "Search engine, mapping integration",
        icon: Code
      },
      {
        title: "Data Engineers",
        description: "Property data aggregation, analytics",
        icon: BarChart
      }
    ],
    testimonial: {
      company: "Property Buyer",
      position: "First-time Homeowner",
      content: "Bayut made finding our dream home so much easier. The search filters are comprehensive, the virtual tours saved us time, and the market insights helped us make an informed decision."
    }
  }
];

export const getProjectBySlug = (slug: string): Project | null => {
  return projects.find(project => project.slug === slug) || null;
};
