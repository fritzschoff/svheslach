
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Verein', href: '#/verein' },
    { name: 'Sportarten', href: '#/sportarten' },
    { name: 'Mitgliedschaft', href: '#/mitgliedschaft' },
    { name: 'Gaststätte', href: '#/gaststaette' },
    { name: 'Kontakt', href: '#/kontakt' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-xl border-b border-red-600/30 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#/" className="flex-shrink-0 flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center font-oswald text-white font-bold text-2xl border-2 border-white">
              SVH
            </div>
            <div className="flex flex-col">
              <span className="font-oswald text-xl leading-none tracking-wider">SV HESLACH</span>
              <span className="text-[10px] text-red-600 uppercase tracking-widest font-bold">Seit 1926 &bull; 100 Jahre</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest hover:text-red-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#/mitgliedschaft"
              className="bg-red-600 text-white px-6 py-2 rounded-sm font-bold uppercase text-sm hover:bg-red-500 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Mitglied werden
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-red-600/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-semibold uppercase tracking-widest hover:text-red-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#/mitgliedschaft"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-red-600 text-white px-3 py-4 font-bold uppercase tracking-widest"
            >
              Jetzt Mitglied werden
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
