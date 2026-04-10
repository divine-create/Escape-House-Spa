'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 scale-105">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Spa Background"
            fill
            className="object-cover brightness-[0.3]"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-serif text-cream leading-tight mb-8">
            Rejuvenation <br />
            <span className="italic text-gold">Without Limits.</span> 24/7.
          </h1>
          <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Experience the pinnacle of luxury wellness in the heart of Abuja. 
            Our doors never close, because your well-being shouldn&apos;t have a curfew.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gold-button flex items-center gap-2 group"
            >
              Book Your Experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="outline-button flex items-center gap-2"
              onClick={() => {
                const event = new CustomEvent('open-ai-concierge');
                window.dispatchEvent(event);
              }}
            >
              <MessageSquare className="w-4 h-4" />
              Chat with Escape House AI
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gold/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
