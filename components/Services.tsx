'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Sparkles, Wind, User, Waves } from 'lucide-react';

const services = [
  {
    title: 'Authentic Thai & Balinese',
    description: 'Experience the ancient art of healing. Our certified therapists from Southeast Asia use rhythmic pressure and stretching to release deep-seated tension and restore your body\'s natural energy flow.',
    icon: <Wind className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop',
    price: 'From ₦45,000',
    duration: '90 Min'
  },
  {
    title: 'Hot-Stone & Swedish',
    description: 'A symphony of warmth and relaxation. Smooth, heated basalt stones are placed on key energy points, combined with long, gliding Swedish strokes to melt away stress and improve circulation.',
    icon: <Sparkles className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop',
    price: 'From ₦55,000',
    duration: '60/90 Min'
  },
  {
    title: 'Luxury Facials & Grooming',
    description: 'Bespoke skincare for the discerning individual. Using exclusive organic elixirs and advanced techniques, we revitalize your complexion and provide precision grooming for a polished, youthful appearance.',
    icon: <User className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1570172619244-921517190455?q=80&w=2070&auto=format&fit=crop',
    price: 'From ₦35,000',
    duration: '45 Min'
  },
  {
    title: 'Hydrotherapy & Steam',
    description: 'Purify and detoxify in our private thermal suites. Our state-of-the-art steam rooms and therapeutic hydro-pools use mineral-infused waters to soothe muscles and clarify the mind.',
    icon: <Waves className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop',
    price: 'From ₦25,000',
    duration: '30 Min'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-4 block"
          >
            Our Curated Treatments
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-cream"
          >
            Exquisite Wellness <span className="italic text-gold">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-charcoal/50 border border-gold/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gold/50 font-bold border border-gold/20 px-2 py-1 rounded">
                    {service.duration}
                  </span>
                </div>
                <h3 className="text-xl font-serif text-cream mb-3">{service.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-gold/10">
                  <span className="text-gold font-medium text-sm">{service.price}</span>
                  <a 
                    href="https://api.whatsapp.com/message/NZ46VLNQPJDCG1?autoload=1&app_absent=0&utm_source=ig"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/40 hover:text-gold text-xs uppercase tracking-widest transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
