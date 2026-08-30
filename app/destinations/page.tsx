'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { MapPin, Search, Star, Compass, ArrowRight } from 'lucide-react';
import { destinations } from '@/data/destinations';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, Suspense } from 'react';

const CATEGORIES = ['All', 'Beach', 'Mountain', 'City', 'Adventure'];

function DestinationsContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = activeCategory === 'All' || dest.category === activeCategory;
    const matchesSearch = dest.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sky-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Explore The World</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-stone-900 mb-6">Curated Destinations</h1>
          <p className="text-xl text-stone-500 font-light">
            Discover hand-picked locations for your next unforgettable journey.
          </p>
        </motion.div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 bg-white p-4 rounded-full shadow-sm border border-stone-100">
          <div className="flex overflow-x-auto w-full md:w-auto gap-2 hide-scrollbar pb-2 md:pb-0">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-colors whitespace-nowrap ${
                  activeCategory === category ? 'text-white' : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {activeCategory === category && (
                  <motion.div 
                    layoutId="activeCategory" 
                    className="absolute inset-0 bg-stone-900 rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input 
              type="text" 
              placeholder="Search places..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 pl-12 pr-6 py-3 bg-stone-50 border border-stone-200 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 text-stone-700"
            />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((destination) => (
              <motion.div
                key={destination.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group h-[450px] relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer"
              >
                <Image 
                  src={destination.image} 
                  alt={destination.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Default overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent transition-opacity duration-300 group-hover:opacity-0"></div>
                
                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center">
                  <Compass size={48} className="text-sky-400 mb-6" />
                  <p className="text-stone-300 text-lg mb-8 leading-relaxed">{destination.description}</p>
                  <Link href={`/destinations/${destination.id}`} className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-sky-50 transition-colors">
                    Explore Region <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Default content (hides on hover) */}
                <div className="absolute bottom-0 left-0 w-full p-8 transition-all duration-300 group-hover:translate-y-8 group-hover:opacity-0">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-sky-500/30">
                      {destination.category}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                      <Star fill="currentColor" size={14} /> {destination.rating}
                    </span>
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-white mb-2">
                    {destination.title}
                  </h3>
                  <div className="flex items-center gap-2 text-stone-300 text-sm font-medium">
                    <MapPin size={14} /> {destination.location} <span className="mx-2">•</span> {destination.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredDestinations.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
            <h3 className="text-2xl font-playfair text-stone-900 mb-2">No destinations found</h3>
            <p className="text-stone-500">Try adjusting your search or category filter.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-stone-50" />}>
      <DestinationsContent />
    </Suspense>
  );
}
