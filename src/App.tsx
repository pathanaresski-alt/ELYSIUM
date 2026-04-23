import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Calendar, User, Instagram, Facebook, Scissors, Activity, Shield, Globe, ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from './lib/utils';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import { auth } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-bento-bg text-bento-text selection:bg-brand-orange selection:text-white overflow-x-hidden font-sans">
        {/* Modern Capsule Navigation */}
        <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6 md:p-8 pointer-events-none">
          <motion.nav 
            animate={{ 
              width: scrolled ? '400px' : 'calc(100% - 48px)',
              y: scrolled ? 10 : 0
            }}
            className={cn(
              "flex justify-between items-center h-14 md:h-16 px-6 md:px-10 rounded-full border border-white/10 backdrop-blur-2xl transition-all duration-500 pointer-events-auto",
              scrolled ? "bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "bg-black/10 w-full"
            )}
          >
            <Link to="/" className="text-xl font-black tracking-tighter uppercase italic group relative flex items-center">
              <span className="relative z-10">ELYSIUM</span>
              <motion.div 
                className="absolute -inset-2 bg-brand-orange/0 group-hover:bg-brand-orange/10 rounded-lg -rotate-3 transition-colors"
              />
            </Link>

            <div className="flex items-center gap-6">
              {!scrolled && (
                <div className="hidden md:flex gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-white/50">
                  <Link to="/booking" className="hover:text-white hover:tracking-[0.5em] transition-all">Booking</Link>
                  <Link to="/shop" className="hover:text-white hover:tracking-[0.5em] transition-all">Store</Link>
                  <Link to="/profile" className="hover:text-white hover:tracking-[0.5em] transition-all">Identity</Link>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="group flex items-center gap-3 bg-white/5 hover:bg-brand-orange px-4 py-2 rounded-full border border-white/5 hover:border-brand-orange/50 transition-all"
                >
                  <span className="text-[9px] font-black uppercase tracking-widest text-white group-hover:text-black">Menu</span>
                  <div className="flex flex-col gap-1">
                    <div className="w-4 h-[1.5px] bg-white group-hover:bg-black transition-colors" />
                    <div className="w-4 h-[1.5px] bg-white group-hover:bg-black transition-colors translate-x-1" />
                  </div>
                </button>
              </div>
            </div>
          </motion.nav>
        </div>

        {/* Fullscreen Editorial Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-black isolate overflow-hidden"
            >
              {/* Background Geometric Elements */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-orange/10 rounded-full" />
              </div>

              <div className="relative h-full flex flex-col md:flex-row items-center justify-between p-6 sm:p-12 md:p-24 overflow-y-auto overflow-x-hidden">
                {/* Visual Accent */}
                <div className="hidden lg:block w-1/3">
                  <span className="text-brand-orange text-[10px] font-black uppercase tracking-[1em] block mb-8">Navigation Archive</span>
                  <h2 className="text-7xl font-bento-title leading-none italic opacity-5 border-l-2 border-brand-orange pl-8">
                    THE<br/>MODERN<br/>SYSTEM.
                  </h2>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col items-center md:items-end justify-center min-h-full py-20 gap-4 md:gap-6 flex-1 w-full translate-y-4 md:translate-y-0">
                  {['Home', 'Booking', 'Services', 'Shop', 'Profile', 'Archive'].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.8, ease: "circOut" }}
                      className="group w-full flex justify-center md:justify-end"
                    >
                      <Link 
                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl sm:text-3xl md:text-5xl font-black italic uppercase tracking-tight leading-tight flex items-center gap-3 transition-all hover:text-brand-orange hover:-translate-x-2 md:hover:-translate-x-4 whitespace-nowrap"
                      >
                        <span className="text-brand-orange text-[8px] sm:text-[10px] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">0{i+1}</span>
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Close Button */}
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-6 right-6 sm:top-12 sm:right-12 p-4 sm:p-8 group flex items-center gap-2 sm:gap-4 z-[120]"
                >
                   <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-brand-orange transition-colors">Close</span>
                   <X className="w-8 h-8 sm:w-12 sm:h-12 text-white group-hover:rotate-90 transition-transform duration-500" />
                </button>

                {/* Bottom Stats/Info */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12 flex flex-col md:flex-row justify-between items-center sm:items-end md:items-center pt-6 border-t border-white/5 bg-black/80 backdrop-blur-sm z-[115]">
                   <div className="flex gap-8 sm:gap-12 mb-4 md:mb-0">
                      <div>
                        <h4 className="text-white/20 text-[8px] sm:text-[9px] font-black tracking-widest uppercase mb-1 sm:mb-2">Location</h4>
                        <p className="text-[10px] sm:text-xs uppercase font-bold tracking-widest">Milan, Italy</p>
                      </div>
                      <div>
                        <h4 className="text-white/20 text-[8px] sm:text-[9px] font-black tracking-widest uppercase mb-1 sm:mb-2">Instagram</h4>
                        <p className="text-[10px] sm:text-xs uppercase font-bold tracking-widest">@elysium_milan</p>
                      </div>
                   </div>
                   <div className="text-brand-orange text-[8px] sm:text-[9px] font-black uppercase tracking-[0.5em]">
                     Elite Circle Exclusive
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        {/* 🏛️ Elegant Editorial Footer */}
        <footer className="mt-32 pt-24 pb-12 bg-black border-t border-white/5 relative overflow-hidden">
          {/* Background Branding Watermark */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.02] whitespace-nowrap">
            <span className="text-[20vw] font-black uppercase leading-none tracking-tighter">ELYSIUM</span>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Top Row: Brand & Newsletter */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-brand-orange flex items-center justify-center">
                    <Scissors className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-2xl font-bento-title uppercase tracking-tighter">ELYSIUM.</h4>
                </div>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest leading-loose max-w-xs">
                  Redefining the architecture of luxury grooming in Milan. Experience the fusion of geometric precision and cinematic wellness.
                </p>
              </div>

              <div className="lg:col-span-8 flex flex-col md:flex-row justify-end gap-12 md:gap-24">
                <div className="flex flex-col gap-4">
                  <span className="text-brand-orange text-[9px] font-black uppercase tracking-widest">Connect</span>
                  <ul className="flex flex-col gap-3">
                    {['Instagram', 'TikTok', 'Facebook', 'X / Twitter'].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-xs uppercase font-bold tracking-widest text-white/60 hover:text-white flex items-center gap-2 transition-all group">
                          {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-brand-orange text-[9px] font-black uppercase tracking-widest">Explore</span>
                  <ul className="flex flex-col gap-3">
                    {['Services', 'Archive', 'Boutique', 'Membership'].map((item) => (
                      <li key={item}>
                        <Link to="/" className="text-xs uppercase font-bold tracking-widest text-white/60 hover:text-white transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4 max-w-sm">
                  <span className="text-brand-orange text-[9px] font-black uppercase tracking-widest">System Update</span>
                  <div className="relative group">
                    <input 
                      type="email" 
                      placeholder="EMAIL@ADDRESS.COM" 
                      className="w-full bg-transparent border-b border-white/10 py-3 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-brand-orange transition-colors"
                    />
                    <button className="absolute right-0 bottom-3 text-white/40 hover:text-brand-orange transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[8px] text-white/20 uppercase font-bold tracking-widest mt-2">
                    Join the system for exclusive FW24 drops.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row: Metadata & Legal */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.2em] text-white/20 font-mono">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-white/40">
                  <Globe className="w-3 h-3" />
                  <span>MILAN, IT</span>
                </div>
                <span>© 2024 ELYSIUM BOUTIQUE</span>
              </div>
              
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <div className="hidden lg:flex items-center gap-2 text-brand-orange/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange/40" />
                  <span>Verified System</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
