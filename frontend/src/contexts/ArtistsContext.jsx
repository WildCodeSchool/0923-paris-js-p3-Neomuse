import { useMemo, useState, createContext, useContext } from "react";

const ArtistContext = createContext();
export function AllDataProvider({ children }) {
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
      artists,
    }),
    [artists]
  );
  return (
    <ArtistContext.Provider value={value}>{children}</ArtistContext.Provider>
  );
}
export default () => useContext(ArtistContext);
