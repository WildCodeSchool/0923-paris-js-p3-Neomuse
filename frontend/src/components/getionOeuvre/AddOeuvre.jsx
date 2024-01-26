import { useRef, useEffect, useState } from "react";
import useAllDataContext from "../../contexts/AllDataContext";
import "./addOeuvre.css";

function GestionOeuvre() {
  const { artworkTechnic } = useAllDataContext();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const technique = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/artist`,
          {
            method: "GET",
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setArtists(data);
        } else {
          console.error("Pas de technique trouvé");
        }
      } catch (error) {
        console.error(error);
      }
    };
    technique();
  }, []);
  const title = useRef();
  const description = useRef();
  const artTheme = useRef();
  const dateCreation = useRef();
  const price = useRef();
  const dimensionHeight = useRef();
  const dimensionWidth = useRef();
  const dimensionDepth = useRef();
  const thumbnail = useRef();
  const artistsid = useRef();
  const artworkTechniqueid = useRef();
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = async () => {
    try {
      // const form= new FormData();
      // form.append(" title", title.current.value);
      // form.append(" description", description.current.value);
      // form.append(" date_creation", dateCreation.current.value);
      // form.append(" dimension_height", dimensionHeight.current.value);
      // form.append("dimension__width", dimensionWidth.current.value);
      // form.append("dimension_depth", dimensionDepth.current.value);
      // form.append("thumbnail", thumbnail.current.value);
      // form.append("artists_id", artistsid.current.value);
      // form.append("artwork_technique_id", artworkTechniqueid.current.value);
      const response = await fetch(
        -+`${import.meta.env.VITE_BACKEND_URL}/api/artworks`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      console.info(response.status);
      if (response.status === 201) {
        setConfirmation("Œuvre ajoutée avec succès !");
      } else {
        console.error("veuillez verifier votre saisie.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2 className="titreGestion"> 3- AJOUTER UNE OEUVRE</h2>

      <form className="containerform">
        <div className="champ">
          <label htmlFor="firstname" className="titre_champ">
            Titre de l'oeuvre
          </label>
          <input
            type="text"
            name="firstname"
            ref={title}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="firstname" className="titre_champ">
            Thème
          </label>
          <input
            type="text"
            name="firstname"
            ref={artTheme}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="firstname" className="titre_champ">
            Date d'enregistrement
          </label>
          <input
            type="text"
            name="firstname"
            ref={dateCreation}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="firstname" className="titre_champ">
            Prix
          </label>
          <input
            type="text"
            name="firstname"
            ref={price}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="firstname" className="titre_champ">
            Hauteur
          </label>
          <input
            type="text"
            name="firstname"
            ref={dimensionHeight}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="firstname" className="titre_champ">
            Largeur
          </label>
          <input
            type="text"
            name="firstname"
            ref={dimensionWidth}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="firstname" className="titre_champ">
            Profondeur
          </label>
          <input
            type="text"
            name="firstname"
            ref={dimensionDepth}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="firstname" className="titre_champ">
            Description
          </label>
          <textarea
            type="text"
            name="firstname"
            ref={description}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="image" className="titreSelecteur">
            Télécharger une image :
          </label>
          <input type="file" accept="image/*" ref={thumbnail} />
        </div>
        <div className="champ">
          <label htmlFor="artists_id" className="titreSelecteur">
            Sélectionner la technique:
          </label>
          <select ref={artworkTechniqueid} required>
            {artworkTechnic.map((technique) => (
              <option
                key={technique.artwork_technique_id}
                value={technique.artwork_technique_id}
              >
                {technique.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="artists_id" className="titreSelecteur">
            Sélectionner l'artiste :
          </label>
          <select ref={artistsid} required>
            {artists.map((artiste) => (
              <option key={artiste.artist_id} value={artiste.artist_id}>
                {artiste.firstname} {artiste.lastname}
              </option>
            ))}
          </select>
        </div>
        <div className="box_connexion">
          <button
            type="button"
            className="boutonEnregister"
            onClick={handleSubmit}
          >
            Ajouter
          </button>
        </div>
      </form>
      {confirmation && <p>{confirmation}</p>}
    </div>
  );
}

export default GestionOeuvre;
