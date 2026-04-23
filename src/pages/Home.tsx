import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Calendar, Star, Scissors, ArrowRight, Play, MessageCircle, ShoppingBag, Plus, MoreHorizontal, ShieldCheck, User, Sparkles, Droplets, ScissorsLineDashed, Zap, Instagram, Twitter, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExpandingCards, type CardItem } from '../components/ui/expanding-cards';
import { DestinationCard } from '../components/ui/card-21';
import { CardStack, type CardStackItem } from '../components/ui/card-stack';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Card, CardContent } from '../components/ui/card';
import { Marquee } from '../components/ui/3d-testimonials';

const TESTIMONIALS = [
  {
    name: 'Christian V.',
    username: '@christian_v',
    body: 'THE ATMOSPHERE IS BEYOND LUXURY. ELYSIUM HAS MASTERED THE ART OF GEOMETRIC HAIR SYSTEM.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    country: '🇮🇹 Italy',
  },
  {
    name: 'Elena Rossi',
    username: '@elena_r',
    body: 'Incredible attention to detail. My architectural bob is perfect.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    country: '🇮🇹 Italy',
  },
  {
    name: 'Marco Bianco',
    username: '@marco_b',
    body: 'The hydration ritual is life-changing. Best salon in Milan.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    country: '🇮🇹 Italy',
  },
  {
    name: 'Sophia L.',
    username: '@sophia_style',
    body: 'Pure geometric precision. The color formulation is unmatched.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    country: '🇫🇷 France',
  },
  {
    name: 'Julian M.',
    username: '@julian_grooming',
    body: 'Technical barbering at its finest. Sharp, precise, and elite.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    country: '🇺🇸 USA',
  },
];

interface TestimonialCardProps {
  key?: any;
  img: string;
  name: string;
  username: string;
  body: string;
  country: string;
}

function TestimonialCard({ img, name, username, body, country }: TestimonialCardProps) {
  return (
    <Card className="w-80 bg-white/5 border-white/10 backdrop-blur-md">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border-2 border-brand-orange">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-brand-orange text-white">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-black uppercase italic tracking-tighter text-white flex items-center gap-2">
              {name} <span className="text-xs not-italic">{country}</span>
            </figcaption>
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">{username}</p>
          </div>
        </div>
        <blockquote className="mt-4 text-xs font-bold uppercase tracking-widest text-white/60 leading-relaxed italic">
          "{body}"
        </blockquote>
      </CardContent>
    </Card>
  );
}

const SERVICES: CardItem[] = [
  { 
    id: '1', 
    title: "Ladies Precision", 
    description: "Architectural cutting tailored to demand precision and avant-garde aesthetic.", 
    imgSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800", 
    icon: <ScissorsLineDashed size={24} />,
    linkHref: "/booking" 
  },
  { 
    id: '2', 
    title: "Couture Color", 
    description: "High-contrast formulation using signature pigments for a customized finish.", 
    imgSrc: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", 
    icon: <Sparkles size={24} />,
    linkHref: "/booking" 
  },
  { 
    id: '3', 
    title: "Brazilian Blow", 
    description: "Molecular keratin infusion for absolute control and mirror-like reflection.", 
    imgSrc: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800", 
    icon: <Droplets size={24} />,
    linkHref: "/booking" 
  },
  { 
    id: '4', 
    title: "Gents Fade", 
    description: "Technical barbering focused on sharp geometry and effortless transition.", 
    imgSrc: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", 
    icon: <User size={24} />,
    linkHref: "/booking" 
  },
  { 
    id: '5', 
    title: "B3 Perm Ritual", 
    description: "Next-gen restructuring therapy that preserves integrity while adding texture.", 
    imgSrc: "https://images.unsplash.com/photo-1595476108010-b4d1f8c2b1b1?auto=format&fit=crop&q=80&w=800", 
    icon: <Zap size={24} />,
    linkHref: "/booking" 
  },
];

