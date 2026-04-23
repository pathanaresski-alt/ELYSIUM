import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, Calendar, Clock, LogOut, ShieldCheck, MapPin } from 'lucide-react';
import { auth, signInWithGoogle } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('appointments');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-7xl font-bold tracking-tighter italic">Join Elysium.</h1>
            <p className="text-[#888] text-xl">Manage your appointments and access exclusive boutique rewards.</p>
          </div>
          <button 
            onClick={signInWithGoogle}
            className="w-full bg-white text-black p-6 rounded-full font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-4 hover:scale-105 transition-transform"
          >
            <ShieldCheck className="w-5 h-5" />
            Continue with Google
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-24">
        {/* Sidebar Info */}
        <aside className="space-y-12">
          <div className="relative group w-48 h-48 mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-[#F27D26] animate-pulse rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <img 
              src={user.photoURL || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'} 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover border-4 border-white relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tighter">{user.displayName}</h1>
            <div className="flex items-center gap-2 text-[#888]">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{user.email}</span>
            </div>
            <div className="flex items-center gap-2 text-[#888]">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+33 1 23 45 67 89</span>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 space-y-4">
            <button 
              onClick={() => signOut(auth)}
              className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase text-[#F27D26] hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout Session
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <div className="space-y-16">
          <div className="flex gap-12 border-b border-white/10">
            {['Appointments', 'Orders', 'Loyalty'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`pb-4 text-[10px] font-bold tracking-[0.4em] uppercase transition-all relative ${
                  activeTab === tab.toLowerCase() ? 'text-[#F27D26]' : 'text-[#888] hover:text-white'
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase() && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F27D26]" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
             {activeTab === 'appointments' && (
               <div className="space-y-6">
                  {/* Empty state for demo */}
                  <div className="p-12 border border-dashed border-white/10 rounded-3xl text-center space-y-6">
                    <Calendar className="w-12 h-12 text-[#333] mx-auto" />
                    <p className="text-[#888] text-lg">No upcoming transformations scheduled.</p>
                    <Link to="/booking" className="inline-block text-[#F27D26] font-bold tracking-widest uppercase text-xs border border-[#F27D26] px-8 py-3 rounded-full hover:bg-[#F27D26] hover:text-white transition-all">
                      Book Now
                    </Link>
                  </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Link import
import { Link } from 'react-router-dom';
