
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center font-oswald text-white font-bold text-xl">
                SVH
              </div>
              <span className="font-oswald text-2xl tracking-widest uppercase">SV HESLACH</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Ihr Verein im Süden von Stuttgart. Sport, Gemeinschaft und Tradition seit 1926. Wir freuen uns auf Sie!
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-red-600">Navigation</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><a href="#/verein" className="hover:text-white transition-colors">Über den Verein</a></li>
              <li><a href="#/mitgliedschaft" className="hover:text-white transition-colors">Mitglied werden</a></li>
              <li><a href="#/sportarten" className="hover:text-white transition-colors">Sportangebot</a></li>
              <li><a href="#/gaststaette" className="hover:text-white transition-colors">Vereinsgaststätte</a></li>
              <li><a href="#/news" className="hover:text-white transition-colors">Aktuelles</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-red-600">Kontakt</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-600 shrink-0" size={18} />
                <span>Nussbaumweg 40 <br /> 70199 Stuttgart</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-600 shrink-0" size={18} />
                <span>0711 / 123 456 78</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-600 shrink-0" size={18} />
                <span>info@svheslach.de</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-red-600">Bleib am Ball</h4>
            <p className="text-sm text-stone-400 mb-6 italic">Melden Sie sich für unseren Newsletter an und verpassen Sie keine Neuigkeiten.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="E-Mail Adresse" 
                className="bg-stone-800 border-none px-4 py-2 w-full text-sm focus:ring-1 focus:ring-red-600"
              />
              <button className="bg-red-600 text-white px-4 py-2 font-bold uppercase text-xs">OK</button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 uppercase tracking-widest">
          <p>© 2024 SV HESLACH E.V.</p>
          <div className="flex gap-8">
            <a href="#/impressum" className="hover:text-red-600">Impressum</a>
            <a href="#/datenschutz" className="hover:text-red-600">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
