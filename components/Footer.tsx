import Link from 'next/link';
import { Instagram, Twitter, Facebook, Plane, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-24 pb-12 w-full relative overflow-hidden">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 p-12 text-white/5 transform rotate-12 translate-x-1/4 -translate-y-1/4 pointer-events-none">
        <Plane size={400} strokeWidth={0.5} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Newsletter Section */}
        <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700 p-10 md:p-16 rounded-[3rem] mb-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Join the Expedition</h3>
            <p className="text-stone-400 text-lg">Subscribe to get curated travel guides, hidden destinations, and photography tips delivered straight to your inbox.</p>
          </div>
          <div className="md:w-1/2 w-full">
            <form className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/10 border border-stone-600 rounded-full py-5 pl-8 pr-32 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              />
              <button 
                type="submit" 
                className="absolute right-2 bg-sky-500 hover:bg-sky-400 text-white p-3 px-6 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 pb-16 border-b border-stone-800">
          
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-8 group w-max">
              <Plane className="text-sky-500 transform group-hover:rotate-90 transition-transform duration-500" size={36} strokeWidth={1.5} />
              <span className="font-playfair font-bold text-3xl tracking-tight text-white">
                Kasim<span className="text-sky-500">Travel</span>
              </span>
            </Link>
            <p className="text-stone-400 text-lg leading-relaxed mb-8 max-w-sm">
              Exploring hidden gems, vibrant cultures, and breathtaking landscapes across the globe. Inspiring your next great adventure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all hover:-translate-y-1"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all hover:-translate-y-1"><Twitter size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all hover:-translate-y-1"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-bold tracking-[0.2em] uppercase text-xs text-stone-500 mb-8">Navigation</h4>
            <ul className="space-y-4 font-medium">
              <li><Link href="/" className="hover:text-sky-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-stone-600 group-hover:text-sky-400 transition-colors" /> Home</Link></li>
              <li><Link href="/destinations" className="hover:text-sky-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-stone-600 group-hover:text-sky-400 transition-colors" /> Destinations</Link></li>
              <li><Link href="/blog" className="hover:text-sky-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-stone-600 group-hover:text-sky-400 transition-colors" /> Journal</Link></li>
              <li><Link href="/about" className="hover:text-sky-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="text-stone-600 group-hover:text-sky-400 transition-colors" /> About</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold tracking-[0.2em] uppercase text-xs text-stone-500 mb-8">Contact Info</h4>
            <ul className="space-y-6 font-medium text-stone-400">
              <li>
                <div className="text-xs uppercase tracking-widest text-stone-600 mb-1">Email</div>
                <a href="mailto:hello@kasimtravel.com" className="hover:text-sky-400 transition-colors">hello@kasimtravel.com</a>
              </li>
              <li>
                <div className="text-xs uppercase tracking-widest text-stone-600 mb-1">Phone</div>
                +1 (555) 123-4567
              </li>
              <li>
                <div className="text-xs uppercase tracking-widest text-stone-600 mb-1">Basecamp</div>
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-stone-500 font-bold tracking-widest uppercase text-xs gap-6">
          <p>&copy; {new Date().getFullYear()} Kasim Travel. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
