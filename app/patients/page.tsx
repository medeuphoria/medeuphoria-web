"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
// Removed unused 'Link' import to prevent build errors
import { 
  Activity, ArrowRight, Play, CheckCircle2, 
  Smartphone, Shield, Clock, MapPin, 
  FileText, Heart, Video, Menu, X, Pill, 
  Calendar, User
} from 'lucide-react';

// --- ANIMATION HELPERS ---
// FIXED: Removed 'ease' property to prevent TypeScript build errors
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
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
             <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">MedEuphoria</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">For Patients</span>
        </div>
        <a href="#join" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-0.5">
          Join Waitlist
        </a>
      </div>
    </nav>
  );
};

// --- HERO SECTION ---
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden border-b border-zinc-900 bg-[#050505]">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[150px] animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/80 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-white uppercase tracking-widest">Patient Access v1.0</span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Healthcare, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-blue-400">Finally Human.</span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-xl text-zinc-400 max-w-lg mb-10 leading-relaxed font-light">
            Skip the waiting room. Access your medical history, book specialists instantly, and get prescriptions delivered—all from one secure app.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
            <a href="#join" className="h-14 px-8 rounded-full bg-primary text-black font-bold text-lg flex items-center justify-center gap-2 hover:bg-white transition-all shadow-[0_0_40px_rgba(0,188,212,0.4)]">
              Get Early Access <ArrowRight size={20} />
            </a>
            <a href="#features" className="h-14 px-8 rounded-full border border-zinc-800 text-white font-medium text-lg flex items-center justify-center gap-3 hover:bg-white/5 transition-all">
              <Play size={14} fill="currentColor" /> Watch Video
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Phone Visual */}
        <motion.div style={{ y }} className="relative hidden lg:flex justify-center">
          <div className="relative w-[340px] h-[680px] bg-black border-[8px] border-[#222] rounded-[3.5rem] shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* Screen */}
            <div className="w-full h-full bg-[#0a0a0a] flex flex-col pt-14 px-6 relative">
              {/* Top Notch Area */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
              
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                   <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Good Morning</div>
                   <div className="text-white font-bold text-2xl">Sarah</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                   <User size={18} className="text-primary" />
                </div>
              </div>

              {/* Vitals Card (Animated) */}
              <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-3xl mb-4 relative overflow-hidden">
                 <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                       <div className="p-2 bg-red-500/10 rounded-full text-red-500"><Heart size={16} fill="currentColor" /></div>
                       <span className="text-sm font-bold text-white">Heart Rate</span>
                    </div>
                    <span className="text-xs text-zinc-500">LIVE</span>
                 </div>
                 <div className="flex items-end gap-1 h-12 mb-2">
                    {[40, 60, 45, 70, 55, 85, 60, 50, 65, 45].map((h, i) => (
                       <motion.div 
                         key={i}
                         animate={{ height: [`${h}%`, `${h - 20}%`, `${h}%`] }}
                         transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                         className="flex-1 bg-gradient-to-t from-red-500/50 to-red-500 rounded-full"
                       />
                    ))}
                 </div>
                 <div className="text-3xl font-bold text-white">72 <span className="text-sm text-zinc-500 font-normal">BPM</span></div>
              </div>

              {/* Appointment Card */}
              <div className="bg-primary p-5 rounded-3xl mb-4 shadow-lg shadow-primary/20">
                 <div className="flex justify-between items-start mb-4">
                    <div>
                       <div className="text-black/60 text-xs font-bold uppercase mb-1">Up Next • 10:00</div>
                       <div className="text-black font-bold text-xl">Dr. Tshivhasa</div>
                       <div className="text-black/80 text-sm">General Practitioner</div>
                    </div>
                    <div className="bg-black/10 p-2 rounded-full"><Video className="text-black" size={20} /></div>
                 </div>
                 <div className="w-full bg-black/10 h-10 rounded-xl flex items-center justify-center text-black font-bold text-sm">
                    Join Video Call
                 </div>
              </div>

              {/* Navigation */}
              <div className="mt-auto mb-8 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-2 rounded-full flex justify-between px-6">
                 <div className="p-3 bg-primary rounded-full text-black"><Activity size={20} /></div>
                 <div className="p-3 text-zinc-500"><Calendar size={20} /></div>
                 <div className="p-3 text-zinc-500"><FileText size={20} /></div>
                 <div className="p-3 text-zinc-500"><Menu size={20} /></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- FEATURE BLOCK 1: UNIVERSAL RECORD ---
const FeatureOne = () => {
  return (
    <section className="py-32 px-6 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
         <div className="flex-1">
            <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 border border-zinc-800 text-primary">
               <FileText size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your health history.<br/>In your hands.</h2>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
               Stop filling out the same clipboard at every new doctor. Your allergies, past surgeries, and current medications travel with you in a secure, encrypted digital passport.
            </p>
            <ul className="space-y-4">
               {['End-to-End Encrypted', 'Share with consent', 'Always accessible'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                     <CheckCircle2 className="text-primary" size={20} /> {item}
                  </li>
               ))}
            </ul>
         </div>
         <div className="flex-1 relative">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
            <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white font-bold">SJ</div>
                  <div>
                     <div className="text-white font-bold">Sarah Jenkins</div>
                     <div className="text-zinc-500 text-xs">ID: #88291-ZA</div>
                  </div>
                  <div className="ml-auto bg-green-500/10 text-green-500 text-xs font-bold px-3 py-1 rounded-full">VERIFIED</div>
               </div>
               <div className="space-y-3">
                  {['Blood Type: O+', 'Allergies: Penicillin', 'Chronic: None'].map((info, i) => (
                     <div key={i} className="flex justify-between p-4 bg-black border border-zinc-800 rounded-xl">
                        <span className="text-zinc-400 text-sm">{info.split(':')[0]}</span>
                        <span className="text-white font-bold text-sm">{info.split(':')[1]}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

// --- FEATURE BLOCK 2: INSTANT CARE ---
const FeatureTwo = () => {
  return (
    <section className="py-32 px-6 bg-[#050505] border-b border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-20">
         <div className="flex-1">
            <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 border border-zinc-800 text-purple-500">
               <Video size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">See a specialist.<br/>Right now.</h2>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
               Don't wait weeks for an appointment. Filter doctors by rating, price, and language, then book a secure video consultation instantly.
            </p>
            <button className="text-white font-bold flex items-center gap-2 hover:gap-4 transition-all group">
               Browse Doctors <ArrowRight className="text-purple-500 group-hover:text-white transition-colors" />
            </button>
         </div>
         
         <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex flex-col gap-4 hover:border-purple-500/50 transition-colors cursor-pointer group">
               <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700" />
               <div>
                  <div className="text-white font-bold">Dr. Nkosi</div>
                  <div className="text-purple-400 text-xs">Cardiologist</div>
               </div>
               <div className="mt-auto flex justify-between items-center text-xs text-zinc-500">
                  <span>Available Now</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               </div>
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex flex-col gap-4 translate-y-12 opacity-50">
               <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700" />
               <div>
                  <div className="text-white font-bold">Dr. Patel</div>
                  <div className="text-purple-400 text-xs">Dermatologist</div>
               </div>
               <div className="mt-auto text-xs text-zinc-500">Next slot: 14:00</div>
            </div>
         </div>
      </div>
    </section>
  );
};

// --- FEATURE BLOCK 3: PRESCRIPTIONS ---
const FeatureThree = () => {
   return (
     <section className="py-32 px-6 bg-black border-b border-zinc-900">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
             <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 border border-zinc-800 text-green-500">
                <Pill size={32} />
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Prescriptions.<br/>Paperless.</h2>
             <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Your doctor sends the script directly to your app. Walk into any partner pharmacy, scan your QR code, and collect your medication.
             </p>
             <div className="flex gap-4">
               <div className="px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800 text-xs text-white font-mono">CODE: RX-9921</div>
               <div className="px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800 text-xs text-white font-mono">STATUS: READY</div>
             </div>
          </div>
          <div className="flex-1 flex justify-center">
             <div className="w-64 bg-white p-6 rounded-2xl shadow-2xl relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-black/20 rounded-full"></div>
                <div className="aspect-square bg-black rounded-xl flex items-center justify-center mb-4">
                   <div className="text-white text-xs font-mono text-center">
                      SCAN TO<br/>COLLECT
                      <div className="mt-2 w-32 h-32 bg-white/10 mx-auto rounded-lg grid grid-cols-6 gap-1 p-2">
                         {[...Array(36)].map((_, i) => <div key={i} className={`bg-white ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-20'}`} />)}
                      </div>
                   </div>
                </div>
                <div className="text-center">
                   <div className="text-black font-bold text-lg">Amoxicillin</div>
                   <div className="text-black/50 text-xs">500mg • 3x Daily</div>
                </div>
             </div>
          </div>
       </div>
     </section>
   );
 };

// --- WAITLIST CTA ---
const JoinSection = () => (
  <section id="join" className="py-32 px-6 bg-zinc-950 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black pointer-events-none" />
    
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
        Your health deserves <br/><span className="text-primary">an upgrade.</span>
      </h2>
      <p className="text-xl text-zinc-400 mb-12">
        We are rolling out gradually to ensure the best experience. Join the waitlist to be notified when we launch in your area.
      </p>
      
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="email" placeholder="Enter your email address" className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:border-primary outline-none transition-colors" />
        <button className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-white transition-colors text-lg">
          Join the Waitlist
        </button>
        <p className="text-xs text-zinc-600 mt-4">No spam. Only critical updates.</p>
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

export default function PatientsPage() {
  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <JoinSection />
      <Footer />
    </main>
  );
}