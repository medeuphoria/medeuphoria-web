"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, Activity, CreditCard, Users, PieChart, 
  ArrowRight, Play, Building2, TrendingUp, 
  Database, Lock, FileText, Search, Bell, AlertTriangle, CheckCircle2,
  Zap
} from 'lucide-react';

// --- ANIMATION ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
          <span className="text-lg font-bold tracking-tight text-white">MedEuphoria</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-xs font-mono text-[#F59E0B] uppercase tracking-widest">Claims Admin</span>
        </div>
        <a href="#join" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
          Corporate Access
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 pt-20 border-b border-zinc-900 bg-[#050505] overflow-hidden">
      {/* Background Effects */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" /> */}
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            The Engine of <br/>
            <span className="text-zinc-500">Assurance.</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-md mb-8 leading-relaxed font-light">
            Stop the administrative bleed. Real-time claim validation, fraud detection via AI, and instant payout triggers. Reduce overhead by 40%.
          </p>

          <div className="flex flex-row gap-4">
            <a href="#join" className="h-12 px-6 rounded-lg bg-[#F59E0B] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-white transition-all">
              Request Demo
            </a>
            <a href="#dashboard" className="h-12 px-6 rounded-lg border border-zinc-800 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
              View Analytics
            </a>
          </div>

          <div className="mt-12 flex gap-8 border-t border-zinc-900 pt-8">
            <div>
              <div className="text-2xl font-bold text-white">0.4s</div>
              <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1">Processing Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">94%</div>
              <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1">Auto-Approval</div>
            </div>
          </div>
        </motion.div>

        {/* Right: 3D Data Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full flex justify-center items-center"
        >
           {/* 3D Container */}
           <div className="relative w-80 h-80 perspective-1000">
              
              {/* Data Blocks */}
              <motion.div 
                animate={{ rotateY: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
              >
                 {[...Array(4)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute w-24 h-32 bg-[#F59E0B]/5 border border-[#F59E0B]/30 rounded-lg backdrop-blur-sm"
                        style={{ 
                            transform: `rotateY(${i * 90}deg) translateZ(120px)`,
                            boxShadow: '0 0 30px rgba(245, 158, 11, 0.1)'
                        }}
                    >
                        <div className="w-full h-1 bg-[#F59E0B]/50 mb-2"></div>
                        <div className="p-2 space-y-2">
                           <div className="h-1 w-12 bg-white/20 rounded"></div>
                           <div className="h-1 w-16 bg-white/10 rounded"></div>
                        </div>
                    </div>
                 ))}
              </motion.div>
              
              {/* Central Core (The Shield) */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 bg-black border border-zinc-700 rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_rgba(245,158,11,0.2)] z-10 relative">
                    <ShieldAlert size={40} className="text-[#F59E0B] mb-2" />
                    <div className="text-[8px] font-mono text-white uppercase tracking-widest text-center px-1">Fraud<br/>Guard</div>
                 </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                 <circle cx="50%" cy="50%" r="60%" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="10 5" className="animate-spin-slow" />
               </svg>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- DASHBOARD PREVIEW ---
const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-24 px-6 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Adjudication Engine.</h2>
            <p className="text-zinc-500">Live claims processing with AI-driven risk analysis.</p>
          </div>
          <div className="hidden md:block text-right">
             <div className="text-xs font-mono text-zinc-600 mb-1">ENGINE STATUS</div>
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse"></span>
                <span className="text-white font-bold">Processing (1,240 tps)</span>
             </div>
          </div>
        </div>

        {/* The Interface Mockup */}
        <div className="relative rounded-xl border border-zinc-800 bg-[#0A0A0A] p-2 shadow-2xl overflow-hidden">
          
          <div className="flex flex-col md:flex-row h-[600px]">
            
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-[#0F0F0F] border-r border-zinc-900 p-4 gap-2">
               <div className="flex items-center gap-3 mb-6 px-2">
                 <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-bold text-[#F59E0B]"><Building2 size={16}/></div>
                 <div>
                   <div className="text-xs font-bold text-white">MedShield</div>
                   <div className="text-[10px] text-[#F59E0B]">Administrator</div>
                 </div>
               </div>
               {['Overview', 'Claims Feed', 'Fraud Alerts', 'Members', 'Providers'].map((item, i) => (
                 <div key={item} className={`p-2 px-3 rounded-md text-sm font-medium cursor-default transition-colors ${i===1 ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                   {item}
                 </div>
               ))}
               
               <div className="mt-auto p-4 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-lg">
                  <div className="flex items-center gap-2 text-[#F59E0B] mb-1">
                     <AlertTriangle size={14} />
                     <span className="text-[10px] font-bold uppercase">Risk Alert</span>
                  </div>
                  <div className="text-xs text-zinc-300">Unusual volume detected: Dr. N. Patel (Cardiology)</div>
               </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-black p-6 md:p-8 overflow-hidden relative">
               
               {/* Top Bar */}
               <div className="flex justify-between items-center mb-8">
                   <h3 className="text-lg font-bold text-white">Live Claims Feed</h3>
                   <div className="flex gap-3">
                       <div className="p-2 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white"><Search size={16}/></div>
                       <div className="p-2 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white"><Bell size={16}/></div>
                   </div>
               </div>

               {/* Stats Row */}
               <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: "Today's Value", val: "R 4.2M", col: "text-white" },
                    { label: "Approved", val: "92%", col: "text-[#10B981]" },
                    { label: "Fraud Blocks", val: "14", col: "text-[#EF4444]" },
                    { label: "Avg Time", val: "0.4s", col: "text-blue-500" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#111] border border-zinc-900 rounded-lg p-4">
                       <div className={`text-2xl font-bold ${stat.col} mb-1`}>{stat.val}</div>
                       <div className="text-zinc-500 text-xs font-medium uppercase">{stat.label}</div>
                    </div>
                  ))}
               </div>

               {/* Analytics Chart Simulation */}
               <div className="bg-[#111] border border-zinc-900 rounded-xl p-6 mb-6">
                   <div className="flex justify-between mb-4">
                       <h4 className="text-sm font-bold text-zinc-400">Claim Volume (24h)</h4>
                       <span className="text-[#10B981] text-xs">+12% vs avg</span>
                   </div>
                   <div className="h-24 flex items-end gap-2">
                       {[30, 45, 35, 60, 50, 75, 40, 55, 65, 50, 45, 60, 80, 70, 50, 60, 40, 55, 45, 30].map((h, i) => (
                           <div key={i} style={{height: `${h}%`}} className="flex-1 bg-zinc-800 rounded-t-sm hover:bg-[#F59E0B] transition-colors"></div>
                       ))}
                   </div>
               </div>

               {/* Recent Claims Table */}
               <div className="bg-[#111] border border-zinc-900 rounded-xl overflow-hidden">
                   <div className="grid grid-cols-5 gap-4 p-4 border-b border-zinc-800 text-xs text-zinc-500 font-bold uppercase bg-zinc-900/50">
                       <div className="col-span-1">Claim ID</div>
                       <div className="col-span-2">Provider / Type</div>
                       <div className="col-span-1">Amount</div>
                       <div className="col-span-1 text-right">Risk Score</div>
                   </div>
                   
                   {[1, 2, 3].map((item, i) => (
                       <div key={i} className="grid grid-cols-5 gap-4 p-4 border-b border-zinc-800 items-center hover:bg-zinc-900/30 transition-colors cursor-pointer group">
                           <div className="col-span-1 text-zinc-400 font-mono text-xs">#CLM-884{item}</div>
                           <div className="col-span-2">
                               <div className="text-white text-sm font-bold">{i===0 ? 'Dr. Jenkins' : i===1 ? 'MediQuick Pharm' : 'City General'}</div>
                               <div className="text-zinc-500 text-xs">{i===0 ? 'GP Consultation' : i===1 ? 'Chronic Meds' : 'Emergency Room'}</div>
                           </div>
                           <div className="col-span-1 text-white text-xs font-bold">
                               {i===0 ? 'R 450.00' : i===1 ? 'R 1,200.00' : 'R 3,500.00'}
                           </div>
                           <div className="col-span-1 text-right flex justify-end items-center gap-2">
                               <div className={`h-1.5 w-12 rounded-full bg-zinc-800 overflow-hidden`}>
                                   <div className={`h-full ${i===2 ? 'w-[80%] bg-[#EF4444]' : 'w-[10%] bg-[#10B981]'}`}></div>
                               </div>
                               <span className={`text-[10px] font-bold ${i===2 ? 'text-[#EF4444]' : 'text-[#10B981]'}`}>
                                   {i===2 ? 'HIGH' : 'LOW'}
                               </span>
                           </div>
                       </div>
                   ))}
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
    { title: "Fraud AI", desc: "Algorithms detect pattern anomalies, duplicate billing, and phantom providers instantly.", icon: ShieldAlert },
    { title: "Real-Time Auth", desc: "Pre-authorization happens in milliseconds during the patient consultation.", icon: Zap },
    { title: "Member 360", desc: "A unified view of member history across all providers in the network.", icon: Users },
    { title: "Population Health", desc: "Aggregate data to identify disease outbreaks and cost drivers in real-time.", icon: PieChart },
    { title: "Direct Payment", desc: "Automated fund release to providers upon validated service delivery.", icon: CreditCard },
    { title: "Audit Trail", desc: "Immutable logs of every interaction for perfect regulatory compliance.", icon: FileText },
  ];

  return (
    <section id="features" className="py-32 px-6 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[#F59E0B] font-bold tracking-widest uppercase text-xs">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Risk managed.<br/>Costs controlled.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:border-[#F59E0B]/50 hover:bg-zinc-900/40 transition-all duration-300">
              <div className="w-12 h-12 bg-black border border-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-[#F59E0B]" size={24} />
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
  <section id="join" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#F59E0B]/10 via-black to-black pointer-events-none" />
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
        The Future of <span className="text-[#F59E0B]">Insurance.</span>
      </h2>
      <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
        We are integrating with forward-thinking medical aids and hospital groups. Streamline your adjudication today.
      </p>
      
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Organization Name" className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:border-[#F59E0B] outline-none transition-colors" />
        <input type="email" placeholder="Corporate Email" className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:border-[#F59E0B] outline-none transition-colors" />
        <button className="w-full bg-[#F59E0B] text-black font-bold py-4 rounded-lg hover:bg-white transition-colors text-lg">
          Schedule Executive Demo
        </button>
        <p className="text-xs text-zinc-600 mt-4">API Documentation available upon request.</p>
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

export default function InsurerPage() {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-[#F59E0B] selection:text-black">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <JoinSection />
      <Footer />
    </main>
  );
}