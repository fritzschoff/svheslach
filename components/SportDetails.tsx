
import React from 'react';
import { SPORTS } from '../constants';
import { Clock, User, ChevronRight } from 'lucide-react';

const SportDetails: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Unsere Sportarten</h2>
          <div className="h-1.5 w-24 bg-red-600 mx-auto"></div>
          <p className="mt-6 text-stone-500 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Vom klassischen Fu&szlig;ball bis hin zur Gymnastik &ndash; bei uns findet jeder seinen Platz.
            Hier erf&auml;hrst du mehr &uuml;ber unsere acht Abteilungen.
          </p>
        </div>

        <div className="space-y-16">
          {SPORTS.map((sport, index) => (
            <div
              key={sport.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center bg-white shadow-sm border border-stone-100 overflow-hidden`}
            >
              {/* Pictogram Side */}
              <div className="w-full md:w-1/3 bg-black flex items-center justify-center p-12 min-h-[280px]">
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="w-40 h-40 object-contain"
                />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/3 p-8 md:p-12">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{sport.title}</h3>
                <div className="h-1 w-16 bg-red-600 mb-6"></div>
                <p className="text-stone-600 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {sport.longDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  <div className="flex items-center gap-3 text-sm text-stone-500">
                    <Clock size={18} className="text-red-600 shrink-0" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{sport.trainingTimes}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-500">
                    <User size={18} className="text-red-600 shrink-0" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{sport.contact}</span>
                  </div>
                </div>
                <a
                  href={sport.link}
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-black transition-colors"
                >
                  Mehr erfahren <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportDetails;