const GALLERY = [
  { id: 1, title: "Sculpted Fade", category: "Male", img: "https://images.unsplash.com/photo-1621605815841-aa8db799052d?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Architectural Bob", category: "Female", img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Hydra-Facial Ritual", category: "Beauty", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Elysium Glow Serum", category: "Products", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Textured Crop", category: "Male", img: "https://images.unsplash.com/photo-1599351431247-f5091e38ef5a?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Intense Hydration", category: "Products", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" },
  { id: 7, title: "Avant-Garde Wave", category: "Female", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800" },
  { id: 8, title: "Bridal Couture", category: "Beauty", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800" },
];

const TEAM = [
  { 
    id: 1, 
    name: "Alessandro V.", 
    role: "Lead Master Barber", 
    bio: "Specializes in straight-razor precision and technical fades using signature carbon steel instruments.", 
    gender: "Male", 
    experience: "15+", 
    img: "https://images.unsplash.com/photo-1599351431247-f5091e38ef5a?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 2, 
    name: "Juliana R.", 
    role: "Art Director", 
    bio: "Master of high-saturation pigments and editorial transitions in signature Elysium laboratory attire.", 
    gender: "Female", 
    experience: "12+", 
    img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 3, 
    name: "Marco D.", 
    role: "Senior Barber", 
    bio: "Classic Italian techniques fused with modern molecular tools for weightless texture and shape.", 
    gender: "Male", 
    experience: "10+", 
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    name: "Sofia B.", 
    role: "Hair Designer", 
    bio: "Focused on architectural aesthetics and molecular scalp rituals with precision-engineered tools.", 
    gender: "Female", 
    experience: "8+", 
    img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 5, 
    name: "Luca M.", 
    role: "Technical Specialist", 
    bio: "Curator of avant-garde structure and technical grooming records within the Milan unit.", 
    gender: "Male", 
    experience: "11+", 
    img: "https://images.unsplash.com/photo-1512690196236-4bab3b68383f?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 6, 
    name: "Elena S.", 
    role: "Master Stylist", 
    bio: "Expert in geometric bobs and high-definition bridal couture in signature uniform.", 
    gender: "Female", 
    experience: "14+", 
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" 
  },
];

export default function Home() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="flex flex-col pb-24 space-y-0">
      {/* 🖼️ 1. Hero Section (Award-Winning Architectural Concept) */}
      <section className="relative h-[100vh] w-full overflow-hidden rounded-sm bg-black border-b border-white/5">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover grayscale opacity-40 scale-110"
          >
            <source src="https://res.cloudinary.com/dfzfkvltl/video/upload/v1776959287/3996971-uhd_2160_4096_25fps_dbppyl.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Technical Graphics & Blueprint Overlays */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
            <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.05" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.05" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.05" strokeDasharray="1,2" />
          </svg>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-[800px] h-[800px] border-[0.5px] border-white/10 rounded-full relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-orange/20 rounded-full blur-xl" />
            {/* Degree Markers */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <div 
                key={deg}
                style={{ transform: `rotate(${deg}deg) translateY(-400px)` }}
                className="absolute top-1/2 left-1/2 w-[1px] h-4 bg-white/20 origin-bottom"
              />
            ))}
          </motion.div>
          <div className="absolute w-[1200px] h-[1px] bg-white/5 rotate-12" />
          <div className="absolute w-[1200px] h-[1px] bg-white/5 -rotate-12" />
          
          {/* Coordinate Data */}
          <div className="absolute top-24 right-24 text-[6px] font-mono text-white/20 hidden md:block leading-relaxed">
            LAT: 45.4642° N<br />
            LNG: 9.1900° E<br />
            SYSTEM_LOAD: 98.4%
          </div>
        </div>
        
        {/* Minimalist Central Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
               <div className="w-8 h-[1px] bg-brand-orange" />
               <span className="text-brand-orange text-[9px] font-black uppercase tracking-[1em]">Milan System</span>
               <div className="w-8 h-[1px] bg-brand-orange" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.8]">
              MODERN<br/>
              <span className="text-transparent border-text uppercase tracking-widest">ARCHIVE</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-6 justify-center mt-16 pointer-events-auto">
              <motion.div whileHover="hover" initial="initial" className="relative">
                <Link to="/booking" className="relative z-10 block bg-brand-orange text-white px-12 py-5 font-black uppercase text-[9px] tracking-[0.2em] overflow-hidden group">
                  <motion.div variants={{ initial: { x: '-100%' }, hover: { x: 0 } }} className="absolute inset-0 bg-white" />
                  <span className="relative z-20 group-hover:text-black transition-colors duration-300">Book Appointment</span>
                </Link>
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-brand-orange z-30 pointer-events-none" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-brand-orange z-30 pointer-events-none" />
              </motion.div>

              <motion.div whileHover="hover" initial="initial" className="relative">
                <Link to="/booking" className="relative z-10 block border border-white/20 text-white px-12 py-5 font-black uppercase text-[9px] tracking-[0.2em] backdrop-blur-md group overflow-hidden">
                   <motion.div variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} className="absolute inset-0 bg-white/10" />
                  <span className="relative z-20">The Records</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 opacity-50">
           <span className="text-[7px] font-black uppercase tracking-[0.5em] rotate-90 mb-8 whitespace-nowrap">SCROLL FOR SYSTEM</span>
           <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
              <motion.div 
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-1/2 bg-brand-orange"
              />
           </div>
        </div>
      </section>

      {/* 2. Signature Rituals (Bento Style Accordion) */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-12 bg-[#0F1115] border-b border-white/5 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-brand-orange text-[9px] font-black uppercase tracking-[0.4em] block mb-3">The Selection</span>
              <h3 className="text-3xl md:text-6xl font-bento-title leading-none uppercase">Service Menu</h3>
            </div>
            <div className="hidden md:block text-[8px] text-white/20 font-mono tracking-widest">
              SYSTEM_RECORD_02 // FW24_SELECTION
            </div>
          </div>
          <ExpandingCards items={SERVICES} defaultActiveIndex={0} className="max-w-none h-[400px] md:h-[500px] border-none" />
        </div>
      </motion.section>

      {/* 🖼️ 3. Creative Archive Section (Technical Fan Stack) */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 px-8 md:px-12 bg-[#121212] border-b border-white/5 overflow-hidden"
      >
        <div className="text-center mb-24">
          <span className="text-brand-orange text-[9px] font-black uppercase tracking-[1em] block mb-3">The Records</span>
          <h3 className="text-4xl md:text-7xl font-bento-title uppercase leading-none">CREATIVE<br/><span className="text-white/20">ARCHIVE.</span></h3>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <CardStack
            items={[
              {
                id: 1,
                title: "Prismatic Pigments",
                description: "High-Saturation • Signature palette for architectural color evolution.",
                imageSrc: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800",
                href: "/booking",
              },
              {
                id: 2,
                title: "Avant-Garde Studio",
                description: "Vibrant Space • Where high-end interior meets creative precision.",
                imageSrc: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
                href: "/booking",
              },
              {
                id: 3,
                title: "Editorial Glow",
                description: "Cinematic Aura • Molecular skin rituals for high-contrast radiance.",
                imageSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
                href: "/booking",
              },
              {
                id: 4,
                title: "Structural Waves",
                description: "Geometric Flow • Technical styling for avant-garde hair architecture.",
                imageSrc: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800",
                href: "/booking",
              },
              {
                id: 5,
                title: "Chromalux Finish",
                description: "Mirror Surface • High-shine formulation for reflective color records.",
                imageSrc: "https://images.unsplash.com/photo-1595476108010-b4d1f8c2b1b1?auto=format&fit=crop&q=80&w=800",
                href: "/booking",
              }
            ]}
            initialIndex={2}
            autoAdvance
            intervalMs={3000}
            pauseOnHover
            showDots
            cardWidth={window.innerWidth < 768 ? 280 : 520}
            cardHeight={window.innerWidth < 768 ? 380 : 320}
          />
        </div>
      </motion.section>

      {/* 4. Before/After Transformation Slider */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-12 bg-[#0a0c10] border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6 md:space-y-8">
            <span className="text-brand-orange text-[9px] font-black uppercase tracking-[0.4em] block">The Transformation</span>
            <h3 className="text-4xl md:text-6xl font-bento-title leading-tight">THE POWER OF <br/><span className="text-white/20">PRECISION.</span></h3>
            <p className="text-white/40 text-[9px] uppercase tracking-widest leading-relaxed">Drag the slider to witness the architectural evolution from raw style to Elysium perfection.</p>
            <div className="pt-8 border-t border-white/10">
                <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">Custom Facial Contour</span>
                </div>
                <div className="flex gap-4 mt-4">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">Molecular Pigment Restructuring</span>
                </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bento-card cursor-ew-resize select-none"
               onMouseMove={(e) => {
                 if (e.buttons === 1) {
                   const rect = e.currentTarget.getBoundingClientRect();
                   const x = ((e.clientX - rect.left) / rect.width) * 100;
                   setSliderPos(Math.min(Math.max(x, 0), 100));
                 }
               }}
               onTouchMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
                  setSliderPos(Math.min(Math.max(x, 0), 100));
               }}
          >
            {/* After */}
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="After Elysium Transformation"
            />
            {/* Before */}
            <div className="absolute inset-0 pointer-events-none" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
              <img 
                src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" 
                alt="Before Elysium Transformation"
              />
            </div>
            {/* Slider Line */}
            <div className="absolute inset-y-0 w-1 bg-brand-orange shadow-[0_0_20px_#FF4D00] pointer-events-none" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-orange rounded-full border-4 border-black flex items-center justify-center">
                <MoreHorizontal className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>

      {/* 🧬 5. Elite Personnel Archive (The System Architects) */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-8 md:px-12 border-b border-white/5 bg-[#111317] overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="text-center mb-24 relative z-10">
          <span className="text-brand-orange text-[9px] font-black uppercase tracking-[1em] block mb-3">System Personnel</span>
          <h3 className="text-4xl md:text-7xl font-bento-title uppercase">ELITE STAFF.</h3>
          <p className="text-white/20 text-[8px] uppercase tracking-[0.5em] mt-4 font-mono">Precision_Engineers // Milan_Unit_01</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
          {TEAM.map((member) => (
            <motion.div 
              key={member.id}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-white/10 group-hover:border-brand-orange transition-colors duration-700">
                {/* Background ID Watermark */}
                <div className="absolute bottom-4 left-4 text-white/5 text-6xl font-black italic tracking-tighter group-hover:text-brand-orange/10 transition-colors duration-700">0{member.id}</div>
                
                <img 
                  src={member.img} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out" 
                  alt={member.name}
                  referrerPolicy="no-referrer"
                />
                
                {/* Uniform/Apparel Overlay Tag */}
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      <div className="flex justify-between items-end">
                         <div>
                            <p className="text-[7px] text-brand-orange font-black uppercase tracking-widest mb-1 italic">Uniform_Specs</p>
                            <p className="text-[9px] text-white/60 font-medium uppercase tracking-[0.2em]">Signature Lab Apron // FW24</p>
                         </div>
                         <div className="text-[10px] text-white opacity-40 font-mono">00{member.id}</div>
                      </div>
                   </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-0 right-0 p-4 overflow-hidden">
                  <div className="bg-brand-orange text-white text-[9px] font-black py-2 px-6 tracking-[0.3em] uppercase rotate-45 translate-x-6 -translate-y-4 shadow-xl">
                    {member.experience} EXP
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4 px-2">
                <div>
                   <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-none mb-1 group-hover:text-brand-orange transition-colors">{member.name}</h4>
                   <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                      <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">{member.role}</span>
                   </div>
                </div>
                
                <p className="text-[10px] text-white/30 uppercase leading-relaxed font-bold tracking-widest border-l border-white/10 pl-6 group-hover:border-brand-orange transition-colors italic">
                  "{member.bio}"
                </p>

                <div className="flex justify-between items-center pt-6 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                   <div className="flex gap-6">
                      <Instagram className="w-4 h-4 hover:text-brand-orange cursor-pointer transition-colors" />
                      <Twitter className="w-4 h-4 hover:text-brand-orange cursor-pointer transition-colors" />
                   </div>
                   <Link to="/booking" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] font-mono hover:text-brand-orange transition-colors">
                      BOOK_SLOT <ArrowRight className="w-3 h-3" />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 6. Featured Boutique & Stats Grid */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-white/5 bg-[#050505]"
      >
        {/* Boutique */}
        <div className="md:col-span-8 p-12 md:p-24 relative group overflow-hidden h-[400px] md:h-[600px] border-r border-white/5">
           <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000" 
            alt="Essentials"
           />
           <div className="absolute inset-0 bg-black/40 group-hover:bg-brand-orange/20 transition-colors"></div>
           <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-orange mb-2 block">New Arrivals</span>
                <h4 className="text-3xl md:text-5xl font-bento-title uppercase">ESSENTIALS.</h4>
              </div>
              <Link to="/shop" className="group flex items-center gap-4 text-xs font-black uppercase italic tracking-widest">
                Explore Boutique <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </div>

        {/* Stats */}
        <div className="md:col-span-4 bg-brand-orange text-white p-12 md:p-16 flex flex-col justify-between relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000" />
           <div className="flex justify-between items-start relative z-10">
              <h4 className="text-[9px] font-black uppercase tracking-[0.4em]">ELITE CIRCLE</h4>
              <ShieldCheck className="w-8 h-8" />
           </div>
           <div className="relative z-10">
              <span className="text-7xl md:text-9xl font-black italic lrading-none block tracking-tighter opacity-20 absolute -bottom-8 -left-4">05</span>
              <span className="text-6xl md:text-8xl font-black italic leading-none block tracking-tighter relative">05</span>
              <p className="text-[10px] font-black uppercase tracking-widest leading-none mt-2">Master Stylists Ready</p>
           </div>
           <div className="text-[8px] font-bold uppercase tracking-widest opacity-60 relative z-10 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Live Availability / 10AM - 8PM
           </div>
        </div>
      </motion.section>

      {/* 🚀 7. 3D Testimonial Archive */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-32 bg-[#14161a] overflow-hidden border-b border-white/5"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,77,0,0.05)_0%,transparent_70%)]" />
        
        <div className="text-center mb-24 relative z-10">
          <span className="text-brand-orange text-[9px] font-black uppercase tracking-[1em] block mb-3">Client Chronicles</span>
          <h3 className="text-4xl md:text-7xl font-bento-title uppercase">ELITE REVIEWS.</h3>
        </div>

        <div className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden gap-12 [perspective:1200px]">
          <div
            className="flex flex-row items-center gap-8"
            style={{
              transform: 'translateX(-50px) translateY(0px) translateZ(-200px) rotateX(15deg) rotateY(-15deg) rotateZ(10deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Vertical Marquee 1 */}
            <Marquee vertical pauseOnHover repeat={4} className="[--duration:35s]">
              {TESTIMONIALS.map((review) => (
                <TestimonialCard 
                  key={review.username} 
                  img={review.img}
                  name={review.name}
                  username={review.username}
                  body={review.body}
                  country={review.country}
                />
              ))}
            </Marquee>
            
            {/* Vertical Marquee 2 (Reverse) */}
            <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:45s]">
              {TESTIMONIALS.map((review) => (
                <TestimonialCard 
                  key={review.username}
                  img={review.img}
                  name={review.name}
                  username={review.username}
                  body={review.body}
                  country={review.country}
                />
              ))}
            </Marquee>

            {/* Vertical Marquee 3 */}
            <Marquee vertical pauseOnHover repeat={4} className="[--duration:25s] hidden md:flex">
              {TESTIMONIALS.map((review) => (
                <TestimonialCard 
                  key={review.username}
                  img={review.img}
                  name={review.name}
                  username={review.username}
                  body={review.body}
                  country={review.country}
                />
              ))}
            </Marquee>

            {/* Vertical Marquee 4 (Reverse) */}
            <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:40s] hidden md:flex">
              {TESTIMONIALS.map((review) => (
                <TestimonialCard 
                  key={review.username}
                  img={review.img}
                  name={review.name}
                  username={review.username}
                  body={review.body}
                  country={review.country}
                />
              ))}
            </Marquee>
          </div>

          {/* Gradients */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black z-20"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black z-20"></div>
        </div>
      </motion.section>

      {/* 8. Social Bridge & Final CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 bg-[#080808] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-30">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-orange p-12 md:p-24 flex flex-col md:flex-row justify-between items-center group overflow-hidden relative rounded-none"
          >
             <div className="absolute top-0 right-0 opacity-10 text-[6rem] md:text-[12rem] font-black italic tracking-tighter -translate-y-8 translate-x-12 select-none">ELYSIUM</div>
             
             <div className="relative z-10 mb-12 md:mb-0 text-center md:text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 mb-5 block">Join The System</span>
                <h4 className="text-4xl md:text-7xl font-bento-title uppercase text-white leading-none">ELITE<br/>CIRCLE.</h4>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/80 mt-6 max-w-sm">JOIN 12K+ MEMBERS TRACKING THE EVOLUTION OF THE ARCHITECTURAL HAIR SYSTEM.</p>
             </div>

             <a href="https://instagram.com" target="_blank" rel="noreferrer" className="relative z-10 flex items-center gap-6 bg-white text-brand-orange px-12 py-6 font-black uppercase italic tracking-widest text-base hover:gap-10 transition-all duration-500 shadow-2xl">
                FOLLOW ARCHIVE <Instagram className="w-6 h-6" />
             </a>
          </motion.div>
        </div>
      </motion.section>

      {/* WhatsApp Link */}
      <div className="fixed bottom-12 right-12 z-[100]">
        <motion.a
          href="https://wa.me/yournumber"
          target="_blank"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-20 h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_20px_60px_rgba(37,211,102,0.5)] border-8 border-black/10 group overflow-hidden"
        >
          <MessageCircle className="w-10 h-10 relative z-10" />
          <motion.div 
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-white"
          />
        </motion.a>
      </div>
    </div>
  );
}
