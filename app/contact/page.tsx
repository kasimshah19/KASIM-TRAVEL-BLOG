'use client';

import { Mail, MapPin, Phone, Send, CheckCircle2, Instagram, Twitter, Youtube, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sky-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-stone-900 mb-6">Let&apos;s Connect</h1>
          <p className="text-xl text-stone-500 font-light">
            Have a question, collaboration idea, or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="bg-white rounded-[3rem] shadow-xl border border-stone-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Form Side */}
          <div className="lg:w-1/2 p-12 md:p-16">
            <h3 className="text-3xl font-playfair font-bold text-stone-900 mb-8">Send a Message</h3>
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center flex flex-col items-center justify-center h-[400px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <CheckCircle2 size={64} className="text-green-500 mb-6" />
                  </motion.div>
                  <h4 className="text-2xl font-playfair font-bold text-stone-900 mb-2">Message Sent!</h4>
                  <p className="text-stone-600">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-bold text-stone-700 uppercase tracking-widest">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-bold text-stone-700 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-bold text-stone-700 uppercase tracking-widest">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-none"
                      placeholder="How can I help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-stone-900 hover:bg-stone-800 disabled:bg-stone-400 text-white px-8 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                        <Compass size={20} />
                      </motion.div>
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Visual/Info Side */}
          <div className="lg:w-1/2 bg-stone-900 text-white relative overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=1200&auto=format&fit=crop"
              alt="Map background"
              fill
              className="object-cover opacity-40 mix-blend-overlay"
            />
            
            <div className="relative z-10 p-12 md:p-16 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-playfair font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                      <Mail className="text-sky-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold tracking-widest uppercase text-xs text-sky-400 mb-1">Email</h4>
                      <p className="text-stone-300 text-lg">hello@kasimtravel.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                      <MapPin className="text-sky-400" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold tracking-widest uppercase text-xs text-sky-400 mb-1">Location</h4>
                      <p className="text-stone-300 text-lg">Currently exploring: Tokyo, Japan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h4 className="font-bold tracking-widest uppercase text-xs text-sky-400 mb-6">Follow the Journey</h4>
                <div className="flex gap-4">
                  {[Instagram, Twitter, Youtube].map((Icon, i) => (
                    <motion.a 
                      key={i}
                      href="#"
                      whileHover={{ y: -5 }}
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-sky-500 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
