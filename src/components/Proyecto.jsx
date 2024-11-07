import React, { useEffect, useState } from 'react'
import "../App.css";


export const Project = () => {


  const [proyecto, setProyecto] = useState(null)
  const [autorProyecto, setAutorProyecto] = useState(null)

  useEffect(() => {
    fetchProyecto();  
  }, []); // Este efecto solo se ejecuta una vez, cuando el componente se monta

  const fetchProyecto = async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NzI2NzhhZDdlYTQ4YzNlMjg5NjA0YTQiLCJuYW1lIjoiSmFpbWUiLCJpYXQiOjE3MzA4MTM3MzcsImV4cCI6MTczMDgyODEzN30.s1DvT5xxvmQB5UKe6ZmWi1IuUafO3S3wnRFGAXWqXxs"
    const idProject = "672147c622ce44b218937321"

    const response = await fetch(`http://localhost:8080/api/projects/${idProject}`, {
      method: 'GET',
      headers: {
        'x-token': token,
      },
    });

    if (!response.ok) {
      throw new Error(`Error al intentar ver el proyecto [${idProject}]`);
    }

    const data = await response.json();
    setProyecto(data);  

    if (data && data.userId) {
      fetchAutorProyecto(data.userId);
    }
  };

  // Función que obtiene los datos del autor del proyecto
  const fetchAutorProyecto = async (idUser) => {
    const response = await fetch(`http://localhost:8080/api/auth/user/${idUser}`, {
      method: 'GET'
    });
    
    if (!response.ok) {
      throw new Error(`Error al obtener al autor del proyecto [${idUser}]`);
    }

    const data = await response.json();
    setAutorProyecto(data);  
  };


  return (
    <div className='container ' >
      <p>s</p>
      <p>s</p>
      <p>s</p>

      {proyecto && autorProyecto ? (<>
        <h1 className='mt-4'>{proyecto.title}</h1>
        <p> {autorProyecto.name} {autorProyecto.lastName} es la persona que organiza esta recaudación de fondos.</p>  
        <h2>Objetivo</h2>
        <p>{proyecto.description}</p>
      </>) : (
        <p>No se encontró el proyecto.</p>  
      )}

    </div>
  )
}
