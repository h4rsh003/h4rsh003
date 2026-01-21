'use client';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { FaDownload, FaCode } from 'react-icons/fa';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { RESUME_DATA } from '@/app/data/resume-data';
import React from 'react';

// --- MAIN COMPONENT ---

export const Hero = () => {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const mouseXSpring = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const mouseYSpring = useSpring(mouseY, { stiffness: 100, damping: 20 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section
            id="hero"
            // Ensure background is transparent so the FixedBackground shows through
            className="relative flex min-h-screen flex-col justify-center px-6 overflow-hidden group bg-transparent"
            onMouseMove={handleMouseMove}
        >
            
            {/* Spotlight Effect - Keep this, it interacts with mouse */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-size-[4rem_4rem]"
                style={{
                    maskImage: useMotionTemplate`radial-gradient(350px circle at ${mouseXSpring}px ${mouseYSpring}px, black, transparent)`,
                    WebkitMaskImage: useMotionTemplate`radial-gradient(350px circle at ${mouseXSpring}px ${mouseYSpring}px, black, transparent)`,
                }}
            />

            {/* REMOVED: ParticleBackground component */}

            <div className="container mx-auto max-w-6xl z-10 pb-20 relative">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex items-center gap-3 w-fit mt-20 md:mt-0"
                >
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-green-400 uppercase border border-green-500/20 bg-green-500/5 px-3 py-1 mt-2 rounded-full">
                       Open to work
                    </span>
                </motion.div>

                <h1 className="font-black leading-[0.9] tracking-tighter text-white mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                    >
                        <span>HARSH</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="relative inline-block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                    >
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500">
                            SHRIVASTAVA
                        </span>
                        <span className="absolute top-0 left-0 -z-10 text-blue-500/20 blur-xl transform translate-y-4">
                            SHRIVASTAVA
                        </span>
                    </motion.div>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl text-lg md:text-2xl text-gray-400 font-medium leading-relaxed mb-12"
                >
                    {RESUME_DATA.intro}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row flex-wrap gap-6 items-start sm:items-center"
                >
                    <a
                        href="/resume.pdf"
                        download="Harsh_Shrivastava_Resume.pdf"
                        className="group relative px-8 py-4 bg-white text-black font-black uppercase tracking-wider rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full sm:w-auto text-center"
                    >
                        <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center justify-center gap-2">
                            <FaDownload className="group-hover:animate-bounce" /> Download Resume
                        </span>
                    </a>

                    <a
                        href="#work"
                        className="group flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/10 transition-all hover:border-white/50 w-full sm:w-auto"
                    >
                        <FaCode /> View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex items-center gap-6 sm:border-l sm:border-white/10 sm:pl-6 sm:ml-2">
                        <a href={RESUME_DATA.contact.github} target="_blank" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors text-2xl hover:scale-110 transform"><FiGithub /></a>
                        <a href={RESUME_DATA.contact.linkedin} target="_blank" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors text-2xl hover:scale-110 transform"><FiLinkedin /></a>
                        <a href={`mailto:${RESUME_DATA.contact.email}`} aria-label="Email" className="text-gray-400 hover:text-white transition-colors text-2xl hover:scale-110 transform"><FiMail /></a>
                    </div>
                </motion.div>
            </div>

            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
            >
                <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Scroll</span>
                <div className="w-px h-12 bg-linear-to-b from-gray-500 to-transparent" />
            </motion.div> */}
        </section>
    );
};