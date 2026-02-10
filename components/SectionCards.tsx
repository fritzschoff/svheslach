
import React from 'react';
import { SPORTS } from '../constants';
import { ChevronRight } from 'lucide-react';

const SectionCards: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Unsere Abteilungen</h2>
          <div className="h-1.5 w-24 bg-yellow-500 mx-auto"></div>
          <p className="mt-6 text-stone-500 max-w-2xl mx-auto">
            Vom klassischen Fußball bis hin zum gemütlichen Skat – bei uns findet jeder seinen Platz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPORTS.map((sport) => (
            <div 
              key={sport.id} 
              className="group relative h-96 overflow-hidden bg-black shadow-2xl transition-transform hover:-translate-y-2"
            >
              {/* Image Background */}
              <img 
                src={sport.image} 
                alt={sport.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-105 group-hover:scale-100"
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="mb-4">
                  <h3 className="text-3xl font-black text-white uppercase mb-2 tracking-tight">
                    {sport.title}
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {sport.description}
                  </p>
                </div>
                
                <a 
                  href={sport.link}
                  className="inline-flex items-center gap-2 text-yellow-500 font-bold uppercase text-xs tracking-widest border-b border-transparent hover:border-yellow-500 transition-all w-max"
                >
                  Mehr Erfahren <ChevronRight size={16} />
                </a>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-12 h-1 bg-yellow-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCards;
