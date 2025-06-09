import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Izenergy",
    description: "A comprehensive e-commerce platform focused on renewable energy products and solutions, primarily targeting the Nigerian market, providing solar panels, batteries, inverters, power stations, lighting, and accessories to individuals and businesses seeking sustainable energy alternatives.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Paystack"],
    links: {
      website: "https://myizenergy.com",
    },
    caseStudy: {
      overview: "Izenergy is a comprehensive e-commerce platform focused on renewable energy products and solutions, primarily targeting the Nigerian market, providing both B2C and B2B solutions for sustainable energy alternatives.",
      challenges: [
        "Complex product data structure requiring clear presentation for technical and non-technical users",
        "Location-specific pricing and availability varying by region within Nigeria",
        "Customers needing education about solar products before making purchase decisions",
        "Payment processing reliability issues due to infrastructure limitations",
        "Performance optimization for loading large product catalogs with images"
      ],
      solutions: [
        "Implemented a flexible product schema with standardized specifications and visual data representation",
        "Built a location-aware pricing system with region-specific shipping calculations",
        "Developed an educational 'Academy' section with tutorials, guides, and a custom Solar Calculator",
        "Added retry logic for failed payments and robust error handling with user-friendly messages",
        "Implemented lazy loading, pagination, and caching layer for optimized performance"
      ],
      results: "The platform has served 15,000+ customers since launch, with significant reduction in customer acquisition costs compared to physical stores, increased average order value through product recommendations, and improved customer education leading to higher conversion rates.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Radix UI", "React Context API", "React Query", "Supabase", "Paystack", "Recharts", "React Hook Form", "Zod"]
    }
  },
  {
    id: 2,
    title: "Baaba.ng",
    description: "A modern real estate platform revolutionizing property rental in Nigeria, connecting property owners with potential tenants through an intuitive booking system, comprehensive property listings, virtual tours, and streamlined rental processes.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Real Estate", "Booking System"],
    links: {
      website: "https://melodic-kashata-b436c1.netlify.app/",
    },
    caseStudy: {
      overview: "Baaba.ng is a comprehensive real estate startup focused on simplifying property rental processes in Nigeria, offering a modern platform that bridges the gap between property owners and tenants through technology.",
      challenges: [
        "Fragmented real estate market with limited digital presence",
        "Lack of trust between property owners and potential tenants",
        "Complex property verification and documentation processes",
        "Inefficient traditional property viewing and booking methods",
        "Payment security and transaction transparency issues"
      ],
      solutions: [
        "Built a comprehensive property listing platform with detailed property information and high-quality images",
        "Implemented user verification systems for both property owners and tenants",
        "Created virtual tour capabilities to reduce unnecessary physical visits",
        "Developed a secure booking system with escrow-like payment protection",
        "Added review and rating systems to build community trust"
      ],
      results: "Successfully launched a user-friendly platform that streamlines the property rental process, reduces time-to-rent for property owners, and provides tenants with a transparent, secure way to find and book properties.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Netlify", "Modern UI/UX", "Responsive Design"]
    }
  },
  {
    id: 3,
    title: "RentEase",
    description: "A full-stack web application designed to address landlord-tenant disputes in Nigeria by leveraging AI trained in Nigerian Tenancy Law, a legal consultation booking system, and automated rent/property management features.",
    tags: ["React", "Node.js", "AI Integration", "Tailwind CSS", "PostgreSQL"],
    links: {
      website: "https://rentease.lovable.app/",
    },
    caseStudy: {
      overview: "RentEase is a scalable, secure, and AI-driven platform that simplifies tenancy management in Nigeria by integrating AI-powered legal insights, dispute resolution, and financial tools.",
      challenges: [
        "Lack of structured legal datasets for Nigerian tenancy laws",
        "Handling complex legal queries with appropriate accuracy",
        "Building a scalable architecture to handle growing user base",
        "Ensuring payment reliability in the Nigerian financial ecosystem",
        "Establishing user trust in AI-generated legal advice"
      ],
      solutions: [
        "Partnered with Nigerian legal experts and used AI fine-tuning with tenancy laws",
        "Implemented GPT-powered NLP with prompt engineering for better accuracy",
        "Used microservices architecture with NestJS for modular functionality",
        "Integrated Flutterwave/Paystack with failover handling and real-time notifications",
        "Combined AI-generated suggestions with real lawyer consultation options"
      ],
      results: "Successfully deployed a comprehensive platform that provides a one-stop solution for tenants and landlords, featuring robust backend architecture, secure authentication, and a user-friendly UI that demonstrates how legal tech can drive real-world impact in emerging markets.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "NestJS", "PostgreSQL", "OpenAI API", "JWT Authentication", "Flutterwave/Paystack", "Vercel", "GitHub Actions"]
    }
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
    title: "Seventh Veile Escort Service",
    description: "A full-stack web application with a visually appealing design created with React for the front-end, while implementing Supabase for robust back-end infrastructure to manage user data and ensure security.",
    tags: ["React", "Supabase", "Full-Stack"],
    links: {
      website: "https://www.seventhveilescortservice.pro/",
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
