
import React from 'react';
import Hero from '../components/Hero';
import SectionCards from '../components/SectionCards';
import SportDetails from '../components/SportDetails';

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
                <p className="text-white font-medium text-lg leading-relaxed opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Gegründet 1926 blicken wir auf eine bewegte Geschichte zurück. Im Jahr 2026 feiern wir unser 100-jähriges Bestehen am 20.06.2026 auf unserem Vereinsgelände in der Rotenwaldstr. 373 in 70197 Stuttgart.
                </p>
             </div>
             <div className="flex gap-4">
                <button className="bg-black text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                  Info-Plakat
                </button>
                <button className="bg-white text-black border-2 border-black px-8 py-3 font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                  Termine 2026
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Termine */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Termine</h2>
            <div className="h-1.5 w-24 bg-red-600 mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-6 bg-stone-800 p-6 border-l-4 border-red-600">
              <div className="text-center shrink-0">
                <div className="text-red-600 font-black text-2xl">08.05.</div>
                <div className="text-stone-400 text-sm font-bold">2026</div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Mitgliederversammlung</h3>
              </div>
            </div>
            <div className="flex items-center gap-6 bg-stone-800 p-6 border-l-4 border-red-600">
              <div className="text-center shrink-0">
                <div className="text-red-600 font-black text-2xl">20.06.</div>
                <div className="text-stone-400 text-sm font-bold">2026</div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Fest zum 100-jährigen Bestehen</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCards />

      <SportDetails />

      {/* Photo Gallery Teaser */}
      <section className="py-0 bg-black">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          <div className="aspect-square overflow-hidden">
            <img src="/images/gaststaette/innen-festlich.jpg" alt="Festlich gedeckter Saal" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/images/events/public-viewing-tag.jpg" alt="Public Viewing" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/images/gaststaette/biergarten-panorama.jpg" alt="Biergarten Panorama" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/images/events/spanferkel.jpg" alt="Spanferkel" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/images/gaststaette/biergarten-feier.jpg" alt="Biergarten Feier" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/images/gaststaette/biergarten-tisch.jpg" alt="Biergarten Tisch" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/images/gaststaette/innen-ballons.jpg" alt="Festliche Dekoration" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/images/events/public-viewing-nacht.jpg" alt="Public Viewing Nacht" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Vereinsgaststätte Info */}
      <section className="relative h-[60vh] flex items-center">
        <img
          src="/images/gaststaette/innen-detail.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Weitmanns Waldhaus"
        />
        <div className="absolute inset-0 bg-stone-900/75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-red-600 font-oswald text-2xl uppercase tracking-[0.3em] mb-4">Vereinsgaststätte</h2>
          <h3 className="text-5xl md:text-6xl font-black text-white uppercase mb-8 leading-tight">WEITMANNS <br /> WALDHAUS.</h3>
          <p className="text-stone-300 max-w-xl mx-auto mb-10 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ob nach dem Training oder für private Feiern – das Weitmanns Waldhaus ist für Sie da.
            Unsere gemütliche Vereinsgaststätte befindet sich direkt auf dem Vereinsgelände im Heslacher Wald.
          </p>
          <a
            href="#/gaststaette"
            className="inline-block bg-red-600 text-white px-12 py-4 font-black uppercase text-sm tracking-widest hover:scale-105 transition-all"
          >
            Mehr erfahren
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
