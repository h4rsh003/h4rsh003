import {
    FaReact, FaNodeJs, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql,
    SiTailwindcss, SiRedux, SiCplusplus, SiExpress,
    SiVercel, SiPostman, SiShadcnui, SiJavascript, SiMysql,
    SiHtml5, SiCss3
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc"; // FIX: Import from VSC set

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
    intro: "Full Stack Engineer focused on building scalable, secure web applications. Specialized in Next.js, TypeScript, and high-performance database architecture.",

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
                "Contributed as a Frontend Developer to the VUT (Video Uploading Tool), a secure, high-quality video recording platform.",
                "Developed the scalable, responsive frontend using Next.js and Tailwind CSS.",
                "Integrated critical REST APIs with the backend team, streamlining data flow and enhancing upload reliability."
            ],
            active: true
        }
    ] as ExperienceItem[],

    projects: [
        {
            title: "Travel Buddy",
            category: "Full Stack Social Platform",
            tech: "Next.js • PostgreSQL • TypeORM • Zustand",
            desc: "Architected a decoupled full-stack platform. Modeled complex relational data (One-to-Many). Engineered advanced auth with email OTPs.",
            link: "https://travel-buddy-dusky-mu.vercel.app",
            color: "from-blue-600 to-cyan-400"
        },
        {
            title: "Codial",
            category: "Developer Portfolio Platform",
            tech: "MERN Stack • JWT • Tailwind",
            desc: "Engineered a platform for developers to showcase portfolios with real-time search. Architected a modular frontend with reusable compound components.",
            link: "https://codial-woad.vercel.app",
            color: "from-emerald-500 to-teal-400"
        },
        {
            title: "SuperMarket Shopping Cart",
            category: "E-Commerce Interface",
            tech: "React.js • Redux Toolkit • Tailwind",
            desc: "Built a persistent E-commerce cart with Redux Toolkit and LocalStorage. Features real-time price calculation, responsive grid layouts, and interactive toast notifications.",
            link: "https://super-market-shopping-cart.vercel.app/",
            color: "from-orange-500 to-amber-500"
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
        { name: "VS Code", icon: <VscVscode />, color: "#007ACC" }, // FIX: Used VscVscode
    ] as StackItem[]
};