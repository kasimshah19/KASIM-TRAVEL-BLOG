"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Journal', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Determine if we should use the transparent (light text) style.
  // Only the home page and individual blog posts have dark hero images at the top.
  const hasDarkHero = pathname === '/' || /^\/blog\/[^/]+$/.test(pathname) || pathname === '/about';
  const useTransparentStyle = hasDarkHero && !scrolled && !isOpen;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4 border-b border-stone-200/50' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Plane className={useTransparentStyle || isOpen ? 'text-white' : 'text-sky-600'} size={32} strokeWidth={1.5} />
            </motion.div>
            <span className={`font-playfair font-bold text-2xl tracking-tight transition-colors ${useTransparentStyle || isOpen ? 'text-white' : 'text-stone-900'}`}>
              Kasim<span className={useTransparentStyle || isOpen ? 'text-white' : 'text-sky-500'}>Travel</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`relative font-bold text-xs uppercase tracking-widest transition-colors ${
                  pathname === link.href 
                    ? (useTransparentStyle ? 'text-sky-300' : 'text-sky-600') 
                    : (useTransparentStyle ? 'text-white/80 hover:text-white' : 'text-stone-500 hover:text-stone-900')
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-sky-500"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden z-50 p-2 rounded-full backdrop-blur-md transition-colors ${
              useTransparentStyle || isOpen ? 'text-white bg-white/10 hover:bg-white/20' : 'text-stone-900 bg-stone-100 hover:bg-stone-200'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
            className="fixed inset-0 bg-stone-900 z-40 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl md:text-5xl font-playfair font-bold block ${
                      pathname === link.href ? 'text-sky-400' : 'text-white hover:text-sky-300 transition-colors'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 left-8 right-8 flex justify-between items-center text-stone-500 text-sm font-bold uppercase tracking-widest border-t border-stone-800 pt-8"
            >
              <span>hello@kasimtravel.com</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">IG</a>
                <a href="#" className="hover:text-white transition-colors">TW</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
