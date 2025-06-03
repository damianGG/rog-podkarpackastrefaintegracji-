import About6 from "@/components/blocks/about/About6Project";
import About6v2 from "@/components/blocks/about/About6v2";
import About6v3 from "@/components/blocks/about/About6v3";
import Image from "next/image";

export default function News() {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: "url('/img/flaga-ue-tlo.png')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                                O projekcie
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15" >
                <div className=" mt-4 mb-15">
                    <br />
                    <p className="mb-3 fw-bold lead fs-lg">Wartość projektu: 841 281,55 zł </p>
                    <p className="mb-3 fw-bold lead fs-lg">Wysokość wkładu Funduszy Europejskich: 715 089,31 zł</p>
                    <br />

                    <p className="mb-3 fw-bold lead fs-lg">
                        Głównym celem projektu jest wsparcie aktywnego włączenia społecznego w celu
                        promowania równości szans, niedyskryminacji i aktywnego uczestnictwa oraz
                        zwiększanie zdolności do zatrudnienia 60 osób (40 kobiet i 20 mężczyzn)
                        znajdujących się w niekorzystnej sytuacji – zagrożonych ubóstwem lub wykluczeniem
                        społecznym w wieku 18 lat i więcej zamieszkałych w rozumieniu Kodeksu Cywilnego
                        na obszarze województwa podkarpackiego, a tym samym zwiększenie ich
                        aktywności społecznej i zawodowej w okresie realizacji projektu, tj. od 01.03.2025 r.
                        do 28.02.2026 r. Cel ten zostanie osiągnięty poprzez objęcie uczestników/czek
                        kompleksowym wsparciem na podstawie przeprowadzonej diagnozy, opracowanie
                        Indywidualnej Ścieżki Reintegracji i dobranie odpowiednich instrumentów aktywizacji
                        społecznej, zawodowej i zdrowotnej.
                        <br />
                        <br />
                        Dzięki udziałowi w projekcie sytuacja społeczna Uczestników/czek ulegnie poprawie,
                        uzyskają oni kwalifikacje zawodowe, część osób podejmie zatrudnienie, a część -
                        osoby bierne zawodowo - rozpoczną poszukiwanie pracy.
                        <br />
                    </p>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/photo-1.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <p className="display-6 mb-3">Udział w projekcie obejmuje:</p>

                        <p className="lead fs-lg">
                            Stworzenie Indywidualnej Ścieżki Reintegracji (IŚR)
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Uczestnik/czka wspólnie z doradcą zawodowym i psychologiem stworzą
                                        Indywidualną Ścieżkę Reintegracji (IŚR) dla każdego/j Uczestnika/czki
                                        projektu.                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Dokument ten będzie spersonalizowanym planem działania uwzględniającym
                                        diagnozę sytuacji problemowej, zasobów, potencjału, predyspozycji i potrzeb
                                        Uczestnika/czki projektu, według którego dana osoba zostanie
                                        poprowadzony/a w dalszych etapach realizacji projektu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Na podstawie IŚR oraz indywidualnej diagnozy potrzeb każdy/a
                                        z Uczestników/czek projektu otrzyma ofertę wsparcia, obejmującą takie formy
                                        pomocy, które będą niezbędne do poprawy jego/jej sytuacji społeczno-
                                        zawodowej i które przyczynią się do podjęcia przez Uczestnika/czkę
                                        zatrudnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Indywidualna Ścieżka Reintegracji zostanie opracowana podczas
                                        indywidualnych sesji z:<br />
                                        - doradcą zawodowym – śr. 3 godz. zegarowe,<br />
                                        - psychologiem – śr. 2 godz. zegarowe.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 60 Uczestników/czek.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/shutterstock_2429463807.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>
                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Instrumenty aktywizacji społecznej
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        W ramach instrumentów aktywizacji społecznej przewidziano:
                                        - indywidualne poradnictwo psychologiczne i psychospołeczne – dla 60
                                        Uczestników/czek;
                                        - indywidualne porady prawne – dla 12 Uczestników/czek;
                                        - indywidualny life-coaching – dla 16 Uczestników/czek;
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Indywidualne porady prawne będą miały na celu wsparcie Uczestników/czek
                                        projektu w rozwiązywaniu problemów prawnych determinujących ich
                                        wykluczenie i ubóstwo. Wsparcie obejmować będzie porady prawne z zakresu
                                        prawa pracy, cywilnego i rodzinnego, pomoc w rozwiązywaniu spraw
                                        mieszkaniowych, socjalnych i alimentacyjnych, informowanie o możliwościach
                                        korzystania ze świadczeń z pomocy społecznej i innych rozwiązań
                                        ustawowych oraz pomoc w pisaniu pism/wniosków do urzędów. Przewidziano
                                        śr. 4 godz. zegarowe indywidualnych spotkań dla 12 Uczestników/czek
                                        projektu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Indywidualny life-coaching ukierunkowany będzie na rozwijanie kompetencji
                                        społecznych, sztukę asertywności, budowanie samooceny, skuteczne
                                        sposoby komunikacji, zarządzanie czasem i budżetem domowym,
                                        odnalezienie ścieżki życiowej, organizację swojej pracy, relacje międzyludzkie,
                                        zmianę przekonań oraz nawyków. Life-coaching będzie umożliwiał rozwój
                                        osobisty Uczestników/czek i realizację ich prywatnych celów, zgodnych z
                                        własnym systemem wartości. Podczas spotkań poruszona zostanie także
                                        tematyka gospodarowania domowym budżetem. Przewidziano śr. 4 godz.
                                        zegarowe indywidualnych spotkań dla 16 Uczestników/czek projektu.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6">
                        <h2 className="display-4 mb-3"></h2>
                        <p className="lead fs-lg">
                            Warsztaty rozwoju osobistego
                        </p>
                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Celem warsztatów będzie pogłębienie i doskonalenie własnego rozwoju
                                        zawodowego i osobistego. Spotkania wpłyną na lepszą samoocenę i
                                        samoświadomość Uczestników/czek, które w rezultacie wpłyną na zwiększone
                                        osiągnięcia w życiu zawodowym i prywatnym.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" />
                                        Wsparcie będzie dotyczyło takich zagadnień, jak rozwijanie
                                        samoświadomości, analiza własnych emocji i lepsze ich zrozumienie,
                                        podnoszenie poczucia własnej wartości, zwiększenie zadowolenia z życia,
                                        wyciąganie pozytywnych aspektów z danej sytuacji, poznanie swoich mocnych
                                        stron oraz otwarcie na nowe doświadczenia.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" />
                                        Wsparcie przewidziano dla 12 Uczestników/czek projektu i będzie obejmowało
                                        2 spotkania z psychologiem po 3 godz. zegarowe.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 position-relative">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/shutterstock_2429463807.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>


                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/shutterstock_2489860569.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Instrumenty aktywizacji zawodowej – pośrednictwo pracy
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Celem pośrednictwa pracy będzie udzielanie pomocy osobom pozostającym
                                        bez pracy w uzyskaniu odpowiedniego zatrudnienia, a także pracodawcom w
                                        pozyskaniu pracowników o poszukiwanych kwalifikacjach zawodowych.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestniczka projektu wraz z psychologiem skupią się na indywidualnej
                                        sytuacji społecznej i zawodowej. Poradnictwo psychologiczne przyczyni się do
                                        rozwiązania ich bieżących problemów i specyficznych trudności związanych z
                                        sytuacją życiową i podejmowaniem próby zmiany.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach pośrednictwa pracy Uczestnik/czka projektu zostanie
                                        wyposażony/a w umiejętność poruszania się po rynku pracy i samodzielnego
                                        poszukiwania zatrudnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy/a Uczestnik/czka projektu otrzyma śr. 4 godz. zegarowe
                                        indywidualnego wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 60 Uczestników/czek.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/intreview.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />

                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Kursy i szkolenia zawodowe
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Celem kursów/szkoleń zawodowych będzie zdobycie przez Uczestnika/czkę
                                        kompetencji bądź kwalifikacji zawodowych.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Tematyka szkoleń oferowanych Uczestnikom/czkom projektu będzie wynikała
                                        z Indywidualnej Ścieżki Reintegracji, w tym diagnozy potencjału, predyspozycji
                                        oraz posiadanego już doświadczenia czy kwalifikacji Uczestnika/czki, a także
                                        będzie uwzględniała aktualną sytuację i potrzeby lokalnego rynku pracy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Średnia liczba godzin kursu wyniesie 96 godzin szkoleniowych.                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy Uczestnik/czka projektu będzie miał możliwość wzięcia udziału w
                                        egzaminie zgodnym z rodzajem kształcenia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnikom/czkom kursów/szkoleń zostanie wypłacone stypendium
                                        szkoleniowe.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnik/czka będzie mógł/mogła ubiegać się o zwrot
                                        kosztów dojazdu i/lub zwrot kosztów opieki nad dzieckiem/osobą zależną.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 60 Uczestników/czek.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/ludzie.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Staże zawodowe
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Celem staży będzie nabycie umiejętności praktycznych poprzez wykonywanie
                                        zadań w miejscu pracy. Staże będą realizowane w zawodach powiązanych
                                        tematycznie z odbytym szkoleniem.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Skierowanie Uczestnika/czki projektu na staż będzie wynikać z IŚR oraz
                                        jego/jej indywidualnych potrzeb.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Czas pracy Uczestnika/czki odbywającego/j staż będzie trwał 8 godzin na
                                        dobę (40 godzin tygodniowo), w przypadku osoby z niepełnosprawnością (w
                                        stopniu znacznym lub umiarkowanym) 7 godzin na dobę (35 godzin
                                        tygodniowo), każdorazowo przez okres 3 miesięcy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Staże odbywać się będą w firmach zlokalizowanych możliwie najbliżej miejsc
                                        zamieszkania Uczestników/czek projektu, na stanowiskach w zakresie jakich
                                        Uczestnik/czka projektu zdobył/a kwalifikacje/kompetencje, zgodnie
                                        z ustalonym programem stażu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uczestnikom/czkom stażu zostanie wypłacone stypendium stażowe.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy/a stażysta/tka będzie zdobywać doświadczenie pod opieką Opiekuna
                                        stażysty.                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnik/czka będzie mógł/mogła ubiegać się o zwrot
                                        kosztów dojazdu na miejsce stażu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 12 Uczestników/czek.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/ludzie.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Mentoring, zatrudnienie wspomagane
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparcie będzie przeznaczone dla osób, które podejmą zatrudnienie, a z ich
                                        IŚR będzie wynikała konieczność objęcia tego typu wsparciem.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Celem wsparcia będzie pomoc Uczestnikowi/czce w utrzymaniu zatrudnienia.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparcie świadczone będzie w miejscu pracy danego Uczestnika/czki
                                        projektu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Mentoring będzie polegał na wsparciu Uczestnika/czki projektu przez mentora
                                        w radzeniu sobie ze zmianami i z nową sytuacją zawodową. Mentor będzie
                                        pomagał Uczestnikowi/czce w wykorzystaniu jego/jej potencjału w nowym
                                        miejscu pracy. Rolą mentora będzie motywowanie Uczestnika/czki do
                                        działania, pomoc we wdrożeniu się w nowe miejsce pracy oraz
                                        ukierunkowanie na działania na określony cel. Wsparciem zostanie objętych
                                        14 Uczestników/czek w wymiarze śr. 8 godz. zegarowych na osobę.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Zatrudnienie wspomagane będzie skierowane do osób z
                                        niepełnosprawnością, które podejmą zatrudnienie. Zakłada ono indywidualną
                                        pracę trenera pracy z osobą z niepełnosprawnością przy maksymalnym jej

                                        włączeniu w całość procesu decyzyjnego dotyczącego zatrudnienia. Oznacza
                                        to pomoc trenera począwszy od przygotowania do pracy, aż do wsparcia w
                                        miejscu pracy (adaptacja na nowym stanowisku pracy), jak również dalszy
                                        monitoring. Wsparciem zostanie objętych 12 Uczestników/czek z
                                        niepełnosprawnością w wymiarze śr. 12 godz. zegarowych na osobę.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">

                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/ludzie.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">


                        <h2 className="display-4 mb-3"></h2>

                        <p className="lead fs-lg">
                            Usługi zdrowotne
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnik/czka projektu będzie miał/a możliwość
                                        skorzystania ze sfinansowania usługi zdrowotnej np. wizyty u dietetyka,
                                        fizjoterapeuty, konsultacji medycznej ukierunkowanej na przeciwdziałanie
                                        powstawaniu chorób czy konsultacji psychiatrycznej wspierającej wyjście z
                                        depresji, zaburzeń depresyjnych, czy uzależnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Objęcie wsparciem będzie wynikało z IŚR danego Uczestnika/czki projektu.
                                        Usługa będzie dobierana indywidualnie dla danej osoby i będzie wynikała z
                                        jego/jej potrzeb zdrowotnych.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 12 Uczestników/czek.
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

