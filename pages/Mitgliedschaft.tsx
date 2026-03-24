
import React from 'react';
import { GENERAL_EMAIL } from '../constants';
import { Check, Mail, Phone, MapPin } from 'lucide-react';

const MITGLIED_MAILTO = `mailto:${encodeURIComponent('info@svheslach.de')}?subject=${encodeURIComponent('Mitgliedschaftsanfrage SV Heslach')}&body=${encodeURIComponent('Hallo liebes SV Heslach-Team,\n\nich interessiere mich für eine Mitgliedschaft in Eurem Verein und würde gerne weitere Informationen erhalten.\n\nBitte sendet mir den Aufnahmeantrag zu.\n\nName: \nAdresse: \nTelefon: \n\nMit freundlichen Grüßen')}`;

const Mitgliedschaft: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-end overflow-hidden bg-black">
        <img
          src="/images/events/public-viewing-tag.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Mitgliedschaft"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Mitgliedschaft</h1>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 text-center">Ihre Vorteile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              'Zugang zu allen Abteilungen und Trainingsangeboten',
              'Nutzung der Sportanlagen und Vereinsräume',
              'Vergünstigte Teilnahme an Vereinsveranstaltungen',
              'Gemeinschaft und soziales Netzwerk',
              'Nutzung der Vereinsgaststätte Weitmanns Waldhaus',
              'Stimmrecht bei der Hauptversammlung',
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-stone-50">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                  <Check size={16} className="text-white" />
                </div>
                <p className="text-stone-700 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{benefit}</p>
              </div>
            ))}
          </div>

          {/* How to Join */}
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 text-center">So werden Sie Mitglied</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6 text-left mb-12">
              {[
                { step: '1', text: 'Kommen Sie zu einem Schnuppertraining in der Abteilung Ihrer Wahl.' },
                { step: '2', text: 'Füllen Sie den Aufnahmeantrag aus – erhältlich vor Ort oder per E-Mail.' },
                { step: '3', text: 'Geben Sie den Antrag bei der Verwaltung ab oder senden Sie ihn per E-Mail.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-red-600 text-white font-black flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <p className="text-stone-600 text-lg pt-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center space-y-6">
              <a
                href={MITGLIED_MAILTO}
                className="inline-block bg-red-600 text-white px-12 py-4 font-black uppercase text-sm tracking-widest hover:bg-black transition-colors"
              >
                Jetzt per E-Mail anfragen
              </a>
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
                <a href={MITGLIED_MAILTO} className="flex items-center justify-center gap-2 text-red-600 font-bold hover:underline">
                  <Mail size={16} /> {GENERAL_EMAIL}
                </a>
                <span className="flex items-center justify-center gap-2 text-stone-600">
                  <Phone size={16} className="text-red-600" /> 0711 / 690714
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Mitgliedschaft;
