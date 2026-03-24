
import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <main className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12">Datenschutzerklärung</h1>

        <div className="space-y-8 text-stone-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-3 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
              Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-3 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>2. Verantwortliche Stelle</h2>
            <p>
              Sportverein Heslach 1926 e.V.<br />
              Rotenwaldstraße 373<br />
              70197 Stuttgart<br /><br />
              E-Mail: info@svheslach.de<br />
              Telefon: 0711 / 690714
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-3 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>3. Datenerfassung auf unserer Website</h2>
            <p className="mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber (SV Heslach 1926 e.V.).
            </p>
            <p className="mb-4">
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z.B. durch Eingabe
              in ein Kontaktformular. Andere Daten werden automatisch beim Besuch der Website durch unsere
              IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem
              oder Uhrzeit des Seitenaufrufs).
            </p>
            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-3 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>4. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung,
              Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
              Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter mb-3 text-black" style={{ fontFamily: 'Oswald, sans-serif' }}>5. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Datenschutz;
