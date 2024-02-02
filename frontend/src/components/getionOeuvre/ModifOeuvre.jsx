import { useRef, useState } from "react";
import "./modifOeuvre.css";

function ModifOeuvre({ oeuvre, onClose }) {
  const title = useRef();
  const description = useRef();
  const artTheme = useRef();
  const price = useRef();
  const dimensionHeight = useRef();
  const dimensionWidth = useRef();
  const dimensionDepth = useRef();

  const [erreur, setErreur] = useState(null);

  const handleModify = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/artworks/${id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: title.current.value,
            description: description.current.value,
            art_theme: artTheme.current.value,
            price: price.current.value,
            dimension_height: dimensionHeight.current.value,
            dimension_width: dimensionWidth.current.value,
            dimension_depth: dimensionDepth.current.value,
          }),
        }
      );
      console.info(response.status);
      if (response.status === 204) {
        onClose();
      } else {
        console.error("Échec de la modification de l'œuvre");
        setErreur("Échec de la modification de l'œuvre");
      }
    } catch (error) {
      console.error(error);
      setErreur(
        "Une erreur inattendue s'est produite lors de la modification de l'œuvre."
      );
    }
  };
  return (
    <div>
      <p>
        {" "}
        Voulez- vous modifier l'oeuvre{" "}
        <span className="text-user-information">{oeuvre?.title} ?</span>
      </p>
      {erreur && <p style={{ color: "red" }}>{erreur}</p>}
      <form className="containerform">
        <div className="champ">
          <label htmlFor="title" className="titre_champ">
            Titre de l'oeuvre
          </label>
          <input
            type="text"
            name="title"
            placeholder={oeuvre?.title}
            ref={title}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="artTheme" className="titre_champ">
            Thème
          </label>
          <input
            type="text"
            name="artTheme"
            placeholder={oeuvre?.art_theme}
            ref={artTheme}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="price" className="titre_champ">
            Prix
          </label>
          <input
            type="text"
            name="price"
            placeholder={oeuvre?.price}
            ref={price}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="dimensionHeight" className="titre_champ">
            Hauteur
          </label>
          <input
            type="text"
            name="dimensionHeight"
            placeholder={oeuvre?.dimension_height}
            ref={dimensionHeight}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="dimensionWidth" className="titre_champ">
            Largeur
          </label>
          <input
            type="text"
            name="dimensionWidth"
            placeholder={oeuvre?.dimension_width}
            ref={dimensionWidth}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="dimensionDepth" className="titre_champ">
            Profondeur
          </label>
          <input
            type="text"
            name="dimensionDepth"
            placeholder={oeuvre?.dimension_depth}
            ref={dimensionDepth}
            className="input_login"
          />
        </div>
        <div className="champ">
          <label htmlFor="description" className="titre_champ">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            placeholder={oeuvre?.description}
            ref={description}
            className="input_login"
          />
        </div>
      </form>
      <div className="">
        <button
          type="button"
          className="boutModif"
          onClick={() => handleModify(oeuvre?.artworks_id)}
        >
          Enregistrer les modifications
        </button>
      </div>
    </div>
  );
}

export default ModifOeuvre;
