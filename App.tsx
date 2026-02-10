
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Placeholder for other pages to maintain navigation logic
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-screen py-32 flex flex-col items-center justify-center bg-stone-50">
    <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">{title}</h1>
    <p className="text-stone-500">Diese Seite ist in dieser Demoversion noch in Arbeit.</p>
    <a href="#/" className="mt-8 text-red-600 font-bold uppercase tracking-widest text-xs underline">Zurück zur Startseite</a>
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
            <Route path="/news" element={<PlaceholderPage title="News" />} />
            <Route path="/impressum" element={<PlaceholderPage title="Impressum" />} />
            <Route path="/datenschutz" element={<PlaceholderPage title="Datenschutz" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
