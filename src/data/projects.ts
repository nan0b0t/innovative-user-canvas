
import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Environmental Impact Analyzer",
    description: "A web-based tool that helps users assess the environmental impact of consumer products by analyzing product descriptions, manufacturing details, and supply chain data, providing an AI-powered sustainability score for informed purchasing decisions.",
    tags: ["React", "Supabase", "Google Gemini API", "Vercel"],
    links: {
      website: "https://ai-ecofootprint.vercel.app",
    },
    caseStudy: {
      overview: "The AI Environmental Impact Analyzer provides users with a sustainability analysis tool to make informed eco-conscious purchasing decisions based on AI-driven insights.",
      challenges: [
        "Model selection issues when initially using Hugging Face models that lacked accuracy",
        "API integration errors including version mismatches and missing model endpoints",
        "Database and UI rendering issues causing incomplete data viewing",
        "Implementing all necessary pages and user profile systems"
      ],
      solutions: [
        "Switched to Google Gemini API for improved accuracy and free-tier analysis capabilities",
        "Debugged API requests and successfully integrated Gemini for real-time insights",
        "Fixed database schema, optimized data retrieval, and ensured proper UI updates",
        "Built all required pages and implemented a structured user profile system"
      ],
      results: "Successfully deployed a fully functional AI-powered sustainability analysis tool where users can assess the environmental footprint of consumer products in real-time with a scalable platform that allows for future improvements.",
      technologies: ["React", "Supabase", "Google Gemini API", "Vercel", "Lovable.dev"]
    }
  },
  {
    id: 2,
    title: "GC Mentorship Platform",
    description: "An interactive platform for a cryptocurrency mentoring service. Utilized React for front-end development and Node.js for back-end, allowing for seamless user interactions and real-time updates.",
    tags: ["React", "Node.js", "API Integration"],
    links: {
      website: "https://10x-mentorship-hub.vercel.app/",
      github: "#",
      demo: "#"
    },
    caseStudy: {
      overview: "GC Mentorship required a platform that would connect cryptocurrency mentors with mentees, featuring real-time communication and resource sharing functionality.",
      challenges: [
        "Building a secure user authentication system for mentors and mentees",
        "Implementing real-time messaging and notifications",
        "Creating an intuitive dashboard for tracking progress and resources"
      ],
      solutions: [
        "Developed JWT-based authentication with role-based access control",
        "Integrated Socket.io for real-time chat and notifications",
        "Created customizable dashboards with drag-and-drop widgets"
      ],
      results: "The platform successfully facilitated over 500 mentor-mentee relationships within the first three months, with 92% of users rating their experience as 'excellent'.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"]
    }
  },
  {
    id: 3,
    title: "Seventh Veile Escort Service",
    description: "A full-stack web application with a visually appealing design created with React for the front-end, while implementing Supabase for robust back-end infrastructure to manage user data and ensure security.",
    tags: ["React", "Supabase", "Full-Stack"],
    links: {
      website: "https://seventhveile.com",
    },
    caseStudy: {
      overview: "Seventh Veile needed a secure, elegant platform to showcase their services while maintaining user privacy and facilitating bookings.",
      challenges: [
        "Ensuring user data security and privacy compliance",
        "Creating an elegant, responsive design that maintains brand sophistication",
        "Implementing a secure booking system with verification steps"
      ],
      solutions: [
        "Utilized Supabase for row-level security and data encryption",
        "Designed a custom UI with subtle animations and sophisticated color scheme",
        "Developed a multi-step verification process with temporary credentials"
      ],
      results: "The platform has maintained 99.9% uptime while successfully processing hundreds of bookings with zero security incidents. Client satisfaction increased by 35% due to the streamlined booking process.",
      technologies: ["React", "Supabase", "PostgreSQL", "Stripe", "Tailwind CSS"]
    }
  }
];
