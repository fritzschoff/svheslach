
import React from 'react';
import { SPORTS } from '../constants';
import { Clock, User, MapPin, ArrowLeft, ChevronRight } from 'lucide-react';

interface SportPageProps {
  sportId: string;
}

const SportPage: React.FC<SportPageProps> = ({ sportId }) => {
  const sport = SPORTS.find((s) => s.id === sportId);

  if (!sport) {
    return (
      <div className="min-h-screen py-32 flex flex-col items-center justify-center bg-stone-50">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Sportart nicht gefunden</h1>
        <a href="#/" className="mt-8 text-red-600 font-bold uppercase tracking-widest text-xs underline">
          Zur&uuml;ck zur Startseite
        </a>
      </div>
    );
  }

  const otherSports = SPORTS.filter((s) => s.id !== sportId);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-black py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={sport.piktogramm} alt="" className="w-full h-full object-contain scale-150" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="#/" className="inline-flex items-center gap-2 text-stone-400 hover:text-white text-xs font-bold uppercase tracking-widest mb-8 transition-colors">
            <ArrowLeft size={14} /> Zur&uuml;ck zur Startseite
          </a>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
              <img src={sport.image} alt={sport.title} className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
                {sport.title}
              </h1>
              <p className="text-xl text-stone-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                {sport.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left: Description */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">&Uuml;ber die Abteilung</h2>
              <div className="h-1 w-16 bg-red-600 mb-8"></div>
              <p className="text-stone-600 text-lg leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                {sport.longDescription}
              </p>
              <p className="text-stone-500 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-stone-500 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>

              {/* Pictogram Gallery */}
              <div className="mt-16">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Piktogramme</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white border border-stone-200 p-6 flex items-center justify-center aspect-square">
                    <img src={sport.piktogramm} alt={`${sport.title} rot auf weiß`} className="w-full h-full object-contain" />
                  </div>
                  <div className="bg-black p-6 flex items-center justify-center aspect-square">
                    <img src={sport.image} alt={`${sport.title} weiß auf schwarz`} className="w-full h-full object-contain" />
                  </div>
                  <div className="bg-red-600 p-6 flex items-center justify-center aspect-square">
                    <img
                      src={sport.image.replace('weiss_auf_schwarz', 'weiss_auf_rot').replace('schwarz', 'rot')}
                      alt={`${sport.title} weiß auf rot`}
                      className="w-full h-full object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <div className="bg-white border border-stone-200 p-6 flex items-center justify-center aspect-square">
                    <img
                      src={sport.piktogramm.replace('rot_auf_weiss', 'schwarz_auf_weiss')}
                      alt={`${sport.title} schwarz auf weiß`}
                      className="w-full h-full object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Sidebar Info */}
            <div className="space-y-8">

              {/* Training Info Card */}
              <div className="bg-black text-white p-8 shadow-xl">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-6 border-b border-red-600 pb-4">Trainingszeiten</h3>
                <div className="flex items-start gap-4 mb-6">
                  <Clock size={20} className="text-red-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-sm mb-1">Wann?</p>
                    <p className="text-stone-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{sport.trainingTimes}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <MapPin size={20} className="text-red-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-sm mb-1">Wo?</p>
                    <p className="text-stone-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Vereinsgel&auml;nde SV Heslach<br />Rotenwaldstra&szlig;e 373<br />70197 Stuttgart</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <User size={20} className="text-red-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-bold text-sm mb-1">Ansprechpartner</p>
                    <p className="text-stone-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{sport.contact}</p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-red-600 text-white p-8 shadow-xl">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4">Lust mitzumachen?</h3>
                <p className="text-white/80 text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Komm einfach zum Training vorbei oder melde dich bei uns. Wir freuen uns auf dich!
                </p>
                <a
                  href="#/mitgliedschaft"
                  className="block w-full bg-white text-black py-4 font-black uppercase text-xs tracking-widest text-center hover:bg-black hover:text-white transition-colors"
                >
                  Mitglied werden
                </a>
              </div>

              {/* Contact Card */}
              <div className="bg-stone-50 p-8 border border-stone-200">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4">Kontakt</h3>
                <p className="text-stone-500 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Sportverein Heslach e.V.<br />
                  Rotenwaldstra&szlig;e 373<br />
                  70197 Stuttgart<br /><br />
                  Tel: 0711 / 690714<br />
                  E-Mail: info@svheslach.de
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sports */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-10">Weitere Abteilungen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {otherSports.map((s) => (
              <a
                key={s.id}
                href={s.link}
                className="group bg-black p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-all shadow-md"
              >
                <img src={s.image} alt={s.title} className="w-16 h-16 object-contain mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-bold uppercase tracking-wide">{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SportPage;
