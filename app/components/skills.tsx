'use client';
import { motion, useMotionTemplate, useMotionValue, Variants } from 'framer-motion';
import { RESUME_DATA } from '@/app/data/resume-data';
import React, { MouseEvent } from 'react';

// Animation variants for the container (staggering children)
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Animation variants for individual items
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    },
};

export const Skills = () => (
    <section id="skills" className="py-10 md:py-20 border-y border-white/5 relative overflow-hidden scroll-mt-32">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-150 h-72 md:h-150 bg-blue-900/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl text-center relative z-10">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 md:mb-20"
            >
                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
                    Engineering <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Ecosystem</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                    A high-performance toolkit designed for scalability, security, and speed.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
            >
                {RESUME_DATA.stack.map((s, i) => (
                    <SpotlightCard key={i} s={s} index={i} />
                ))}
            </motion.div>
        </div>
    </section>
);

// --- Sub-component for individual Spotlight Cards ---
function SpotlightCard({ s, index }: { s: typeof RESUME_DATA.stack[0], index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            variants={itemVariants}
            className="group relative h-32 md:h-36 rounded-2xl md:rounded-3xl bg-[#0A0A0A] border border-white/10 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* 1. Spotlight Gradient Overlay (Follows Mouse) */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            250px circle at ${mouseX}px ${mouseY}px,
                            ${s.color}15,
                            transparent 80%
                        )
                    `
                }}
            />
            
            {/* 2. Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center p-4 md:p-6 z-10">
                {/* Icon with Floating Animation */}
                <motion.div
                    className="mb-3 md:mb-4 text-4xl md:text-5xl filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ color: s.color }}
                    animate={{
                        y: [0, -5, 0], // Subtle float
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                    }}
                >
                    {s.icon}
                </motion.div>

                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300">
                    {s.name}
                </span>
            </div>

            {/* 3. Border Glow on Hover */}
            <div 
                className="absolute inset-0 rounded-2xl md:rounded-3xl border border-transparent group-hover:border-white/20 transition-colors duration-300 pointer-events-none" 
            />
        </motion.div>
    );
}