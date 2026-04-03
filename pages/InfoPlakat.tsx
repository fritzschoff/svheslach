import React from 'react';

const InfoPlakat: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-oswald text-5xl md:text-7xl uppercase tracking-widest mb-6">Coming Soon</h1>
        <div className="h-1 w-24 bg-red-600 mx-auto mb-8"></div>
        <p className="text-stone-400 text-lg mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
          Das Info-Plakat zum 100-jährigen Jubiläum wird hier bald verfügbar sein.
        </p>
        <a
          href="#/"
          className="inline-block bg-red-600 text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-red-500 transition-all"
        >
          Zurück zur Startseite
        </a>
      </div>
    </div>
  );
};

export default InfoPlakat;
