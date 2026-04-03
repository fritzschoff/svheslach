
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
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
