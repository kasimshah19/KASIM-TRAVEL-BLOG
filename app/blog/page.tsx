'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Tag } from 'lucide-react';
import { posts } from '@/data/posts';
import { motion } from 'motion/react';

export default function Blog() {
  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sky-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Travel Stories</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-stone-900 mb-6">The Journal</h1>
          <p className="text-xl text-stone-500 font-light">
            Dive into my latest adventures, travel tips, cultural observations, and photography from around the globe.
          </p>
        </motion.div>

        {/* Featured Post (First one) */}
        {posts.length > 0 && (
          <Link href={`/blog/${posts[0].id}`} className="group block mb-20 relative rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="relative h-[65vh] min-h-[500px] w-full">
              <Image 
                src={posts[0].image} 
                alt={posts[0].title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 text-sky-300 font-medium mb-6">
                    <span className="bg-sky-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                      {posts[0].category}
                    </span>
                    <span className="text-stone-300 text-sm tracking-wider">{posts[0].date}</span>
                    <span className="text-stone-300 text-sm tracking-wider">• {posts[0].readTime}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 group-hover:text-sky-100 transition-colors leading-tight">
                    {posts[0].title}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-white font-medium">
                    <div className="flex items-center gap-3">
                      <Image src={posts[0].authorAvatar} alt={posts[0].author} width={48} height={48} className="rounded-full border-2 border-white/20" />
                      <div>
                        <div className="text-sm font-bold">{posts[0].author}</div>
                        <div className="text-xs text-stone-400">Editor in Chief</div>
                      </div>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-white/20"></div>
                    <div className="flex items-center gap-2 group-hover:gap-4 transition-all text-sky-300">
                      Read Featured Story <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Masonry Grid of remaining posts */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {posts.slice(1).map((post, i) => (
            <motion.div
              key={post.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="break-inside-avoid group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative overflow-hidden" style={{ paddingBottom: i % 3 === 0 ? '60%' : i % 2 === 0 ? '110%' : '80%' }}>
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1 uppercase tracking-widest border border-white/10">
                    <Tag size={12} className="text-sky-400" /> {post.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between text-stone-400 text-sm mb-4 font-medium uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-bold text-stone-900 group-hover:text-sky-600 transition-colors leading-snug mb-4 relative inline-block">
                    {post.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  
                  <p className="text-stone-500 mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                    <div className="flex items-center gap-3">
                      <Image src={post.authorAvatar} alt={post.author} width={36} height={36} className="rounded-full" />
                      <span className="text-sm font-bold text-stone-900">{post.author}</span>
                    </div>
                    <div className="text-sky-600">
                      <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
