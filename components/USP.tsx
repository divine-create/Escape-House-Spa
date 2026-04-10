'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Clock, Moon, Sun, Zap } from 'lucide-react';

const features = [
  {
    title: 'Midnight Serenity',
    description: 'Escape the city noise when the world sleeps. Our quietest hours for deep meditation.',
    icon: <Moon className="w-8 h-8" />
  },
  {
    title: 'Sunrise Revival',
    description: 'Start your day with energy. Early morning treatments to conquer the Abuja hustle.',
    icon: <Sun className="w-8 h-8" />
  },
  {
    title: 'Elite Concierge',
    description: 'Personalized wellness plans tailored to your high-performance lifestyle.',
    icon: <Zap className="w-8 h-8" />
  }
];

export default function USP() {
  return (
    <section id="usp" className="py-24 bg-[#141414] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-gold text-xs uppercase tracking-widest font-medium">Always Open</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-cream mb-8 leading-tight">
                Luxury Doesn&apos;t Have <br />
                <span className="italic text-gold">A Curfew.</span>
              </h2>
              <p className="text-cream/60 text-lg mb-10 leading-relaxed font-light">
                In the heart of Maitama, we understand that the Abuja elite never stops. 
                Whether it&apos;s a 2 AM post-flight recovery or a 5 AM pre-meeting boost, 
                Escape House is your 24/7 sanctuary.
              </p>
              
              <div className="grid grid-cols-1 gap-8">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 h-14 border border-gold/20 rounded-xl flex items-center justify-center text-gold">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-cream font-medium mb-2">{f.title}</h4>
                      <p className="text-cream/40 text-sm leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-3xl overflow-hidden border border-gold/20 aspect-[4/5]"
            >
              <Image 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Spa Interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-charcoal/80 backdrop-blur-md border border-gold/20 rounded-2xl">
                <div className="text-4xl font-serif text-gold mb-1">24/7</div>
                <div className="text-cream/60 text-sm uppercase tracking-widest">Availability Guaranteed</div>
              </div>
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 z-20 w-32 h-32 bg-gold rounded-full flex items-center justify-center text-center p-4 shadow-2xl shadow-gold/20"
            >
              <span className="text-charcoal font-serif font-bold text-sm leading-tight">
                Voted #1 Spa in Abuja
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
