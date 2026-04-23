import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ChevronRight, CheckCircle2, Scissors, User } from 'lucide-react';

const SERVICES = [
  { id: 1, name: "Ladies Precision Cut", price: 100, duration: 60, category: "Ladies" },
  { id: 2, name: "Gents Modern Cut", price: 60, duration: 45, category: "Gents" },
  { id: 3, name: "Brazilian Blowout", price: 500, duration: 180, category: "Treatments" },
  { id: 4, name: "Full Balayage Couture", price: 250, duration: 210, category: "Color" },
  { id: 5, name: "Deep Conditioning Ritual", price: 80, duration: 45, category: "Treatments" },
];

const STYLISTS = [
  { id: 's1', name: 'Marco Rossi', role: 'Master Stylist' },
  { id: 's2', name: 'Aria Chen', role: 'Art Director' },
  { id: 's3', name: 'Luca Moretti', role: 'Senior Stylist' },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedStylist, setSelectedStylist] = useState<any>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-orange mb-2 block">Reservation</span>
          <h1 className="text-7xl font-bento-title leading-tight">Secure <br/><span className="text-white/40">Your Slot.</span></h1>
        </header>

        {/* Multi-step indicator */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className={`h-1 flex-1 relative overflow-hidden bg-white/5 border border-white/10`}
            >
              <motion.div 
                initial={false}
                animate={{ x: step >= i ? '0%' : '-100%' }}
                className="absolute inset-0 bg-brand-orange"
              />
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-black italic uppercase tracking-widest mb-6">Select Service</h2>
              <div className="grid grid-cols-1 gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setSelectedService(s); nextStep(); }}
                    className={`flex justify-between items-center p-6 border transition-all ${
                      selectedService?.id === s.id ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="text-left">
                      <span className="text-[8px] font-bold tracking-widest uppercase mb-1 block opacity-60">{s.category}</span>
                      <h3 className="text-xl font-black uppercase italic">{s.name}</h3>
                      <p className="text-[10px] uppercase opacity-40">{s.duration} minutes</p>
                    </div>
                    <span className="text-2xl font-black italic tracking-tighter">${s.price}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-black italic uppercase tracking-widest">Choose Stylist</h2>
                <button onClick={prevStep} className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">Back</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {STYLISTS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setSelectedStylist(s); nextStep(); }}
                    className={`aspect-square p-6 border flex flex-col items-center justify-center text-center transition-all ${
                      selectedStylist?.id === s.id ? 'bg-brand-orange border-brand-orange' : 'border-white/10 hover:border-brand-orange/40'
                    }`}
                  >
                    <User className="w-8 h-8 mb-4 opacity-40" />
                    <h3 className="text-lg font-black uppercase italic leading-none mb-1">{s.name}</h3>
                    <p className="text-[9px] uppercase tracking-widest opacity-40">{s.role}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-black italic uppercase tracking-widest">Date & Time</h2>
                <button onClick={prevStep} className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">Back</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 border border-white/10">
                  <label className="text-[8px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4 block">Select Date</label>
                  <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-brand-orange text-sm font-bold"
                  />
                </div>
                <div className="p-6 border border-white/10">
                  <label className="text-[8px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4 block">Available Slots</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['10:00', '11:30', '13:00', '14:30', '16:00', '17:30'].map((t) => (
                      <button
                        key={t}
                        onClick={() => { setTime(t); nextStep(); }}
                        className={`p-3 border text-[10px] font-bold transition-all ${
                          time === t ? 'bg-brand-orange border-brand-orange' : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="text-xl font-black italic uppercase tracking-widest">Confirm Transformation</h2>
              <div className="p-8 border border-white/10 space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-white/40 uppercase tracking-widest text-[8px] font-bold">Service</span>
                  <span className="text-xl font-black uppercase italic">{selectedService?.name}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-white/40 uppercase tracking-widest text-[8px] font-bold">Stylist</span>
                  <span className="text-xl font-black uppercase italic">{selectedStylist?.name}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-white/40 uppercase tracking-widest text-[8px] font-bold">Time</span>
                  <span className="text-xl font-black uppercase italic underline decoration-brand-orange">{date} @ {time}</span>
                </div>
                <div className="pt-4 flex justify-between items-center">
                  <span className="text-white/40 uppercase tracking-widest text-[8px] font-bold">Total</span>
                  <span className="text-5xl font-black italic tracking-tighter">${selectedService?.price}</span>
                </div>
              </div>
              
              <button 
                onClick={() => setStep(5)}
                className="w-full bg-white text-black py-6 font-black uppercase text-xs tracking-[0.3em] hover:bg-brand-orange hover:text-white transition-colors"
              >
                Confirm Appointment
              </button>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div 
              key="step5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-6"
            >
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">SUCCESS.</h2>
              <p className="text-white/40 text-[10px] uppercase tracking-widest max-w-xs mx-auto">Prepare for your transformation. Check email for details.</p>
              <button onClick={() => setStep(1)} className="text-[8px] font-black uppercase tracking-widest underline hover:text-brand-orange transition-colors">Start New Booking</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
