'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-[#030303] flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-[10rem] font-black text-white/5 select-none absolute z-0"
      >
        404
      </motion.h1>

      <div className="z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          Page <span className="text-blue-500">Not Found</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The coordinate you are looking for does not exist in this sector.
        </p>
        
        <Link 
          href="/" 
          className="px-8 py-3 rounded-full bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}