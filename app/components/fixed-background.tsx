'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

// --- Types ---
interface StarData {
  id: number;
  angle: number;
  delay: number;
  duration: number;
}

interface CometData {
  id: number;
  top: number;
  delay: number;
  duration: number;
}

interface BackgroundData {
  stars: StarData[];
  comets: CometData[];
}

// --- Helper Functions (Pure) ---
const generateStars = (count: number): StarData[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    angle: Math.random() * 360,
    delay: i * 0.1,
    duration: 2 + Math.random() * 2,
  }));
};

const generateComets = (count: number): CometData[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 1.5 + Math.random(),
  }));
};

// --- Main Component ---
export const FixedBackground = () => {
  const [data, setData] = useState<BackgroundData | null>(null);

  useEffect(() => {
    // FIX: Wrap in setTimeout to avoid "synchronous setState" linter error
    const timer = setTimeout(() => {
      setData({
        stars: generateStars(40),
        comets: generateComets(3),
      });
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Hydration guard
  if (!data) return <div className="fixed inset-0 bg-[#030303]" />;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030303]">
      
      {/* 1. Deep Space Gradient */}
      <div 
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-30 animate-spin-slow bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#000000_50%)] blur-[80px]"
      />
      
      {/* 2. Warp Speed Stars */}
      {data.stars.map((star) => (
        <WarpStar key={star.id} data={star} />
      ))}

      {/* 3. Shooting Comets */}
      {data.comets.map((comet) => (
        <motion.div
          key={comet.id}
          className="absolute h-px w-37.5 bg-linear-to-r from-transparent via-blue-400 to-transparent"
          style={{
            top: `${comet.top}%`,
            left: -150,
          }}
          animate={{
            x: ['0vw', '120vw'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: comet.duration,
            repeat: Infinity,
            delay: comet.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 4. Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
      />
    </div>
  );
};

// --- Sub-component ---
const WarpStar = ({ data }: { data: StarData }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_4px_white]"
      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
      animate={{
        x: Math.cos(data.angle * (Math.PI / 180)) * 1000, 
        y: Math.sin(data.angle * (Math.PI / 180)) * 1000,
        scale: [0, 1.5],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: data.duration,
        repeat: Infinity,
        delay: data.delay,
        ease: "easeIn",
      }}
    />
  );
};