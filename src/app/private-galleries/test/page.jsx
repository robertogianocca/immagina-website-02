import fetchPortfolioData from "@/utils/fetchPortfolioData";
import PortfolioGallery from "@/components/Portfolio/PortfolioGallery/PortfolioGallery";

export default async function Test() {
  const portfolioData = await fetchPortfolioData("Gallerie%20Private");

  if (!portfolioData) {
    return (
      <div>
        <p>Errore nel caricamento dei dati. Riprova più tardi.</p>
      </div>
    );
  }

  const portfolioCultura = portfolioData["IMMAGINA"]["Gallerie Private"];

  return (
    <div>
      <PortfolioGallery
        currentCategoryPortfolio={portfolioCultura["Test"]}
        title={"Ingeborg Lüscher"}
        shortDescription={
          "All’artista di fama internazionale Ingeborg Lüscher, dal 1967 risiede a Tegna, il Museo d’arte di Mendrisio (Barbara Paltenghi Malacrida, direttrice) le ha dedicato la prima mostra in Ticino conclusasi il 19 gennaio 2025. "
        }
        longDescription={
          "Il Museo d’arte di Mendrisio ha ospitato l’artista Ingeborg Lüscher. La mostra curata da  Barbara Paltenghi Malacrida e Francesca Bernasconi  Il cielo ancorato alla terra, si è tenuta  dal 6 ottobre 2024 al 9 gennaio 2025. Ingeborg Lüscher in cinquant’anni di carriera si è imposta come una delle figure di riferimento dell’orizzonte artistico contemporaneo. Se l’attività artistica l’ha condotta in ogni angolo del mondo, Ingeborg Lüscher ha scelto di vivere in Ticino, dal 1967 (Tegna). Insieme al compagno Harald Szeemann, celebre e rivoluzionario curatore, si è interessata a vari aspetti della realtà locale (Monte Verità, Fondazione Eranos) e ha approfondito la figura di Armand Schulthess (in Auressio). La loro casa di Tegna è stata per molti artisti, e curatori e amici un punto di riferimento per mezzo secolo.Il cielo ancorato alla terra è stata la prima mostra dedicata a Ingeborg Lüscher in Ticino. Adriano Heitmann (IMMAGINA) ha documentato le opere e l’allestimento negli splendidi spazi del Museo, antico convento dei frati Serviti a Mendrisio."
        }
        pathTree={["uno"]}
      />
    </div>
  );
}
