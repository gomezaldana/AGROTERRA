import React, { useEffect, useState } from 'react'
import "../App.css";
import { NavLink } from 'react-router-dom';


export const Projects = () => {

  const [proyectos, setProyectos] = useState([])

  useEffect(() => {
    fetchProyectos();
  }, []);

  const fetchProyectos = async () => {
    // Cuando se logueen, guardar token y buscarlo desde ahi
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NzMzNWY2ZTUwOWE2NTAwYmQ5NzMyMGUiLCJuYW1lIjoiRmVsaXBlIiwiaWF0IjoxNzMxNjA3NDAyLCJleHAiOjE3MzE2MjE4MDJ9.WRa5V-N3q0cV13qyEX8YQOQvAdlNrNZBKZTJwDyJ1wg"
    const response = await fetch("https://agroterra-backend.onrender.com/api/projects/", {
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
    <div className='container row ' style={{ paddingTop: '180px', marginLeft: '20rem' }}>
      {proyectos && proyectos.length > 0 ? (
        proyectos.map((proyecto, index) => (
          <div key={index} className="col-md-3 mb-4 ">
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
  )
}
