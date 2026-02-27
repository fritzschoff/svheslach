
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SportPage from './pages/SportPage';

// Placeholder for other pages to maintain navigation logic
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-screen py-32 flex flex-col items-center justify-center bg-stone-50">
    <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">{title}</h1>
    <p className="text-stone-500">Diese Seite ist in dieser Demoversion noch in Arbeit.</p>
    <a href="#/" className="mt-8 text-red-600 font-bold uppercase tracking-widest text-xs underline">Zur&uuml;ck zur Startseite</a>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/verein" element={<PlaceholderPage title="Unser Verein" />} />
            <Route path="/sportarten" element={<PlaceholderPage title="Sportarten" />} />
            <Route path="/mitgliedschaft" element={<PlaceholderPage title="Mitgliedschaft" />} />
            <Route path="/gaststaette" element={<PlaceholderPage title="Vereinsgaststätte" />} />
            <Route path="/kontakt" element={<PlaceholderPage title="Kontakt" />} />
            <Route path="/impressum" element={<PlaceholderPage title="Impressum" />} />
            <Route path="/datenschutz" element={<PlaceholderPage title="Datenschutz" />} />
            {/* Sport detail pages */}
            <Route path="/sport/fussball" element={<SportPage sportId="fussball" />} />
            <Route path="/sport/faustball" element={<SportPage sportId="faustball" />} />
            <Route path="/sport/handball" element={<SportPage sportId="handball" />} />
            <Route path="/sport/tischtennis" element={<SportPage sportId="tischtennis" />} />
            <Route path="/sport/kids-in-motion" element={<SportPage sportId="kids-in-motion" />} />
            <Route path="/sport/ballsport-kinder" element={<SportPage sportId="ballsport-kinder" />} />
            <Route path="/sport/walking" element={<SportPage sportId="walking" />} />
            <Route path="/sport/gymnastik" element={<SportPage sportId="gymnastik" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
