'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="location" className="bg-[#0F0F0F] pt-24 pb-12 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border border-gold rounded-full flex items-center justify-center">
                <Sparkles className="text-gold w-4 h-4" />
              </div>
              <span className="text-lg font-serif font-bold tracking-widest text-cream">
                ESCAPE <span className="text-gold">HOUSE</span>
              </span>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed">
              Abuja&apos;s most exclusive 24/7 wellness sanctuary. 
              Dedicated to the art of rejuvenation and the science of relaxation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/60 text-sm">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <span>34 Usuma Street, Maitama, <br />Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-cream/60 text-sm">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span>+234 800 ESCAPE</span>
              </li>
              <li className="flex items-center gap-3 text-cream/60 text-sm">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span>concierge@escapehouse.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold">Experience</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-cream/40 hover:text-gold text-sm transition-colors">Treatments</a></li>
              <li><a href="#usp" className="text-cream/40 hover:text-gold text-sm transition-colors">24/7 Access</a></li>
              <li><a href="#booking" className="text-cream/40 hover:text-gold text-sm transition-colors">Memberships</a></li>
              <li><a href="https://api.whatsapp.com/message/NZ46VLNQPJDCG1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-gold text-sm transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold">Our Location</h4>
            <div className="aspect-square rounded-2xl overflow-hidden border border-gold/20 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 relative">
              <Image 
                src="https://picsum.photos/seed/abuja-map/400/400" 
                alt="Map Placeholder"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gold/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-[10px] text-cream/20 uppercase tracking-[0.3em]">
            © 2026 Escape House Spa. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-cream/20 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
