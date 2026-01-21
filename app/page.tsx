'use client';

import React from 'react';
import dynamic from 'next/dynamic'; 
import { motion, useScroll, useSpring } from 'framer-motion';

// Import Components
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Experience } from './components/experience';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { Contact } from './components/contact';
import { RESUME_DATA } from './data/resume-data';
// IMPORT THE FIXED BACKGROUND
import { FixedBackground } from './components/fixed-background';

// Dynamically import Custom Cursor (No SSR to fix hydration)
const CustomCursor = dynamic(
  () => import('./components/ui/custom-cursor').then((mod) => mod.CustomCursor),
  { ssr: false }
);

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    // REMOVED "bg-[#030303]" from here so the FixedBackground shows through
    <main className="relative min-h-screen font-sans text-white selection:bg-blue-500/30 selection:text-blue-200 cursor-none pb-32 overflow-x-hidden">
      
      {/* 0. Global Fixed Background (Behind everything) */}
      <FixedBackground />

      {/* 1. Custom Cursor */}
      <CustomCursor />
      
      {/* 2. Scroll Progress Bar with Glow */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-linear-to-r from-blue-600 to-purple-600 origin-left shadow-[0_0_20px_rgba(37,99,235,0.5)]" 
        style={{ scaleX }} 
      />
      
      {/* 3. Navigation */}
      <Navbar />
      
      {/* 4. Main Content with Fade-In Entrance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10" // Ensure content sits above background
      >
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />

        <footer className="py-8 text-center border-t border-white/5 relative z-10 bg-transparent">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
            © 2026 {RESUME_DATA.name} • Full Stack Engineer
          </p>
        </footer>
      </motion.div>
    </main>
  );
}