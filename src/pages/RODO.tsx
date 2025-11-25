import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RODO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <Link to="/" className="text-accent hover:text-accent/80 transition-colors mb-6 inline-block">
          ← Powrót do strony głównej
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black mb-8">Informacja RODO</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Klauzula Informacyjna RODO</h2>
            <p>
              Zgodnie z art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO), informujemy, że:
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Administrator Danych Osobowych</h2>
            <p>
              Administratorem Twoich danych osobowych jest XL 1995 Outlet z siedzibą w [ADRES], NIP: [NUMER], REGON: [NUMER].
            </p>
            <p className="mt-4">
              <strong>Kontakt z Administratorem:</strong><br />
              E-mail: kontakt@xl1995.pl<br />
              Telefon: +48 123 456 789
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Cele i Podstawy Prawne Przetwarzania</h2>
            <p>Twoje dane osobowe przetwarzane są w następujących celach:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Obsługa zapytań</strong> - na podstawie art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora)</li>
              <li><strong>Newsletter</strong> - na podstawie art. 6 ust. 1 lit. a RODO (zgoda)</li>
              <li><strong>Sprzedaż i obsługa reklamacji</strong> - na podstawie art. 6 ust. 1 lit. b RODO (wykonanie umowy)</li>
              <li><strong>Wypełnienie obowiązków prawnych</strong> - na podstawie art. 6 ust. 1 lit. c RODO (obowiązek prawny)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Odbiorcy Danych</h2>
            <p>Twoje dane osobowe mogą być przekazywane następującym kategoriom odbiorców:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Dostawcom usług IT i hostingowych</li>
              <li>Dostawcom usług księgowych i prawnych</li>
              <li>Dostawcom usług kurierskich (w przypadku wysyłki)</li>
              <li>Organom państwowym uprawnionym do żądania danych na podstawie przepisów prawa</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Okres Przechowywania Danych</h2>
            <p>Twoje dane osobowe będą przechowywane przez okres:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Newsletter</strong> - do czasu cofnięcia zgody</li>
              <li><strong>Zapytania</strong> - do czasu udzielenia odpowiedzi lub do czasu przedawnienia ewentualnych roszczeń</li>
              <li><strong>Sprzedaż</strong> - przez okres wymagany przepisami prawa (minimum 5 lat od końca roku podatkowego)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Twoje Prawa</h2>
            <p>Przysługuje Ci prawo do:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Dostępu do danych</strong> - możesz uzyskać potwierdzenie, czy przetwarzamy Twoje dane oraz kopię tych danych</li>
              <li><strong>Sprostowania danych</strong> - możesz żądać poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych</li>
              <li><strong>Usunięcia danych</strong> - w określonych przypadkach możesz żądać usunięcia Twoich danych</li>
              <li><strong>Ograniczenia przetwarzania</strong> - możesz żądać ograniczenia przetwarzania Twoich danych</li>
              <li><strong>Przenoszenia danych</strong> - możesz otrzymać swoje dane w ustrukturyzowanym formacie</li>
              <li><strong>Sprzeciwu</strong> - możesz wnieść sprzeciw wobec przetwarzania Twoich danych</li>
              <li><strong>Cofnięcia zgody</strong> - w każdej chwili możesz cofnąć zgodę na przetwarzanie danych</li>
            </ul>
            <p className="mt-4">
              W celu realizacji swoich praw, skontaktuj się z nami pod adresem: kontakt@xl1995.pl
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Prawo do Skargi</h2>
            <p>
              Przysługuje Ci prawo wniesienia skargi do organu nadzorczego - Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa), jeśli uznasz, że przetwarzanie Twoich danych osobowych narusza przepisy RODO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Dobrowolność Podania Danych</h2>
            <p>
              Podanie danych osobowych jest dobrowolne, ale niezbędne do realizacji określonych celów (np. odpowiedzi na zapytanie, wysyłki newslettera). Niepodanie danych uniemożliwi realizację tych celów.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Zautomatyzowane Podejmowanie Decyzji</h2>
            <p>
              Twoje dane osobowe nie będą przetwarzane w sposób zautomatyzowany, w tym w formie profilowania.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Bezpieczeństwo Danych</h2>
            <p>
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo przetwarzanych danych osobowych, w tym w szczególności zabezpiecza dane przed dostępem osób nieupoważnionych, utratą czy uszkodzeniem.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RODO;