"use client";

import { useRef, useState } from 'react';
import { Plane, Compass } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP);

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [isActive, setIsActive] = useState(true);

  useGSAP(() => {
    if (!isActive) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsActive(false);
      }
    });

    // Initial state setup to prevent flashes before animation starts
    gsap.set(containerRef.current, { 
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
      display: 'flex' 
    });
    
    // 1. Ken Burns background zoom
    tl.to('.preloader-bg', { scale: 1.15, duration: 4, ease: 'power1.inOut' }, 0);
    
    // 2. KASIM Logo bounce
    tl.from('.preloader-kasim', { y: 50, opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.5)' }, 0.2);
    
    // 3. TRAVEL BLOG letters sliding in
    tl.from('.preloader-travel span', { y: 20, opacity: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }, 0.5);
    
    // 4. Line drawing
    tl.fromTo('.preloader-line', { width: '0%' }, { width: '100%', duration: 0.8, ease: 'power3.inOut' }, 0.8);
    
    // 5. Plane flying
    tl.fromTo('.preloader-plane', 
      { x: -50, y: 30, opacity: 0, rotation: 15 }, 
      { x: 350, y: -30, opacity: 1, rotation: 0, duration: 1.5, ease: 'power2.out' }, 
    0.8);
    tl.to('.preloader-plane', { opacity: 0, duration: 0.3 }, 2.0);

    // 6. Tagline typewriter (clip-path reveal)
    tl.fromTo('.preloader-tagline', 
      { opacity: 0, clipPath: 'inset(0 100% 0 0)' }, 
      { opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power2.inOut' }, 
    1.2);

    // 7. Counter Animation 0-100%
    tl.to({ val: 0 }, { 
      val: 100, 
      duration: 2.2, 
      ease: 'power3.inOut', 
      onUpdate: function() {
        if (counterRef.current) {
          counterRef.current.innerHTML = Math.round(this.targets()[0].val) + '%';
        }
      } 
    }, 0.2);

    // 8. Exit Animation (Diagonal wipe using clip-path)
    tl.to('.preloader-content', { opacity: 0, y: -20, duration: 0.4, ease: 'power2.in' }, 2.6);
    tl.to(containerRef.current, { 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
        duration: 0.8, 
        ease: 'power3.inOut' 
    }, 2.8);

  }, { dependencies: [isActive], scope: containerRef });

  if (!isActive) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-950 text-white overflow-hidden origin-top">
      {/* Background */}
      <div className="absolute inset-0 z-0">
         <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80" alt="Preloader bg" fill className="preloader-bg object-cover opacity-20 blur-sm" priority />
         <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-950/40" />
      </div>

      <div className="preloader-content relative z-10 flex flex-col items-center">
         <div className="flex items-center justify-center gap-4 text-6xl md:text-8xl font-playfair font-bold tracking-tight mb-2">
            <span className="preloader-kasim inline-block text-white">KASIM</span>
         </div>
         
         <div className="preloader-travel flex text-xl md:text-2xl tracking-[0.4em] font-sans font-medium text-sky-400 mb-8 ml-3">
            {"TRAVEL BLOG".split("").map((char, i) => (
               <span key={i} className="inline-block">{char === " " ? "\u00A0" : char}</span>
            ))}
         </div>

         <div className="w-[80vw] max-w-[400px] h-[2px] bg-stone-800 relative mb-8">
             <div className="preloader-line absolute top-0 left-0 h-full bg-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
             <Plane size={24} className="preloader-plane absolute -top-[11px] text-sky-400 -left-6 drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
         </div>

         <div className="preloader-tagline text-stone-300 font-serif italic text-lg md:text-xl tracking-widest">
             Explore. Discover. Wander.
         </div>
      </div>

      <div className="absolute bottom-10 right-10 flex items-center gap-4">
         <Compass className="animate-[spin_4s_linear_infinite] text-sky-400 opacity-60" size={32} />
         <span ref={counterRef} className="text-5xl md:text-7xl font-sans font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
           0%
         </span>
      </div>
    </div>
  );
}
