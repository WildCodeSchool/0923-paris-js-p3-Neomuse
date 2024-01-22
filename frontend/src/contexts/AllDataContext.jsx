import { useMemo, useState, createContext, useContext } from "react";

const AllDataContext = createContext();
export function AllDataProvider({ children }) {
  const [artworks] = useState([
    {
      id: 1,
      title: "La vie",
      price: "255",
      description:
        "Cette oeuvre d'art contemporain unique et originale Shefshauen a été réalisée par l'artiste contemporain Volynskih Mariya l'artiste a utilisé la technique Aquarelle pour créer cette peinture petit format sur papier de style Figuratif ",
      art_theme: "Paysages",
      date_creation: "10/10/2023",
      dimension_height: "19",
      dimension_depth: "19",
      thumbnail: "https://i.ibb.co/1GXBrtn/mr-jones-artwork.jpg",
      price_on_demand: "1",
      artists: "Elie Lemarque",
      artwork_technique: "Peinture",
    },
    {
      id: 2,
      title: "La vie",
      price: "255",
      description:
        "Cette oeuvre d'art contemporain unique et originale Shefshauen a été réalisée par l'artiste contemporain Volynskih Mariya l'artiste a utilisé la technique Aquarelle pour créer cette peinture petit format sur papier de style Figuratif ",
      art_theme: "Paysages",
      date_creation: "10/10/2023",
      dimension_height: "19",
      dimension_depth: "19",
      thumbnail: "https://i.ibb.co/1GXBrtn/mr-jones-artwork.jpg",
      price_on_demand: "1",
      artists: "Elie Lemarque",
      artwork_technique: "Photographie",
    },
    {
      id: 3,
      title: "La vie",
      price: "255",
      description:
        "Cette oeuvre d'art contemporain unique et originale Shefshauen a été réalisée par l'artiste contemporain Volynskih Mariya l'artiste a utilisé la technique Aquarelle pour créer cette peinture petit format sur papier de style Figuratif ",
      art_theme: "Paysages",
      date_creation: "10/10/2023",
      dimension_height: "19",
      dimension_depth: "19",
      thumbnail: "https://i.ibb.co/1GXBrtn/mr-jones-artwork.jpg",
      price_on_demand: "1",
      artists: "Elie Lemarque",
      artwork_technique: "Sculpture",
    },
    {
      id: 4,
      title: "La vie",
      price: "255",
      description:
        "Cette oeuvre d'art contemporain unique et originale Shefshauen a été réalisée par l'artiste contemporain Volynskih Mariya l'artiste a utilisé la technique Aquarelle pour créer cette peinture petit format sur papier de style Figuratif ",
      art_theme: "Paysages",
      date_creation: "10/10/2023",
      dimension_height: "19",
      dimension_depth: "19",
      thumbnail: "https://i.ibb.co/1GXBrtn/mr-jones-artwork.jpg",
      price_on_demand: "1",
      artists: "Elie Lemarque",
      artwork_technique: "Photographie",
    },
    {
      id: 5,
      title: "La vie",
      price: "255",
      description:
        "Cette oeuvre d'art contemporain unique et originale Shefshauen a été réalisée par l'artiste contemporain Volynskih Mariya l'artiste a utilisé la technique Aquarelle pour créer cette peinture petit format sur papier de style Figuratif ",
      art_theme: "Paysages",
      date_creation: "10/10/2023",
      dimension_height: "19",
      dimension_depth: "19",
      thumbnail: "https://i.ibb.co/1GXBrtn/mr-jones-artwork.jpg",
      price_on_demand: "1",
      artists: "Elie Lemarque",
      artwork_technique: "Sculpture",
    },
    {
      id: 6,
      title: "La vie",
      price: "255",
      description:
        "Cette oeuvre d'art contemporain unique et originale Shefshauen a été réalisée par l'artiste contemporain Volynskih Mariya l'artiste a utilisé la technique Aquarelle pour créer cette peinture petit format sur papier de style Figuratif ",
      art_theme: "Paysages",
      date_creation: "10/10/2023",
      dimension_height: "19",
      dimension_depth: "19",
      thumbnail: "https://i.ibb.co/1GXBrtn/mr-jones-artwork.jpg",
      price_on_demand: "1",
      artists: "Elie Lemarque",
      artwork_technique: "Peinture",
    },
  ]);
  const [artworkTechnique] = useState([
    {
      id: 1,
      name: "Peinture",
    },
    {
      id: 2,
      name: "Sculpture",
    },
    {
      id: 3,
      name: "Photographie",
    },
  ]);

  const [artists] = useState([
    {
      id: 1,
      artist_name: "El Guapo",
      firstname: "Baptiste",
      lastname: "De la rosa",
      date_registration: "2023-10-01",
      thumbnail: "https://i.ibb.co/F85c9pv/artist1.png",
      biography: "aime les frites",
    },
    {
      id: 2,
      artist_name: "Princess",
      firstname: "Leo",
      lastname: "Humbert",
      date_registration: "2023-11-06",
      thumbnail: "https://i.ibb.co/hctYYYr/artist6.png",
      biography: "Tu peux pas test",
    },
    {
      id: 3,
      artist_name: "Big J",
      firstname: "Ju",
      lastname: "Lius",
      date_registration: "2023-11-01",
      thumbnail: "https://i.ibb.co/dpSRtsY/artist4.png",
      biography: "Adore Booba et Joe Dassin",
    },
    {
      id: 4,
      artist_name: "Queen",
      firstname: "Ines",
      lastname: "SEKA",
      date_registration: "2023-10-01",
      thumbnail: "https://i.ibb.co/WfdqmNR/artist3.png",
      biography: "INCORAYABLE",
    },
    {
      id: 5,
      artist_name: "LE JO",
      firstname: "will",
      lastname: "Smith",
      date_registration: "2023-10-01",
      thumbnail: "https://i.ibb.co/smnLDT0/artist5.png",
      biography: "aime les frites",
    },
    {
      id: 6,
      artist_name: "¡Jean CLaude Vandale!",
      firstname: "will",
      lastname: "Smith",
      date_registration: "2023-10-01",
      thumbnail: "https://i.ibb.co/DM5YNrC/artist2.png",
      biography: "aime les frites",
    },
  ]);

  const value = useMemo(
    () => ({
      artworks,
      artworkTechnique,
      artists,
    }),
    [artworks, artworkTechnique, artists]
  );
  return (
    <AllDataContext.Provider value={value}>{children}</AllDataContext.Provider>
  );
}
export default () => useContext(AllDataContext);
