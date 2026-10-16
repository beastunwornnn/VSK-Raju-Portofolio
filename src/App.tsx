/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { Mail, ExternalLink, Download, MessageSquare, Linkedin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], ["8rem", "0rem", "8rem"]);

  // Entrance Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8
      } 
    }
  };

  return (
    <div className="min-h-screen bg-[#111315] text-white font-['Inter',_sans-serif] selection:bg-emerald-400 selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-10 backdrop-blur-md bg-black/10">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-6 h-1 bg-emerald-400 rounded-full transform rotate-[45deg] absolute -top-1 -left-1"></div>
              <div className="w-6 h-1 bg-emerald-400 rounded-full transform -rotate-[45deg] absolute top-2 left-1 opacity-50"></div>
              <span className="text-xl md:text-2xl font-bold tracking-tight pl-8">Santosh Kumar Raju Vegiraju</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[14px] md:text-[15px] font-medium text-gray-300">
            <a href="#clouddev" className="hover:text-white transition-colors duration-200">My Work</a>
            <a href="#resume" className="hover:text-white transition-colors duration-200">Resume</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#121316]">
        {/* Ambient Background Matrix (Refined technical grid) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Subtle Technical Dot Matrix */}
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
          
          {/* Radial Glow behind the portrait area */}
          <div 
            className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
            style={{ background: 'radial-gradient(circle, #0e3d36 0%, transparent 70%)' }}
          ></div>

          {/* Large deliberate stroke arcs */}
          {/* Top Right Arc */}
          <motion.div 
            animate={{ 
              rotate: [0, 5, 0],
              x: [0, 5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[8%] right-[-20px] text-emerald-400/40"
          >
            <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
               <path d="M90 10C90 54.1828 54.1828 90 10 90" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </motion.div>
          
          {/* Far Left Arc */}
          <motion.div 
            animate={{ 
              rotate: [180, 175, 180],
              x: [0, -5, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[-40px] text-emerald-400/20"
          >
            <svg width="240" height="240" viewBox="0 0 100 100" fill="none">
               <path d="M90 10C90 54.1828 54.1828 90 10 90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1280px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center z-10"
        >
          {/* Left Column */}
          <div className="relative space-y-12">
            <div className="space-y-6">
              <motion.h1 variants={fadeInUp} className="leading-[1.1] tracking-[-0.02em]">
                <span className="text-[52px] md:text-[56px] font-medium text-gray-500 block">
                  Hello,
                </span>
                <span className="text-[56px] md:text-[64px] font-extrabold text-[#F9F9F9] relative inline-block mt-2">
                  Santosh here!
                  <motion.span 
                    animate={{ rotate: [0, 20, 0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    className="ml-4 inline-block origin-bottom-right"
                  >
                    👋
                  </motion.span>
                </span>
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="space-y-6 text-gray-400 text-sm md:text-base font-normal leading-relaxed max-w-2xl font-sans">
                <p>
                  I’m an IT Infrastructure Consultant with over 16 years of experience keeping enterprise technology running smoothly behind the scenes.
                </p>
                <p>
                  Think of me as the person organizations lean on to make sure their critical systems don’t skip a beat. Day to day, I work across the full lifecycle of complex IT environments, ranging from building and migrating robust Linux, AIX, and cloud setups to automating day-to-day operations with Ansible so teams can move faster without breaking things.
                </p>
                <p>
                  At the end of the day, I just love untangling tricky infrastructure challenges and turning messy, complex systems into reliable, automated workflows that businesses can count on.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 mt-8">
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, backgroundColor: "#F3F4F6" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-200 shadow-xl"
                >
                  Resume
                </motion.a>
                <motion.a
                  href="mailto:santoshvskcareer@gmail.com"
                  whileHover={{ scale: 1.05, backgroundColor: "#F3F4F6" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-200 shadow-xl"
                >
                  santoshvskcareer@gmail.com
                </motion.a>
              </div>

              <div className="flex items-center gap-4 ml-2">
                <motion.a
                  href="https://www.linkedin.com/in/vsk-raju/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#34D399" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="mailto:santoshvskcareer@gmail.com"
                  whileHover={{ scale: 1.2, color: "#34D399" }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-500 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Portrait */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-end"
          >
            <div className="relative w-full max-w-2xl rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group bg-[#1A1D20]">
              <img
                src="https://cdn.jsdelivr.net/gh/beastunwornnn/saving-content-for-permenant-links@main/1dAdknowledgecity.jpg"
                alt="Santosh Kumar Raju Vegiraju Portrait"
                className="w-full h-auto scale-110 transition-all duration-1000 ease-out group-hover:scale-[1.15] group-hover:brightness-105 [image-rendering:optimizeQuality]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section id="work" className="py-24 md:py-32 bg-white text-black">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-32">
          {/* Scroll reactive Video Showcase */}
          <div ref={containerRef} className="relative h-[150vh] -mx-6 md:-mx-12 flex items-center justify-center">
            <motion.div 
              style={{ 
                scale: videoScale,
                opacity: videoOpacity,
                borderRadius: borderRadius
              }}
              className="sticky top-0 w-full h-screen overflow-hidden shadow-2xl"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://cdn.jsdelivr.net/gh/beastunwornnn/saving-content-for-permenant-links@main/gemini_generated_video_133339e4.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/10"></div>
            </motion.div>
          </div>

          {/* Project 01 — CloudDev */}
          <div id="clouddev" className="py-12 md:py-20">
            <div className="max-w-[1280px] mx-auto space-y-8 md:space-y-12">
               <div className="rounded-[24px] md:rounded-[32px] overflow-hidden bg-indigo-600 aspect-[21/9] relative group">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" alt="CloudDev" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute top-6 left-6 md:top-8 md:left-8">
                     <span className="text-white/50 text-4xl md:text-6xl font-bold">01</span>
                  </div>
               </div>
               <div className="space-y-4 md:space-y-6 max-w-2xl">
                  <h3 className="text-[1.75rem] md:text-[2.25rem] font-bold text-black">01 CloudDev</h3>
                  <p className="text-gray-600 text-base md:text-lg font-normal leading-[1.65]">
                    Experience the holistic solution designed for international students aiming to study abroad, providing an all-encompassing platform for networking, mentorship, and resources to navigate the complex journey of studying abroad.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-base md:text-lg font-medium border-b border-gray-400 hover:border-black transition-colors duration-200 text-black">
                    View complete Architecture case study →
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-[#111315] py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto space-y-16">
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-tight">Get in touch</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="space-y-6">
              <a 
                href="mailto:santoshvskcareer@gmail.com" 
                className="px-7 py-3.5 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:bg-gray-200 transition-all duration-200 ease-in-out inline-block"
              >
                santoshvskcareer@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-6">
                <a href="#" className="text-white hover:text-emerald-400 transition-colors duration-200">
                  <ExternalLink className="w-6 h-6" />
                </a>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}
