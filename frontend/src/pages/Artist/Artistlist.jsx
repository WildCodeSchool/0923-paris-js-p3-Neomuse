import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import useAllDataContext from "../../contexts/AllDataContext";
import "./artistlist.css";

function Artistlist() {
  const { artists } = useAllDataContext();

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredArtists = artists.filter((artist) =>
    artist.artist_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {};
  useEffect(() => {
    document.title = "Découvrir nos artistes";
  }, []);
  /* const searchbar = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); */

  return (
    <div className="body_artistlist">
      <section className="header_artistlist">
        <div className="title_artislist">
          <h1 className="h1_artistes">Découvrir nos artistes</h1>
        </div>
        <div className="searchbar">
          <div className="container_search">
            <input
              className="input_search"
              type="text"
              placeholder="Trouver un artiste..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <Icon
              onClick={handleSearch}
              id="icon_search"
              type="button"
              icon="arcticons:searchbar-ex"
              color="#B370B0"
              width="50"
              height="50"
            />
          </div>
        </div>
      </section>
      <div className="portraits">
        <div className="portrait_artist">
          {filteredArtists?.map((artist) => (
            <div key={artist?.id}>
              {artist?.thumbnail && (
                <img className="image_artist" src={artist?.thumbnail} alt="" />
              )}
              <div className="name_artist">
                <p>{artist?.artist_name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Artistlist;
