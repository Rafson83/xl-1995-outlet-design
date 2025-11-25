import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <Link to="/" className="text-accent hover:text-accent/80 transition-colors mb-6 inline-block">
          ← Powrót do strony głównej
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black mb-8">Polityka Prywatności</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Informacje Ogólne</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich ze strony internetowej XL 1995 Outlet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Administrator Danych</h2>
            <p>
              Administratorem danych osobowych jest XL 1995 Outlet z siedzibą [ADRES], wpisaną do rejestru przedsiębiorców pod numerem [NIP].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Rodzaj Przetwarzanych Danych</h2>
            <p>Administrator przetwarza następujące kategorie danych osobowych:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dane identyfikacyjne (imię, nazwisko)</li>
              <li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
              <li>Dane techniczne (adres IP, pliki cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Cel Przetwarzania Danych</h2>
            <p>Dane osobowe są przetwarzane w celu:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Obsługi zapytań i kontaktu z klientami</li>
              <li>Wysyłki newslettera (po wyrażeniu zgody)</li>
              <li>Prowadzenia statystyk i analizy ruchu na stronie</li>
              <li>Wypełnienia obowiązków prawnych</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Podstawa Prawna</h2>
            <p>
              Przetwarzanie danych osobowych odbywa się na podstawie zgody osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO) oraz w celu realizacji prawnie uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Okres Przechowywania Danych</h2>
            <p>
              Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane, a po tym czasie przez okres wymagany przepisami prawa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Prawa Użytkownika</h2>
            <p>Użytkownik ma prawo do:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Pliki Cookies</h2>
            <p>
              Strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania, analizy ruchu oraz personalizacji treści. Użytkownik może zarządzać ustawieniami cookies w swojej przeglądarce.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Kontakt</h2>
            <p>
              W sprawach dotyczących przetwarzania danych osobowych można skontaktować się z Administratorem pod adresem e-mail: kontakt@xl1995.pl
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;