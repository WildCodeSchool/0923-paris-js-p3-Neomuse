import { useRef, useState } from "react";
import "./addArtiste.css";

function GestionArtiste() {
  const name = useRef();
  const firstname = useRef();
  const registerDate = useRef();
  const biography = useRef();
  const thumbnail = useRef();
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = async () => {
    try {
      const form = new FormData();
      form.append(" name", name.current.value);
      form.append(" firstname", firstname.current.value);
      form.append(" registerdate", registerDate.current.value);
      form.append(" biography", biography.current.value);
      form.append("thumbnail", thumbnail.current.value);
      const response = await fetch(
        -+`${import.meta.env.VITE_BACKEND_URL}/api/artists`,
        {
          method: "POST",
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
      <h2 className="titreGestion"> 3- AJOUTER UN ARTISTE</h2>
      <form className="containerform">
        <div className="champ">
          <label htmlFor="firstname" className="titre_champ">
            Nom artiste
          </label>
          <input
            type="text"
            name="firstname"
            ref={name}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="firstname" className="titre_champ">
            Prénom artiste
          </label>
          <input
            type="text"
            name="firstname"
            ref={firstname}
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
            ref={registerDate}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="firstname" className="titre_champ">
            Biography
          </label>
          <input
            type="text"
            name="firstname"
            ref={biography}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="image" className="titreSelecteur">
            Télécharger une image :
          </label>
          <input type="file" accept="image/*" ref={thumbnail} />
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

export default GestionArtiste;
