import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./artistlist.css";

function Artistlist() {
  const portraits = useLoaderData();
  console.info(portraits);
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {};
  useEffect(() => {
    document.title = "Découvrir nos artistes";
  }, []);
  return (
    <>
      <section className="header_artistlist">
        <div className="title">
          <div className="title_box">
            <h1>Découvrir nos artistes</h1>
          </div>
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
              id="icon_search"
              type="button"
              onClick={handleSearch}
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
          {portraits?.map((portrait) => (
            <div key={portrait.id}>
              {portrait.images?.sm && (
                <img className="image_artist" src={portrait.images.sm} alt="" />
              )}
              <div className="name_artist">
                <p>{portrait.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Artistlist;
