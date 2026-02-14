
import React from 'react';
import { SPORTS } from '../constants';
import { ChevronRight } from 'lucide-react';

const SectionCards: React.FC = () => {
  return (
    <section id="abteilungen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Unsere Abteilungen</h2>
          <div className="h-1.5 w-24 bg-red-600 mx-auto"></div>
          <p className="mt-6 text-stone-500 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Von Jung bis Alt &ndash; bei uns bleibt jeder fit und in Bewegung!
            &Uuml;ber die einzelnen Kacheln findest du deinen Ansprechpartner.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SPORTS.map((sport) => (
            <a
              key={sport.id}
              href={sport.link}
              className="group relative flex flex-col items-center bg-black overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Pictogram */}
              <div className="w-full aspect-square flex items-center justify-center bg-gradient-to-br from-stone-900 to-black p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-300"></div>
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Label */}
              <div className="w-full bg-red-600 py-4 px-4 text-center">
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  {sport.title}
                </h3>
                <div className="flex items-center justify-center gap-1 mt-1 text-white/80 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Mehr erfahren <ChevronRight size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCards;
