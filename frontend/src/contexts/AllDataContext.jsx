import { useMemo, useState, createContext, useContext } from "react";
/* import Oeuvre1 from "../assets/oeuvre1.webp";
import Oeuvre2 from "../assets/oeuvre2.webp";
import Oeuvre3 from "../assets/oeuvre3.webp"; */

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
      artist_name: "ECRK!",
      firstname: "will",
      lastname: "Smith",
      date_registration: "2023-10-01",
      thumbnail: "https://i.ibb.co/3vcZJCY/mr-jones.png",
      biography: "aime les frites",
    },
    {
      id: 2,
      artist_name: "La poutre",
      firstname: "rara",
      lastname: "BG",
      date_registration: "2023-11-06",
      thumbnail: "https://i.ibb.co/3vcZJCY/mr-jones.png",
      biography: "BG ultime",
    },
    {
      id: 3,
      artist_name: "Big J",
      firstname: "Ju",
      lastname: "Lius",
      date_registration: "2023-11-01",
      thumbnail: "https://i.ibb.co/3vcZJCY/mr-jones.png",
      biography: "Adore Booba",
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
