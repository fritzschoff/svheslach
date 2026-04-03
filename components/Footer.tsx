
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/images/wappen-svh.png" alt="SVH Wappen" className="w-10 h-10" />
              <span className="font-oswald text-2xl tracking-widest uppercase">SV HESLACH</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ihr Verein im Süden von Stuttgart. Sport, Gemeinschaft und Tradition seit 1926. Wir freuen uns auf dich!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-red-600">Navigation</h4>
            <ul className="space-y-4 text-sm text-stone-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li><a href="#/verein" className="hover:text-white transition-colors">Über den Verein</a></li>
              <li><a href="#/mitgliedschaft" className="hover:text-white transition-colors">Mitglied werden</a></li>
              <li><a href="#/sportarten" className="hover:text-white transition-colors">Sportangebot</a></li>
              <li><a href="#/gaststaette" className="hover:text-white transition-colors">Vereinsgaststätte</a></li>
              <li><a href="#/kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-red-600">Kontakt</h4>
            <ul className="space-y-4 text-sm text-stone-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-start gap-3">
                <MapPin className="text-red-600 shrink-0 mt-0.5" size={18} />
                <span>Sportverein Heslach e.V.<br />Rotenwaldstraße 373<br />70197 Stuttgart</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-600 shrink-0" size={18} />
                <span>0711 / 690714</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-600 shrink-0" size={18} />
                <a href="mailto:info@svheslach.de" className="hover:text-white transition-colors">info@svheslach.de</a>
              </li>
            </ul>
          </div>

        </div>

        {/* OpenStreetMap Embed */}
        <div className="mb-12 rounded overflow-hidden shadow-lg">
          <iframe
            title="Standort SV Heslach"
            width="100%"
            height="250"
            frameBorder="0"
            scrolling="no"
            src="https://www.openstreetmap.org/export/embed.html?bbox=9.1202%2C48.7610%2C9.1302%2C48.7660&layer=mapnik&marker=48.7636%2C9.1252"
            style={{ border: '1px solid #333' }}
          ></iframe>
        </div>

        <div className="pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 uppercase tracking-widest">
          <p>© 2026 SV HESLACH E.V.</p>
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
