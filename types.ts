
export interface SportLink {
  label: string;
  url: string;
}

export interface SportSection {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  /**
   * Optional additional paragraphs shown under `longDescription`.
   * If omitted, a "Bald steht hier eine genauere Beschreibung …" placeholder is rendered.
   */
  extraParagraphs?: string[];
  /** Optional external links (e.g. fussball.de team pages, Instagram). */
  links?: SportLink[];
  /** Optional photos shown in a gallery on the sport detail page. */
  photos?: string[];
  icon: string;
  image: string;
  piktogramm: string;
  link: string;
  email: string;
  trainingTimes: string;
  contact: string;
}

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  category: string;
}
