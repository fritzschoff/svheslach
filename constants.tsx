
import React from 'react';
import { Trophy, Dumbbell, Zap, Target, Users, BookOpen, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { SportSection, NewsItem } from './types';

export const COLORS = {
  primary: '#EAB308', // yellow-500
  secondary: '#000000',
  accent: '#EF4444', // red-500
};

export const SPORTS: SportSection[] = [
  {
    id: 'fussball',
    title: 'Fußball',
    description: 'Tradition pur im Heslacher Wald. Von der Jugend bis zu den Aktiven.',
    icon: 'fussball',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200',
    link: '#/sport/fussball'
  },
  {
    id: 'tennis',
    title: 'Tennis',
    description: 'Wunderschön gelegene Tennisplätze für alle Altersgruppen.',
    icon: 'tennis',
    image: 'https://images.unsplash.com/photo-1595435063385-888bb89f7225?auto=format&fit=crop&q=80&w=1200',
    link: '#/sport/tennis'
  },
  {
    id: 'leichtathletik',
    title: 'Leichtathletik',
    description: 'Laufen, Springen, Werfen – Klassischer Sportgeist in Heslach.',
    icon: 'athetics',
    image: 'https://images.unsplash.com/photo-1461896756913-c3b478b75299?auto=format&fit=crop&q=80&w=1200',
    link: '#/sport/leichtathletik'
  },
  {
    id: 'gymnastik',
    title: 'Gymnastik',
    description: 'Fitness und Gesundheit für Körper und Geist.',
    icon: 'gym',
    image: 'https://images.unsplash.com/photo-1518611012118-29a8d63ee0c2?auto=format&fit=crop&q=80&w=1200',
    link: '#/sport/gymnastik'
  },
  {
    id: 'tischtennis',
    title: 'Tischtennis',
    description: 'Schnelligkeit und Präzision an der Platte.',
    icon: 'pingpong',
    image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&q=80&w=1200',
    link: '#/sport/tischtennis'
  },
  {
    id: 'skat',
    title: 'Skat',
    description: 'Geselligkeit und Taktik in unserer Skat-Abteilung.',
    icon: 'cards',
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=1200',
    link: '#/sport/skat'
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
