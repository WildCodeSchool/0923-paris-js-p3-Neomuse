import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logouser from "../../assets/images/userprofil.png";
import logoneomuse from "../../assets/images/logoneomuse.png";

function MyNavbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav>
      <div className="hamburger-menu">
        <label className="menu__btn" htmlFor="menu__toggle">
          <span />
          <input
            id="menu__toggle"
            type="checkbox"
            checked={isMenuOpen}
            onChange={handleMenuClick}
          />
        </label>
        <div
          className={`menu__box ${isMenuOpen ? "menu-open" : ""}`}
          onClick={closeMenu}
          onKeyDown={closeMenu}
          tabIndex="0"
          role="button"
        >
          <li>
            <Link to="/artists" className="menu__item">
              Artistes
            </Link>
          </li>
          <li>
            <Link to="/artworks" className="menu__item">
              Collections
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu__item">
              A propos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu__item">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/user" className="menu__item">
              Mon compte
            </Link>
          </li>
        </div>
      </div>
      <Link to="/" className="navbar-brand">
        <img className="logoneomuse" src={logoneomuse} alt="logo-neomuse" />
      </Link>
      <div className="div-nav-not-burger">
        <Link className="div-nav-artistes" to="/artists">
          ARTISTES
        </Link>
        <Link className="div-nav-collections" to="/artworks">
          COLLECTIONS
        </Link>
        <Link className="div-nav-about" to="/about">
          A PROPOS
        </Link>
        <Link className="div-nav-contact" to="/contact">
          CONTACT
        </Link>
      </div>
      <div className="div-nav-user">
        <Link to="/user" className="div-user-compte">
          <img className="logouser" src={logouser} alt="logouser" />
          <p>Compte</p>
        </Link>
      </div>
    </nav>
  );
}

export default MyNavbar;
