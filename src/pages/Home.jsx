import React from 'react';
import "../App.css";

export const Home = () => {
  return (
    <div className="image-container">
      <img src="img/campo.png" className="img-fluid" alt="..." />
      <div className="banner-text">
        <h1>TRANSFORMA EL FUTURO DEL AGRO CON TU APOYO</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Cursus sed sed tristique non tempor nunc condimentum urna. Ac in eu urna tincidunt porta in eros lorem. Risus aenean purus bibendum sit a. Arcu augue ultricies sed aenean aliquet auctor.</p>
        <div className="banner-buttons">
          <button>Ver proyecto</button>
          <button>Postularme</button>
        </div>
      </div>
    </div>
  );
}