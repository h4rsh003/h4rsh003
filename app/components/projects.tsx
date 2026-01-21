'use client';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { RESUME_DATA } from '@/app/data/resume-data';
import React, { useRef } from 'react';

export const Projects = () => {
  return (
    <section id="work" className="py-10 md:py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-12 md:mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white"
          >
            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Projects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {RESUME_DATA.projects.map((project, i) => (
            <TiltCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TiltCard = ({ project, index }: { project: typeof RESUME_DATA.projects[0], index: number }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full"
      style={{ perspective: 1000 }}
    >
      <motion.a
        ref={ref}
        href={project.link}
        target="_blank"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        // UPDATED: Used canonical classes (h-100, h-125, rounded-4xl) to clear linter warnings
        className="group relative block h-100 sm:h-125 w-full rounded-4xl bg-[#0A0A0A] border border-white/10"
      >
        <div className="relative h-full w-full rounded-4xl overflow-hidden">
          
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-4xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${xSpring.get() * 100 + 50}% ${ySpring.get() * 100 + 50}%,
                  rgba(255, 255, 255, 0.1),
                  transparent 80%
                )
              `
            }}
          />

          <div className={`absolute -right-20 -top-20 h-64 w-64 md:h-96 md:w-96 rounded-full bg-linear-to-br ${project.color} opacity-20 blur-[80px] md:blur-[100px] transition-all duration-500 group-hover:opacity-40`} />

          {/* 3D Content Container - UPDATED transform syntax */}
          <div className="relative h-full flex flex-col justify-between p-6 md:p-12 z-20 transform-[translateZ(50px)]">
            
            <div className="flex justify-between items-start">
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg group-hover:border-white/20 transition-all">
                <FaCode className="text-xl md:text-3xl text-white" />
              </div>
              <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                {project.category}
              </div>
            </div>

            {/* Content Slide Up Effect */}
            <div className="transform transition-transform duration-500 md:group-hover:-translate-y-2">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-[0.9] uppercase tracking-tighter">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 line-clamp-3">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {project.tech.split('•').map((tech) => (
                  <span key={tech} className="text-[10px] font-bold text-gray-300 bg-white/5 px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <div className="flex items-center gap-3 text-white font-bold text-sm tracking-wider uppercase opacity-80 md:opacity-0 transform md:translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                View Project <FaExternalLinkAlt className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};