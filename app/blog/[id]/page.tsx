import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Clock, Share2, Twitter, Facebook, Link as LinkIcon, MessageSquare, Compass, ArrowRight } from 'lucide-react';
import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.id === resolvedParams.id);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);
  if (relatedPosts.length < 2) {
      relatedPosts.push(...posts.filter(p => p.id !== post.id && !relatedPosts.includes(p)).slice(0, 2 - relatedPosts.length));
  }

  return (
    <div className="bg-stone-50 min-h-screen font-sans">
      {/* Hero Header */}
      <div className="relative h-[75vh] min-h-[600px] w-full flex items-center justify-center pt-24 pb-12 overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mt-24">
          <div className="inline-flex items-center gap-2 bg-sky-500 text-white px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8">
            <Tag size={14} /> {post.category}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold text-white mb-8 drop-shadow-2xl leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-stone-200 font-medium tracking-wide">
            <span className="flex items-center gap-2"><Calendar size={18} className="text-sky-400" /> {post.date}</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-stone-500"></span>
            <span className="flex items-center gap-2"><Clock size={18} className="text-sky-400" /> {post.readTime}</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-stone-500"></span>
            <span className="flex items-center gap-2">
              <Image src={post.authorAvatar} alt={post.author} width={24} height={24} className="rounded-full" />
              By {post.author}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 flex flex-col lg:flex-row gap-16">
        {/* Sidebar */}
        <aside className="lg:w-1/4 shrink-0">
          <div className="sticky top-32 space-y-12">
            
            <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-sky-600 font-bold uppercase tracking-widest text-xs transition-colors group">
              <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" /> Back to Journal
            </Link>

            <div className="hidden lg:block">
              <h4 className="font-playfair font-bold text-stone-900 text-xl mb-4 pb-4 border-b border-stone-200">Contents</h4>
              <ul className="space-y-4 text-stone-600 font-medium text-sm">
                <li><a href="#" className="hover:text-sky-600 transition-colors">Introduction</a></li>
                <li><a href="#" className="hover:text-sky-600 transition-colors">Planning Your Route</a></li>
                <li><a href="#" className="hover:text-sky-600 transition-colors">Budgeting Details</a></li>
                <li><a href="#" className="hover:text-sky-600 transition-colors">Local Customs</a></li>
                <li><a href="#" className="hover:text-sky-600 transition-colors">Conclusion</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-bold text-stone-900 text-xl mb-4 pb-4 border-b border-stone-200">Share Story</h4>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-900 hover:text-white transition-colors shadow-sm">
                  <Twitter size={16} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-900 hover:text-white transition-colors shadow-sm">
                  <Facebook size={16} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-900 hover:text-white transition-colors shadow-sm">
                  <LinkIcon size={16} />
                </button>
              </div>
            </div>

          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4">
          <article className="prose prose-stone prose-lg md:prose-xl max-w-none 
            prose-headings:font-playfair prose-headings:text-stone-900 prose-headings:font-bold 
            prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
            prose-p:leading-relaxed prose-p:text-stone-600 prose-p:mb-8
            prose-a:text-sky-600 hover:prose-a:text-sky-700
            prose-blockquote:border-l-4 prose-blockquote:border-sky-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:font-playfair prose-blockquote:text-2xl prose-blockquote:text-stone-800
            ">
            <p className="lead text-2xl text-stone-500 font-light leading-relaxed mb-12">
              {post.excerpt}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* Example Pull Quote (Simulated for rich content) */}
            <blockquote className="my-16 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              &quot;Traveling isn&apos;t just about the places you go, it&apos;s about the perspectives you gain. Every journey changes you slightly, reshaping your understanding of the world.&quot;
            </blockquote>
          </article>

          {/* Author Bio */}
          <div className="mt-20 bg-stone-900 text-white p-10 md:p-12 rounded-[2rem] shadow-xl flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 text-white/5 transform rotate-12 translate-x-8 -translate-y-8 pointer-events-none">
              <Compass size={200} strokeWidth={1} />
            </div>
            
            <div className="w-24 h-24 rounded-full bg-stone-800 overflow-hidden shrink-0 relative border-2 border-stone-700 z-10">
              <Image src={post.authorAvatar} alt={post.author} fill className="object-cover" />
            </div>
            <div className="text-center md:text-left z-10">
              <h4 className="text-sm font-bold tracking-widest uppercase text-sky-400 mb-2">Written By</h4>
              <h3 className="text-3xl font-playfair font-bold text-white mb-4">{post.author}</h3>
              <p className="text-stone-400 leading-relaxed text-lg max-w-2xl">
                Passionate traveler and visual storyteller exploring the world one city at a time. Kasim specializes in finding the stories hidden in the quiet corners of bustling cities and remote landscapes.
              </p>
            </div>
          </div>

          {/* Comment Section (Static) */}
          <div className="mt-20 pt-16 border-t border-stone-200">
            <h3 className="text-3xl font-playfair font-bold text-stone-900 mb-10 flex items-center gap-3">
              <MessageSquare className="text-sky-500" /> Responses (2)
            </h3>
            
            <div className="space-y-8 mb-12">
              {[1, 2].map((comment) => (
                <div key={comment} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-stone-200 shrink-0 overflow-hidden relative">
                    <Image src={`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop`} alt="User" fill className="object-cover" />
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-bold text-stone-900">Alex Traveler</h5>
                      <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">2 days ago</span>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      This is exactly the guide I was looking for! I&apos;m planning my trip for next month and these tips are invaluable. Did you find it easy to navigate the train system there?
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-stone-100 p-8 rounded-[2rem]">
              <h4 className="text-xl font-playfair font-bold text-stone-900 mb-6">Leave a Reply</h4>
              <form className="space-y-4">
                <textarea 
                  rows={4} 
                  placeholder="Share your thoughts..."
                  className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white resize-none"
                ></textarea>
                <button type="button" className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-colors shadow-md">
                  Post Comment
                </button>
              </form>
            </div>
          </div>

        </main>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-white py-24 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h3 className="text-4xl font-playfair font-bold text-stone-900 mb-12 text-center">Continue Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id} className="group block bg-stone-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest border border-white/10">
                      <Tag size={12} className="text-sky-400" /> {relatedPost.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-playfair font-bold text-stone-900 group-hover:text-sky-600 transition-colors mb-4 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-stone-500 font-medium uppercase tracking-wider">
                      <span>{relatedPost.date}</span>
                      <span className="flex items-center text-sky-600 group-hover:gap-2 transition-all font-bold">
                        Read <ArrowRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
