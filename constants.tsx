
import { SportSection } from './types';

export const COLORS = {
  primary: '#DC2626', // red-600
  secondary: '#000000',
  accent: '#B91C1C', // red-700
};

export const SPORTS: SportSection[] = [
  {
    id: 'fussball',
    title: 'Fußball',
    description: 'Die größte Abteilung des Vereins – gemeinsam mit dem VfL Kaltental in der Kreisliga B.',
    longDescription: 'Die größte Abteilung des Vereins stellt gemeinsam mit dem Stadtteil-Nachbarn VfL Kaltental zwei Mannschaften im aktiven Bereich in der Kreisliga B. Darüber hinaus gibt es gemeinsame Mannschaften im Kinder- & Jugendbereich mit der SG West. Melde dich gerne und komm dann im Training vorbei!',
    icon: 'fussball',
    image: '/images/piktogramme/Piktogramme_Fussball/Piktogramme_weiss_auf_schwarz/icon_fussball_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Fussball/Piktogramme_rot_auf_weiss/icon_fussball_rot_auf_weiss_500px.png',
    link: '#/sport/fussball',
    trainingTimes: 'Di 20:00–21:30 (beim VfL Kaltental), Do 19:30–21:00 (in Heslach)',
    contact: 'Nicolas Rühle & Thomas Hildebrand (fussball@svheslach.de)'
  },
  {
    id: 'faustball',
    title: 'Faustball',
    description: 'Athletik, Technik und Teamgeist – für Männer Ü40.',
    longDescription: 'Faustball verbindet Athletik, Technik und Teamgeist wie kaum eine andere Sportart. Unsere Abteilung richtet sich an Männer Ü40, die unter besten Trainingsvoraussetzungen aktiv sein wollen.',
    icon: 'faustball',
    image: '/images/piktogramme/Piktogramme_Faustball/Piktogramme_weiss_auf_schwarz/icon_faustball_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Faustball/Piktogramme_rot_auf_weiss/icon_faustball_rot_auf_weiss_500px.png',
    link: '#/sport/faustball',
    trainingTimes: 'Trainingszeiten auf Anfrage',
    contact: 'Felix Auracher (info@svheslach.de)'
  },
  {
    id: 'handball',
    title: 'Handball',
    description: 'Spielgemeinschaft mit EK Stuttgart e.V. – schnelles Teamspiel mit Kraft und Taktik.',
    longDescription: 'Unsere Handballabteilung bildet eine Spielgemeinschaft mit dem EK Stuttgart e.V. (Evangelische Kirche Stuttgart, ehemals Eichenkreuz). Gemeinsam stehen wir für schnelle Spielzüge, starken Zusammenhalt und jede Menge Action auf dem Spielfeld.',
    icon: 'handball',
    image: '/images/piktogramme/Piktogramme_Handball/Piktogramme_weiss_auf_schwarz/icon_handball_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Handball/Piktogramme_rot_auf_weiss/icon_handball_rot_auf_weiss_500px.png',
    link: '#/sport/handball',
    trainingTimes: 'Di & Fr 18:00–20:00 Uhr',
    contact: 'Abteilungsleiter Handball'
  },
  {
    id: 'tischtennis',
    title: 'Tischtennis',
    description: 'Schnelligkeit und Präzision an der Platte.',
    longDescription: 'An unseren Tischtennisplatten wird mit viel Leidenschaft gespielt. Ob gemütliche Feierabendrunde oder ambitioniertes Punktspiel – unsere Tischtennisabteilung bietet für jeden das richtige Level. Schläger in die Hand und los geht\'s!',
    icon: 'tischtennis',
    image: '/images/piktogramme/Piktogramme_Tischtennis/Piktogramme_weiss_auf_schwarz/icon_tischtennis_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Tischtennis/Piktogramme_rot_auf_weiss/icon_tischtennis_rot_auf_weiss_500px.png',
    link: '#/sport/tischtennis',
    trainingTimes: 'Mi 19:00–21:30 Uhr, Fr 18:00–20:00 Uhr',
    contact: 'Abteilungsleiter Tischtennis'
  },
  {
    id: 'kids-in-motion',
    title: 'Kinderturnen',
    description: 'Bewegung und Spaß für unsere Jüngsten.',
    longDescription: 'Unser Kinderturnen ist ein Bewegungsprogramm für die Kleinsten. Hier lernen Kinder spielerisch ihre motorischen Fähigkeiten kennen und entwickeln Freude an der Bewegung. Mit altersgerechten Übungen und viel Spaß werden Koordination, Gleichgewicht und soziale Kompetenz gefördert.',
    icon: 'kids',
    image: '/images/sports/kids-in-motion.png',
    piktogramm: '/images/piktogramme/Piktogramme_oeffentlSportuBewegungsRaum/Piktogramme_rot_auf_weiss/icon_oeffentlSportuBewegungsRaum_rot_auf_weiss_500px.png',
    link: '#/sport/kids-in-motion',
    trainingTimes: 'Ab 16:30 Uhr',
    contact: 'Cora Auracher'
  },
  {
    id: 'ballsport-kinder',
    title: 'Ballsport für Kinder',
    description: 'Spielerisch die Welt des Ballsports entdecken.',
    longDescription: 'In unserer Ballschule entdecken Kinder die faszinierende Welt des Ballsports. Ob Werfen, Fangen, Dribbeln oder Schießen – hier wird alles ausprobiert. Die Kinder lernen verschiedene Ballsportarten kennen und finden so vielleicht ihre neue Lieblingssportart.',
    icon: 'ballsport',
    image: '/images/sports/ballsport-kinder.png',
    piktogramm: '/images/piktogramme/Piktogramme_Fitness/Piktogramme_rot_auf_weiss/icon_fitness_rot_auf_weiss_500px.png',
    link: '#/sport/ballsport-kinder',
    trainingTimes: 'Fr (Zeiten auf Anfrage)',
    contact: 'Cosima'
  },
  {
    id: 'walking',
    title: 'Walking',
    description: 'Gemeinsam aktiv an der frischen Luft.',
    longDescription: 'Unsere Walking-Gruppe trifft sich regelmäßig zu gemeinsamen Runden durch den Heslacher Wald und die umliegende Natur. Nordic Walking und klassisches Walking – bei uns ist jeder willkommen, der sich gerne an der frischen Luft bewegen möchte. Geselligkeit und Fitness in einem!',
    icon: 'walking',
    image: '/images/piktogramme/Piktogramme_Nordic_Walking/Piktogramme_weiss_auf_schwarz/icon_nordic_walking_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Nordic_Walking/Piktogramme_rot_auf_weiss/icon_nordic_walking_rot_auf_weiss_500px.png',
    link: '#/sport/walking',
    trainingTimes: 'Sa 09:00–10:30 Uhr',
    contact: 'Abteilungsleiter Walking'
  },
  {
    id: 'gymnastik',
    title: 'Gymnastik',
    description: 'Fitness und Gesundheit für Körper und Geist.',
    longDescription: 'Unsere Gymnastikabteilung bietet ein vielfältiges Programm für alle Altersgruppen. Von klassischer Gymnastik über Rückenfit bis hin zu Entspannungsübungen – hier findet jeder den passenden Kurs. Bleib fit und gesund mit uns!',
    icon: 'gymnastik',
    image: '/images/piktogramme/Piktogramme_Gymnastik/Piktogramme_weiss_auf_schwarz/icon_gymnastik_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Gymnastik/Piktogramme_rot_auf_weiss/icon_gymnastik_rot_auf_weiss_500px.png',
    link: '#/sport/gymnastik',
    trainingTimes: 'Mo & Do 18:00–19:30 Uhr',
    contact: 'Abteilungsleiterin Gymnastik'
  }
];

