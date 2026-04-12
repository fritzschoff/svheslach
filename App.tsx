
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Verein from './pages/Verein';
import Sportarten from './pages/Sportarten';
import Mitgliedschaft from './pages/Mitgliedschaft';
import Gaststaette from './pages/Gaststaette';
import Kontakt from './pages/Kontakt';
import NewsPage from './pages/News';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import SportPage from './pages/SportPage';
import InfoPlakat from './pages/InfoPlakat';
import { SPORTS } from './constants';

const PAGE_TITLES: Record<string, string> = {
  '/': 'SV Heslach 1926 e.V. – Sportverein in Stuttgart-Süd',
  '/verein': 'Unser Verein – SV Heslach 1926 e.V.',
  '/sportarten': 'Sportangebot – SV Heslach 1926 e.V.',
  '/mitgliedschaft': 'Mitglied werden – SV Heslach 1926 e.V.',
  '/gaststaette': 'Weitmanns Waldhaus – Vereinsgaststätte im Heslacher Wald',
  '/kontakt': 'Kontakt – SV Heslach 1926 e.V.',
  '/news': 'Neuigkeiten – SV Heslach 1926 e.V.',
  '/impressum': 'Impressum – SV Heslach 1926 e.V.',
  '/datenschutz': 'Datenschutz – SV Heslach 1926 e.V.',
  '/info-plakat': '100 Jahre Jubiläum – Info-Plakat – SV Heslach 1926 e.V.',
};

const ScrollToTopAndTitle: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (pathname.startsWith('/sport/')) {
      const sportId = pathname.split('/sport/')[1];
      const sport = SPORTS.find(s => s.id === sportId);
      document.title = sport ? `${sport.title} – SV Heslach 1926 e.V.` : 'SV Heslach 1926 e.V.';
    } else {
      document.title = PAGE_TITLES[pathname] || 'SV Heslach 1926 e.V.';
    }
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTopAndTitle />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/verein" element={<Verein />} />
            <Route path="/sportarten" element={<Sportarten />} />
            <Route path="/mitgliedschaft" element={<Mitgliedschaft />} />
            <Route path="/gaststaette" element={<Gaststaette />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/info-plakat" element={<InfoPlakat />} />
            <Route path="/sport/fussball" element={<SportPage sportId="fussball" />} />
            <Route path="/sport/handball" element={<SportPage sportId="handball" />} />
            <Route path="/sport/tischtennis" element={<SportPage sportId="tischtennis" />} />
            <Route path="/sport/kids-in-motion" element={<SportPage sportId="kids-in-motion" />} />
            <Route path="/sport/ballsport-kinder" element={<SportPage sportId="ballsport-kinder" />} />
            <Route path="/sport/gymnastik" element={<SportPage sportId="gymnastik" />} />
            <Route path="/sport/walking" element={<SportPage sportId="walking" />} />
            <Route path="/sport/faustball" element={<SportPage sportId="faustball" />} />
            <Route path="/sport/senioren" element={<SportPage sportId="senioren" />} />
            <Route path="/sport/jungsenior" element={<SportPage sportId="jungsenior" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
