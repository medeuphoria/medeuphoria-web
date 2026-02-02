"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Activity, Globe, 
  Play, Stethoscope, Users,
  CheckCircle2, Mail, Pill, Search,
  X,
  Video
} from 'lucide-react';

// --- DATA: THE STORY ---
const FEATURES = [
  {
    id: 'patient',
    type: 'mobile',
    title: "For Patients",
    heading: "Healthcare in your pocket.",
    desc: "Book appointments, get prescriptions, and see your medical history. No more waiting rooms or lost files.",
    color: "#00BCD4"
  },
  {
    id: 'doctor',
    type: 'mobile',
    title: "For Doctors",
    heading: "Focus on care, not paperwork.",
    desc: "Manage your schedule and see patients via video or accept in-person consultations. AI handles the clinical notes while you focus on the patient.",
    color: "#A855F7"
  },
  {
    id: 'pharmacy',
    type: 'desktop',
    title: "For Pharmacies",
    heading: "Inventory Command Center.",
    desc: "Receive digital prescriptions instantly on your terminal. Manage stock levels automatically and stop deciphering handwriting.",
    color: "#10B981"
  },
  {
    id: 'insurer',
    type: 'desktop',
    title: "For Medical Insurers",
    heading: "Real-time Adjudication.",
    desc: "Validate members and approve claims instantly. Our dashboard detects fraud patterns before payment is released.",
    color: "#F59E0B"
  },
  {
    id: 'hospital',
    type: 'desktop',
    title: "For Hospitals",
    heading: "Ward Management OS.",
    desc: "Manage admissions, bed availability, patient transfers and many more, in one central desktop system. Connect your doctors to your beds.",
    color: "#EF4444"
  }
];

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
        <div className="flex items-center gap-3">
          {/* LOGO IMAGE PLACEHOLDER */}
          <div className="w-8 h-8 relative rounded bg-white/10 flex items-center justify-center overflow-hidden">
             <img src="/logoo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">MedEuphoria</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Problem', 'Platform', 'Impact', 'Partner'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-0.5">
          Partner With Us
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden border-b border-zinc-900">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000" />
      
      <div className="text-center max-w-4xl relative z-10">
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-primary">System Online</span>
        </div> */}

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
          Leading Health <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-purple-400">Into The Future.</span>
        </h1>

        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          One simple platform connecting patients, doctors, pharmacies, and insurers. Fast, secure, and easy to use.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="h-14 px-8 rounded-full bg-primary text-black font-bold text-lg flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_40px_rgba(0,188,212,0.4)]">
            Partner With Us <ArrowRight size={20} />
          </a>
          <a href="#platform" className="h-14 px-8 rounded-full border border-zinc-800 text-white font-medium text-lg flex items-center gap-3 hover:bg-white/5 transition-all backdrop-blur-sm group">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={14} fill="currentColor" />
            </div>
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

