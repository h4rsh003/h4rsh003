'use client';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { RESUME_DATA } from '@/app/data/resume-data';

export const Experience = () => (
  // FIX: Added 'scroll-mt-32'. This ensures the heading isn't hidden behind the Navbar when clicked.
  <section id="about" className="py-10 md:py-20 scroll-mt-32 bg-transparent relative overflow-hidden z-10">
    
    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 md:w-96 h-72 md:h-96 bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[5%] w-60 md:w-72 h-60 md:h-72 bg-blue-900/10 rounded-full blur-[100px]" />
    </div>

    <div className="container mx-auto px-6 max-w-6xl relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
        
        {/* Left Column: Title & Education (Sticky on Desktop, Static on Mobile) */}
        <div className="lg:sticky lg:top-32 h-fit">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-500">
                    <FaBriefcase size={24} />
                </div>
                <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">Career Path</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 md:mb-8">
              Professional <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">Journey</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 md:mb-12 max-w-md">
              Building rigorous, production-ready code. My experience combines academic excellence with hands-on internship work in the MERN stack.
            </p>

            {/* Education Card */}
            <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-purple-600/20 text-purple-400">
                        <FaGraduationCap size={20} />
                    </div>
                    <h4 className="text-white font-bold text-xl">Education</h4>
                </div>
                <h5 className="text-lg font-bold text-gray-200 mb-1">{RESUME_DATA.education.degree}</h5>
                <p className="text-gray-500 text-sm mb-4">{RESUME_DATA.education.school}</p>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{RESUME_DATA.education.period}</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                        {RESUME_DATA.education.grade}
                    </span>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Experience Timeline */}
        <div className="relative border-l border-white/10 pl-8 md:pl-12 space-y-12">
          {/* Gradient Line Overlay */}
          <div className="absolute -left-px top-0 h-full w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-transparent opacity-50" />

          {RESUME_DATA.experience.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Timeline Dot - UPDATED border color to match global bg */}
              <div className={`absolute -left-10.25 md:-left-14.25 top-6 h-5 w-5 rounded-full border-4 border-[#030303] z-10 transition-all duration-300 ${
                  exp.active 
                    ? "bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-110" 
                    : "bg-gray-700 group-hover:bg-blue-400 group-hover:scale-110"
              }`} />
              
              {/* Experience Card */}
              <div className="relative p-6 md:p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:-translate-y-1">
                 
                 <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-blue-400 font-bold tracking-wide text-sm md:text-base">{exp.company}</p>
                    </div>
                    <span className="inline-flex w-fit px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-white/5 border border-white/10 rounded-full whitespace-nowrap">
                       {exp.period}
                    </span>
                 </div>
                 
                 <ul className="space-y-3">
                   {exp.desc.map((point, idx) => (
                       <li key={idx} className="flex items-start gap-3 text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors">
                           <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                           {point}
                       </li>
                   ))}
                 </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  </section>
);