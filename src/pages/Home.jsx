import React, { useEffect, useState } from "react";
import "../App.css";
import { NavLink } from 'react-router-dom';


export const Home = () => {

  const [proyectos, setProyectos] = useState([])

  useEffect(() => {
    fetchProyectos();
  }, []);

  const fetchProyectos = async () => {
    // Cuando se logueen, guardar token y buscarlo desde ahi
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NzMzNWY2ZTUwOWE2NTAwYmQ5NzMyMGUiLCJuYW1lIjoiRmVsaXBlIiwiaWF0IjoxNzMxNjA3NDAyLCJleHAiOjE3MzE2MjE4MDJ9.WRa5V-N3q0cV13qyEX8YQOQvAdlNrNZBKZTJwDyJ1wg"
    const response = await fetch("http://localhost:8080/api/projects/", {
      method: 'GET',
      headers: {
        'x-token': token,
      },
    });
    if (!response.ok) {
      throw new Error(`Error al intentar obtener los proyectos`);
    }
    const data = await response.json();
    console.log(data)
    setProyectos(data.projects);
  };

  return (
    <>
      <div className="image-container">
        <img src="img/campo.png" className="img-fluid" alt="..." />
        <div className="banner-text">
          <h1>TRANSFORMA EL FUTURO DEL AGRO CON TU APOYO</h1>
          <p className="fs-5">
            ¡Juntos podemos hacer crecer el futuro del agro! Si tienes un proyecto innovador que puede transformar el campo, aquí puedes presentarlo y recibir el apoyo necesario para hacerlo realidad. Si eres un apasionado del agro, puedes explorar estos proyectos y aportar con tu colaboración. ¡Haz la diferencia hoy mismo!
          </p>
          <div className="banner-buttons">
            <button>Ver proyectos</button>
            <button>Subir proyecto</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="mb-4 mx-auto p-2 text-center">PROYECTOS MÁS POPULARES</h2>
        {/* Proyectos populares */}
        <div className="row">
          {proyectos && proyectos.length > 0 ? (
            proyectos.slice(0, 4).map((proyecto, index) => (
              <div key={index} className="col-md-3 mb-4">
                <NavLink to={`/proyecto/${proyecto._id}`} className="nav-link-style" >

                  <div className="card " >
                    <img src={`data:${proyecto.images[0].data.contentType};base64,${proyecto.images[0].data}`} className="card-img-top-style " alt={proyecto.titulo} />
                    <div className="card-body card-body-style">
                      <h5 className="card-title">{proyecto.title}</h5>
                      <p className="card-text card-text-style">
                        {proyecto.resume}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <div className="sk-chase d-flex justify-content-center align-items-center">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
              </div>
            </div>
          )}
        </div>

        <div className="col-md-12"></div>
        <div className="container my-4 px-lg-5 mx-auto p-2">
          <h2 className="mb-4  mx-auto p-2 text-center">¿CÓMO FUNCIONA AGROTERRA?</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
              <div className="card">
                <div className="card-body">
                  <img src="img/explorarProyectos.png" className="card-img-top" alt="..." />
                  <h3 className="text-center pt-4">Explorar Proyectos</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
              <div className="card">
                <div className="card-body">
                  <img src="img/ContribuyeProyecto.png" className="card-img-top" alt="..." />
                  <h3 className="text-center pt-4">Contribuye a un proyecto</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center mb-4">
              <div className="card">
                <div className="card-body">
                  <img src="img/Impacto.png" className="card-img-top" alt="..." />
                  <h3 className="text-center pt-4">Mira el Impacto</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Impacto--> */}
      <div className="row align-items-center justify-content-center text-black">
        <h2 className="mb-4 p-2 text-center">NUESTRO IMPACTO</h2>
        <div className="col-12 col-md-8 mt-4 mt-md-0">
          <div className="card-group row g-5 justify-content-center">
            <div className="card">
              <img src="img/proyectos.png" className="card-img-top" alt="..." />
              <div className="card-body"></div>
            </div>
            <div className="card">
              <img src="img/completados.png" className="card-img-top" alt="..." />
              <div className="card-body"></div>
            </div>
            <div className="card">
              <img src="img/dolares.png" className="card-img-top" alt="..." />
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};