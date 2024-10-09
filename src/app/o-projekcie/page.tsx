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
                    backgroundImage: 'url(/_next/static/media/flaga-ue-tlo.a9057970.png)',
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
                    <p>Wartość projektu: <span className="fw-bold">1 975 534,61 zł</span> </p>
                    <p>Wysokość wkładu Funduszy Europejskich:<span className="fw-bold"> 1 679 204,41 zł</span></p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        Głównym celem projektu jest wsparcie i aktywizacja 168 kobiet sprawujących opiekę
                        nad dzieckiem do lat 7 oraz osobami potrzebującymi wsparcia w codziennym
                        funkcjonowaniu, powracających na rynek po zakończonym okresie sprawowania
                        opieki, zamieszkujących w rozumieniu Kodeksu Cywilnego na obszarze woj.
                        świętokrzyskiego, w tym w szczególności obszary wiejskie, w okresie realizacji proj.
                        tj. 1.09.2024 r. – 31.12.2025 r., co przyczyni się do zwiększenia możliwości ich
                        zatrudnienia i poprawę ich pozycji na rynku pracy.
                        <br />
                        Co najmniej 60% Uczestniczek projektu tj. 101 kobiet będzie zamieszkiwało obszary
                        wiejskie województwa świętokrzyskiego - obszar wiejski należy rozumieć jako obszar
                        słabo zaludniony zgodnie ze stopniem urbanizacji (DEGURBA kategoria 3). Założono
                        również, iż co najmniej 10% Uczestniczek tj. 17 os. będą stanowiły osoby z
                        niepełnosprawnością.
                        <br />
                        Dzięki udziałowi w projekcie Uczestniczki uzyskają kwalifikacje lub kompetencje
                        zawodowe oraz podniosą poziom wiedzy w zakresie równości kobiet i mężczyzn.
                        Poprawią również swoją sytuację na rynku pracy np. poprzez podjęcie pracy,
                        założenie własnej działalności gospodarczej.
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
                            Identyfikacja potrzeb Uczestników projektu (w tym
                            opracowanie/aktualizacja IPD)
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Udzielenie wsparcia w ramach projektu zostanie poprzedzone identyfikacją potrzeb Uczestniczek projektu oraz diagnozowaniem możliwości w zakresie doskonalenia zawodowego poprzez obligatoryjne opracowanie Indywidualnego Planu Działania (IPD) dla każdej Uczestniczki projektu. W ramach wsparcia nastąpi opracowanie IPD, aktualizacja oraz podsumowanie. Indywidualny Plan Działania będzie określał zakres wsparcia udzielanego danej osobie, który jest z nią uzgodniony.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" />
                                        Celem wsparcia jest identyfikacja potrzeb Uczestniczek projektu, w tym m.in.
                                        poprzez diagnozowanie potrzeb szkoleniowych lub walidacyjnych
                                        (potwierdzanie nabytych wcześniej kwalifikacji i kompetencji), możliwości
                                        doskonalenia zawodowego oraz opracowaniem lub aktualizacją
                                        Indywidualnego Planu Działania (IPD) dla każdej Uczestniczki projektu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparcie udzielone w ramach projektu będzie dostosowane do
                                        indywidualnych potrzeb Uczestniczek projektu, wynikających z ich wiedzy,
                                        umiejętności i kompetencji oraz kwalifikacji do wykonywania danego zawodu.
                                        Każda z uczestniczek projektu otrzyma ofertę wsparcia, obejmującą takie
                                        formy pomocy, które zostaną zidentyfikowane u niej jako niezbędne w celu
                                        poprawy sytuacji na rynku pracy lub uzyskania zatrudnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każda Uczestniczka projektu otrzyma śr. 3 godz. zegarowe indywidualnego
                                        wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każda osoba w wieku 15–29 lat należąca do kategorii NEET rozpoczynająca
                                        udział w projekcie przejdzie ocenę umiejętności cyfrowych oraz – w razie
                                        potrzeby – nastąpi uzupełnienie poziomu kompetencji.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem z pośrednictwa pracy zostanie objętych 168 Uczestniczek.
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
                                        src="/img/photos/student.jpg"
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
                            Poradnictwo indywidualne z zakresu doradztwa zawodowego i
                            pośrednictwa pracy
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Poradnictwo indywidualne z zakresu doradztwa pomoże Uczestniczce w
                                        rozwiązaniu problemu zawodowego, pozwoli zdiagnozować obszary
                                        wymagające dodatkowego wzmocnienia i wesprze w planowaniu ścieżki
                                        zawodowej, przygotuje do radzenia sobie w środowisku pracy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Tematyka wsparcia będzie ściśle dostosowana do potrzeb UP.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każda Uczestniczka projektu otrzyma śr. 2 godz. zegarowe indywidualnego
                                        wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem z poradnictwa indywidualnego z zakresu doradztwa zawodowego
                                        zostaną objęte 84 Uczestniczki.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Pośrednictwo pracy będzie bazowało na IPD i będzie wspierało Uczestniczkę
                                        w dojściu do zatrudnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Pośrednictwo pracy będzie usługą polegającą na pozyskaniu ofert pracy
                                        zgodnych z oczekiwaniami, predyspozycjami i kwalifikacjami Uczestniczki, a
                                        także możliwościami lokalnego/regionalnego rynku pracy, co da szansę na
                                        uzyskanie w krótkim czasie zatrudnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Pośrednictwo pracy nie tylko umożliwi Uczestniczce podjęcie zatrudnienia,
                                        ale również wyposaży w umiejętność sprawnego poruszania się po rynku
                                        pracy i samodzielnego poszukiwania pracy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każda Uczestniczka otrzyma propozycję co najmniej 3 ofert pracy od
                                        pośrednika pracy w ramach realizowanego wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każda Uczestniczka projektu otrzyma śr. 3 godz. zegarowe indywidualnego
                                        wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem z pośrednictwa pracy zostaną objęte 84 Uczestniczki.
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
                            Indywidualne poradnictwo psychologiczne
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Celem spotkań będzie wzmacnianie potrzeby zmiany u Uczestniczek
                                        projektu.
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
                                        Każda Uczestniczka projektu otrzyma śr. 3 godz. zegarowe indywidualnego
                                        wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostaną objęte 84 Uczestniczki.
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
                                        src="/img/photos/dietetyk.webp"
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
                            Szkolenie z zakresu wizerunku biznesowego
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Udział Uczestniczek w tego typu szkoleniu wzmocni poczucie własnej
                                        wartości i wpłynie pozytywnie na rozwój osobisty.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Dzięki szkoleniu Uczestniczki nauczą się budowania właściwego wizerunku
                                        siebie i firmy, w której będą pracowały, zwiększą swoją pewność siebie, będą
                                        umiały dobrać strój stosownie do sytuacji i stanowiska pracy, poznają zasady
                                        biznesowego dress code’u, a także zasad etyki i prezentacji w biznesie.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W czasie realizacji szkolenia Uczestniczkom projektu przysługuje stypendium szkoleniowe, które w pełnej wysokości tj. 120 % zasiłku, o którym mowa w art. 72 ust. 1 pkt 1 Ustawy o promocji zatrudnienia i instytucjach rynku pracy należy się Uczestniczkom, jeżeli miesięczny wymiar godzin szkolenia wynosi co najmniej 150 godzin. W przypadku mniejszej miesięcznej liczby godzin szkolenia, wysokość stypendium szkoleniowego ustala się proporcjonalnie, z tym, że stypendium to nie może być niższe niż 20% zasiłku, o którym mowa w art. 72 ust. 1 pkt 1 ww. ustawy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestniczka może ubiegać się o zwrot kosztów dojazdu
                                        oraz o zwrot kosztów opieki nad dzieckiem/osobą zależną.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 168 Uczestniczek.
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
                            Kursy/szkolenia podnoszące kwalifikacje/umiejętności zawodowe
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">

                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Celem szkolenia jest zdobycie przez Uczestniczkę kwalifikacji/kompetencji
                                        zawodowych, co polepszy jej sytuację na rynku pracy oraz zwiększy
                                        możliwość zatrudnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Szkolenia oferowane Uczestniczkom projektu będą zgodne ze zdiagnozowanymi potrzebami i potencjałem Uczestniczki projektu (określonymi w Indywidualnym Planie Działania tworzonym dla każdej osoby), a także będą uwzględniały rzeczywiste potrzeby na określone kwalifikacje i umiejętności na regionalnym/lokalnym rynku pracy.


                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każde ze szkoleń będzie obejmowało moduł dotyczący równości szans kobiet
                                        i mężczyzn, ze szczególnym uwzględnieniem praw kobiet, m.in. na rynku
                                        pracy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Średnia liczba godzin kursu wyniesie 88 godzin szkoleniowych.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Uzyskanie kwalifikacji lub nabycie kompetencji będzie każdorazowo
                                        zweryfikowane poprzez przeprowadzenie odpowiedniego sprawdzenia
                                        przyswojonej wiedzy, umiejętności i kompetencji społecznych lub zawodowych
                                        (w formie egzaminu).
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W czasie realizacji szkolenia zawodowego Uczestniczkom projektu przysługuje stypendium szkoleniowe, które w pełnej wysokości tj. 120% zasiłku, o którym mowa w art. 72 ust. 1 pkt 1 Ustawy o promocji zatrudnienia i instytucjach rynku pracy należy się Uczestniczkom, jeżeli miesięczny wymiar godzin szkolenia wynosi co najmniej 150 godzin. W przypadku mniejszej miesięcznej liczby godzin szkolenia, wysokość stypendium szkoleniowego ustala się proporcjonalnie, z tym, że stypendium to nie może być niższe niż 20% zasiłku, o którym mowa w art. 72 ust. 1 pkt 1 ww. ustawy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W czasie realizacji szkolenia zawodowego Uczestniczkom projektu
                                        przysługuje stypendium szkoleniowe, którego wysokość miesięcznie wyniesie
                                        120% zasiłku, o którym mowa w art. 72 ust. 1 pkt 1 ustawy o promocji
                                        zatrudnienia i instytucjach rynku pracy (obowiązującego w roku złożenia przez
                                        Beneficjenta wniosku o dofinansowanie w odpowiedzi na ogłoszony konkurs),
                                        <br />
                                        jeżeli miesięczny wymiar godzin szkolenia wynosi co najmniej 150 godzin
                                        zegarowych; w przypadku niższego miesięcznego wymiaru godzin szkolenia,
                                        wysokość stypendium szkoleniowego ustala się proporcjonalnie, z tym, że
                                        stypendium to nie może być niższe niż 20% zasiłku, o którym mowa w art. 72
                                        ust. 1 pkt 1 ustawy o promocji zatrudnienia i instytucjach rynku pracy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestniczka może ubiegać się o zwrot kosztów dojazdu
                                        oraz o zwrot kosztów opieki nad dzieckiem/osobą zależną.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostanie objętych 168 Uczestniczek.
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

