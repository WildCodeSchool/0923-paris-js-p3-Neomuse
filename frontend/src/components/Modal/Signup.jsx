import { useState } from "react";
import "./connexion.css";

function ModalSignup() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  return (
    <div className="container_signup">
      <h2 className="titre_login">Créer votre compte</h2>
      <form className="modal_login">
        <div className="grid">
          <div>
            <label htmlFor="firstname" className="titre_champ">
              Prénom
            </label>
            <input type="text" name="firstname" className="input_login" />
          </div>
          <div className="">
            <label htmlFor="lastname" className="titre_champ">
              Nom
            </label>
            <input type="text" name="lastname" className="input_login" />
          </div>
          <div>
            <label htmlFor="email" className="titre_champ">
              Email
            </label>
            <input type="email" name="creationMail" className="input_login" />
          </div>
          <div>
            <label htmlFor="password" className="titre_champ">
              Mot de passe
            </label>
            <input
              type={passwordIsVisible ? "text" : "password"}
              name="password"
              className="input_login"
            />

            <button
              type="button"
              onClick={() => setPasswordIsVisible((prevState) => !prevState)}
              className="text_cacher"
            >
              {passwordIsVisible
                ? "Cacher le mot de passe"
                : "Afficher le mot de passe"}
            </button>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="titre_champ">
              Confirmer mot de passe
            </label>
            <input
              type={passwordIsVisible ? "text" : "password"}
              name="confirmPassword"
              className="input_login"
            />

            <button
              type="button"
              onClick={() => setPasswordIsVisible((prevState) => !prevState)}
              className="text_cacher"
            >
              {passwordIsVisible
                ? "Cacher le mot de passe"
                : "Afficher le mot de passe"}
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bout_login">
            Créer votre compte
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalSignup;
