'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa';
import { RESUME_DATA } from '@/app/data/resume-data';

export const Navbar = () => {
  const mouseX = useMotionValue(Infinity);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle Active Section on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'contact'];
      // Trigger detection when the section is near the middle/top of viewport
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Z-Index increased to 100 to stay above 3D Tilt Cards
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-100 w-fit max-w-[95vw]">
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-black/80 px-3 py-3 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-x-auto no-scrollbar"
      >
        <DockIcon mouseX={mouseX} href="#hero" icon={<FaHome />} label="Home" isActive={activeSection === 'hero'} />
        <DockIcon mouseX={mouseX} href="#about" icon={<FaUser />} label="About" isActive={activeSection === 'about'} />
        <DockIcon mouseX={mouseX} href="#work" icon={<FaCode />} label="Work" isActive={activeSection === 'work'} />
        <DockIcon mouseX={mouseX} href="#contact" icon={<FaEnvelope />} label="Contact" isActive={activeSection === 'contact'} />
        
        {/* Divider */}
        <div className="h-8 w-px bg-white/10 mx-1 self-center shrink-0" />
        
        <DockIcon mouseX={mouseX} href={RESUME_DATA.contact.github} icon={<FaGithub />} label="GitHub" newTab />
        <DockIcon mouseX={mouseX} href={RESUME_DATA.contact.linkedin} icon={<FaLinkedin />} label="LinkedIn" newTab />
      </motion.nav>
    </div>
  );
};

// --- Sub-Component for the Magnifying Icon ---
const DockIcon = ({ 
  mouseX, 
  href, 
  icon, 
  label, 
  isActive, 
  newTab = false 
}: { 
  mouseX: MotionValue; 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
  isActive?: boolean; 
  newTab?: boolean; 
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  // Calculate distance from mouse to the center of this icon
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Map distance to width: Icon grows when mouse is near
  // Base width: 40px (mobile) -> 50px (desktop), Max width: 65px (mobile) -> 85px (desktop)
  // We keep it slightly smaller on base to ensure it fits on small screens
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 75, 40]);
  
  // Add spring physics for smoothness
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={newTab ? "_blank" : undefined}
      style={{ width }}
      className={`aspect-square rounded-full flex items-center justify-center relative group transition-colors duration-300 shrink-0 ${
        isActive 
          ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]' 
          : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
      }`}
      onClick={(e) => {
        if (!newTab) {
            e.preventDefault();
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      <span className="text-lg sm:text-2xl relative z-10">{icon}</span>
      
      {/* Hover Tooltip (Hidden on mobile touch) */}
      <span className="hidden sm:block absolute -top-12 opacity-0 group-hover:opacity-100 bg-white text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter transition-all shadow-lg pointer-events-none whitespace-nowrap">
        {label}
      </span>
    </motion.a>
  );
};