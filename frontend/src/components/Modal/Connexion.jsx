import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./connexion.css";
import ModalSignup from "./Signup";

function Connexion() {
  const [openSignup, setOpenSignup] = useState(false);
  const createSignup = () => setOpenSignup(true);

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  return (
    <div className="container_inscription">
      <form className="monlogin">
        <h2 className="titre_login">Vous avez déjà un compte?</h2>
        <div>
          <p className="titre_email">Votre adresse e-mail</p>
          <input
            className="input_login"
            id="mailConnection"
            // value={mailConnection}
            name="mail"
            // onChange={handleChange}
            type="mail"
            placeholder="email@gmail.com"
          />
          <p className="titre_email">Votre mot de passe</p>
          <input
            id="passwordConnection"
            // value={passwordConnection}
            name="password"
            // onChange={handleChange}
            type={passwordIsVisible ? "text" : "password"}
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
        <div className="box_connexion">
          <button type="submit" className="bout_login">
            connectez-vous
          </button>
        </div>
      </form>
      <form className="monlogin">
        <h2 className="titre_login">Vous n'etes pas encore inscrit?</h2>
        <center>Créez gratuitement votre compte </center>
        <div className="box_connexion">
          <button type="button" className="bout_signup" onClick={createSignup}>
            Créer un compte
          </button>
        </div>
      </form>
      <Modal open={openSignup} onClose={() => setOpenSignup(false)} center>
        <ModalSignup />
      </Modal>
    </div>
  );
}
export default Connexion;
