import React from "react";
import useUser from "../../contexts/UserContext";

function Information() {
  const { user } = useUser();
  return (
    <div>
      <div className="container_signup">
        <h2 className="titre_login">Mes informations</h2>
        <form className="modal_login">
          <div>
            <label htmlFor="firstname" className="text-user-information">
              Prénom : <span className=" titre_champ">{user?.lastname}</span>
            </label>
          </div>
          <div className="">
            <label htmlFor="lastname" className="text-user-information">
              Nom : <span className=" titre_champ">{user?.firstname}</span>
            </label>
          </div>

          <div>
            <label htmlFor="phone" className="text-user-information">
              Phone :{" "}
              <span className="text-user-information">{user?.phone}</span>
            </label>
          </div>
          <div>
            <label htmlFor="adress" className="text-user-information">
              Adresse :{" "}
              <span className="text-user-information">{user?.adress}</span>
            </label>
          </div>

          <div>
            <label htmlFor="email" className="text-user-information">
              Email :{" "}
              <span className="text-user-information">{user?.email}</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Information;
