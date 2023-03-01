import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/congelateur.png";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <ul>
          <li>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </li>
          <li>
            <Link to="#">
              <i className="fa-solid fa-user"></i>
              <span className="nav-item">Utilisateurs</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa-solid fa-snowflake"></i>
              <span className="nav-item">Congélateur</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa-solid fa-ice-cream"></i>
              <span className="nav-item">Produit</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="logout">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <span className="nav-item">Déconnexion</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
