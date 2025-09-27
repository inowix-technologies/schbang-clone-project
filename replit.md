# Inowix - Creative & Technology Transformation Partner

## Overview

This is a comprehensive agency website for Inowix, a creative and technology transformation company. The application serves as both a marketing platform and client engagement portal, featuring portfolio showcases, service offerings, blog management, and lead generation capabilities. Built with React and TypeScript, the platform emphasizes modern design aesthetics and smooth user experiences to represent the agency's creative expertise.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design system tokens and dark theme support
- **Routing**: React Router for client-side navigation with catch-all 404 handling
- **State Management**: TanStack Query for server state and React hooks for local state
- **Animations**: GSAP for advanced animations and CSS transitions for micro-interactions

### Component Structure
- **Layout Components**: Header with sticky navigation, Footer with company links
- **Section Components**: Modular homepage sections (Hero, About, Services, Testimonials, etc.)
- **UI Components**: Reusable Shadcn components (Button, Card, Dialog, Form elements)
- **Admin Components**: Protected admin panel for content and lead management
- **Portfolio Components**: Project showcase with filtering and detailed views

### Data Management
- **Server State**: TanStack Query for API calls, caching, and synchronization
- **Authentication**: Custom auth context with Supabase integration
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **File Organization**: Feature-based structure with shared utilities and hooks

### Design System
- **Color Scheme**: Dark portfolio theme with accent colors for different project categories
- **Typography**: Inter font family with responsive text scaling
- **Spacing**: Consistent spacing scale using Tailwind's design tokens
- **Components**: Centralized component library with variant-based styling
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts

### Performance Optimizations
- **Code Splitting**: Route-based code splitting for optimized loading
- **Image Optimization**: Responsive images with proper loading strategies
- **Bundle Optimization**: Vite's tree-shaking and module federation
- **Caching Strategy**: Query invalidation and background refetching with TanStack Query

## External Dependencies

### Backend Services
- **Supabase**: Primary backend-as-a-service providing authentication, database, and real-time features
- **Database**: PostgreSQL via Supabase for storing blogs, leads, user data, and analytics
- **Authentication**: Supabase Auth for user management and role-based access control

### Development Tools
- **ESLint**: Code linting with TypeScript and React-specific rules
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **Vercel**: Deployment platform with SPA routing configuration

### UI and Animation Libraries
- **Radix UI**: Headless UI primitives for accessible component foundation
- **Lucide React**: Icon library for consistent iconography
- **GSAP**: Professional animation library for complex interactions
- **Embla Carousel**: Lightweight carousel component for project showcases

### Form and Validation
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Schema validation for type-safe form handling and API validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **clsx**: Conditional className utility for dynamic styling
- **class-variance-authority**: Type-safe variant-based component styling
- **next-themes**: Theme management for dark/light mode support

### Monitoring and Analytics
- **Supabase Analytics**: Built-in analytics for tracking user engagement
- **Custom Analytics**: Admin dashboard for leads and content performance tracking