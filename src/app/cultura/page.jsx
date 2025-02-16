// HOME CULTURA

import fetchPortfolioData from "@/utils/fetchPortfolioData";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Wrapper from "@/components/Wrapper/Wrapper";
import IntroSection from "@/components/Sections/IntroSection/IntroSection";
// import PortfolioSection from "@/components/Sections/PortfolioSection/PortfolioSection";
import TeamSection from "@/components/Sections/TeamSection/TeamSection";
import PortfolioCategoryCard from "@/components/Portfolio/PortfolioCategoryCard/PortfolioCategoryCard";

export default async function Cultura() {
  const portfolioData = await fetchPortfolioData("Cultura");

  if (!portfolioData) {
    return (
      <div>
        <p>Errore nel caricamento dei dati. Riprova più tardi.</p>
      </div>
    );
  }

  const portfolioCultura = portfolioData["IMMAGINA"]["Cultura"]["Portfolio"];
  return (
    <div className="text-customBrown">
      <NavigationBar
        color="text-customRed"
        menuColor="text-customRed hover:border-b-2 hover:border-customRed"
        bgColor="bg-customWhite lg:shadow-xl lg:shadow-slate-200"
      />
      <Wrapper>
        {/* ---------- INTRO SECTION ---------- */}
        <section id="home" className="h-space lg:min-h-[calc(100vh-60px)] overflow-hidden">
          <IntroSection
            text={
              <>
                <p className="font-semibold text-xs md:text-base">
                  Questa sezione del sito di IMMAGINA è dedicata agli
                  <span className="font-bold text-customBrownRed"> artisti</span> e agli
                  <span className="font-bold text-customBrownRed"> operatori culturali</span>.
                  <br />
                  <br />
                  {`Come il sarto, vestiamo su misura ogni aspetto legato alla sconfinata attività culturale. Per mezzo di foto, video, testi.  Seguiamo la produzione di libri, cataloghi, manifesti, mostre… `}
                  <br />
                  <br />
                  {`La nostra missione: Vestire la cultura, comunicare con successo il profumo dell’arte.`}
                  <br />
                  <br />
                </p>
                <p className="hidden sm:block font-semibold">
                  IMMAGINA ti invita a <span className="italic">sfogliare</span> il suo portfolio.
                </p>
              </>
            }
          />
        </section>
        {/* ---------- PORTFOLIO SECTION ---------- */}
        <section id="portfolio" className="min-h-space pb-10 pt-6 xl:pt-10">
          <h2 className="text-3xl xl:text-4xl font-courier font-bold mb-6">Portfolio</h2>
          <div className="main-grid">
            <PortfolioCategoryCard
              title="Photography"
              hrefLink="/cultura/photography"
              cover={portfolioCultura["Photography"].pictures[0].url}
              shortDescription={portfolioCultura["Photography"].pictures[0].shortDescription}
            />
            <PortfolioCategoryCard
              title="Video"
              hrefLink="/cultura/video"
              shortDescription="IMMAGINA offre servizi video a tutto tondo. Produciamo di preferenza documentari per artisti, musicisti, attori, teatri, festival, matrimoni: per gente simpatica only."
              cover="https://res.cloudinary.com/immagina/image/upload/v1733128441/IMMAGINA/Video/Video_-_Cover_kvdqep.jpg"
            />
          </div>
        </section>
        {/* ---------- TEAM SECTION ---------- */}
        <section id="team" className="min-h-space pb-10 pt-6 xl:pt-10">
          <div className="grid grid-cols-3  gap-4 xl:gap-8 xl:pb-20">
            <h2 className="text-3xl xl:text-4xl font-courier font-bold mb-6 col-span-1">Team</h2>
            <div className="xl:block col-span-2">
              {/* <p className="hidden xl:block text-base font-semibold col-span-2 ">
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
                }
              </p> */}
            </div>
          </div>
          <TeamSection />
        </section>
      </Wrapper>
    </div>
  );
}
