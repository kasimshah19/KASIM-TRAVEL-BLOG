'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, MapPin, Compass, Camera, Search, ChevronDown, Star, Globe2, Map, Users, Plane } from 'lucide-react';
import { destinations } from '@/data/destinations';
import { posts } from '@/data/posts';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// Counter component for animated stats
function Counter({ end, label, icon: Icon }: { end: number, label: string, icon: any }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      className="flex flex-col items-center p-4 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center"
    >
      <Icon size={32} className="text-sky-400 mb-4" />
      <span className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-white mb-2">{count}+</span>
      <span className="text-stone-300 font-medium tracking-wide uppercase text-xs sm:text-sm">{label}</span>
    </motion.div>
  );
}

export default function Home() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Typewriter effect
  const [text, setText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const fullText = "Discover the World's Most Beautiful Places";
  
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(
      [...Array(20)].map(() => ({
        initialY: Math.random() * 1000,
        initialX: Math.random() * 1000,
        animateY: Math.random() * -500,
        animateX: Math.random() * 200 - 100,
        duration: Math.random() * 10 + 10,
        left: `${Math.random() * 100}%`
      }))
    );
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/destinations?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/destinations');
    }
  };
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen w-full font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] w-full flex items-center justify-center -mt-20 overflow-hidden bg-stone-900 py-32">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80" 
            alt="Travel Hero" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/40"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  y: p.initialY, 
                  x: p.initialX 
                }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  y: [null, p.animateY],
                  x: [null, p.animateX]
                }}
                transition={{ 
                  duration: p.duration,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: p.left,
                  bottom: `-10%`
                }}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div style={{ opacity, y: y2 }} className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 w-full">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1.5 px-5 rounded-full bg-stone-900/50 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-[0.2em] uppercase mb-8"
          >
            Kasim Travel Blog
          </motion.span>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-playfair font-bold text-white mb-8 drop-shadow-2xl leading-tight min-h-[120px] sm:min-h-0">
            {text}
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="relative max-w-2xl mx-auto mb-12"
          >
            <form onSubmit={handleSearch} className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full shadow-2xl">
              <Search className="hidden sm:block text-white/70 ml-4 shrink-0" size={24} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search places..." 
                className="bg-transparent border-none text-white placeholder:text-white/60 focus:outline-none focus:ring-0 px-4 sm:px-6 py-2 sm:py-3 w-full min-w-0 text-base sm:text-lg" 
              />
              <button type="submit" className="bg-sky-500 hover:bg-sky-400 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors whitespace-nowrap shrink-0 text-sm sm:text-base">
                Explore
              </button>
            </form>
          </motion.div>

        </motion.div>

        {/* Floating Badges */}
        <div className="hidden xl:block absolute bottom-32 left-10 2xl:left-24 z-20 pointer-events-none">
          <motion.div 
            animate={{ y: [-10, 10, -10] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-left pointer-events-auto shadow-2xl"
          >
            <div className="flex items-center gap-2 text-yellow-400 mb-1 font-bold"><Star fill="currentColor" size={16} /> 4.9 Rating</div>
            <div className="text-white text-sm font-medium">Based on 10k+ reviews</div>
          </motion.div>
        </div>

        <div className="hidden xl:block absolute bottom-32 right-10 2xl:right-24 z-20 pointer-events-none">
          <motion.div 
            animate={{ y: [10, -10, 10] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-left pointer-events-auto shadow-2xl"
          >
            <div className="flex items-center gap-2 text-sky-400 mb-1 font-bold"><Globe2 size={16} /> 50+ Countries</div>
            <div className="text-white text-sm font-medium">Explored worldwide</div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/70"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Featured In Strip */}
      <section className="bg-white py-10 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            <span className="font-playfair text-xl md:text-2xl font-bold text-stone-800">The Travel Mag</span>
            <span className="font-sans text-xl md:text-2xl font-black tracking-tighter text-stone-800">VOGUE</span>
            <span className="font-serif text-xl md:text-2xl italic text-stone-800">Conde Nast</span>
            <span className="font-sans text-xl md:text-2xl font-bold tracking-widest text-stone-800">NAT GEO</span>
            <span className="font-playfair text-xl md:text-2xl font-bold text-stone-800">Wanderlust</span>
          </div>
        </div>
      </section>

      {/* Signature Experience (Split Layout) */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-stone-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-stone-200/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80" alt="Travel Experience" fill className="object-cover" />
            <div className="absolute inset-0 bg-stone-900/10" />
            {/* Social Proof floating card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-8 -right-8 md:right-8 bg-white/90 backdrop-blur-md p-4 pr-8 rounded-2xl shadow-xl flex items-center gap-4 border border-white/40"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                <Image src="https://i.pravatar.cc/150?img=32" alt="User" width={48} height={48} className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-900">Sarah just booked</p>
                <p className="text-xs text-sky-600 font-medium">A trip to Amalfi Coast 🎉</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative z-10">
            <span className="inline-block py-1 text-sky-600 font-bold tracking-[0.15em] uppercase text-xs mb-4 border-b border-sky-200">The Signature Experience</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-stone-900 mb-8 leading-tight">
              Curating <span className="italic text-sky-600 font-light">Unforgettable</span> Journeys.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              We don't just book trips; we design immersive experiences. From hidden gems to world-renowned landmarks, every itinerary is crafted with precision, passion, and an obsession for the extraordinary.
            </p>

            <div className="space-y-8">
              {[
                { title: "Insider Access", desc: "Skip the lines and gain exclusive entry to coveted locations." },
                { title: "Bespoke Itineraries", desc: "Tailored perfectly to your unique travel rhythm and style." },
                { title: "24/7 Concierge", desc: "Unwavering support anywhere in the world, at any hour." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-sky-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-stone-900 py-16 px-4 border-b border-stone-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <Counter end={120} label="Destinations" icon={Map} />
          <Counter end={50} label="Countries" icon={Globe2} />
          <Counter end={250} label="Articles" icon={Camera} />
          <Counter end={10} label="Community" icon={Users} />
        </div>
      </section>

      {/* Featured Destinations (Carousel) */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">Premium Selection</span>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-stone-900 mt-2">Featured Destinations</h2>
          </div>
          <Link href="/destinations" className="hidden md:flex items-center gap-2 text-stone-500 hover:text-stone-900 font-bold tracking-widest uppercase text-sm transition-colors group">
            Explore All <motion.span group-hover={{ x: 5 }} transition={{ duration: 0.2 }}><ArrowRight size={18} /></motion.span>
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {destinations.slice(0, 5).map((dest) => (
            <motion.div 
              key={dest.id}
              whileHover={{ scale: 0.98, rotateY: 5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="min-w-[85vw] md:min-w-[400px] h-[500px] relative rounded-3xl overflow-hidden shadow-2xl snap-center flex-shrink-0 cursor-pointer group bg-stone-900 border border-transparent hover:border-sky-500/30 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] transition-all duration-500"
              style={{ perspective: 1000 }}
            >
              <Image src={dest.image} alt={dest.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              <div className="absolute top-6 left-6 bg-white text-stone-900 font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                {dest.price}
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="text-sky-400 font-semibold tracking-widest uppercase text-xs flex items-center gap-1">
                    <MapPin size={14} /> {dest.location}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                    <Star fill="currentColor" size={14} /> {dest.rating}
                  </div>
                </div>
                <h3 className="text-3xl font-playfair font-bold text-white mb-3">{dest.title}</h3>
                <p className="text-stone-300 text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{dest.description}</p>
                
                <Link href="/destinations" className="inline-flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white text-white hover:text-stone-900 backdrop-blur-md py-4 rounded-xl font-bold transition-all duration-300">
                  Discover More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Journal Entries (Masonry Layout) */}
      <section className="py-24 px-4 md:px-8 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">Travel Stories</span>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-stone-900 mt-2">Latest from the Journal</h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {posts.slice(0, 6).map((post, i) => (
              <motion.div 
                key={post.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="break-inside-avoid bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-stone-100 hover:border-sky-500/20 hover:shadow-[0_10px_40px_rgba(14,165,233,0.1)]"
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative overflow-hidden" style={{ paddingBottom: i % 2 === 0 ? '70%' : '120%' }}>
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-stone-900 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between text-stone-400 text-sm mb-4 font-medium">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-stone-900 mb-4 group-hover:text-sky-600 transition-colors line-clamp-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-stone-500 mb-6 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center gap-3 pt-6 border-t border-stone-100">
                      <Image src={post.authorAvatar} alt={post.author} width={40} height={40} className="rounded-full object-cover" />
                      <div>
                        <div className="text-sm font-bold text-stone-900">{post.author}</div>
                        <div className="text-xs text-stone-500">Editor</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 px-10 py-5 bg-stone-900 hover:bg-stone-800 text-white rounded-full font-bold tracking-widest uppercase text-sm transition-all shadow-xl hover:shadow-stone-900/20">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-4 md:px-8 bg-stone-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/40 via-stone-900 to-stone-900 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Plane size={48} className="text-sky-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-white mb-6">
            Join the <span className="italic text-sky-400 font-light">Journey</span>
          </h2>
          <p className="text-stone-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Subscribe to our private dispatch. Receive curated itineraries, secret destination reveals, and exclusive travel insights directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-stone-500 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
            />
            <button className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-full transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]">
              Subscribe Now
            </button>
          </div>
          <p className="text-stone-500 text-xs mt-6">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
