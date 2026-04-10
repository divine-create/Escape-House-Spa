'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Bot } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to **Escape House Spa**. I am **Escape House AI**. How may I assist your rejuvenation journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ai-concierge', handleOpen);
    return () => window.removeEventListener('open-ai-concierge', handleOpen);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are Escape House AI for "Escape House Spa", a 24/7 luxury wellness center in Maitama, Abuja. 
          Your tone is sophisticated, premium, and extremely helpful. 
          
          Services include:
          - **Authentic Thai & Balinese Massages**: ₦45k+ (90 Min)
          - **Hot-Stone & Swedish Therapy**: ₦55k+ (60/90 Min)
          - **Luxury Facials & Grooming**: ₦35k+ (45 Min)
          - **Hydrotherapy & Steam**: ₦25k+ (30 Min)
          
          Location: 34 Usuma Street, Maitama, Abuja.
          USP: We are open 24/7.
          Booking: All bookings are handled via WhatsApp. Provide this link when users want to book: https://api.whatsapp.com/message/NZ46VLNQPJDCG1?autoload=1&app_absent=0&utm_source=ig
          
          Formatting: Use Markdown for your responses. Use **bold** for emphasis, bullet points for lists, and clear spacing.
          Goal: Help users book experiences, answer questions about services, and provide a premium feel. 
          Keep responses concise and elegant.`
        }
      });

      const botMsg = response.text || "I apologize, I'm having trouble connecting to the spa network. Please call us directly.";
      setMessages(prev => [...prev, { role: 'bot', text: botMsg }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm currently resting. Please contact our human concierge at +234 800 ESCAPE." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-gold text-charcoal rounded-full shadow-2xl shadow-gold/40 flex items-center justify-center group"
      >
        <MessageSquare className="w-6 h-6 md:w-7 md:h-7 group-hover:hidden" />
        <Sparkles className="w-6 h-6 md:w-7 md:h-7 hidden group-hover:block animate-pulse" />
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed inset-0 md:inset-auto md:bottom-28 md:right-8 z-[60] md:w-[400px] md:h-[600px] bg-charcoal md:border md:border-gold/30 md:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 md:p-6 bg-gold/10 border-b border-gold/20 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <Bot className="text-charcoal w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-cream font-serif font-bold">Escape House AI</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-cream/40 uppercase tracking-widest">Concierge Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 -mr-2 text-cream/40 hover:text-gold transition-colors"
                aria-label="Close chat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6 scrollbar-thin scrollbar-thumb-gold/20"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-gold text-charcoal rounded-tr-none font-medium' 
                      : 'bg-gold/5 text-cream/90 border border-gold/10 rounded-tl-none'
                  }`}>
                    {msg.role === 'bot' ? (
                      <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-strong:text-gold prose-ul:list-disc prose-ul:ml-4 prose-li:mt-1">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gold/5 p-4 rounded-2xl rounded-tl-none border border-gold/10">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-gold/40 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-gold/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-gold/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-5 md:p-6 border-t border-gold/20 bg-charcoal pb-safe">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our services..."
                  className="w-full bg-gold/5 border border-gold/20 rounded-full py-3.5 px-6 pr-12 text-cream text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-gold rounded-full flex items-center justify-center text-charcoal hover:scale-105 transition-transform disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
