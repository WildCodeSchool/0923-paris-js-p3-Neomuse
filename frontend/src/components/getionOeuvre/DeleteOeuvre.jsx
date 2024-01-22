import { useState } from "react";
import useAllDataContext from "../../contexts/AllDataContext";
import "./deleteOeuvre.css";

function DeleteOeuvre() {
  const { artwork } = useAllDataContext();
  const [modificationEnCours, setModificationEnCours] = useState(null);
  const handleModifier = (oeuvreId) => {
    // Mettez en œuvre la logique de modification ici
    setModificationEnCours(oeuvreId);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>title</th>
            <th>description</th>
            <th>art_theme</th>
            <th>date_creation</th>
            <th>price</th>
            <th>dimension_height</th>
            <th>dimension_width</th>
            <th>dimension_depth</th>
            <th>thumbnail</th>
            <th>artists_id</th>
            <th>artwork_technique_id</th>
            <th>price_on_demand</th>
          </tr>
        </thead>
        <tbody>
          {artwork.map((oeuvre) => (
            <tr key={oeuvre.artwork_id}>
              <td>{oeuvre.artwork_id}</td>
              <td>
                {modificationEnCours === oeuvre.artwork_id ? (
                  <input type="text" defaultValue={oeuvre.title} />
                ) : (
                  oeuvre.title
                )}
              </td>
              <td>
                {modificationEnCours === oeuvre.artwork_id ? (
                  <textarea defaultValue={oeuvre.description} />
                ) : (
                  oeuvre.description
                )}
              </td>
              <td>
                {modificationEnCours === oeuvre.artwork_id ? (
                  <>
                    <button type="button">Valider</button>
                    <button type="button">Annuler</button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => handleModifier(oeuvre.id)}
                    >
                      Modifier
                    </button>
                    <button type="button">Supprimer</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeleteOeuvre;
