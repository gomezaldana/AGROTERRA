import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

export const Perfil = () => {
  return (
    <div className="d-flex flex-column align-items-center" style={{ height: '100vh' , margin: '150px' }}>
      <h1 className="my-4" style={{ color: '#2c5237' }}>PERFIL</h1>
      
      <div className="card p-4" style={{ width: '20rem', borderRadius: '20px', borderColor: '#2c5237' }}>
        <div className="text-center">
          <img 
            src= 'img/FotoUsuario.png'
            alt="Usuario foto" 
            className="mb-3"
            style={{ backgroundColor: '#2c5237' }}
          />
          <h3 style={{ color: '#2c5237' }}>¡Bienvenido!</h3>
        </div>
        <div className="d-flex flex-column">
          <button className="btn btn-success my-2">Sube un proyecto</button>
          <button className="btn btn-outline-success my-2">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
