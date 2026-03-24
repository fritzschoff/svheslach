
export interface SportSection {
  id: string;
  title: string;
  description: string;
  longDescription: string;
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
