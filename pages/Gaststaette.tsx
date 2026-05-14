
import React from 'react';
import { Clock, Phone, MapPin, Utensils } from 'lucide-react';

const Gaststaette: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-end overflow-hidden bg-black">
        <img
          src="/images/gaststaette/innen-detail.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Weitmanns Waldhaus"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Weitmanns Waldhaus</h1>
          <p className="text-stone-300 mt-4 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>Unsere Vereinsgaststätte im Heslacher Wald.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Willkommen im Waldhaus</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Das Weitmanns Waldhaus ist der Treffpunkt für Mitglieder, Sportler und Gäste.
                In gemütlicher Atmosphäre bieten wir gutbürgerliche schwäbische Küche und
                frisch gezapfte Getränke.
              </p>
              <p className="text-stone-500 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Ob nach dem Training, für Familienfeiern oder einen gemütlichen Abend mit
                Freunden – unsere Gaststätte ist der ideale Ort. In unserem Biergarten
                genießen Sie den Blick ins Grüne.
              </p>
              <p className="text-stone-500 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Für private Veranstaltungen und Feiern können Sie unsere Räumlichkeiten
                auch mieten. Sprechen Sie uns einfach an!
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-8">
              <div className="bg-stone-50 p-8">
                <h3 className="text-lg font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
                  <Clock size={18} className="text-red-600" /> Öffnungszeiten
                </h3>
                <p className="text-red-600 font-bold text-sm mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Ruhetag: Montag + Dienstag
                </p>
                <ul className="space-y-5 text-stone-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>
                    <div className="flex justify-between">
                      <span className="font-semibold">Mittwoch, Donnerstag & Freitag</span>
                      <span>11:30 – 21:00 Uhr</span>
                    </div>
                    <p className="text-stone-400 text-xs mt-1">Warme Küche von 11:30 bis 20:30 Uhr</p>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <span className="font-semibold">Samstag</span>
                      <span>12:00 – 22:00 Uhr</span>
                    </div>
                    <p className="text-stone-400 text-xs mt-1">Warme Küche von 12:00 bis 21:00 Uhr</p>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <span className="font-semibold">Sonntag</span>
                      <span>11:30 – 20:00 Uhr</span>
                    </div>
                    <p className="text-stone-400 text-xs mt-1">Warme Küche von 11:30 bis 19:30 Uhr</p>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <span className="font-semibold">Feiertage</span>
                      <span className="text-stone-400">Siehe Aushang</span>
                    </div>
                    <p className="text-stone-400 text-xs mt-1">Aktueller Aushang / Homepage / Facebook</p>
                  </li>
                </ul>
              </div>

              <div className="bg-black text-white p-8">
                <h3 className="text-lg font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
                  <Utensils size={18} className="text-red-600" /> Reservierung
                </h3>
                <div className="space-y-4 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-red-600 shrink-0" />
                    <span>0711 / 690714</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-red-600 shrink-0 mt-0.5" />
                    <span>Sportverein Heslach e.V.<br />Rotenwaldstraße 373<br />70197 Stuttgart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-0 bg-black">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          <div className="aspect-square overflow-hidden">
            <img src="/images/gaststaette/biergarten-panorama.jpg" alt="Biergarten" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/images/gaststaette/innen-festlich.jpg" alt="Festlicher Saal" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/images/gaststaette/biergarten-feier.jpg" alt="Biergarten Feier" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/images/gaststaette/innen-ballons.jpg" alt="Dekoration" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/images/gaststaette/biergarten-tisch.jpg" alt="Biergarten Tisch" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/images/gaststaette/innen-detail.jpg" alt="Innenraum" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gaststaette;
