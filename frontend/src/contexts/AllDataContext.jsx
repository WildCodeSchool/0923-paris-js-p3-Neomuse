import { useMemo, useState, createContext, useContext, useEffect } from "react";

const AllDataContext = createContext();
export function AllDataProvider({ children }) {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const oeuvre = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/artworks`,
          {
            method: "GET",
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setArtworks(data);
        } else {
          console.error("Pas d'oeuvre trouvé");
        }
      } catch (error) {
        console.error(error);
      }
    };
    oeuvre();
  }, []);

  const [artworkTechnic, setArtworkTechnic] = useState([]);

  useEffect(() => {
    const technique = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/technic`,
          {
            method: "GET",
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setArtworkTechnic(data);
        } else {
          console.error("Pas de technique trouvé");
        }
      } catch (error) {
        console.error(error);
      }
    };
    technique();
  }, []);

  const [artworkBytech, setArtworkBytech] = useState([]);

  useEffect(() => {
    const bytech = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/artworkbytech`,
          {
            method: "GET",
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setArtworkBytech(data);
        } else {
          console.error("Pas d'oeuvre par technique trouvé");
        }
      } catch (error) {
        console.error(error);
      }
    };
    bytech();
  }, []);

  const [favoris, setFavoris] = useState([]);

  useEffect(() => {
    const favorite = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/favoris`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setFavoris(data);
        } else {
          console.error("Pas de favori trouvé");
        }
      } catch (error) {
        console.error(error);
      }
    };
    favorite();
  }, []);

  const value = useMemo(
    () => ({
      artworks,
      setArtworks,
      artworkTechnic,
      setArtworkTechnic,
      artworkBytech,
      setArtworkBytech,
      favoris,
      setFavoris,
    }),
    [artworks, artworkTechnic, artworkBytech, favoris]
  );
  return (
    <AllDataContext.Provider value={value}>{children}</AllDataContext.Provider>
  );
}

export default () => useContext(AllDataContext);
