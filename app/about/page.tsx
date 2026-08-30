'use client';

import Image from 'next/image';
import { Camera, Map, Compass, Coffee, Quote } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const timeline = [
  { year: "2018", title: "The First Step", desc: "Bought a one-way ticket to Bangkok with a backpack and a used DSLR." },
  { year: "2020", title: "Going Full-Time", desc: "Turned the passion for storytelling into a full-time career." },
  { year: "2022", title: "50 Countries", desc: "Hit a major milestone, exploring every continent except Antarctica." },
  { year: "2024", title: "The Agency", desc: "Launched Kasim Travel to curate premium experiences for others." }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-sky-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Behind the Lens</span>
          <h1 className="text-5xl md:text-8xl font-playfair font-bold text-stone-900 mb-6">Our Story</h1>
        </motion.div>

        <div className="relative h-[60vh] min-h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl mb-24">
          <Image 
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80" 
            alt="Traveler exploring" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/20"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute bottom-12 right-12 bg-white/90 backdrop-blur-md p-8 rounded-3xl max-w-sm hidden md:block"
          >
            <Quote className="text-sky-500 mb-4" size={32} />
            <p className="font-playfair text-2xl font-bold text-stone-900 leading-snug">
              &quot;We travel not to escape life, but for life not to escape us.&quot;
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <h2 className="text-4xl font-playfair font-bold text-stone-900 mb-8">The Philosophy</h2>
            <div className="prose prose-stone prose-lg max-w-none text-stone-600 leading-relaxed">
              <p>
                Hello! I&apos;m Kasim. My journey began five years ago when I booked a one-way ticket to Southeast Asia with nothing but a backpack and a camera.
              </p>
              <p>
                Since then, I&apos;ve visited over 50 countries, capturing the beauty of our world and the incredible people who inhabit it. This platform is a visual diary and a curated guide—a place to share experiences and practical travel insights.
              </p>
              <p>
                I believe that travel is not just about ticking destinations off a list, but about deep immersion. I seek out local experiences, street food, hidden trails, and meaningful conversations.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Camera, title: "Photography", desc: "Visual stories" },
              { icon: Map, title: "Exploration", desc: "Off beaten path" },
              { icon: Compass, title: "Culture", desc: "Local immersion" },
              { icon: Coffee, title: "Connection", desc: "Human stories" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-sky-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="text-sky-500" size={28} />
                </div>
                <h4 className="font-playfair font-bold text-stone-900 text-xl mb-2">{item.title}</h4>
                <p className="text-stone-500 text-sm font-medium uppercase tracking-wider">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-32 max-w-4xl mx-auto" ref={containerRef}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900">The Journey So Far</h2>
          </div>
          
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2 hidden md:block"></div>
            <motion.div 
              style={{ height: lineY }}
              className="absolute left-1/2 top-0 w-px bg-sky-500 -translate-x-1/2 hidden md:block origin-top"
            ></motion.div>

            <div className="space-y-16">
              {timeline.map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2"></div>
                  
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-sky-500 flex items-center justify-center font-bold text-sky-600 mb-6 md:mb-0 shadow-lg">
                    <span className="w-3 h-3 rounded-full bg-sky-500"></span>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'} w-full`}
                  >
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-xl transition-shadow">
                      <span className="text-sky-500 font-bold tracking-widest text-sm mb-2 block">{item.year}</span>
                      <h3 className="text-2xl font-playfair font-bold text-stone-900 mb-3">{item.title}</h3>
                      <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
