
import React from 'react';
import { SPORTS, GENERAL_EMAIL, VERWALTUNG_EMAIL } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Kontakt: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-end overflow-hidden bg-black">
        <img
          src="/images/events/public-viewing-tag.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Kontakt"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Kontakt</h1>
        </div>
      </section>

      {/* General Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: General info */}
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Allgemeiner Kontakt</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Adresse</h3>
                    <p className="text-stone-500" style={{ fontFamily: 'Inter, sans-serif' }}>Sportverein Heslach e.V.<br />Rotenwaldstraße 373<br />70197 Stuttgart</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telefon</h3>
                    <p className="text-stone-500" style={{ fontFamily: 'Inter, sans-serif' }}>0711 / 690714</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Allgemeine Anfragen</h3>
                    <a href={`mailto:${GENERAL_EMAIL}?subject=Anfrage%20an%20SV%20Heslach&body=Hallo%20liebes%20SV%20Heslach-Team%2C%0A%0A%0A%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen`} className="text-red-600 hover:underline" style={{ fontFamily: 'Inter, sans-serif' }}>{GENERAL_EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-stone-800 rounded flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Verwaltung</h3>
                    <a href={`mailto:${VERWALTUNG_EMAIL}?subject=Anfrage%20Verwaltung%20SV%20Heslach&body=Hallo%20liebe%20Verwaltung%2C%0A%0A%0A%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen`} className="text-red-600 hover:underline" style={{ fontFamily: 'Inter, sans-serif' }}>{VERWALTUNG_EMAIL}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Department emails */}
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Abteilungen</h2>
              <p className="text-stone-500 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Jede Abteilung hat eine eigene E-Mail-Adresse. Wenden Sie sich direkt an die passende Abteilung:
              </p>
              <div className="space-y-3">
                {SPORTS.map((sport) => (
                  <div key={sport.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-stone-100 gap-1">
                    <a href={sport.link} className="font-bold hover:text-red-600 transition-colors">{sport.title}</a>
                    <a href={`mailto:${sport.email}?subject=Anfrage%20${encodeURIComponent(sport.title)}&body=Hallo%20liebes%20${encodeURIComponent(sport.title)}-Team%2C%0A%0A%0A%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen`} className="text-sm text-stone-500 hover:text-red-600 transition-colors flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <Mail size={14} className="text-red-600 shrink-0" />
                      <span className="break-all">{sport.email}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Kontakt;
