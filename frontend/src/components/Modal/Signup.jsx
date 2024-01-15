import { useState, useRef } from "react";
import "./connexion.css";
import { useNavigate } from "react-router-dom";

function ModalSignup() {
  const redirect = useNavigate();
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const phone = useRef();
  const adress = useRef();
  const password = useRef();
  const role = useRef();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/:id`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            email: email.current.value,
            phone: phone.current.value,
            adress: adress.current.value,
            password: password.current.value,
            role: role.current.value,
          }),
        }
      );

      if (response.status === 201) {
        const user = await response.json();
        console.info(user);
        redirect("/");
      } else {
        console.error("veuillez verifier votre saisie.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container_signup">
      <h2 className="titre_login">Créer votre compte</h2>
      <form className="modal_login">
        <div className="grid">
          <div>
            <label htmlFor="firstname" className="titre_champ">
              Prénom
            </label>
            <input
              type="text"
              name="firstname"
              ref={firstname}
              className="input_login"
            />
          </div>
          <div className="">
            <label htmlFor="lastname" className="titre_champ">
              Nom
            </label>
            <input
              type="text"
              name="lastname"
              ref={lastname}
              className="input_login"
            />
          </div>
          <div>
            <label htmlFor="email" className="titre_champ">
              Email
            </label>
            <input
              type="email"
              name="creationMail"
              ref={email}
              className="input_login"
            />
          </div>
          <div>
            <label htmlFor="phone" className="titre_champ">
              phone
            </label>
            <input
              type="phone"
              name="creationPhone"
              ref={phone}
              className="input_login"
            />
          </div>
          <div>
            <label htmlFor="adress" className="titre_champ">
              adress
            </label>
            <input
              type="adress"
              name="creationAdress"
              ref={adress}
              className="input_login"
            />
          </div>
          <div>
            <label htmlFor="role" className="titre_champ">
              role
            </label>
            <input
              type="role"
              name="creationRole"
              ref={role}
              className="input_login"
            />
          </div>
          <div>
            <label htmlFor="password" className="titre_champ">
              Mot de passe
            </label>
            <input
              type={passwordIsVisible ? "text" : "password"}
              name="password"
              ref={password}
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
          <button type="button" className="bout_login" onClick={handleSubmit}>
            Créer votre compte
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalSignup;
