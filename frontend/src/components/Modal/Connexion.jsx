import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./connexion.css";
import ModalSignup from "./Signup";
import authContext from "../../contexts/AuthContext";

function Connexion() {
  const navigate = useNavigate();
  const [openSignup, setOpenSignup] = useState(false);
  const createSignup = () => setOpenSignup(true);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const email = useRef();
  const password = useRef();
  const auth = useContext(authContext);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
          }),
        }
      );
      if (response.status === 200) {
        const user = await response.json();
        auth.setUser(user);
        navigate("/");
      } else {
        console.error("veuillez verifier votre saisie.");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            ref={email}
          />
          <p className="titre_email">Votre mot de passe</p>
          <input
            id="passwordConnection"
            // value={passwordConnection}
            name="password"
            // onChange={handleChange}
            type={passwordIsVisible ? "text" : "password"}
            className="input_login"
            ref={password}
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
          <button type="button" className="bout_login" onClick={handleSubmit}>
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
