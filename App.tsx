
import React, { useState } from 'react';
import { Header } from './components/Header';
import { AnimatedSection } from './components/AnimatedSection';
import { Globe, TrendingUp, CheckCircle, ShieldCheck, Zap, Eye, Lock, EyeOff, X, DollarSign, ChevronDown, ChevronRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const partners = [
    "COACHELLA", "LALAPALOOZA", "NBA", "NFL", "MLB", "CONCERTS"
  ];

  const faqItems = [
    {
      q: "Will selling on StubHub cannibalize my primary sales?",
      a: "No. StubHub's Open Distribution is designed to reach incremental demand—the fans who might not visit your primary site first. By listing on StubHub alongside your primary, you maximize exposure to a global audience."
    },
    {
      q: "Do I keep full control of my pricing and inventory?",
      a: "Absolutely. You maintain 100% control over which tickets are listed and at what price. Our real-time syncing ensures your inventory stays accurate across all platforms."
    },
    {
      q: "What data and insights do I get to optimize sales?",
      a: "You get access to a powerful dashboard showing real-time pricing trends, buyer velocity, and competitive analysis to help you make informed decisions."
    },
    {
      q: "What does it take to get started selling on StubHub?",
      a: "The setup is quick. After reaching out via our form, our team will help you integrate your primary ticketing system. There is $0 upfront cost to start."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-[#5C21B5] selection:text-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="px-6 pt-12 pb-16">
          <AnimatedSection>
            <h1 className="text-[2.75rem] leading-[1.1] font-bold text-slate-900 mb-6 tracking-tight">
              The marketplace fans trust. Now open to you.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              StubHub Open Distribution lets artists, teams, and venues sell official tickets directly on StubHub — alongside their primary ticketing.
            </p>
            <button className="bg-[#5C21B5] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#4C1BA0] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-200">
              Start Now
            </button>
          </AnimatedSection>
        </section>

        {/* Banner */}
        <div className="bg-[#EBF5FF] px-6 py-8">
          <p className="text-[#0047AB] font-bold text-lg mb-1">$0 cost to start. No seller-side fees.</p>
          <p className="text-[#0047AB]/80">We handle payments, fraud, and support.</p>
        </div>

        {/* Video Placeholder */}
        <section className="px-6 -mt-4 mb-12">
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-video bg-orange-200 rounded-3xl overflow-hidden flex items-center justify-center group cursor-pointer shadow-xl">
              <img src="https://picsum.photos/seed/concert/1200/800" alt="Concert" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40" />
              <div className="z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={32} className="text-orange-500 fill-orange-500 ml-1" />
                </div>
                <span className="text-orange-900 font-bold tracking-widest uppercase">Video Here</span>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Partners Ticker */}
        <div className="py-8 border-y border-slate-100 overflow-hidden relative">
          <div className="flex gap-12 animate-[scroll_20s_linear_infinite] whitespace-nowrap px-6">
             {Array(3).fill(partners).flat().map((p, i) => (
               <span key={i} className="text-slate-300 font-black text-xl tracking-tighter">{p} LOGO</span>
             ))}
          </div>
        </div>

        {/* Dark Section */}
        <section className="bg-slate-900 text-white px-6 py-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 leading-tight">
              Distribute on StubHub in addition to your primary.
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                Open Distribution amplifies your primary ticketing platform and expands your reach. You maintain full control of inventory and pricing. StubHub becomes an additional marketplace to capture incremental demand.
              </p>
              <p>
                We've built distribution at scale and you too have access to it.
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Impact Section */}
        <section className="px-6 py-20">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">How it drives results</p>
            <h2 className="text-3xl font-bold text-slate-900">Three ways Open Distribution delivers impact</h2>
          </div>

          <div className="space-y-16">
            <AnimatedSection delay={0.1}>
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Globe size={24} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Maximize Reach</h3>
              <p className="text-slate-600 text-lg">Access millions of global buyers actively searching for tickets.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Grow average ticket price</h3>
              <p className="text-slate-600 text-lg">Price strategically to match the market demand. High demand events get 40%+ higher ATP on StubHub.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={24} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Increase sell-through</h3>
              <p className="text-slate-600 text-lg">Leverage our powerful marketing engine of email, push, social and SEO — for free.</p>
            </AnimatedSection>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="px-4 py-20 space-y-12">
          <div className="px-2">
             <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Why Open Distribution?</p>
             <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Unlock the full value of your inventory</h2>
          </div>

          <AnimatedSection>
            <div className="bg-slate-100 rounded-[2rem] p-8 shadow-sm">
              <p className="text-slate-900 font-bold mb-2">Without Open Distribution</p>
              <h3 className="text-[1.75rem] leading-[1.2] font-bold mb-8 text-slate-900">Demand Exists. You Can't Fully See It.</h3>
              
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-6">SOUND FAMILIAR?</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-white rounded-xl flex items-center justify-center border border-slate-200/50 shadow-sm">
                    <Lock size={20} className="text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.05rem] mb-1">Closed Marketplaces</h4>
                    <p className="text-sm text-slate-600 leading-snug">Inventory disperses across disconnected resale platforms.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-white rounded-xl flex items-center justify-center border border-slate-200/50 shadow-sm">
                    <EyeOff size={20} className="text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.05rem] mb-1">Limited Demand Visibility</h4>
                    <p className="text-sm text-slate-600 leading-snug">No clear view of real-time pricing and buyer activity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-white rounded-xl flex items-center justify-center border border-slate-200/50 shadow-sm">
                    <X size={20} className="text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.05rem] mb-1">Disconnected Inventory Control</h4>
                    <p className="text-sm text-slate-600 leading-snug">Performance and pricing live in separate systems.</p>
                  </div>
                </div>
              </div>

              <button className="mt-12 px-6 py-4 bg-transparent border border-slate-300 rounded-xl font-bold text-slate-900 hover:bg-slate-200/50 transition-colors">
                Let's Fix This
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
              <p className="text-slate-300 font-bold mb-2">With Open Distribution</p>
              <h3 className="text-[1.75rem] leading-[1.2] font-bold mb-8">See More. Reach More. Capture More.</h3>
              
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em] mb-6">THE ALTERNATIVE IS HERE.</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center shadow-inner">
                    <Globe size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.05rem] mb-1">Access More Active Buyers</h4>
                    <p className="text-sm text-slate-400 leading-snug">Reach buyers across platforms from one integration.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center shadow-inner">
                    <Eye size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.05rem] mb-1">See the Market Clearly</h4>
                    <p className="text-sm text-slate-400 leading-snug">Clear visibility into pricing trends.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center shadow-inner">
                    <DollarSign size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[1.05rem] mb-1">Control Without Exclusivity</h4>
                    <p className="text-sm text-slate-400 leading-snug">Keep control while unlocking secondary demand.</p>
                  </div>
                </div>
              </div>

              <button className="mt-12 px-8 py-4 bg-white rounded-xl font-bold text-slate-900 hover:bg-slate-100 transition-colors">
                Get Started
              </button>
            </div>
          </AnimatedSection>
        </section>

        {/* Feature Grid */}
        <section className="px-6 py-20 bg-slate-50">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Why StubHub</p>
            <h2 className="text-3xl font-bold text-slate-900">Built for the partners shaping live events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            <AnimatedSection delay={0.1}>
              <Eye size={32} className="text-slate-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">12B+ site impressions</h3>
              <p className="text-slate-600 leading-relaxed">Put your inventory in front of 125M+ registered users across 200+ countries and territories, in 33 languages. 12B+ annual site impressions.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <CheckCircle size={32} className="text-slate-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">We handle operations</h3>
              <p className="text-slate-600 leading-relaxed">Payments, fraud protection, customer support, and fulfillment logistics are on us.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <Zap size={32} className="text-slate-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">25 years of market intelligence</h3>
              <p className="text-slate-600 leading-relaxed">Real-time demand signals, historical pricing data, and marketplace intelligence to help you price smarter and sell faster.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <ShieldCheck size={32} className="text-slate-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">FanProtect Guarantee</h3>
              <p className="text-slate-600 leading-relaxed">Every order is backed by our industry-leading guarantee. Fans get in, or we make it right. Trust built over decades.</p>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by leading partners</h2>
          
          <AnimatedSection>
            <div className="border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white">
              <div className="p-8 text-center bg-slate-50">
                <span className="text-2xl font-black tracking-tighter block mb-8">COACHELLA</span>
                <blockquote className="text-xl font-medium text-slate-800 leading-snug mb-8 italic">
                  "We went from having zero control over our secondary market to reaching fans globally on our own terms. The revenue impact was immediate."
                </blockquote>
                <p className="font-bold text-slate-900">Clara Doe</p>
                <p className="text-slate-500 text-sm">Coachella Event Manager</p>
              </div>
              <div className="relative aspect-[4/5] bg-slate-200">
                <img src="https://picsum.photos/seed/manager/800/1000" alt="Event Manager" className="w-full h-full object-cover" />
                <div className="absolute bottom-8 right-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 animate-bounce-slow">
                  <p className="text-4xl font-black text-slate-900 mb-1">99.7%</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Sell-through<br/>in 2025</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              <button className="w-12 h-12 rounded-full bg-[#5C21B5] flex items-center justify-center text-white hover:bg-[#4C1BA0] transition-colors">
                <ChevronRight size={24} className="rotate-180" />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#5C21B5] flex items-center justify-center text-white hover:bg-[#4C1BA0] transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </AnimatedSection>
        </section>

        {/* Contact Form Section */}
        <section className="px-6 py-20 bg-slate-50">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-12">Get started for free</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your name" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#5C21B5] focus:border-transparent outline-none transition-all" />
              <input type="email" placeholder="Your work email" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#5C21B5] focus:border-transparent outline-none transition-all" />
              <input type="text" placeholder="Which events do you want to list?" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#5C21B5] focus:border-transparent outline-none transition-all" />
              
              <div className="space-y-4 pt-4">
                <p className="font-bold text-slate-700">Ticket type</p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="ticket_type" className="w-5 h-5 accent-[#5C21B5]" />
                    <span>General Admission</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="ticket_type" className="w-5 h-5 accent-[#5C21B5]" />
                    <span>Seated Venue</span>
                  </label>
                </div>
              </div>

              <div className="relative">
                <select className="w-full p-4 rounded-xl border border-slate-200 appearance-none bg-white focus:ring-2 focus:ring-[#5C21B5] outline-none">
                  <option>What's your primary</option>
                  <option>Ticketmaster</option>
                  <option>Eventbrite</option>
                  <option>AXS</option>
                  <option>Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
              </div>

              <textarea placeholder="Your message (optional)" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#5C21B5] outline-none h-32"></textarea>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 accent-[#5C21B5]" />
                <span className="text-sm text-slate-600 leading-tight">I am the content rights holder or authorized agent for this event.</span>
              </label>

              <button className="w-full bg-[#5C21B5] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#4C1BA0] transition-all shadow-xl shadow-purple-100">
                Get Started
              </button>
            </form>
          </AnimatedSection>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-20">
          <h2 className="text-3xl font-bold mb-12">Frequently asked questions</h2>
          <div className="border-t border-slate-200">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border-b border-slate-200">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${activeFaq === idx ? 'text-[#5C21B5]' : 'text-slate-900'}`}>
                    {item.q}
                  </span>
                  <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-[#5C21B5]' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-slate-600 leading-relaxed text-lg">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white px-6 py-12 text-center">
        <span className="text-2xl font-black tracking-tighter block mb-6">StubHub</span>
        <p className="text-slate-500 text-sm">© 2024 StubHub. All rights reserved.</p>
      </footer>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
      `}</style>
    </div>
  );
};

export default App;
