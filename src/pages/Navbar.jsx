import React from "react";
import "../App.css";
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid px-5">
        <NavLink className="navbar-name"  to={"/"}>
          AGROTERRA
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto d-flex">
            <li className="nav-item mx-0 mx-lg-3 h5" >
              <NavLink className="nav-link text-dark fw-medium" to={"/"} >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-3 h5">
              <NavLink className="nav-link text-dark fw-medium" to={"/proyectos"}>
                Proyectos
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-3 h5">
              <NavLink className="nav-link text-dark fw-medium" to={"/preguntas"} >
                Preguntas Frecuentes
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-3 h5">
              <NavLink className="nav-link text-dark fw-medium" to={"/sobreNosotros"}>
                Sobre Nosotros
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

