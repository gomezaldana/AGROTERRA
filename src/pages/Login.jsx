import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../app.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://agroterra-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.msg);
        return;
      }

      localStorage.setItem('authToken', data.token);
      navigate('/');
    } catch (error) {
      setError('Hubo un error en la solicitud');
      console.error('Error en login:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 py-2">Iniciar sesión</button>
        </form>

        <p className="text-center mt-3">
          ¿No tienes cuenta? <a href="">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
