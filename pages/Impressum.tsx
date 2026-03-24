
import React from 'react';

const Impressum: React.FC = () => {
  return (
    <main className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12">Impressum</h1>

        <div className="space-y-8 text-stone-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-3 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>Angaben gemäß § 5 TMG</h2>
            <p>
              Sportverein Heslach 1926 e.V.<br />
              Rotenwaldstraße 373<br />
              70197 Stuttgart
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-3 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>Vertreten durch</h2>
            <p>Den Vorstand des SV Heslach 1926 e.V.</p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-3 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>Kontakt</h2>
            <p>
              Telefon: 0711 / 690714<br />
              E-Mail: info@svheslach.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-3 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>Registereintrag</h2>
            <p>
              Eingetragen im Vereinsregister.<br />
              Registergericht: Amtsgericht Stuttgart
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-3 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Sportverein Heslach 1926 e.V.<br />
              Rotenwaldstraße 373<br />
              70197 Stuttgart
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-3 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>Haftungsausschluss</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Impressum;
