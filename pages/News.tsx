
import React from 'react';
import { NEWS } from '../constants';
import { Calendar } from 'lucide-react';

const NewsPage: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-stone-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Aktuelles</h1>
          <p className="text-stone-300 mt-4 text-lg">Neuigkeiten rund um den SV Heslach.</p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEWS.map((item) => (
              <div key={item.id} className="bg-stone-50 p-8 border-l-4 border-red-600 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-black uppercase text-red-600 bg-red-50 px-2 py-1">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest flex items-center gap-1">
                    <Calendar size={10} /> {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <div className="mt-20">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-12">Nächste Termine</h2>
            <div className="space-y-6">
              {[
                { date: '12. Juni 2026', event: 'Sommerfest Fußballjugend', time: 'ab 10:00 Uhr', location: 'Vereinsgelände' },
                { date: '25. Juni 2026', event: 'Hauptversammlung', time: '19:30 Uhr', location: 'Vereinsheim' },
                { date: '01. Juli 2026', event: 'Jubiläumsfeier 100 Jahre', time: 'Ganztägig', location: 'Vereinsgelände' },
              ].map((ev, i) => (
                <div key={i} className="flex items-center gap-8 p-6 bg-stone-50 hover:bg-stone-100 transition-colors">
                  <div className="bg-red-600 text-white px-6 py-3 text-center min-w-[120px]">
                    <div className="text-sm font-black">{ev.date}</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{ev.event}</h3>
                    <p className="text-stone-500 text-sm">{ev.time} · {ev.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
