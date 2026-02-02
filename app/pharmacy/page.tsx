"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Pill, Activity, Truck, ScanBarcode, 
  CheckCircle2, AlertTriangle, ArrowRight, 
  Package, TrendingUp, History, Search, Bell, X,
  FileText,
  ShieldCheck,
  CreditCard
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
          <span className="text-xs font-mono text-[#10B981] uppercase tracking-widest">For Pharmacies</span>
        </div>
        <a href="#join" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
          Partner Access
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 pt-20 border-b border-zinc-900 bg-[#050505] overflow-hidden">
      {/* Background Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" /> */}
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Professional Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            The Digital <br/>
            <span className="text-zinc-500">Dispensary.</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-md mb-8 leading-relaxed font-light">
            Receive verified digital prescriptions instantly. Automate your inventory. Stop deciphering handwriting and start dispensing with confidence.
          </p>

          <div className="flex flex-row gap-4">
            <a href="#join" className="h-12 px-6 rounded-lg bg-[#10B981] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-white transition-all">
              Register Pharmacy
            </a>
            <a href="#dashboard" className="h-12 px-6 rounded-lg border border-zinc-800 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
              View Dashboard
            </a>
          </div>

          <div className="mt-12 flex gap-8 border-t border-zinc-900 pt-8">
            <div>
              <div className="text-2xl font-bold text-white">0s</div>
              <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1">Rx Latency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1">Legible Scripts</div>
            </div>
          </div>
        </motion.div>

        {/* Right: 3D Pharmacy Tech Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full flex justify-center items-center"
        >
           {/* 3D Container */}
           <div className="relative w-80 h-80 perspective-1000">
              
              {/* Rotating Pill Container */}
              <motion.div 
                animate={{ rotateY: 360, rotateZ: 45 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-[#10B981]/30 rounded-[3rem]"
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div 
                animate={{ rotateY: -360, rotateX: 45 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-[1px] border-zinc-700/40 rounded-[3rem]"
                style={{ transformStyle: 'preserve-3d' }}
              />
              
              {/* Central Core (The Pill) */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-24 h-48 bg-gradient-to-b from-[#10B981]/20 to-black border border-[#10B981]/50 rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.2)] z-10 backdrop-blur-md">
                    <Pill size={40} className="text-[#10B981] mb-2" />
                    <div className="text-[8px] font-mono text-white uppercase tracking-widest">Verified</div>
                 </div>
              </div>

              {/* Floating Inventory Nodes */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 bg-black border border-zinc-800 rounded-lg flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.7
                  }}
                  style={{
                    top: `${40 + 50 * Math.sin(i * 90)}%`,
                    left: `${40 + 50 * Math.cos(i * 90)}%`,
                  }}
                >
                   {i === 0 ? <Truck size={16} className="text-zinc-400" /> : 
                    i === 1 ? <ScanBarcode size={16} className="text-zinc-400" /> :
                    <Package size={16} className="text-zinc-400" />}
                </motion.div>
              ))}
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
            <h2 className="text-3xl font-bold text-white mb-2">Inventory Command.</h2>
            <p className="text-zinc-500">Real-time script feed and automated stock management.</p>
          </div>
          <div className="hidden md:block text-right">
             <div className="text-xs font-mono text-zinc-600 mb-1">LIVE FEED</div>
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
                <span className="text-white font-bold">Connected to National Network</span>
             </div>
          </div>
        </div>

        {/* The Interface Mockup */}
        <div className="relative rounded-xl border border-zinc-800 bg-[#0A0A0A] p-2 shadow-2xl overflow-hidden">
          
          <div className="flex flex-col md:flex-row h-[600px]">
            
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-[#0F0F0F] border-r border-zinc-900 p-4 gap-2">
               <div className="flex items-center gap-3 mb-6 px-2">
                 <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-bold text-[#10B981]"><Pill size={16}/></div>
                 <div>
                   <div className="text-xs font-bold text-white">MediCollect</div>
                   {/* <div className="text-[10px] text-[#10B981]">Terminal 01</div> */}
                 </div>
               </div>
               {['Incoming Scripts', 'Inventory', 'Dispense History', 'Reports', 'Settings'].map((item, i) => (
                 <div key={item} className={`p-2 px-3 rounded-md text-sm font-medium cursor-default transition-colors ${i===0 ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                   {item}
                 </div>
               ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-black p-6 md:p-8 overflow-hidden relative">
               
               {/* Top Bar */}
               <div className="flex justify-between items-center mb-8">
                   <h3 className="text-lg font-bold text-white">Incoming Queue</h3>
                   <div className="flex gap-3">
                       <div className="p-2 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white"><Search size={16}/></div>
                       <div className="p-2 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white"><Bell size={16}/></div>
                   </div>
               </div>

               {/* Stats Row */}
               <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: "Pending", val: "12", col: "text-white" },
                    { label: "Processing", val: "4", col: "text-[#10B981]" },
                    { label: "Low Stock", val: "2", col: "text-[#F59E0B]" },
                    { label: "Revenue", val: "R 14k", col: "text-white" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#111] border border-zinc-900 rounded-lg p-4">
                       <div className={`text-2xl font-bold ${stat.col} mb-1`}>{stat.val}</div>
                       <div className="text-zinc-500 text-xs font-medium uppercase">{stat.label}</div>
                    </div>
                  ))}
               </div>

               {/* Script List */}
               <div className="bg-[#111] border border-zinc-900 rounded-xl overflow-hidden">
                   <div className="grid grid-cols-5 gap-4 p-4 border-b border-zinc-800 text-xs text-zinc-500 font-bold uppercase bg-zinc-900/50">
                       <div className="col-span-1">ID</div>
                       <div className="col-span-2">Patient / Meds</div>
                       <div className="col-span-1">Doctor</div>
                       <div className="col-span-1 text-right">Status</div>
                   </div>
                   
                   {[1, 2, 3].map((item, i) => (
                       <div key={i} className="grid grid-cols-5 gap-4 p-4 border-b border-zinc-800 items-center hover:bg-zinc-900/30 transition-colors cursor-pointer group">
                           <div className="col-span-1 text-zinc-400 font-mono text-xs">#RX-992{item}</div>
                           <div className="col-span-2">
                               <div className="text-white text-sm font-bold">{i===0 ? 'Thubelihle M.' : i===1 ? 'Ntuthuko D.' : 'Manqoba T.'}</div>
                               <div className="text-zinc-500 text-xs">{i===0 ? 'Amoxicillin 500mg' : i===1 ? 'Lipitor 20mg' : 'Metformin'}</div>
                           </div>
                           <div className="col-span-1 text-zinc-400 text-xs">Dr. Tshivhasa</div>
                           <div className="col-span-1 text-right">
                               <span className={`text-[10px] font-bold px-2 py-1 rounded ${i===0 ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-zinc-800 text-zinc-400'}`}>
                                   {i===0 ? 'READY' : 'PENDING'}
                               </span>
                           </div>
                       </div>
                   ))}
               </div>

               {/* Low Stock Alert */}
               <div className="mt-6 flex items-center gap-3 p-3 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-lg">
                   <AlertTriangle size={16} className="text-[#F59E0B]" />
                   <span className="text-[#F59E0B] text-xs font-bold">Stock Alert:</span>
                   <span className="text-zinc-300 text-xs">Insulin levels running low. Auto-reorder triggered.</span>
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
    { title: "Digital Scripts", desc: "No more deciphering handwriting. Scripts arrive digitally, verified and clear.", icon: FileText },
    { title: "Inventory AI", desc: "Our system predicts stock needs based on local prescription trends.", icon: TrendingUp },
    { title: "Fraud Prevention", desc: "Scripts are cryptographically signed by doctors. Duplicate dispensing is impossible.", icon: ShieldCheck },
    { title: "Smart Queuing", desc: "Pre-pack medication before the patient arrives. Reduce counter wait times.", icon: History },
    { title: "Delivery Logistics", desc: "Integrated courier API for home delivery of chronic medication.", icon: Truck },
    { title: "Insurer Link", desc: "Automatic claim submission to all major medical aids in real-time.", icon: CreditCard },
  ];

  return (
    <section id="features" className="py-32 px-6 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[#10B981] font-bold tracking-widest uppercase text-xs">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Built for volume.<br/>Designed for accuracy.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:border-[#10B981]/50 hover:bg-zinc-900/40 transition-all duration-300">
              <div className="w-12 h-12 bg-black border border-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-[#10B981]" size={24} />
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
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#10B981]/10 via-black to-black pointer-events-none" />
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
        Upgrade your <span className="text-[#10B981]">Dispensary.</span>
      </h2>
      <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
        MedEuphoria is partnering with select pharmacy chains for our beta launch. Join the network today.
      </p>
      
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Pharmacy Name / Group" className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:border-[#10B981] outline-none transition-colors" />
        <input type="email" placeholder="Business Email" className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:border-[#10B981] outline-none transition-colors" />
        <button className="w-full bg-[#10B981] text-black font-bold py-4 rounded-lg hover:bg-white transition-colors text-lg">
          Register Interest
        </button>
        <p className="text-xs text-zinc-600 mt-4">Verification required. We support independent and chain pharmacies.</p>
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

export default function PharmacyPage() {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-[#10B981] selection:text-black">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <JoinSection />
      <Footer />
    </main>
  );
}