import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

export const Perfil = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ margin: '50px' }}>
      <div className="card p-4" style={{ backgroundColor: '#037840', borderRadius: '10px', width: '300px' }}>
        <h2 className="text-center text-white mb-4">BIENVENIDO</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">Contraseña</label>
            <input type="password" className="form-control" id="password" placeholder="Contraseña" />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success">INGRESAR</button>
            <button type="button" className="btn btn-outline-light">REGISTRARTE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
