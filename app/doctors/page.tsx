"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Activity, CheckCircle2, ArrowRight, Menu, X, 
  Stethoscope, Clock, FileText, ShieldCheck, 
  Zap, Calendar, DollarSign, Database
} from 'lucide-react';

// --- ANIMATION ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = '/'}>
          <div className="w-8 h-8 relative rounded bg-white/10 flex items-center justify-center overflow-hidden">
             <img src="/logoo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">MedEuphoria</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">For Providers</span>
        </div>
        <a href="#join" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
          Join Network
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 pt-20 border-b border-zinc-900 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Text (Smaller, Professional) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-left"
        >

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            The Operating System for <br/>
            <span className="text-zinc-500">Modern Medicine.</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-md mb-8 leading-relaxed font-light">
            Automate your practice. MedEuphoria centralizes scheduling, clinical notes and billing into one fluid command center.
          </p>

          <div className="flex flex-row gap-4">
            <a href="#join" className="h-12 px-6 rounded-lg bg-white text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all">
              Apply for Access
            </a>
            <a href="#features" className="h-12 px-6 rounded-lg border border-zinc-800 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
              Platform Demo
            </a>
          </div>
        </motion.div>

        {/* Right Column: Advanced 3D Visual (Medical Tech) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full flex justify-center items-center"
        >
           {/* 3D Container */}
           <div className="relative w-80 h-80 perspective-1000">
              
              {/* Rotating Rings (Simulating CT/MRI Scan) */}
              <motion.div 
                animate={{ rotateX: 360, rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute inset-0 border-[1px] border-primary/20 rounded-full"
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div 
                animate={{ rotateX: -360, rotateY: 180 }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute inset-4 border-[1px] border-zinc-700/40 rounded-full"
                style={{ transformStyle: 'preserve-3d' }}
              />
              
              {/* Central Core (The "Doctor" Entity) */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,188,212,0.15)] z-10">
                    <Stethoscope size={40} className="text-primary mb-2" />
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Connected</div>
                 </div>
              </div>

              {/* Floating Data Nodes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-10 h-10 bg-black border border-zinc-800 rounded-lg flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  style={{
                    top: `${50 + 40 * Math.sin(i * 60)}%`,
                    left: `${50 + 40 * Math.cos(i * 60)}%`,
                  }}
                >
                   {i % 2 === 0 ? <Activity size={14} className="text-zinc-400" /> : <FileText size={14} className="text-zinc-400" />}
                </motion.div>
              ))}

              {/* Connection Lines */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                 <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#00BCD4" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
               </svg>
           </div>

           {/* Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};

// --- DASHBOARD PREVIEW ---
// A code-based visual of what the doctor actually sees
const DashboardPreview = () => {
  return (
    <section className="py-24 px-6 bg-black border-b border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your new Command Center.</h2>
          <p className="text-zinc-500">A unified view of your practice, accessible from any device.</p>
        </div>

        {/* The Interface Mockup */}
        <div className="relative rounded-2xl border border-zinc-800 bg-[#050505] p-2 md:p-4 shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-zinc-900/30 rounded-xl p-4 border border-zinc-800/50 gap-2">
               <div className="flex items-center gap-3 mb-6 px-2">
                 <div className="w-8 h-8 bg-zinc-800 rounded-full"></div>
                 <div>
                   <div className="text-sm font-bold text-white">Dr. Tshivhasa</div>
                   <div className="text-xs text-primary">Online</div>
                 </div>
               </div>
               {['Overview', 'Schedule', 'Patients', 'Messages', 'Finance'].map((item, i) => (
                 <div key={item} className={`p-3 rounded-lg text-sm font-medium ${i===0 ? 'bg-zinc-800 text-white' : 'text-zinc-500'}`}>
                   {item}
                 </div>
               ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
               {/* Stats Row */}
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Today's Appts", val: "12", icon: Clock, col: "text-white" },
                    { label: "Pending Labs", val: "4", icon: Activity, col: "text-primary" },
                    { label: "Revenue", val: "R 12k", icon: DollarSign, col: "text-green-500" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-5">
                       <div className="flex justify-between items-start mb-4">
                         <stat.icon size={20} className="text-zinc-600" />
                         <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Live</span>
                       </div>
                       <div className={`text-3xl font-bold ${stat.col}`}>{stat.val}</div>
                       <div className="text-zinc-500 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
               </div>

               {/* Patient Card */}
               <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-white font-bold text-lg">Next: Thubelihle Myeni</h3>
                      <p className="text-zinc-500 text-sm">14:00 • Virtual Consultation</p>
                    </div>
                    <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold">Start Call</button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/40 rounded-lg border border-zinc-800">
                      <div className="text-zinc-500 text-xs uppercase mb-2">AI Summary</div>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Patient reports recurring migraines. Vitals from wearable indicate elevated heart rate (98bpm) during episodes.
                      </p>
                    </div>
                    <div className="p-4 bg-black/40 rounded-lg border border-zinc-800">
                       <div className="text-zinc-500 text-xs uppercase mb-2">History</div>
                       <div className="flex gap-2">
                         <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-300">Hypertension</span>
                         <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-300">Asthma</span>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FEATURES GRID ---
const Features = () => {
  const items = [
    { title: "Smart Scheduling", desc: "Set your availability matrix once. Patients book open slots. No double-bookings, ever.", icon: Calendar },
    { title: "AI Scribe", desc: "Our AI listens (with consent) and drafts clinical notes for you. Review, sign, and done.", icon: FileText },
    { title: "Telehealth Native", desc: "High-definition video built directly into the platform. Screen share X-rays and labs effortlessly.", icon: Zap },
    { title: "Guaranteed Pay", desc: "We process medical aid claims in real-time before the consult ends. Or get direct card payments.", icon: DollarSign },
    { title: "Interoperability", desc: "We play nice with others. HL7 and FHIR compliant to sync with existing hospital systems.", icon: Database },
    { title: "Malpractice Safety", desc: "Every interaction is logged, encrypted, and timestamped, providing a perfect audit trail.", icon: ShieldCheck },
  ];

  return (
    <section id="features" className="py-32 px-6 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Everything you need.<br/>Nothing you don't.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:border-primary/50 hover:bg-zinc-900/40 transition-all duration-300">
              <div className="w-12 h-12 bg-black border border-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PARTNER CTA ---
const JoinSection = () => (
  <section id="join" className="py-32 px-6 bg-zinc-950 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-black to-black pointer-events-none" />
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
        Join the <span className="text-primary">Medical Avant-Garde.</span>
      </h2>
      <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
        We are limiting platform access to select high-quality providers during our beta phase. Secure your practice's spot today.
      </p>
      
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Dr. Name / Medical Centre" className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:border-primary outline-none transition-colors" />
        <input type="email" placeholder="Work Email" className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:border-primary outline-none transition-colors" />
        <button className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-white transition-colors text-lg">
          Request Access
        </button>
        <p className="text-xs text-zinc-600 mt-4">By clicking submit, you agree to our verification process.</p>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black py-20 px-6 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-8">
        <span className="text-2xl font-bold text-white">MedEuphoria</span>
      </div>
      <div className="flex justify-center gap-8 text-sm text-zinc-500 mb-8">
        <a href="#" className="hover:text-white">Privacy</a>
        <a href="#" className="hover:text-white">Terms</a>
        <a href="#" className="hover:text-white">Support</a>
      </div>
      <p className="text-zinc-700 text-xs">© 2026 MedEuphoria Health Technologies.</p>
    </div>
  </footer>
);

export default function DoctorsPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <JoinSection />
      <Footer />
    </main>
  );
}