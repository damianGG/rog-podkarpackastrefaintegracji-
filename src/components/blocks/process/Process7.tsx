import { ProcessList1 } from "@/components/reuseable/process-list";
import DownloadList from "@/components/reuseable/process-list/DownloadList";
import { doPobrania2, processList1 } from "@/data/process";
import { doPobrania } from "@/data/process";
import Link from "next/link";

const backendLink = process.env.STRAPI_PUBLIC_BACKEND_LINK;

export async function getStrapiData() {
  try {
    const response = await fetch(`${backendLink}/api/dokumenties?sort=rank:asc&populate=*`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BEARER_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
}

export default async function Process7() {
  const dataFromStrapi = await getStrapiData();
  const data = dataFromStrapi?.data || [];

  return (
    <>
      {/* ... (poprzednia zawartość pozostaje bez zmian) ... */}

      <div className="container pt-10 pt-md-10 pb-13 pb-md-15">
        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
            <h2 className="display-4 mb-10 px-lg-14">Dokumenty do pobrania</h2>
            <div className="d-flex flex-column align-items-start">
              {/* ... (poprzednia zawartość pozostaje bez zmian) ... */}
            </div>
            <p>Prosimy o drukowanie dokumentów rekrutacyjnych w kolorze. Wersja czarno-biała dotyczy sytuacji braku możliwości wydruku w kolorze.</p>

            <h2 className="display-4 mb-10 px-lg-14">Dokumenty do pobrania</h2>
            {!dataFromStrapi ? (
              <p className="text-danger">Nie udało się pobrać dokumentów. Prosimy spróbować później.</p>
            ) : (
              <div className="col-lg-12 order-lg-2">
                {data.map((item: any) => (
                  <DownloadList
                    key={item.id}
                    title={item.attributes.tytul}
                    link1={item.attributes.kolorowy?.data?.[0]?.attributes?.url || ''}
                    link2={item.attributes.czarnobialy?.data?.attributes?.url || ''}
                    className="mb-5"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <p className="text-center mt-5">Aby uzyskać więcej informacji prosimy o kontakt z <Link href="/kontakt" className="link-primary">biurem projektu.</Link> </p>
      </div>
    </>
  );
}