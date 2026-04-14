
import { SportSection, NewsItem } from './types';

export const COLORS = {
  primary: '#DC2626', // red-600
  secondary: '#000000',
  accent: '#B91C1C', // red-700
};

export const GENERAL_EMAIL = 'info@svheslach.de';
export const VERWALTUNG_EMAIL = 'verwaltung@svheslach.de';

export const SPORTS: SportSection[] = [
  {
    id: 'fussball',
    title: 'Fußball',
    description: 'Die größte Abteilung des Vereins – gemeinsam mit dem VfL Kaltental in der Kreisliga B.',
    longDescription: 'Die größte Abteilung des SV Heslach stellt im aktiven Herren-Bereich gemeinsam mit dem Stadtteil-Nachbarn des VfL Kaltental gleich zwei Mannschaften in der Kreisliga B. Darüber hinaus gibt es gemeinsame Mannschaften im Kinder- & Jugendbereich mit der SG West. Melde dich gerne bei der Abteilungsleitung und komm dann im Training vorbei.',
    extraParagraphs: [
      'Alle Infos zum aktuellen Spielbetrieb der aktiven Herren findest du bei fussball.de:'
    ],
    links: [
      { label: '1. Mannschaft auf fussball.de', url: 'https://www.fussball.de/mannschaft/-/saison/2526/team-id/011MIAS7CS000000VTVG0001VTR8C1K7#!' },
      { label: '2. Mannschaft auf fussball.de', url: 'https://www.fussball.de/mannschaft/-/saison/2526/team-id/02ETUPFGKO000000VS5489B2VVP292BR#!' },
      { label: 'Instagram: @svheslach_fussball', url: 'https://www.instagram.com/svheslach_fussball' }
    ],
    photos: [
      '/images/sports/fotos/fussball-1.jpg',
      '/images/sports/fotos/fussball-2.jpg'
    ],
    icon: 'fussball',
    image: '/images/piktogramme/Piktogramme_Fussball/Piktogramme_weiss_auf_schwarz/icon_fussball_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Fussball/Piktogramme_rot_auf_weiss/icon_fussball_rot_auf_weiss_500px.png',
    link: '/sport/fussball',
    email: 'fussball@svheslach.de',
    trainingTimes: 'Di 20:00 Uhr VfL Kaltental, Fr 19:30 Uhr SV Heslach',
    contact: 'Thomas Hildebrand (Abt.-Leiter), Nicolas Rühle (Abt.-Leiter)'
  },
  {
    id: 'handball',
    title: 'Handball',
    description: 'Spielgemeinschaft mit EK Stuttgart e.V. – schnelles Teamspiel mit Kraft und Taktik.',
    longDescription: 'Unsere Handballabteilung bildet eine Spielgemeinschaft mit dem EK Stuttgart e.V. (Evangelische Kirche Stuttgart, ehemals Eichenkreuz). Gemeinsam stehen wir für schnelle Spielzüge, starken Zusammenhalt und jede Menge Action auf dem Spielfeld.',
    extraParagraphs: [
      'Handball macht Spaß – genau diesen Spaß am Handball wird durch unsere bunte Mischung aus „alten Hasen" und „jungen Rookies" Saison für Saison von uns aufs Neue nicht nur beim Spiel, sondern auch in der 3. Halbzeit unter Beweis gestellt.',
      'Darum steige bei uns ein und komm in den Genuss jedes Heimspiel in der einzigartigen Atmosphäre in unserer Festung „Hofbräu-Dome" (Sporthalle Schickhardt-Gymnasium / U-Bahnhaltestelle „Erwin-Schöttle-Platz") mit uns zu erleben.',
      'Jetzt bist Du fast schon dabei, denn bei Interesse komm einfach mittwochs ab 20:15 Uhr zum Training vorbei oder sende eine Mail an handball@svheslach.de. Du wirst überrascht sein…!!!'
    ],
    icon: 'handball',
    image: '/images/piktogramme/Piktogramme_Handball/Piktogramme_weiss_auf_schwarz/icon_handball_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Handball/Piktogramme_rot_auf_weiss/icon_handball_rot_auf_weiss_500px.png',
    link: '/sport/handball',
    email: 'handball@svheslach.de',
    trainingTimes: 'Di & Mi jeweils 20:15 Uhr, Schickhardt-Sporthalle, Mörikestraße',
    contact: 'Matthias Schaal (Abt.-Leiter)'
  },
  {
    id: 'tischtennis',
    title: 'Tischtennis',
    description: 'Schnelligkeit und Präzision an der Platte.',
    longDescription: 'An unseren Tischtennisplatten wird mit viel Leidenschaft gespielt. Ob gemütliche Feierabendrunde oder ambitioniertes Punktspiel – unsere Tischtennisabteilung bietet für jeden das richtige Level. Schläger in die Hand und los geht\'s!',
    icon: 'tischtennis',
    image: '/images/piktogramme/Piktogramme_Tischtennis/Piktogramme_weiss_auf_schwarz/icon_tischtennis_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Tischtennis/Piktogramme_rot_auf_weiss/icon_tischtennis_rot_auf_weiss_500px.png',
    link: '/sport/tischtennis',
    email: 'tischtennis@svheslach.de',
    trainingTimes: 'Di 19:00 Uhr, Turnhalle der Wilhelm-Hauff-Schule',
    contact: 'Dr. Wolfgang Mutscheller (Abt.-Leiter)'
  },
  {
    id: 'kids-in-motion',
    title: 'Kinderturnen',
    description: 'Bewegung und Spaß für unsere Jüngsten.',
    longDescription: 'Unser Kinderturnen ist ein Bewegungsprogramm für die Kleinsten. Hier lernen Kinder spielerisch ihre motorischen Fähigkeiten kennen und entwickeln Freude an der Bewegung. Mit altersgerechten Übungen und viel Spaß werden Koordination, Gleichgewicht und soziale Kompetenz gefördert.',
    icon: 'kids',
    image: '/images/piktogramme/Piktogramme_oeffentlSportuBewegungsRaum/Piktogramme_weiss_auf_schwarz/icon_oeffentlSportuBewegungsRaum_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_oeffentlSportuBewegungsRaum/Piktogramme_rot_auf_weiss/icon_oeffentlSportuBewegungsRaum_rot_auf_weiss_500px.png',
    link: '/sport/kids-in-motion',
    email: 'kidsinmotion@svheslach.de',
    trainingTimes: 'Fr 16:30 Uhr, Turnhalle der Torwiesenschule',
    contact: 'Cora Auracher'
  },
  {
    id: 'ballsport-kinder',
    title: 'Ballsport für Kinder',
    description: 'Spielerisch die Welt des Ballsports entdecken.',
    longDescription: 'In unserer Ballschule entdecken Kinder die faszinierende Welt des Ballsports. Ob Werfen, Fangen, Dribbeln oder Schießen – hier wird alles ausprobiert. Die Kinder lernen verschiedene Ballsportarten kennen und finden so vielleicht ihre neue Lieblingssportart.',
    icon: 'ballsport',
    image: '/images/piktogramme/Piktogramme_Fitness/Piktogramme_weiss_auf_schwarz/icon_fitness_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Fitness/Piktogramme_rot_auf_weiss/icon_fitness_rot_auf_weiss_500px.png',
    link: '/sport/ballsport-kinder',
    email: 'ballsportfuerkinder@svheslach.de',
    trainingTimes: 'Mi & Fr jeweils 17:30 Uhr, Turnhalle der Kaufmännischen Schule Aussenstelle Süd, Zellerstraße 37',
    contact: 'Alicia Lamade (Anmeldung: Gabriele Schmid)'
  },
  {
    id: 'gymnastik',
    title: 'Damengymnastik',
    description: 'Fitness und Gesundheit für Körper und Geist.',
    longDescription: 'Unsere Gymnastikabteilung bietet ein vielfältiges Programm für alle Altersgruppen. Von klassischer Gymnastik über Rückenfit bis hin zu Entspannungsübungen – hier findet jeder den passenden Kurs. Bleib fit und gesund mit uns!',
    icon: 'gymnastik',
    image: '/images/piktogramme/Piktogramme_Gymnastik/Piktogramme_weiss_auf_schwarz/icon_gymnastik_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Gymnastik/Piktogramme_rot_auf_weiss/icon_gymnastik_rot_auf_weiss_500px.png',
    link: '/sport/gymnastik',
    email: 'gymnastik@svheslach.de',
    trainingTimes: 'Di 19:00 Uhr, Turnhalle der Lerchenrainschule',
    contact: 'Daniela Müller'
  },
  {
    id: 'walking',
    title: 'Walking',
    description: 'Gemeinsam aktiv an der frischen Luft.',
    longDescription: 'Unsere Walking-Gruppe trifft sich regelmäßig zu gemeinsamen Runden durch den Heslacher Wald und die umliegende Natur. Nordic Walking und klassisches Walking – bei uns ist jeder willkommen, der sich gerne an der frischen Luft bewegen möchte. Geselligkeit und Fitness in einem!',
    icon: 'walking',
    image: '/images/piktogramme/Piktogramme_Nordic_Walking/Piktogramme_weiss_auf_schwarz/icon_nordic_walking_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Nordic_Walking/Piktogramme_rot_auf_weiss/icon_nordic_walking_rot_auf_weiss_500px.png',
    link: '/sport/walking',
    email: 'walking@svheslach.de',
    trainingTimes: 'Do 17:30 Uhr, Start beim Vereinsgelände',
    contact: 'Gabriele Schmid'
  },
  {
    id: 'faustball',
    title: 'Faustball',
    description: 'Athletik, Technik und Teamgeist – für Männer Ü40.',
    longDescription: 'Faustball verbindet Athletik, Technik und Teamgeist wie kaum eine andere Sportart. Unsere Abteilung richtet sich an Männer Ü40, die unter besten Trainingsvoraussetzungen aktiv sein wollen.',
    extraParagraphs: [
      'Wir freuen uns über jeden Mitspieler, der sich auch bei der illustren Runde nach der Bewegung noch gesellig dazusetzt.'
    ],
    photos: [
      '/images/sports/fotos/faustball-team.jpg'
    ],
    icon: 'faustball',
    image: '/images/piktogramme/Piktogramme_Faustball/Piktogramme_weiss_auf_schwarz/icon_faustball_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Faustball/Piktogramme_rot_auf_weiss/icon_faustball_rot_auf_weiss_500px.png',
    link: '/sport/faustball',
    email: 'faustball@svheslach.de',
    trainingTimes: 'Di 17:00–19:00 Uhr, Vereinsgelände – ab Oktober Turnhalle des Schickhardt-Gymnasiums',
    contact: 'Otto Wiemer & Felix Auracher'
  },
  {
    id: 'senioren',
    title: 'Senioren',
    description: 'Fit und aktiv im besten Alter.',
    longDescription: 'Unsere Seniorenabteilung bietet ein abwechslungsreiches Programm für alle, die auch im Alter aktiv bleiben möchten. Von Gymnastik über leichte Sportspiele bis hin zu geselligen Treffen – hier bleibt niemand allein.',
    icon: 'senioren',
    image: '/images/piktogramme/Piktogramme_Gymnastik/Piktogramme_weiss_auf_schwarz/icon_gymnastik_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Gymnastik/Piktogramme_rot_auf_weiss/icon_gymnastik_rot_auf_weiss_500px.png',
    link: '/sport/senioren',
    email: 'senioren@svheslach.de',
    trainingTimes: 'Auf Anfrage',
    contact: 'Kontakt über info@svheslach.de'
  },
  {
    id: 'jungsenior',
    title: 'Jungsenioren',
    description: 'Sport und Geselligkeit für die Generation ab 35.',
    longDescription: 'Die Jungsenioren sind die Brücke zwischen den Aktiven und den Senioren. Hier treffen sich sportbegeisterte Mitglieder ab 35 Jahren für regelmäßiges Training, Turniere und gesellige Abende.',
    icon: 'jungsenior',
    image: '/images/piktogramme/Piktogramme_Fitness/Piktogramme_weiss_auf_schwarz/icon_fitness_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Fitness/Piktogramme_rot_auf_weiss/icon_fitness_rot_auf_weiss_500px.png',
    link: '/sport/jungsenior',
    email: 'jungsenior@svheslach.de',
    trainingTimes: 'Mi 19:00 Uhr, Vereinsgelände',
    contact: 'Kontakt über info@svheslach.de'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    date: '15.05.2026',
    title: '100 Jahre Jubiläumsfeier',
    excerpt: 'Wir feiern unser großes Jubiläum am 20.06.2026 auf dem Vereinsgelände. Alle Mitglieder sind herzlich eingeladen.',
    category: 'Verein'
  },
  {
    id: 2,
    date: '10.05.2026',
    title: 'Sieg im Lokalderby',
    excerpt: 'Unsere 1. Mannschaft gewinnt mit 3:1 gegen den Nachbarn.',
    category: 'Fußball'
  },
  {
    id: 3,
    date: '02.05.2026',
    title: 'Neue Walking-Saison eröffnet',
    excerpt: 'Die Walking-Gruppe startet mit neuen Routen in den Frühling.',
    category: 'Walking'
  }
];