const ProblemStatement = () => {
  return (
    <section id="problem" className="py-32 px-6 bg-black border-b border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Why is healthcare <br/>so difficult?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-xl text-zinc-400 leading-relaxed font-light">
              You wait weeks for an appointment. You fill out the same paper forms every time. 
              Your doctor doesn't talk to your pharmacy. The system is <span className="text-white font-bold">broken and disconnected</span>.
            </p>
            <div className="pl-6 border-l-2 border-primary/30">
              <p className="text-white text-lg italic">
                "We believe healthcare should be as simple as ordering a ride or booking a hotel."
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              { title: "Paper Records", desc: "Files get lost. History is forgotten." },
              { title: "Slow Approvals", desc: "Waiting days for insurance to say yes." },
              { title: "Admin Overload", desc: "Doctors spend more time typing than treating." },
              { title: "Lost Prescriptions", desc: "Handwritten notes that pharmacies can't read." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded bg-zinc-900/50 border border-zinc-800">
                <X className="text-red-500 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-bold">{item.title}</h4>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- DYNAMIC DEVICE COMPONENT ---
// Morphs between Phone (Mobile) and Dashboard (Desktop)
const DynamicDevice = ({ activeFeature }: { activeFeature: string }) => {
  const currentFeature = FEATURES.find(f => f.id === activeFeature) || FEATURES[0];
  const isDesktop = ['pharmacy', 'insurer', 'hospital'].includes(activeFeature);

  return (
    <motion.div 
      layout
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      className={`relative bg-black border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden ring-1 ring-white/10`}
      style={{
        width: isDesktop ? 800 : 320,
        height: isDesktop ? 500 : 650,
        borderRadius: isDesktop ? 20 : 48,
      }}
    >
      {/* Notch (Only visible on mobile) */}
      {!isDesktop && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20" />
      )}

      {/* Screen Content Wrapper */}
      <div className={`w-full h-full bg-[#0a0a0a] flex flex-col ${isDesktop ? 'p-0' : 'pt-12 px-5'} relative overflow-hidden`}>
        
        {/* Mobile Status Bar */}
        {!isDesktop && (
          <div className="flex justify-between items-center mb-6 px-1">
            <span className="text-[10px] font-bold text-white">9:41</span>
            <div className="flex gap-1.5">
              <div className="w-4 h-1.5 bg-white rounded-full"></div>
              <div className="w-3 h-1.5 bg-zinc-600 rounded-full"></div>
            </div>
          </div>
        )}

        {/* Desktop Navbar (Only visible on desktop) */}
        {isDesktop && (
          <div className="h-10 bg-[#1a1a1a] border-b border-zinc-800 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-xs text-zinc-500 font-mono">MedEuphoria Professional Suite</div>
          </div>
        )}

        {/* CONTENT AREA */}
        <AnimatePresence mode='wait'>
          
          {/* 1. PATIENT (MOBILE) */}
          {activeFeature === 'patient' && (
            <motion.div key="patient" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <div><div className="text-zinc-400 text-xs mb-1">HELLO</div><div className="text-white font-bold text-xl">Thubelihle.</div></div>
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center"><Users size={18} className="text-primary" /></div>
              </div>
              <div className="bg-primary p-5 rounded-3xl mb-6 shadow-lg shadow-primary/20 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3"><div className="bg-black/20 p-1.5 rounded-full"><Video size={14} className="text-black" /></div><span className="text-black font-bold text-xs uppercase tracking-wide">Up Next</span></div>
                  <div className="text-black font-bold text-2xl mb-1">14:00</div><div className="text-black/70 font-medium text-sm">Dr. Tshivhasa</div>
                </div>
                <Activity className="absolute -right-4 -bottom-4 text-black/10 w-32 h-32" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800"><Pill className="text-white mb-3" size={24} /><div className="text-zinc-400 text-xs">Scripts</div><div className="text-white font-bold">3 Active</div></div>
                <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800"><Activity className="text-white mb-3" size={24} /><div className="text-zinc-400 text-xs">Vitals</div><div className="text-white font-bold">Stable</div></div>
              </div>
            </motion.div>
          )}

          {/* 2. DOCTOR (MOBILE) */}
          {activeFeature === 'doctor' && (
            <motion.div key="doctor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <div><div className="text-zinc-400 text-xs mb-1">WORKSPACE</div><div className="text-white font-bold text-xl">Dr. Tshivhasa</div></div>
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center"><Stethoscope size={18} className="text-white" /></div>
              </div>
              <div className="bg-zinc-900 border-l-4 border-[#A855F7] p-4 rounded-r-xl mb-6">
                <div className="flex justify-between mb-1"><span className="text-white font-bold text-lg">Thubelihle.</span><span className="text-[#A855F7] font-bold">14:00</span></div>
                <span className="text-zinc-400 text-sm">Follow-up: Migraine</span>
              </div>
              <div className="space-y-2">
                <div className="bg-zinc-900 p-3 rounded-xl flex items-center gap-3"><div className="p-2 bg-zinc-800 rounded-lg"><Search size={16} className="text-white"/></div><span className="text-white text-sm font-medium">Patient DB</span></div>
                <div className="bg-zinc-900 p-3 rounded-xl flex items-center gap-3"><div className="p-2 bg-zinc-800 rounded-lg"><Pill size={16} className="text-white"/></div><span className="text-white text-sm font-medium">Write Script</span></div>
              </div>
            </motion.div>
          )}

          {/* 3. PHARMACY (DESKTOP) */}
          {activeFeature === 'pharmacy' && (
            <motion.div key="pharmacy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-full">
              <div className="w-48 bg-zinc-900 border-r border-zinc-800 p-4 hidden md:block">
                 <div className="text-xs text-zinc-500 font-bold mb-4">DISPENSARY OS</div>
                 <div className="space-y-2">
                   <div className="p-2 bg-zinc-800 rounded text-white text-sm font-bold">Live Queue</div>
                   <div className="p-2 text-zinc-400 text-sm">Inventory</div>
                   <div className="p-2 text-zinc-400 text-sm">Reports</div>
                 </div>
              </div>
              <div className="flex-1 p-6 bg-black">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">Incoming Scripts</h3>
                    <div className="text-[#10B981] text-sm font-bold bg-[#10B981]/10 px-3 py-1 rounded-full">System Live</div>
                 </div>
                 <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-4 gap-4 p-3 border-b border-zinc-800 text-xs text-zinc-500 font-bold uppercase">
                      <div>ID</div><div>Medication</div><div>Status</div><div>Action</div>
                    </div>
                    {[1,2,3].map(i => (
                      <div key={i} className="grid grid-cols-4 gap-4 p-3 border-b border-zinc-800/50 items-center text-sm">
                        <div className="font-mono text-zinc-400">#RX-92{i}</div>
                        <div className="text-white">Amoxicillin 500mg</div>
                        <div className="text-[#10B981]">Ready</div>
                        <div><button className="bg-[#10B981] text-black px-3 py-1 rounded font-bold text-xs">Dispense</button></div>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          )}

          {/* 4. INSURER (DESKTOP) */}
          {activeFeature === 'insurer' && (
            <motion.div key="insurer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-full">
              <div className="w-48 bg-zinc-900 border-r border-zinc-800 p-4 hidden md:block">
                 <div className="text-xs text-zinc-500 font-bold mb-4">CLAIMS ADMIN</div>
                 <div className="space-y-2">
                   <div className="p-2 bg-zinc-800 rounded text-white text-sm font-bold">Dashboard</div>
                   <div className="p-2 text-zinc-400 text-sm">Fraud Alert</div>
                   <div className="p-2 text-zinc-400 text-sm">Members</div>
                 </div>
              </div>
              <div className="flex-1 p-6 bg-black">
                 <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800"><div className="text-2xl font-bold text-white">1,240</div><div className="text-xs text-zinc-500">Claims Today</div></div>
                    <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800"><div className="text-2xl font-bold text-[#F59E0B]">82%</div><div className="text-xs text-zinc-500">Auto-Approved</div></div>
                    <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800"><div className="text-2xl font-bold text-[#EF4444]">14</div><div className="text-xs text-zinc-500">Fraud Flags</div></div>
                 </div>
                 <div className="bg-zinc-900 border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-bold">Processing: GP Visit</span>
                      <span className="text-[#F59E0B] text-xs font-bold animate-pulse">AI ANALYZING...</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full mt-2 overflow-hidden"><div className="h-full w-2/3 bg-[#F59E0B]"></div></div>
                 </div>
              </div>
            </motion.div>
          )}

          {/* 5. HOSPITAL (DESKTOP) */}
          {activeFeature === 'hospital' && (
            <motion.div key="hospital" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-full">
              <div className="w-48 bg-zinc-900 border-r border-zinc-800 p-4 hidden md:block">
                 <div className="text-xs text-zinc-500 font-bold mb-4">WARD MANAGER</div>
                 <div className="space-y-2">
                   <div className="p-2 bg-zinc-800 rounded text-white text-sm font-bold">Bed Map</div>
                   <div className="p-2 text-zinc-400 text-sm">Admissions</div>
                   <div className="p-2 text-zinc-400 text-sm">Staffing</div>
                 </div>
              </div>
              <div className="flex-1 p-6 bg-black">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">ICU Ward A</h3>
                    <div className="flex gap-2 text-xs">
                       <span className="flex items-center gap-1 text-[#EF4444]"><div className="w-2 h-2 bg-[#EF4444] rounded-full"/> Critical</span>
                       <span className="flex items-center gap-1 text-[#10B981]"><div className="w-2 h-2 bg-[#10B981] rounded-full"/> Free</span>
                    </div>
                 </div>
                 <div className="grid grid-cols-4 gap-3">
                    {[...Array(8)].map((_,i) => (
                      <div key={i} className={`aspect-square rounded-lg border flex items-center justify-center font-bold text-lg
                        ${i === 0 || i === 3 ? 'bg-[#EF4444]/10 border-[#EF4444]/30 text-[#EF4444]' : 
                          i === 2 ? 'bg-zinc-900 border-zinc-800 text-zinc-600' :
                          'bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981]'}`}>
                        A{i+1}
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </motion.div>
  );
};

// --- SCROLL SECTION WRAPPER ---
const ScrollSection = ({ feature, setRef }: { feature: any, setRef: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) setRef(feature.id);
  }, [isInView, feature.id, setRef]);

  return (
    <div 
      ref={ref}
      className="min-h-screen flex items-center px-6 lg:px-20 border-b border-zinc-900 last:border-0"
    >
      <div className="max-w-xl">
        <div className="inline-block px-3 py-1 rounded-full border border-zinc-800 text-xs font-bold uppercase tracking-widest mb-6" style={{ color: feature.color, borderColor: feature.color }}>
          {feature.title}
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
          {feature.heading}
        </h2>
        <p className="text-xl text-zinc-400 leading-relaxed mb-10">
          {feature.desc}
        </p>
      </div>
    </div>
  );
};

// --- CONTACT FORM ---
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', inquiryType: 'Partnership', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', inquiryType: 'Partnership', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-black to-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Ready to feel <br/>
            <span className="text-primary">better?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
            We are currently onboarding select medical partners and investors for our Series A round.
          </p>
          <div className="flex items-center gap-3 text-white font-bold text-lg">
            <Mail className="text-primary" />
            investors@medeuphoria.com
          </div>
        </div>
        
        <div className="flex-1 w-full bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm">
          {status === 'success' ? (
            <div className="h-64 flex flex-col items-center justify-center text-center">
              <CheckCircle2 size={48} className="text-primary mb-4" />
              <h3 className="text-white font-bold text-xl">Message Received</h3>
              <p className="text-zinc-400 mt-2">Our team will be in touch shortly.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-primary underline">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="text-xs text-zinc-500 uppercase tracking-widest mb-2 block font-bold">Organization / Name</label>
                <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-primary outline-none transition-colors" />
              </div>
              <div>
                <label className="text-xs text-zinc-500 uppercase tracking-widest mb-2 block font-bold">Email Address</label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-primary outline-none transition-colors" />
              </div>
              <div>
                <label className="text-xs text-zinc-500 uppercase tracking-widest mb-2 block font-bold">Inquiry Type</label>
                <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-primary outline-none transition-colors appearance-none">
                  <option>Partnership</option>
                  <option>Investment</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-zinc-500 uppercase tracking-widest mb-2 block font-bold">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-primary outline-none transition-colors"></textarea>
              </div>
              
              <button type="submit" disabled={status === 'loading'} className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-white transition-colors text-lg mt-2 flex justify-center items-center gap-2">
                {status === 'loading' ? <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent" /> : "Submit Inquiry"}
              </button>
              
              {status === 'error' && <p className="text-red-500 text-sm text-center">Failed to send. Please try again.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black py-24 px-6 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto">
      
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        
        {/* Brand Column (Span 4) */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 relative rounded bg-white/10 flex items-center justify-center overflow-hidden">
               <img src="/logoo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">MedEuphoria</span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-8">
            The operating system for modern healthcare. Connecting patients, providers, and payers in one unified, real-time ecosystem.
          </p>
          <div className="flex gap-4">
            {/* Social Icons (Placeholders) */}
            {[1,2,3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 hover:bg-white hover:text-black transition-colors cursor-pointer">
                <Globe size={14} />
              </div>
            ))}
          </div>
        </div>

        {/* Links Column 1: Platform */}
        <div className="md:col-span-2 md:col-start-6">
          <h4 className="text-white font-bold mb-6 text-sm">Platform</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><Link href="/patients" className="hover:text-primary transition-colors">For Patients</Link></li>
            <li><Link href="/doctors" className="hover:text-primary transition-colors">For Doctors</Link></li>
            <li><Link href="/pharmacy" className="hover:text-primary transition-colors">For Pharmacies</Link></li>
            <li><Link href="/insurers" className="hover:text-primary transition-colors">For Insurers</Link></li>
            <li><Link href="/hospitals" className="hover:text-primary transition-colors">For Hospitals</Link></li>
          </ul>
        </div>

        {/* Links Column 2: Company */}
        <div className="md:col-span-2">
          <h4 className="text-white font-bold mb-6 text-sm">Company</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><Link href="/vision" className="hover:text-white transition-colors">Vision</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Links Column 3: Legal */}
        <div className="md:col-span-2">
          <h4 className="text-white font-bold mb-6 text-sm">Legal</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
            <li><Link href="/hipaa" className="hover:text-white transition-colors">HIPAA Status</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
        <p>© 2026 MedEuphoria Health Technologies. All rights reserved.</p>
        {/* <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>Systems Operational</span>
        </div> */}
        {/* <p>Johannesburg • Cape Town • Nairobi</p> */}
      </div>
    </div>
  </footer>
);

export default function Home() {
  const [activeFeature, setActiveFeature] = useState('patient');

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <ProblemStatement />

      {/* STICKY SCROLL SECTION */}
      <div id="platform" className="relative">
        <div className="hidden lg:block sticky top-0 h-screen w-full pointer-events-none z-10">
          <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-auto h-auto flex items-center justify-center">
            {/* 
               The wrapper div allows the DynamicDevice 
               to expand from 320px (Phone) to 800px (Desktop)
            */}
            <DynamicDevice activeFeature={activeFeature} />
          </div>
        </div>

        <div className="relative z-0">
          {FEATURES.map((feature) => (
            <ScrollSection key={feature.id} feature={feature} setRef={setActiveFeature} />
          ))}
        </div>
      </div>

      <ContactSection />
      <Footer />
    </main>
  );
}