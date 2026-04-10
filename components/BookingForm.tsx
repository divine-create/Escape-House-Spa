'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone } from 'lucide-react';

export default function BookingForm() {
  return (
    <section id="booking" className="py-24 bg-charcoal">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#141414] border border-gold/20 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-cream mb-4">Secure Your Session</h2>
            <p className="text-cream/40 text-sm uppercase tracking-widest">Instant Confirmation • 24/7 Availability</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-gold text-xs uppercase tracking-widest font-medium ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-charcoal border border-gold/10 rounded-xl py-4 px-12 text-cream focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gold text-xs uppercase tracking-widest font-medium ml-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                <input 
                  type="tel" 
                  placeholder="+234 800 000 0000"
                  className="w-full bg-charcoal border border-gold/10 rounded-xl py-4 px-12 text-cream focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gold text-xs uppercase tracking-widest font-medium ml-1">Preferred Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                <input 
                  type="date" 
                  className="w-full bg-charcoal border border-gold/10 rounded-xl py-4 px-12 text-cream focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gold text-xs uppercase tracking-widest font-medium ml-1">Preferred Time</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                <select className="w-full bg-charcoal border border-gold/10 rounded-xl py-4 px-12 text-cream focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option>Morning (6AM - 12PM)</option>
                  <option>Afternoon (12PM - 6PM)</option>
                  <option>Evening (6PM - 12AM)</option>
                  <option>Late Night (12AM - 6AM)</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-gold text-xs uppercase tracking-widest font-medium ml-1">Select Service</label>
              <select className="w-full bg-charcoal border border-gold/10 rounded-xl py-4 px-6 text-cream focus:outline-none focus:border-gold transition-colors appearance-none">
                <option>Authentic Thai & Balinese Massage</option>
                <option>Hot-Stone & Swedish Therapy</option>
                <option>Luxury Facials & Grooming</option>
                <option>Hydrotherapy & Steam</option>
              </select>
            </div>

            <div className="md:col-span-2 pt-4">
              <button type="button" className="gold-button w-full py-5 text-lg shadow-xl shadow-gold/10">
                Confirm Booking
              </button>
              <p className="text-center text-[10px] text-cream/30 mt-4 uppercase tracking-[0.2em]">
                Your privacy is our priority. No payment required at booking.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
