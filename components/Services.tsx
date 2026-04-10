'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Wind, User, Waves, X, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Authentic Thai & Balinese',
    description: 'Experience the ancient art of healing. Our certified therapists from Southeast Asia use rhythmic pressure and stretching to release deep-seated tension and restore your body\'s natural energy flow.',
    longDescription: 'Our Authentic Thai & Balinese massage is a holistic therapy that combines acupressure, Indian Ayurvedic principles, and assisted yoga postures. This treatment is performed on a firm mat or table, using a combination of gentle stretching and rhythmic pressure to realign the body\'s energy lines (Sen). It is particularly effective for improving flexibility, relieving joint pain, and reducing stress-induced headaches.',
    benefits: [
      'Improves flexibility and range of motion',
      'Relieves deep-seated muscle tension',
      'Boosts energy levels and mental clarity',
      'Enhances blood and lymphatic circulation'
    ],
    icon: <Wind className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop',
    price: 'From ₦45,000',
    duration: '90 Min'
  },
  {
    title: 'Hot-Stone & Swedish',
    description: 'A symphony of warmth and relaxation. Smooth, heated basalt stones are placed on key energy points, combined with long, gliding Swedish strokes to melt away stress and improve circulation.',
    longDescription: 'This luxurious treatment combines the therapeutic benefits of traditional Swedish massage with the deep, penetrating heat of volcanic basalt stones. The stones are heated to a precise temperature and used as extensions of the therapist\'s hands to reach deeper muscle layers without intense pressure. This dual approach is perfect for those suffering from chronic muscle pain, insomnia, or high stress levels.',
    benefits: [
      'Deeply relaxes tight muscle tissues',
      'Reduces stress and anxiety levels',
      'Promotes better sleep quality',
      'Helps manage chronic pain conditions'
    ],
    icon: <Sparkles className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop',
    price: 'From ₦55,000',
    duration: '60/90 Min'
  },
  {
    title: 'Luxury Facials & Grooming',
    description: 'Bespoke skincare for the discerning individual. Using exclusive organic elixirs and advanced techniques, we revitalize your complexion and provide precision grooming for a polished, youthful appearance.',
    longDescription: 'Our Luxury Facials are tailored to your unique skin profile. We use high-performance, organic botanical extracts combined with advanced facial massage techniques to stimulate collagen production and improve skin elasticity. The grooming component includes precision brow shaping and beard conditioning for men, ensuring you leave looking as refreshed as you feel.',
    benefits: [
      'Deeply cleanses and detoxifies the skin',
      'Reduces signs of aging and fatigue',
      'Improves skin texture and radiance',
      'Customized treatments for all skin types'
    ],
    icon: <User className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1570172619244-921517190455?q=80&w=2070&auto=format&fit=crop',
    price: 'From ₦35,000',
    duration: '45 Min'
  },
  {
    title: 'Hydrotherapy & Steam',
    description: 'Purify and detoxify in our private thermal suites. Our state-of-the-art steam rooms and therapeutic hydro-pools use mineral-infused waters to soothe muscles and clarify the mind.',
    longDescription: 'Step into a world of thermal bliss. Our hydrotherapy circuit utilizes the physical properties of water—temperature and pressure—to stimulate healing. The steam room session opens pores and clarifies the respiratory system, while our mineral-infused hydro-pools provide targeted massage to sore joints. This treatment is an excellent precursor to any massage or a standalone detox ritual.',
    benefits: [
      'Detoxifies the body through perspiration',
      'Relieves respiratory congestion',
      'Soothes joint and muscle inflammation',
      'Promotes total mental and physical calm'
    ],
    icon: <Waves className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop',
    price: 'From ₦25,000',
    duration: '30 Min'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
              onClick={() => setSelectedService(service)}
              className="group relative bg-charcoal/50 border border-gold/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 cursor-pointer"
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
                <p className="text-cream/50 text-sm leading-relaxed mb-6 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-gold/10">
                  <span className="text-gold font-medium text-sm">{service.price}</span>
                  <span className="text-cream/40 group-hover:text-gold text-xs uppercase tracking-widest transition-colors flex items-center gap-1">
                    Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-charcoal/95 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-charcoal border border-gold/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-charcoal/50 backdrop-blur-md border border-gold/20 rounded-full flex items-center justify-center text-cream hover:bg-gold hover:text-charcoal transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image 
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-charcoal via-transparent to-transparent opacity-60" />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8 md:p-12 overflow-y-auto scrollbar-thin scrollbar-thumb-gold/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                    {selectedService.icon}
                  </div>
                  <span className="text-gold uppercase tracking-widest text-xs font-bold">
                    {selectedService.duration} Treatment
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-serif text-cream mb-6">
                  {selectedService.title}
                </h3>

                <p className="text-cream/70 leading-relaxed mb-8 text-sm md:text-base">
                  {selectedService.longDescription}
                </p>

                <div className="space-y-6 mb-10">
                  <h4 className="text-gold uppercase tracking-widest text-xs font-bold">Key Benefits</h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {selectedService.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-cream/60 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-gold/10">
                  <div className="text-center sm:text-left">
                    <span className="text-cream/40 text-[10px] uppercase tracking-widest block mb-1">Starting from</span>
                    <span className="text-2xl font-serif text-gold">{selectedService.price}</span>
                  </div>
                  <a 
                    href="https://api.whatsapp.com/message/NZ46VLNQPJDCG1?autoload=1&app_absent=0&utm_source=ig"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-button w-full sm:w-auto px-10 py-4 text-center"
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
