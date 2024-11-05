import React from 'react';
import "../App.css";

export const Home = () => {
  return (
    <><div className="image-container">
      <img src="img/campo.png" className="img-fluid" alt="..." />
      <div className="banner-text">
        <h1>TRANSFORMA EL FUTURO DEL AGRO CON TU APOYO</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Cursus sed sed tristique non tempor nunc condimentum urna. Ac in eu urna tincidunt porta in eros lorem. Risus aenean purus bibendum sit a. Arcu augue ultricies sed aenean aliquet auctor.</p>
        <div className="banner-buttons">
          <button>Ver proyecto</button>
          <button>Postularme</button>
        </div>
      </div>
    </div><div className="container">
        <h2 className="mb-4">PROYECTOS MÁS POPULARES</h2> {/* Proyectos populares */}
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card">
              <img src="img/campo.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">TITULO</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Cursus
                  sed sed tristique non tempor nunc condimentum
                  urna. Ac in eu urna tincidunt porta in eros lorem.
                  Risus aenean purus bibendum sit a. Arcu augue
                  ultricies sed aenean aliquet auctor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img src="img/campo.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">TITULO</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Cursus
                  sed sed tristique non tempor nunc condimentum
                  urna. Ac in eu urna tincidunt porta in eros lorem.
                  Risus aenean purus bibendum sit a. Arcu augue
                  ultricies sed aenean aliquet auctor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img src="img/campo.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">TITULO</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Cursus
                  sed sed tristique non tempor nunc condimentum
                  urna. Ac in eu urna tincidunt porta in eros lorem.
                  Risus aenean purus bibendum sit a. Arcu augue
                  ultricies sed aenean aliquet auctor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img src="img/campo.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">TITULO</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Cursus
                  sed sed tristique non tempor nunc condimentum
                  urna. Ac in eu urna tincidunt porta in eros lorem.
                  Risus aenean purus bibendum sit a. Arcu augue
                  ultricies sed aenean aliquet auctor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div></>

    
  );
}
