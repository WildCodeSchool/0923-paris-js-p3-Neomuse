import { useMemo, useState, createContext, useContext } from "react";
import Oeuvre1 from "../assets/oeuvre1.webp";
import Oeuvre2 from "../assets/oeuvre2.webp";
import Oeuvre3 from "../assets/oeuvre3.webp";

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
      thumbnail: Oeuvre1,
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
      thumbnail: Oeuvre1,
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
      thumbnail: Oeuvre2,
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
      thumbnail: Oeuvre3,
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
      thumbnail: Oeuvre3,
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
      thumbnail: Oeuvre2,
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

  const value = useMemo(
    () => ({
      artworks,
      artworkTechnique,
    }),
    [artworks, artworkTechnique]
  );
  return (
    <AllDataContext.Provider value={value}>{children}</AllDataContext.Provider>
  );
}
export default () => useContext(AllDataContext);
