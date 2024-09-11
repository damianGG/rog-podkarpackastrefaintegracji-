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
                    <p>Wartość projektu: <span className="fw-bold">1 282 278,43 zł</span> </p>
                    <p>Wysokość wkładu Funduszy Europejskich:<span className="fw-bold"> 1 089 936,67 zł</span></p>
                    <p className="mb-3 fw-bold lead fs-lg">Celem głównym projektu jest aktywizacja zawodowa 72 biernych zawodowo kobiet
                        w wieku produkcyjnym (18 – 59 lat) zamieszkujących w rozumieniu Kodeksu
                        Cywilnego miasto Radom oraz gminę Wieniawa, w szczególności biernych
                        zawodowo kobiet z wykształceniem ISCED 3 i niższym oraz w wieku do lat 30 w
                        okresie realizacji projektu (1.04.2024-31.03.2025), która będzie wynikiem udzielenia
                        profesjonalnego wsparcia aktywizującego. W konsekwencji co najmniej 66% biernych
                        kobiet poprawi swoją sytuację na rynku pracy.</p>
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


                        <p className="display-6 mb-3">Udział w projekcie obejmuje następujące elementy:</p>

                        <p className="lead fs-lg">
                            Diagnoza sytuacji Uczestniczki projektu na rynku pracy zgodnie
                            z założeniami dotyczącymi narzędzia Indywidualny Plan Działania
                            opisanego w ustawie o promocji zatrudnienia i instytucjach rynku pracy
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />Celem wsparcia jest identyfikacja potrzeb
                                        Uczestniczki projektu, w tym m.in.
                                        poprzez diagnozowanie potrzeb szkoleniowych lub walidacyjnych
                                        (potwierdzanie nabytych wcześniej kwalifikacji i kompetencji), możliwości

                                        doskonalenia zawodowego oraz poprzez opracowanie lub aktualizację IPD dla
                                        każdej Uczestniczki projektu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Dzięki opracowaniu IPD każda z Uczestniczek projektu otrzyma ofertę wsparcia, obejmującą takie formy pomocy, które zostaną zidentyfikowane u niej jako niezbędne w celu poprawy sytuacji na rynku pracy lub uzyskania zatrudnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W trakcie spotkania zostanie przeprowadzona diagnoza/ocena umiejętności
                                        cyfrowych z wykorzystaniem „Europejskiego narzędzia do oceny poziomu
                                        kompetencji cyfrowych. W zależności od jego wyniku Uczestniczka zostanie
                                        lub nie zostanie zakwalifikowana do udziału w szkoleniu z zakresu
                                        kompetencji cyfrowych.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />Każda Uczestniczka projektu otrzyma śr. 5 godz. zegarowych wsparcia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />Wsparciem zostaną objęte 72 Uczestniczki.
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
                            Uzupełnienie poziomu kompetencji cyfrowych wynikające z przeprowadzonej diagnozy
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" /> Celem wsparcia jest uzupełnienie poziomu kompetencji cyfrowych Uczestniczek projektu, których na etapie diagnozy stwierdzono konieczność uzupełnienia kompetencji w tym zakresie.
                                    </li>

                                    <li className="mt-3">
                                        <i className="uil uil-check" />Uczestniczki, u których zostanie zdiagnozowana konieczność uzupełnienia kompetencji cyfrowych wezmą udział w 40 godz. szkoleniu składającym się z 5 modułów (5 modułów x 8 godz.):
                                        <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                            <li> <i className="uil uil-check" />Informacja i dane,</li>
                                            <li> <i className="uil uil-check" />Komunikacja i współpraca,</li>
                                            <li> <i className="uil uil-check" />Tworzenie treści cyfrowych,</li>
                                            <li> <i className="uil uil-check" />Bezpieczeństwo,</li>
                                            <li> <i className="uil uil-check" />Rozwiązywanie problemów.</li>
                                        </ul>
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" /> Na zakończenie każdego modułu odbędzie się egzamin zewnętrzny potwierdzający zdobyte kompetencje cyfrowe.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />Wsparciem zostaną objęte 44 Uczestniczki projektu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />W czasie realizacji szkolenia Uczestniczkom projektu przysługuje stypendium szkoleniowe w maksymalnej wysokości 477,41 zł.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />W ramach wsparcia uczestnicy mogą ubiegać się o zwrot kosztów dojazdu, jak również o zwrot kosztów opieki nad dziećmi lub osobą wymagającą wsparcia w codziennym funkcjonowaniu.
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
                            Modułowe kształcenie aktywizujące
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Szkolenia aktywizujące obejmą następujące moduły (64 godz.,
                                        4 moduły x16 godz.):
                                        <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                            <li><i className="uil uil-check" />Moduł dot. nabycia przez Uczestniczki projektu umiejętności
                                                poszukiwania atrakcyjnych dla siebie nisz rynkowych pod kątem
                                                profilowania przyszłych aktywności zawodowych,
                                            </li>
                                            <li><i className="uil uil-check" />
                                                Moduł dot. poszukiwania źródeł finansowania planowanych
                                                działalności gospodarczych,
                                            </li>
                                            <li><i className="uil uil-check" />
                                                Moduł dot. budowania i podtrzymywania kontaktów, w tym
                                                biznesowych z przedstawicielami związków pracodawców,
                                                pracodawcami pod potrzeby aktywności zawodowej,
                                            </li>
                                            <li><i className="uil uil-check" />
                                                Moduł dot. promowania wśród pracodawców rozwiązań wspierających
                                                równe traktowanie i niedyskryminację kobiet na rynku pracy oraz
                                                realizację zasady szeroko pojętej niedyskryminacji.
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Nabycie kompetencji będzie weryfikowane poprzez egzamin wewnętrzny.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparciem zostaną objęte 72 Uczestniczki.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W czasie realizacji szkolenia Uczestniczkom projektu przysługuje stypendium
                                        szkoleniowe w maksymalnej wysokości         763,86 zł.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />W ramach wsparcia Uczestniczki mogą ubiegać się o zwrot kosztów dojazdu,
                                        jak również o zwrot kosztów opieki nad dzieckiem lub osobą wymagającą
                                        w codziennym funkcjonowaniu.
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
                            Podniesienie/aktualizacja kwalifikacji/kompetencji zawodowych
                            niezbędnych w zawodach związanych z usługami zdrowotnymi
                            i opiekuńczymi
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Celem szkolenia jest zdobycie przez Uczestniczkę kwalifikacji lub kompetencji
                                        niezbędnych w zawodach związanych z usługami zdrowotnymi i
                                        opiekuńczymi, co polepszy jej sytuację społeczną i zawodową oraz umożliwi
                                        Uczestniczce zdobycie zatrudnienia.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Średnia liczba godzin kursu wyniesie 104 godzin zajęć.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Nabycie kwalifikacji/kompetencji będzie weryfikowane poprzez
                                        przeprowadzenie egzaminu zewnętrznego przez uprawnioną instytucję.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />Wsparciem zostaną objęte 72 Uczestniczki.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W czasie realizacji szkolenia zawodowego Uczestniczkom projektu
                                        przysługuje stypendium szkoleniowe, którego wysokość miesięcznie wyniesie
                                        120% zasiłku, o którym mowa w art. 72 ust. 1 pkt 1 ustawy o promocji
                                        zatrudnienia i instytucjach rynku pracy, jeżeli miesięczny wymiar godzin
                                        szkolenia wynosi co najmniej 150 godzin; w przypadku niższego miesięcznego
                                        wymiaru godzin szkolenia, wysokość stypendium szkoleniowego ustala się
                                        proporcjonalnie, z tym, że stypendium to nie może być niższe niż 20% zasiłku,
                                        o którym mowa w art. 72 ust. 1 pkt 1 ustawy o promocji zatrudnienia
                                        i instytucjach rynku pracy.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestniczki mogą ubiegać się o zwrot kosztów dojazdu,
                                        jak również o zwrot kosztów opieki nad dzieckiem lub osobą wymagającą
                                        w codziennym funkcjonowaniu.
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

