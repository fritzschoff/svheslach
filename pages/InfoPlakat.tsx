import React from 'react';
import { Download } from 'lucide-react';

const PLAKAT_PDF = '/documents/100jahre_plakat.pdf';

const InfoPlakat: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-oswald text-5xl md:text-7xl uppercase tracking-widest mb-6">Info-Plakat</h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-8"></div>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Alle Infos zum 100-jährigen Jubiläum des SV Heslach auf einen Blick.
            Das Plakat zum Ausdrucken und Weitergeben.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={PLAKAT_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-red-500 transition-all"
          >
            <Download size={16} /> Plakat als PDF
          </a>
          <a
            href="/"
            className="inline-block bg-stone-800 text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-stone-700 transition-all text-center"
          >
            Zurück zur Startseite
          </a>
        </div>

        <div className="bg-white shadow-2xl">
          <object
            data={PLAKAT_PDF}
            type="application/pdf"
            className="w-full"
            style={{ height: '80vh' }}
            aria-label="100 Jahre SV Heslach – Info-Plakat"
          >
            <p className="p-8 text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ihr Browser kann das PDF nicht einbetten.{' '}
              <a href={PLAKAT_PDF} className="text-red-600 underline" target="_blank" rel="noopener noreferrer">
                Hier das Plakat herunterladen
              </a>
              .
            </p>
          </object>
        </div>
      </div>
    </main>
  );
};

export default InfoPlakat;
