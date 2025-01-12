export const Captions = (portfolioCultura) => {
  const addCaptions = (gallery, source) => {
    // Check if the gallery exists and iterate
    if (gallery && Array.isArray(gallery)) {
      source.forEach((item, index) => {
        if (gallery[index]) {
          gallery[index].shortDescription = item;
        }
      });
    } else {
      console.error("Gallery or images not found");
    }
  };

  const captionGottardo = [
    "Giornico",
    "Biaschina",
    "Chiggionia chiesa S.ta Maria Assunta",
    "Rodi",
    "Airolo",
    "Göschenen",
    "Göschenen",
    "Wassen",
    "Gurtnellen",
    "Zgraggen-Tahlbücke",
    "Intschi-Aelmen",
    "Amsteg",
    "Silenen",
  ];

  addCaptions(
    portfolioCultura["Photography"]["Drone"]["Gotthardbahn"].images.pictures,
    captionGottardo
  );
};
