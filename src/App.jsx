
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Esto incluye Popper.js

import './App.css';

/* Pages */
import { Navbar } from './pages/Navbar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Preguntas } from './pages/Preguntas';
import { SobreNosotros } from './pages/SobreNosotros';
import Footer from './pages/Footer';
import { Perfil } from './pages/Perfil';
import { Proyecto } from './pages/Proyecto';
import Login from './pages/Login';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true); 
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login />} />

                {/* Rutas protegidas, solo accesibles si el usuario está autenticado */}
                <Route
                    path="/"
                    element={isAuthenticated ? (
                        <>
                            <Navbar />
                            <Home />
                            <Footer />
                        </>
                    ) : (
                        <Navigate to="/Login" />
                    )}
                />
                <Route
                    path="/Proyectos"
                    element={isAuthenticated ? (
                        <>
                            <Navbar />
                            <Projects />
                            <Footer />
                        </>
                    ) : (
                        <Navigate to="/Login" />
                    )}
                />
                <Route
                    path="/Preguntas"
                    element={isAuthenticated ? (
                        <>
                            <Navbar />
                            <Preguntas />
                            <Footer />
                        </>
                    ) : (
                        <Navigate to="/Login" />
                    )}
                />
                <Route
                    path="/Nosotros"
                    element={isAuthenticated ? (
                        <>
                            <Navbar />
                            <SobreNosotros />
                            <Footer />
                        </>
                    ) : (
                        <Navigate to="/Login" />
                    )}
                />
                <Route
                    path="/Perfil"
                    element={isAuthenticated ? (
                        <>
                            <Navbar />
                            <Perfil />
                            <Footer />
                        </>
                    ) : (
                        <Navigate to="/Login" />
                    )}
                />
                <Route
                    path="/proyecto/:id"
                    element={isAuthenticated ? (
                        <>
                            <Navbar />
                            <Proyecto />
                            <Footer />
                        </>
                    ) : (
                        <Navigate to="/Login" />
                    )}
                />
            </Routes>
        </Router>
    );
}

export default App;
