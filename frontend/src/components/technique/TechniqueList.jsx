// import { Link } from "react-router-dom";
import { useState } from "react";
import Grid from "@mui/joy/Grid";
import { Link } from "react-router-dom";
import useAllDataContext from "../../contexts/AllDataContext";
import "./technique.css";
import Oeuvre from "../Oeuvre";

function TechniqueList() {
  const { artworks, artworkTechnique } = useAllDataContext();
  const [selectedTechnique, setSelectedTechnique] = useState(null);

  const filteredArtworks = artworks.filter((artwork) => {
    if (!selectedTechnique) {
      return true;
    }
    return artwork.artwork_technique
      .toLowerCase()
      .includes(selectedTechnique.toLowerCase());
  });

  const handleTechniqueChange = (technique) => {
    setSelectedTechnique(technique);
  };
  const handleResetFilter = () => {
    setSelectedTechnique(null);
  };
  return (
    <>
      <div className="bouttonWorklist">
        {artworkTechnique.map((technique) => (
          <button
            type="button"
            key={technique.id}
            onClick={() => handleTechniqueChange(technique.name)}
            className="bouttonOeuvreList"
          >
            {technique.name}
          </button>
        ))}
        <button
          type="button"
          className="boutton_toutafficher"
          onClick={handleResetFilter}
        >
          Voir tous
        </button>
      </div>

      <div className="gridcontainer">
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 15 }}
          sx={{ flexGrow: 1 }}
        >
          {filteredArtworks.map((artwork) => (
            <Grid xs={2} sm={4} md={4.6} key={artwork.id}>
              <Link className="LinkOeuvreId" to={`/artworks/${artwork.id}`}>
                <Oeuvre artwork={artwork} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default TechniqueList;
