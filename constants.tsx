
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
    description: 'Tradition pur im Heslacher Wald. Von der Jugend bis zu den Aktiven.',
    longDescription: 'Unsere Fußballabteilung ist das Herzstück des SV Heslach. Von den Bambini bis zur ersten Mannschaft bieten wir für jede Altersklasse das passende Team. Trainiert wird auf unserem Vereinsgelände im Heslacher Wald – Tradition seit 1926. Komm vorbei und werde Teil unserer Fußballfamilie!',
    icon: 'fussball',
    image: '/images/piktogramme/Piktogramme_Fussball/Piktogramme_weiss_auf_schwarz/icon_fussball_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Fussball/Piktogramme_rot_auf_weiss/icon_fussball_rot_auf_weiss_500px.png',
    link: '#/sport/fussball',
    trainingTimes: 'Di & Do 18:30–20:00 Uhr, Sa 10:00–12:00 Uhr',
    contact: 'Abteilungsleiter Fußball'
  },
  {
    id: 'faustball',
    title: 'Faustball',
    description: 'Dynamischer Mannschaftssport mit Netz und Faust.',
    longDescription: 'Faustball verbindet Athletik, Technik und Teamgeist wie kaum eine andere Sportart. Unsere Faustballabteilung ist in der Region bekannt und bietet sowohl Trainingsmöglichkeiten für Einsteiger als auch Wettkampfmannschaften. Probier es aus – du wirst überrascht sein, wie viel Spaß dieser Sport macht!',
    icon: 'faustball',
    image: '/images/piktogramme/Piktogramme_Faustball/Piktogramme_weiss_auf_schwarz/icon_faustball_weiss_auf_schwarz_500px.png',
    piktogramm: '/images/piktogramme/Piktogramme_Faustball/Piktogramme_rot_auf_weiss/icon_faustball_rot_auf_weiss_500px.png',
    link: '#/sport/faustball',
    trainingTimes: 'Mo & Mi 19:00–21:00 Uhr',
    contact: 'Abteilungsleiter Faustball'
  },
  {
    id: 'handball',
    title: 'Handball',
    description: 'Schnelles Teamspiel mit Kraft und Taktik.',
    longDescription: 'Handball beim SV Heslach – das bedeutet schnelle Spielzüge, starker Zusammenhalt und jede Menge Action. Unsere Handballabteilung bietet Training für verschiedene Altersgruppen. Egal ob Anfänger oder erfahrener Spieler, bei uns findest du dein Team.',
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
    title: 'Kids in Motion',
    description: 'Bewegung und Spaß für unsere Jüngsten.',
    longDescription: 'Kids in Motion (K.I.M.) ist unser Bewegungsprogramm für die Kleinsten. Hier lernen Kinder spielerisch ihre motorischen Fähigkeiten kennen und entwickeln Freude an der Bewegung. Mit altersgerechten Übungen und viel Spaß werden Koordination, Gleichgewicht und soziale Kompetenz gefördert.',
    icon: 'kids',
    image: '/images/sports/kids-in-motion.png',
    piktogramm: '/images/piktogramme/Piktogramme_oeffentlSportuBewegungsRaum/Piktogramme_rot_auf_weiss/icon_oeffentlSportuBewegungsRaum_rot_auf_weiss_500px.png',
    link: '#/sport/kids-in-motion',
    trainingTimes: 'Di 16:00–17:00 Uhr',
    contact: 'Übungsleiter K.I.M.'
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
    trainingTimes: 'Do 16:00–17:00 Uhr',
    contact: 'Übungsleiter Ballschule'
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

