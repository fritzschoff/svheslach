
import React from 'react';
import { SPORTS } from '../constants';
import { ChevronRight, Mail } from 'lucide-react';

const Sportarten: React.FC = () => {
  const topLevelSports = SPORTS.filter((s) => !s.parentId);
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-end overflow-hidden bg-black">
        <img
          src="/images/events/public-viewing-nacht.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Sportarten"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Sportarten</h1>
          <p className="text-stone-300 mt-4 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            {topLevelSports.length} Abteilungen, ein Verein. Finden Sie Ihren Sport beim SV Heslach.
          </p>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topLevelSports.map((sport) => (
              <a
                key={sport.id}
                href={sport.link}
                className="group flex flex-col sm:flex-row overflow-hidden bg-stone-50 hover:bg-stone-100 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="w-full sm:w-48 h-48 shrink-0 bg-black flex items-center justify-center p-6">
                  <img
                    src={sport.image}
                    alt={sport.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 group-hover:text-red-600 transition-colors">
                    {sport.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>{sport.description}</p>
                  <div className="flex items-center gap-2 text-stone-400 text-xs mb-3">
                    <Mail size={12} className="text-red-600" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{sport.email}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-red-600 font-bold uppercase text-xs tracking-widest">
                    Mehr erfahren <ChevronRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sportarten;
