import {
    FaReact, FaNodeJs, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql,
    SiTailwindcss, SiRedux, SiCplusplus, SiExpress,
    SiVercel, SiPostman, SiShadcnui, SiJavascript, SiMysql,
    SiHtml5, SiCss3
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

// --- Interfaces ---

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    desc: string[];
    active?: boolean;
}

export interface ProjectItem {
    title: string;
    category: string;
    tech: string;
    desc: string;
    link: string;
    github?: string; // ADDED: For future "View Source" buttons
    color: string;
}

export interface StackItem {
    name: string;
    icon: React.ReactNode;
    color: string;
}

export interface ContactInfo {
    email: string;
    github: string;
    linkedin: string;
    whatsapp: string;
    phone: string;
}

// --- Data ---

export const RESUME_DATA = {
    name: "Harsh Shrivastava",
    initials: "HS",
    tagline: "Building Scalable Web Experiences",
    role: "Full Stack Engineer",

    // UPDATED: More confident, action-oriented intro
    intro: "Full Stack Engineer specializing in the MERN stack and Next.js. I transform complex requirements into elegant, production-ready web applications with seamless frontends and robust, scalable backends.",

    contact: {
        email: "harshshrivastava003@gmail.com",
        github: "https://github.com/h4rsh003",
        linkedin: "https://www.linkedin.com/in/harsh-shrivastava003",
        whatsapp: "https://wa.me/919826808544",
        phone: "+91-9826808544"
    } as ContactInfo,

    experience: [
        {
            company: "Techcarrel LLP",
            role: "MERN Stack Developer Intern",
            period: "Sep 2025 - Nov 2025",
            desc: [
                "Contributed to VUT (Video Uploading Tool), engineering a secure, high-quality video recording platform.",
                "Developed a scalable frontend architecture using Next.js and Tailwind CSS, optimizing component rendering for seamless cross-device performance.",
                "Integrated critical REST APIs to streamline data flow, significantly enhancing upload reliability and overall system performance."
            ],
            active: true
        }
    ] as ExperienceItem[],

    projects: [
        {
            title: "Travel Buddy",
            category: "Full Stack Social Travel Platform",
            tech: "Next.js • PostgreSQL • TypeORM • Socket.io",
            // UPDATED: Brought in TypeORM, JWTs, and Socket.io impact from resume
            desc: "Architected a decoupled full-stack platform handling complex relational data with TypeORM. Engineered JWT-secured Socket.io real-time chat, email-based OTP auth via NextAuth, and dynamic UI state with Zustand.",
            link: "https://travel-buddy-dusky-mu.vercel.app",
            github: "https://github.com/h4rsh003", // Update with actual specific repo link
            color: "from-blue-600 to-cyan-400"
        },
        {
            title: "Codial",
            category: "Developer Portfolio Platform",
            tech: "MERN Stack • JWT • Tailwind",
            // UPDATED: Brought in MongoDB aggregations and modular architecture
            desc: "Engineered a scalable platform featuring real-time search. Developed secure REST APIs with Node/Express, integrated JWT auth, and optimized MongoDB aggregation pipelines for rapid data retrieval.",
            link: "https://codial-woad.vercel.app",
            github: "https://github.com/h4rsh003", // Update with actual specific repo link
            color: "from-emerald-500 to-teal-400"
        },
        {
            title: "SuperMarket Cart",
            category: "E-Commerce Interface",
            tech: "React.js • Redux Toolkit • Tailwind",
            // UPDATED: Added business context (reducing abandonment rates)
            desc: "Designed a highly interactive e-commerce interface utilizing Redux Toolkit. Implemented persistent local storage state to synchronize cart data across sessions and reduce cart abandonment rates.",
            link: "https://super-market-shopping-cart.vercel.app/",
            github: "https://github.com/h4rsh003", // Update with actual specific repo link
            color: "from-orange-500 to-amber-500"
        },
        {
            title: "Weather Dashboard",
            category: "Real-Time Weather App",
            tech: "JavaScript • OpenWeatherMap • CSS3",
            desc: "Built a dynamic, glassmorphism-styled dashboard. Integrated OpenWeather API for real-time geolocation data, 5-day forecasting, and adaptive conditional UI theming based on live weather.",
            link: "https://weather-app-pi-lemon-83.vercel.app/",
            github: "https://github.com/h4rsh003", // Update with actual specific repo link
            color: "from-blue-500 to-cyan-500"
        }
    ] as ProjectItem[],

    education: {
        degree: "B.Tech in Computer Science & Engineering",
        school: "ShriRam College of Engineering & Management",
        period: "Sep 2021 - June 2025",
        grade: "CGPA: 7.7"
    },

    stack: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Shadcn", icon: <SiShadcnui />, color: "#FFFFFF" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
        { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
    ] as StackItem[]
};