
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
              <p className="text-white/80 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                1926 – 2026. Ein Jahrhundert voller Sportgeist, Zusammenhalt und
                unvergesslicher Momente. Feier mit uns am 20.06.2026!
              </p>
              <a
                href="/mitgliedschaft"
                className="inline-block bg-white text-red-600 px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all"
              >
                Feier mit uns am 20.06.2026
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chronik / Zeitreise */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Chronik
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Zeitreise durch unsere Geschichte</h2>
          <div className="h-1 w-16 bg-red-600 mb-10"></div>

          <p className="text-stone-600 leading-relaxed mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            In fast 100 Jahren hat sich der Sportverein Heslach vom Arbeiterverein zum gut bürgerlichen Verein entwickelt,
            dessen Mitglieder aus allen beruflichen Bereichen kommen. Unzählige Frauen und Männer haben im Vorstand,
            im Ausschuss, in den Abteilungen sowie bei der Organisation von Veranstaltungen uneigennützig dazu beigetragen,
            dass der Sportverein Heslach ein Ort der sportlichen Gemeinschaft war und ist. Der große Wunsch des Vereins,
            sozusagen als Vision, ist eine eigene Sporthalle, die vorerst natürlich unbezahlbar ist. Aber darf man denn
            nicht auch mit fast 100 noch Visionen für die Zukunft haben?
          </p>

          <ol className="relative border-l-2 border-red-600 ml-3 space-y-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            {[
              { year: 'Seit 2004', text: 'Der Kunstrasenplatz wird eröffnet.' },
              { year: '1998', text: 'Im Frühjahr übernimmt Horst Alber den Vorsitz im Sportverein Heslach, Horst Haußer wird Stellvertreter. Gemeinsam mit den Abteilungsleitern und den Mitgliedern wird seither versucht, dem SVH wieder neuen Elan und Mut zu geben. Ein Kraftraum wird neu eingerichtet, außerdem entstehen neue Abteilungen für Walking und Radtouren.' },
              { year: '21. Juni 1985', text: 'Karl Widmann wird 1. Vorsitzender und bleibt dies 13 Jahre lang. Die Satzung des SV Heslach wird modernisiert.' },
              { year: '1979', text: 'Kurt Wünsch gründet eine Senioren-Freizeit-Sport- und Wanderabteilung. Die Kinderabteilung des Vereins löst sich als nicht mehr zeitgemäß auf. Die Verantwortung für die Vereinsjugend wird aber weiter ernst genommen.' },
              { year: '1978', text: 'Umbau der Sportanlage: Ein Kleinspielfeld mit wasserdurchlässigem Kunststoffbelag und der Tennenplatz werden neu angelegt.' },
              { year: '1969', text: 'Walter Erhardt wird zum neuen 1. Vorsitzenden gewählt. Sein Auftrag: ein neues Clubhaus zu erstellen. Jahrelang dauern die Vorarbeiten und Verhandlungen. Stadt und Land geben finanzielle Zuschüsse, die Mitglieder unterstützen das Vorhaben durch Eigenleistungen, zusätzliche Unterstützung kommt von Stuttgarter Hofbräu. Im Januar 1974 beginnt das Projekt.' },
              { year: 'Juni 1951', text: 'Mit einem bunten Sport- und Gesellschaftsprogramm, darunter einer musikalisch umrahmten Morgenfeier in den Favorit-Lichtspielen, feiert der Verein sein 25-jähriges Bestehen.' },
              { year: 'Dezember 1945', text: 'Neuaufbau der Vereinsaktivitäten. Neuer Pachtvertrag für den Sportplatz an der Rotenwaldstraße.' },
              { year: '1. November 1945', text: 'Neuanfang als SV Heslach: Der Sportverein Heslach wird gegründet und versteht sich als Fortsetzung des Freien Turn- und Sportvereins Karlsvorstadt. Zum 1. Vorsitzenden wird Willi Renz gewählt.' },
              { year: '1933 – 1945', text: 'Die Nationalsozialisten kommen an die Macht und zerschlagen die Einrichtungen der Arbeiterbewegung.' },
              { year: 'Juni 1931', text: 'Unter der Planung von Otto Undiener wird das erste eigene Clubhaus geplant und gebaut.' },
              { year: 'Juni 1930', text: 'Otto Undiener wird als 1. Vorsitzender gewählt.' },
              { year: '1927', text: 'Eintragung des Vereins in das Vereinsregister. Der Verein bietet Schwer- und Leichtathletik an, hat eine Wander- und eine Damenabteilung. Ergänzend kommt von der Heslacher Abteilung der freien Turnerschaft das Turnen und Handball ins Programm. 1. Vorsitzender wird der Goldarbeiter Erich Wiesmüller. Der Verein trainiert in den Turnhallen von Lerchenrain- und Schreiberschule sowie auf dem Sportplatz an der Rotenwaldstraße.' },
              { year: '1926', text: 'Die Abteilung II der Freien Turnerschaft schließt sich mit dem 1910 gegründeten „Kraftsportverein Karlsvorstadt" zusammen, der sich daraufhin zum „Freien Turn- und Sportverein Karlsvorstadt" umbenennt.' },
              { year: 'Juli 1904', text: 'Der „Turnverein Jahn Stuttgart" fusioniert mit dem „Turnklub Stuttgart" zur „Freien Turnerschaft Stuttgart".' },
              { year: '1897', text: 'Karl Frey gründet den „Turnverein Jahn Stuttgart", der als erster Sportverein in Stuttgart dem Arbeiterturnerbund beitritt – der Gegengründung zum bürgerlich dominierten Deutschen Turnbund.' },
            ].map((item, i) => (
              <li key={i} className="ml-6">
                <span className="absolute -left-[9px] w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow"></span>
                <h3 className="text-lg font-black uppercase tracking-tight text-black mb-2">{item.year}</h3>
                <p className="text-stone-600 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>
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
