
import React from 'react';
import { SportSection, NewsItem } from './types';

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
    icon: 'fussball',
    image: '/images/sports/fussball.png',
    link: '#/sport/fussball'
  },
  {
    id: 'faustball',
    title: 'Faustball',
    description: 'Dynamischer Mannschaftssport mit Netz und Faust.',
    icon: 'faustball',
    image: '/images/sports/faustball.png',
    link: '#/sport/faustball'
  },
  {
    id: 'handball',
    title: 'Handball',
    description: 'Schnelles Teamspiel mit Kraft und Taktik.',
    icon: 'handball',
    image: '/images/sports/handball.png',
    link: '#/sport/handball'
  },
  {
    id: 'tischtennis',
    title: 'Tischtennis',
    description: 'Schnelligkeit und Präzision an der Platte.',
    icon: 'tischtennis',
    image: '/images/sports/tischtennis.png',
    link: '#/sport/tischtennis'
  },
  {
    id: 'kids-in-motion',
    title: 'Kids in Motion',
    description: 'Bewegung und Spaß für unsere Jüngsten.',
    icon: 'kids',
    image: '/images/sports/kids-in-motion.png',
    link: '#/sport/kids-in-motion'
  },
  {
    id: 'ballsport-kinder',
    title: 'Ballsport für Kinder',
    description: 'Spielerisch die Welt des Ballsports entdecken.',
    icon: 'ballsport',
    image: '/images/sports/ballsport-kinder.png',
    link: '#/sport/ballsport-kinder'
  },
  {
    id: 'walking',
    title: 'Walking',
    description: 'Gemeinsam aktiv an der frischen Luft.',
    icon: 'walking',
    image: '/images/sports/walking.png',
    link: '#/sport/walking'
  },
  {
    id: 'gymnastik',
    title: 'Gymnastik',
    description: 'Fitness und Gesundheit für Körper und Geist.',
    icon: 'gymnastik',
    image: '/images/sports/gymnastik.png',
    link: '#/sport/gymnastik'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    date: '15.05.2024',
    title: '100 Jahre Jubiläumsfeier',
    excerpt: 'Wir feiern unser großes Jubiläum im Juni. Alle Mitglieder sind herzlich eingeladen.',
    category: 'Verein'
  },
  {
    id: 2,
    date: '10.05.2024',
    title: 'Sieg im Lokalderby',
    excerpt: 'Unsere 1. Mannschaft gewinnt mit 3:1 gegen den Nachbarn.',
    category: 'Fußball'
  },
  {
    id: 3,
    date: '02.05.2024',
    title: 'Neue Tennis-Saison eröffnet',
    excerpt: 'Die Plätze sind ab sofort für alle Mitglieder spielbereit.',
    category: 'Tennis'
  }
];
