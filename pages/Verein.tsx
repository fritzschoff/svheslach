
import React from 'react';
import { GENERAL_EMAIL, VERWALTUNG_EMAIL } from '../constants';
import { Mail, MapPin, Users, Trophy, Heart } from 'lucide-react';

const Verein: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-end overflow-hidden bg-black">
        <img
          src="/images/events/public-viewing-tag.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Vereinsheim"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Unser Verein</h1>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Seit 1926
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Ein Jahrhundert Sportgeschichte</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Gegründet im Jahr 1926, blickt der SV Heslach auf eine fast hundertjährige Geschichte zurück.
                Was als kleiner Sportverein im Süden von Stuttgart begann, ist heute ein vielfältiger Breitensportverein
                mit 10 Abteilungen und Hunderten von aktiven Mitgliedern.
              </p>
              <p className="text-stone-500 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Unser Vereinsgelände liegt in der Rotenwaldstraße 373 am Rande des Heslacher Waldes und bietet
                optimale Bedingungen für Sport, Gemeinschaft und Erholung. Im Jahr 2026 feiern
                wir stolz unser 100-jähriges Bestehen am 20.06.2026.
              </p>
              <p className="text-stone-500 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Der SV Heslach steht für Tradition, Gemeinschaft und die Freude an Bewegung.
                Ob jung oder alt, Anfänger oder Fortgeschrittene – bei uns findet jeder seinen Platz.
              </p>
            </div>
            <div className="bg-red-600 p-12 text-white">
              <div className="text-8xl font-black mb-4">100</div>
              <div className="text-2xl font-bold uppercase tracking-widest mb-6">Jahre SV Heslach</div>
              <div className="h-1 w-16 bg-white mb-6"></div>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                1926 – 2026. Ein Jahrhundert voller Sportgeist, Zusammenhalt und
                unvergesslicher Momente. Wir feiern mit Ihnen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-center mb-16">Wofür wir stehen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Users className="text-red-600" size={32} />, title: 'Gemeinschaft', text: 'Bei uns steht das Miteinander an erster Stelle. Sport verbindet – über Generationen und Grenzen hinweg.' },
              { icon: <Trophy className="text-red-600" size={32} />, title: 'Tradition', text: 'Seit 1926 pflegen wir sportliche Werte und geben sie von Generation zu Generation weiter.' },
              { icon: <Heart className="text-red-600" size={32} />, title: 'Leidenschaft', text: 'Ob Wettkampf oder Breitensport – bei allem was wir tun, stecken Herzblut und Begeisterung.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Vereinsverwaltung</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="text-red-600" size={18} />
              <a href={`mailto:${VERWALTUNG_EMAIL}`} className="hover:text-red-600 transition-colors">{VERWALTUNG_EMAIL}</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-red-600" size={18} />
              <a href={`mailto:${GENERAL_EMAIL}`} className="hover:text-red-600 transition-colors">{GENERAL_EMAIL}</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-red-600" size={18} />
              <span>Rotenwaldstraße 373, 70197 Stuttgart</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Verein;
