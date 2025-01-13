export const Texts = (portfolioCultura) => {
  /* -------------------- DRONE  -------------------- */
  portfolioCultura["Photography"]["Drone"].pictures[0].shortDescription = (
    <div>
      <p>
        I droni hanno cambiato lo sguardo sul mondo come la fotografia nel 1839. IMMAGINA li ha
        usati nel 2016 per la prima volta nei suoi progetti a scopo redazionale, giornalistico.
      </p>
    </div>
  );
  /* -------------------- SCULTURA  -------------------- */
  portfolioCultura["Photography"]["Scultura"].pictures[0].shortDescription = (
    <div>
      <p>
        Ossia "togliere il superfluo", così Michelangelo. Così anche nella fotografia. Con luce di
        seta e fondali appropriati si evidenziano la materia, volumi e sinuosità impresse nel
        bronzo, nel marmo o nel gesso modellati dall’artista.
      </p>
    </div>
  );
  /* -------------------- SCULTURA - RENZO FONTANA -------------------- */

  portfolioCultura["Photography"]["Scultura"].pictures[0].alt = "Scultura di Renzo Fontana";

  /* -------------------- TEATRO -------------------- */

  portfolioCultura["Photography"]["Teatro"].pictures[0].shortDescription = (
    <div>
      <p>
        La vita è fatta della materia dei sogni <span class="italic">(Shakespeare)</span>. Anche una
        fotografia di teatro deve far sognare. Vietato documentare. Rivelare l’invisibile.
        Sorprendere registi, attori, spettatori col proprio lavoro. È quanto auspicava Shakespeare,
        scrivendo.
      </p>
    </div>
  );
  portfolioCultura["Photography"]["Teatro"]["Slava's Snowshow"].pictures[0].shortDescription = (
    <div>
      <p className="italic">Love is at the heart of clownery.</p>
      <br></br>
      <p>
        La Prima ebbe luogo a Mosca nell’ottobre del 1993. Lo
        <span class="italic">Slava's Snowshow</span> è lo spettacolo creato e messo in scena
        dall'artista russo Slava Polunin. Poesia sulle orme di
        <span class="italic">
          Puškin, Gogol, Čechov, Kandinsky, Chagall, Ėjzenštejn, Tarkovskij, Stravinskij, Prokofiev.
        </span>
      </p>
      <p>
        Da allora migliaia di rappresentazioni, milioni di spettatori di tutto il mondo, di ogni
        età, nazionalità, credo; chi ricco, chi povero: tutti rimaniamo ammagliati, incantati,
        stregati da questi clown, personaggi dalla triste figura. Adulti e bambini e anziani sono
        catapultati nella propria infanzia: sogni, ricordi, nostalgia fanno dello SnowShow di Slava
        una esperienza indimenticabile. Le diverse scene rimangono impresse nella memoria: hanno
        suscitano ilarità, stupore, sorrisi: mai la risata sfrenata.
      </p>
      <p class="custom-indent">
        Lo spettacolo sfugge a qualsiasi definizione. Che sorpresa quella allegra bolgia finale in
        sala quando la tormenta di neve e giganteschi palloni straripano dal palco inondando gli
        spettatori. Polverizzata è la linea di demarcazione tra palco e platea. Lo stesso pubblico
        ritornerà a teatro ogni volta, a rivedere e a rivivere lo SnowShow, come una cerimonia, come
        un rituale magico.<span class="italic"> Au revoir Slava</span>. Tu, comico, malinconico,
        drammatico artista. Tu clown in esilio, apostolo della fratellanza.
      </p>
    </div>
  );
};
