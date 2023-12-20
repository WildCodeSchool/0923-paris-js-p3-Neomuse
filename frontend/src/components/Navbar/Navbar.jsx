import "./navbar.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
import logouser from "../../assets/images/userprofil.png";
import logoneomuse from "../../assets/images/logoneomuse.png";

function MyNavbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav>
      <div className="div-nav-burger">
        <span className="bar"> </span>
        <span className="bar"> </span>
        <span className="bar"> </span>
      </div>
      <Link to="/" className="navbar-brand">
        <img className="logoneomuse" src={logoneomuse} alt="logo-neomuse" />
      </Link>
      <div className="div-nav-not-burger">
        <Link className="div-nav-artistes" to="/artistes">
          ARTISTE
        </Link>

        <p className="div-nav-collections">
          <Link to="/collections">COLLECTIONS</Link>
        </p>
        <p className="div-nav-about">
          <Link to="/about">A PROPOS</Link>
        </p>
        <p className="div-nav-contact">
          <Link to="/contact">CONTACT</Link>
        </p>
      </div>
      <div className="div-nav-user">
        <Link to="/user">
          <img className="logouser" src={logouser} alt="logouser" />
          <p className="div-underlogo-user">Compte</p>
        </Link>
      </div>
    </nav>
  );
}

export default MyNavbar;
