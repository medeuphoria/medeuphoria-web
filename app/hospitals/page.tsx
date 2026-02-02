"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bed, Activity, Siren, Users, ClipboardList, 
  ArrowRight, Play, Building2, HeartPulse, 
  Database, ShieldCheck, BarChart3, Search, Bell
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
          <span className="text-xs font-mono text-[#EF4444] uppercase tracking-widest">For Hospitals</span>
        </div>
        <a href="#join" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
          Enterprise Access
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
            Orchestrate <br/>
            <span className="text-zinc-500">Critical Care.</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-md mb-8 leading-relaxed font-light">
            A centralized nervous system for hospitals. Manage admissions, bed capacity, and patient flow in real-time. From the ER to discharge.
          </p>

          <div className="flex flex-row gap-4">
            <a href="#join" className="h-12 px-6 rounded-lg bg-[#EF4444] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-white transition-all">
              Request Demo
            </a>
            <a href="#dashboard" className="h-12 px-6 rounded-lg border border-zinc-800 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
              View Ward Map
            </a>
          </div>

          <div className="mt-12 flex gap-8 border-t border-zinc-900 pt-8">
            <div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">HL7</div>
              <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1">FHIR Ready</div>
            </div>
          </div>
        </motion.div>

        {/* Right: 3D Hospital Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full flex justify-center items-center"
        >
           {/* 3D Container */}
           <div className="relative w-80 h-80 perspective-1000">
              
              {/* Rotating Floors */}
              {[0, 1, 2].map((i) => (
                <motion.div 
                  key={i}
                  animate={{ rotateX: 60, rotateZ: 360 }}
                  transition={{ duration: 30 + (i * 5), repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[2px] border-[#EF4444]/20 rounded-xl bg-[#EF4444]/5 backdrop-blur-sm shadow-lg shadow-red-900/20"
                  style={{ 
                    top: i * -40, // Stack them
                    transformStyle: 'preserve-3d',
                    width: '100%',
                    height: '100%'
                  }}
                />
              ))}
              
              {/* Central Data Core */}
              <div className="absolute inset-0 flex items-center justify-center -mt-20">
                 <div className="w-20 h-40 bg-zinc-900 border border-zinc-700 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(239,68,68,0.3)] z-10 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#EF4444] animate-pulse"></div>
                    <Building2 size={32} className="text-[#EF4444] mb-2" />
                    <div className="text-[8px] font-mono text-white uppercase tracking-widest text-center px-1">Central<br/>Command</div>
                 </div>
              </div>

              {/* Floating Pulse Nodes */}
              <motion.div
                  className="absolute w-32 h-1 bg-gradient-to-r from-transparent via-[#EF4444] to-transparent"
                  style={{ top: '50%', left: '-20%' }}
                  animate={{ x: [0, 200], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
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
            <h2 className="text-3xl font-bold text-white mb-2">Ward Command.</h2>
            <p className="text-zinc-500">Real-time bed management and patient triage.</p>
          </div>
          <div className="hidden md:block text-right">
             <div className="text-xs font-mono text-zinc-600 mb-1">FACILITY STATUS</div>
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#EF4444] rounded-full animate-pulse"></span>
                <span className="text-white font-bold">High Load (84%)</span>
             </div>
          </div>
        </div>

        {/* The Interface Mockup */}
        <div className="relative rounded-xl border border-zinc-800 bg-[#0A0A0A] p-2 shadow-2xl overflow-hidden">
          
          <div className="flex flex-col md:flex-row h-[600px]">
            
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-[#0F0F0F] border-r border-zinc-900 p-4 gap-2">
               <div className="flex items-center gap-3 mb-6 px-2">
                 <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-bold text-[#EF4444]"><Building2 size={16}/></div>
                 <div>
                   <div className="text-xs font-bold text-white">City General</div>
                   <div className="text-[10px] text-[#EF4444]">Level 1 Trauma</div>
                 </div>
               </div>
               {['Ward Map', 'Admissions', 'Staffing', 'Pharmacy', 'Discharge'].map((item, i) => (
                 <div key={item} className={`p-2 px-3 rounded-md text-sm font-medium cursor-default transition-colors ${i===0 ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                   {item}
                 </div>
               ))}
               <div className="mt-auto p-4 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg">
                  <div className="flex items-center gap-2 text-[#EF4444] mb-1">
                     <Siren size={14} />
                     <span className="text-[10px] font-bold uppercase">Emergency</span>
                  </div>
                  <div className="text-xs text-zinc-300">Ambulance inbound. ETA 4 mins.</div>
               </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-black p-6 md:p-8 overflow-hidden relative">
               
               {/* Top Bar */}
               <div className="flex justify-between items-center mb-8">
                   <h3 className="text-lg font-bold text-white">ICU Ward A Overview</h3>
                   <div className="flex gap-3">
                       <div className="p-2 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white"><Search size={16}/></div>
                       <div className="p-2 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white"><Bell size={16}/></div>
                   </div>
               </div>

               {/* Stats Row */}
               <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: "Occupancy", val: "84%", col: "text-white" },
                    { label: "Critical", val: "3", col: "text-[#EF4444]" },
                    { label: "Discharge", val: "6", col: "text-[#10B981]" },
                    { label: "Docs On Call", val: "12", col: "text-blue-500" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#111] border border-zinc-900 rounded-lg p-4">
                       <div className={`text-2xl font-bold ${stat.col} mb-1`}>{stat.val}</div>
                       <div className="text-zinc-500 text-xs font-medium uppercase">{stat.label}</div>
                    </div>
                  ))}
               </div>

               {/* Bed Grid */}
               <div className="grid grid-cols-4 gap-4">
                  {[...Array(12)].map((_, i) => {
                     const status = i < 8 ? 'occupied' : i < 10 ? 'cleaning' : 'free';
                     const color = status === 'occupied' ? 'bg-zinc-900 border-zinc-800' : status === 'cleaning' ? 'bg-yellow-500/10 border-yellow-500/20' : 'bg-green-500/10 border-green-500/20';
                     const iconColor = status === 'occupied' ? 'text-zinc-600' : status === 'cleaning' ? 'text-yellow-500' : 'text-green-500';
                     
                     return (
                       <div key={i} className={`p-4 rounded-xl border flex flex-col justify-between h-28 ${color}`}>
                          <div className="flex justify-between items-start">
                             <span className="text-xs font-mono text-zinc-500">BED {i+1}</span>
                             <Bed size={16} className={iconColor} />
                          </div>
                          <div>
                             <div className={`text-sm font-bold ${status === 'occupied' ? 'text-white' : 'text-zinc-400'}`}>
                                {status === 'occupied' ? 'Patient' : status.toUpperCase()}
                             </div>
                             {status === 'occupied' && <div className="text-[10px] text-[#EF4444]">CRITICAL</div>}
                          </div>
                       </div>
                     );
                  })}
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
    { title: "Smart Admission", desc: "Automated triage and bed allocation based on acuity and availability.", icon: ClipboardList },
    { title: "Real-Time Vitals", desc: "Integration with IoT monitoring devices to feed patient dashboards.", icon: HeartPulse },
    { title: "Staff Rostering", desc: "Manage nurse and doctor shifts aligned with patient load predictions.", icon: Users },
    { title: "Supply Chain", desc: "Automated reordering for pharmacy and surgical supplies.", icon: Database },
    { title: "Interoperability", desc: "Full HL7 and FHIR support to connect with legacy equipment.", icon: Activity },
    { title: "Analytics", desc: "Population health data and operational efficiency reports.", icon: BarChart3 },
  ];

  return (
    <section id="features" className="py-32 px-6 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[#EF4444] font-bold tracking-widest uppercase text-xs">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Enterprise scale.<br/>Military precision.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:border-[#EF4444]/50 hover:bg-zinc-900/40 transition-all duration-300">
              <div className="w-12 h-12 bg-black border border-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-[#EF4444]" size={24} />
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
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#EF4444]/10 via-black to-black pointer-events-none" />
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
        Modernize your <span className="text-[#EF4444]">Facility.</span>
      </h2>
      <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
        MedEuphoria is deploying to select hospitals and clinics. Streamline your operations today.
      </p>
      
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Hospital / Group Name" className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:border-[#EF4444] outline-none transition-colors" />
        <input type="email" placeholder="Administrator Email" className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:border-[#EF4444] outline-none transition-colors" />
        <button className="w-full bg-[#EF4444] text-black font-bold py-4 rounded-lg hover:bg-white transition-colors text-lg">
          Schedule Consultation
        </button>
        <p className="text-xs text-zinc-600 mt-4">HIPAA & POPIA Compliant. Enterprise SLAs available.</p>
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

export default function HospitalPage() {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-[#EF4444] selection:text-black">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <JoinSection />
      <Footer />
    </main>
  );
}