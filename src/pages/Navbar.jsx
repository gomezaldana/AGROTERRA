import React from "react";
import "../App.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid px-5">
        <a className="navbar-name" href="#">
          AGROTERRA
        </a>
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
            <li className="nav-item mx-0 mx-lg-3 border-bottom border-dark-subtle h5">
              <a className="nav-link text-dark fw-medium" href="#Home">
                Inicio
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-3 border-bottom border-dark-subtle h5">
              <a className="nav-link text-dark fw-medium" href="#Projects">
                Proyectos
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-3 border-bottom border-dark-subtle h5">
              <a className="nav-link text-dark fw-medium" href="#Preguntas">
                Preguntas Frecuentes
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-3 border-bottom border-dark-subtle h5">
              <a className="nav-link text-dark fw-medium" href="#SobreNosotros">
                Sobre Nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

