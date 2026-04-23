import { motion } from 'motion/react';
import { ShoppingBag, Star, Plus, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: "Regenerative Elixir", price: 85, category: "Haircare", rating: 5, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Silk Finishing Oil", price: 60, category: "Styling", rating: 4.8, image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Detox Scalp Scrub", price: 45, category: "Treatment", rating: 4.9, image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Volumizing Mousse", price: 40, category: "Styling", rating: 4.7, image: "https://images.unsplash.com/photo-1594411135451-f4d2ae10fc33?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Intense Hydration", price: 95, category: "Haircare", rating: 5, image: "https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Glossing Serum", price: 55, category: "Styling", rating: 4.6, image: "https://images.unsplash.com/photo-1611082216938-7477926127bc?auto=format&fit=crop&q=80&w=800" },
];

export default function Shop() {
  return (
    <div className="min-h-screen">
      <header className="mb-12">
        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-orange mb-2 block">Collection</span>
        <h1 className="text-7xl font-bento-title">The Boutique.</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-bento-bg group p-6 border border-white/10 hover:bg-white/5 transition-colors"
          >
            <div className="aspect-square mb-8 overflow-hidden bg-white/5 relative border border-white/5">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
              <button className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black rounded-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-white/40">{product.category}</span>
                  <h3 className="text-xl font-black uppercase italic tracking-tight leading-tight mt-1">{product.name}</h3>
                </div>
                <span className="text-2xl font-black italic tracking-tighter">${product.price}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex text-brand-orange">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'opacity-20'}`} />
                  ))}
                </div>
                <span className="text-[8px] font-bold tracking-widest text-[#555] uppercase">{product.rating} Rating</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
