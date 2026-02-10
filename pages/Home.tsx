
import React from 'react';
import Hero from '../components/Hero';
import SectionCards from '../components/SectionCards';
import { NEWS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      
      {/* 100 Year Teaser */}
      <section className="bg-red-600 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="md:w-1/2">
                <h2 className="text-4xl font-black text-white uppercase mb-4 tracking-tighter">Ein Jahrhundert Heslach</h2>
                <p className="text-white font-medium text-lg leading-relaxed opacity-90">
                  Gegründet 1926 blicken wir auf eine bewegte Geschichte zurück. Im Jahr 2026 feiern wir unser 100-jähriges Bestehen mit einer Serie von Sonderevents.
                </p>
             </div>
             <div className="flex gap-4">
                <button className="bg-black text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                  Festschrift lesen
                </button>
                <button className="bg-white text-black border-2 border-black px-8 py-3 font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                  Termine 2024-2026
                </button>
             </div>
          </div>
        </div>
      </section>

      <SectionCards />

      {/* Latest News & Upcoming Events */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* News Grid */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-end mb-10">
                <h2 className="text-3xl font-black uppercase tracking-tighter">Aktuelles</h2>
                <a href="#/news" className="text-stone-400 hover:text-red-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  Alle News <ArrowRight size={14} />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {NEWS.map((item) => (
                  <div key={item.id} className="bg-white p-8 border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-black uppercase text-red-600 bg-red-50 px-2 py-1">
                        {item.category}
                      </span>
                      <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-6">
                      {item.excerpt}
                    </p>
                    <a href="#" className="text-xs font-black uppercase tracking-widest hover:text-red-600 transition-colors">
                      Weiterlesen
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Events Sidebar */}
            <div className="bg-black text-white p-10 rounded-sm shadow-2xl">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 border-b border-red-600 pb-4">Nächste Termine</h2>
              <div className="space-y-8">
                {[
                  { date: '12. Juni', event: 'Sommerfest Fußballjugend', time: 'ab 10:00 Uhr' },
                  { date: '25. Juni', event: 'Hauptversammlung 2024', time: '19:30 Uhr, Vereinsheim' },
                  { date: '01. Juli', event: 'Turnierbeginn Tennis-Cup', time: 'Ganztägig' }
                ].map((ev, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center justify-center bg-red-600 text-white min-w-[60px] h-[60px] rounded-sm shadow-md">
                      <span className="text-lg font-black leading-none">{ev.date.split(' ')[0]}</span>
                      <span className="text-[10px] uppercase font-bold">{ev.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{ev.event}</h4>
                      <div className="flex items-center gap-1.5 text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                         <Calendar size={12} className="text-red-600" /> {ev.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-12 bg-white text-black py-4 font-black uppercase text-xs tracking-widest hover:bg-red-600 hover:text-white transition-colors">
                Gesamter Kalender
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Venue CTA */}
      <section className="relative h-[60vh] flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Restaurant"
        />
        <div className="absolute inset-0 bg-stone-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-red-600 font-oswald text-2xl uppercase tracking-[0.3em] mb-4">Vereinsgaststätte</h2>
          <h3 className="text-5xl md:text-6xl font-black text-white uppercase mb-8 leading-tight">GUT ESSEN IN <br /> HESLACH.</h3>
          <p className="text-stone-300 max-w-xl mx-auto mb-10 text-lg">
            Besuchen Sie unsere gemütliche Gaststätte. Ob nach dem Training oder für private Feiern – wir sind für Sie da.
          </p>
          <button className="bg-red-600 text-white px-12 py-4 font-black uppercase text-sm tracking-widest hover:scale-105 transition-all">
            Tisch Reservieren
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
