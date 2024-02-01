import { useRef, useState } from "react";
import "./modifArtist.css";

function ModifArtist({ artist, onClose }) {
  const name = useRef();
  const firstname = useRef();
  const lastname = useRef();
  const biography = useRef();

  const [erreur, setErreur] = useState(null);

  const handleModify = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/artists/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            artist_name: name.current.value,
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            biography: biography.current.value,
          }),
        }
      );
      console.info(response.status);
      if (response.status === 204) {
        onClose();
      } else {
        console.error("Échec de la modification de l'artiste");
        setErreur("Échec de la modification de l'artiste");
      }
    } catch (error) {
      console.error(error);
      setErreur(
        "Une erreur inattendue s'est produite lors de la modification de l'artiste."
      );
    }
  };
  return (
    <div>
      <p>
        {" "}
        Voulez- vous modifier l'artiste{" "}
        <span className="text-user-information"> {artist?.artist_name} ? </span>
      </p>
      {erreur && <p style={{ color: "red" }}>{erreur}</p>}
      <form className="containerform">
        <div className="champ">
          <label htmlFor="name" className="titre_champ">
            Pseudo
          </label>
          <input
            type="text"
            name="name"
            ref={name}
            placeholder={artist?.artist_name}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="firstname" className="titre_champ">
            Nom
          </label>
          <input
            type="text"
            name="firstname"
            placeholder={artist?.firstname}
            ref={firstname}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="lastname" className="titre_champ">
            Prénoms
          </label>
          <input
            type="text"
            name="lastname"
            placeholder={artist?.firstname}
            ref={lastname}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="biography" className="titre_champ">
            Biographie
          </label>
          <textarea
            type="text"
            name="biography"
            ref={biography}
            className="input_login"
          />
        </div>
        <button
          type="button"
          className="boutModifaRT"
          onClick={() => handleModify(artist?.artist_id)}
        >
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
}

export default ModifArtist;
