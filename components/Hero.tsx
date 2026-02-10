
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden bg-black">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          alt="Football Pitch"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6 bg-yellow-500 text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <span className="animate-pulse">●</span> 100 Jahre Tradition (1926-2026)
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
            HEIMSPIEL IN <br />
            <span className="text-yellow-500">HESLACH.</span>
          </h1>
          <p className="text-xl text-stone-300 mb-10 leading-relaxed font-light">
            Dein Verein im Herzen von Stuttgart. Entdecke unsere Vielfalt an Sportarten und werde Teil unserer starken Gemeinschaft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-500 text-black px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all shadow-xl">
              Sportangebot entdecken
            </button>
            <button className="border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all">
              Jetzt Mitglied werden
            </button>
          </div>
        </div>
      </div>

      {/* 100 Year Badge Overlay */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-bounce-slow">
         <div className="relative w-48 h-48 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0 " fill="transparent" />
                <text className="text-[9px] uppercase font-bold tracking-[0.2em] fill-yellow-500">
                    <textPath xlinkHref="#circlePath">
                        • 100 JAHRE SV HESLACH • TRADITION SEIT 1926
                    </textPath>
                </text>
            </svg>
            <div className="text-center">
                <div className="text-4xl font-black text-yellow-500">100</div>
                <div className="text-[10px] text-white uppercase font-bold">JAHRE</div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
