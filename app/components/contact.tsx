'use client';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/app/data/resume-data';

export const Contact = () => {
  return (
    <section id="contact" className="py-10 md:py-20 border-t border-white/5 z-10 relative bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          {/* FIXED: Removed the nested <h2> tag. Everything is now inside motion.h2 */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white mb-4 md:mb-6"
          >
            Let&apos;s <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">Build Something</span>.
          </motion.h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            I am currently open to full-time opportunities. Feel free to reach out via email or social media.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10">
           
           {/* Decorative Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-125 h-72 md:h-125 bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

           {/* 1. Email Card */}
           <a href={`mailto:${RESUME_DATA.contact.email}`} className="group relative p-6 md:p-8 rounded-4xl md:rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="p-4 md:p-5 rounded-2xl bg-blue-600 text-white shadow-lg mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <FaEnvelope size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Email Me</h3>
                <p className="text-sm md:text-base text-gray-400 break-all">{RESUME_DATA.contact.email}</p>
              </div>
           </a>

           {/* 2. WhatsApp Card */}
           <a href={RESUME_DATA.contact.whatsapp} target="_blank" className="group relative p-6 md:p-8 rounded-4xl md:rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 hover:border-green-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="p-4 md:p-5 rounded-2xl bg-green-500 text-white shadow-lg mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <FaWhatsapp size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-sm md:text-base text-gray-400">Direct Chat</p>
              </div>
           </a>

           {/* 3. LinkedIn Card */}
           <a href={RESUME_DATA.contact.linkedin} target="_blank" className="group relative p-6 md:p-8 rounded-4xl md:rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 hover:border-blue-400/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="p-4 md:p-5 rounded-2xl bg-[#0077b5] text-white shadow-lg mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <FaLinkedin size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-sm md:text-base text-gray-400">Professional Profile</p>
              </div>
           </a>

           {/* 4. GitHub Card */}
           <a href={RESUME_DATA.contact.github} target="_blank" className="group relative p-6 md:p-8 rounded-4xl md:rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 hover:border-gray-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="p-4 md:p-5 rounded-2xl bg-gray-800 text-white shadow-lg mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <FaGithub size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">GitHub</h3>
                <p className="text-sm md:text-base text-gray-400">View Code</p>
              </div>
           </a>

        </div>
      </div>
    </section>
  );
};