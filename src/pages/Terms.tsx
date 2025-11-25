import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <Link to="/" className="text-accent hover:text-accent/80 transition-colors mb-6 inline-block">
          ← Powrót do strony głównej
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black mb-8">Regulamin</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Postanowienia Ogólne</h2>
            <p>
              Niniejszy Regulamin określa zasady korzystania ze strony internetowej XL 1995 Outlet oraz zasady funkcjonowania sklepów stacjonarnych.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Definicje</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sprzedawca</strong> - XL 1995 Outlet prowadzący działalność gospodarczą pod adresem [ADRES]</li>
              <li><strong>Klient</strong> - osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług Sprzedawcy</li>
              <li><strong>Outlet</strong> - sklep stacjonarny prowadzony przez Sprzedawcę</li>
              <li><strong>Strona</strong> - strona internetowa dostępna pod adresem www.xl1995.pl</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Warunki Sprzedaży</h2>
            <p>
              Sprzedaż towarów odbywa się w sklepach stacjonarnych Sprzedawcy. Ceny podane na stronie internetowej mają charakter informacyjny i mogą różnić się od cen obowiązujących w poszczególnych lokalizacjach.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Wszystkie ceny zawierają podatek VAT</li>
              <li>Sprzedawca zastrzega sobie prawo do zmiany cen</li>
              <li>Dostępność towarów zależy od aktualnego stanu magazynowego w danej lokalizacji</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Reklamacje</h2>
            <p>
              Klient ma prawo do złożenia reklamacji w przypadku stwierdzenia wady towaru. Reklamacje należy składać w sklepie, w którym dokonano zakupu, lub na adres e-mail: kontakt@xl1995.pl
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Reklamacja powinna zawierać opis wady oraz oczekiwania Klienta</li>
              <li>Sprzedawca ustosunkuje się do reklamacji w ciągu 14 dni roboczych</li>
              <li>Do reklamacji należy dołączyć dowód zakupu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Zwroty i Wymiana</h2>
            <p>
              Klient ma prawo do zwrotu lub wymiany towaru w ciągu 14 dni od daty zakupu, pod warunkiem, że towar nie nosi śladów użytkowania i posiada oryginalne metki.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Zwrot lub wymiana możliwa jest w sklepie, w którym dokonano zakupu</li>
              <li>Wymagany jest dowód zakupu (paragon lub faktura)</li>
              <li>Towar musi być w stanie nienaruszonym</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Godziny Otwarcia</h2>
            <p>
              Godziny otwarcia poszczególnych lokalizacji są dostępne na stronie internetowej w sekcji "Lokalizacje". Sprzedawca zastrzega sobie prawo do zmiany godzin otwarcia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Newsletter</h2>
            <p>
              Klient może zapisać się do newslettera w celu otrzymywania informacji o promocjach i nowościach. Wyrażenie zgody na otrzymywanie newslettera jest dobrowolne i może zostać cofnięte w każdym momencie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Postanowienia Końcowe</h2>
            <p>
              Sprzedawca zastrzega sobie prawo do wprowadzania zmian w Regulaminie. Aktualna wersja Regulaminu jest zawsze dostępna na stronie internetowej.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Kontakt</h2>
            <p>
              W sprawach dotyczących Regulaminu można skontaktować się ze Sprzedawcą pod adresem e-mail: kontakt@xl1995.pl lub telefonicznie: +48 123 456 789
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;