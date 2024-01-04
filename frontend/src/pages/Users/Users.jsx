import "./user.css";
import { Link } from "react-router-dom";
import biguserprofil from "../../assets/svg/biguserprofil.svg";
import favorisheart from "../../assets/svg/favorisheart.svg";

function Users() {
  return (
    <>
      <div className="background-user" />
      <p className="paragraphe-user-1">Bonjour User,</p>
      <p className="paragraphe-user-2">Bienvenue dans votre espace personnel</p>
      <p className="paragraphe-user-3">
        Retrouvez ici l'historique de vos favoris et gérez vos informations
        personnelles.
      </p>
      <div className="maxi-flex-user">
        <h1 className="h1-user">Votre compte</h1>
        <div className="button-user-information">
          <img
            className="biguserprofil"
            src={biguserprofil}
            alt="biguserprofil"
          />
          <Link to="/information" className="text-user-information">
            INFORMATIONS
          </Link>
        </div>
        <div className="button-user-favoris">
          <img className="favorisheart" src={favorisheart} alt="favorisheart" />
          <Link to="/favoris" className="text-user-favoris">
            VOS FAVORIS
          </Link>
        </div>
        <div className="deconnexion-user"> Déconnexion</div>
      </div>
    </>
  );
}

export default Users;
