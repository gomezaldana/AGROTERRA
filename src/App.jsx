import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Esto incluye Popper.js

import './App.css'

import { Navbar } from './pages/Navbar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Preguntas } from './pages/Preguntas';
import { SobreNosotros } from './pages/SobreNosotros';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Proyectos" element={<Projects />} />
                    <Route path="/Preguntas" element={<Preguntas />} />
                    <Route path="/Nosotros" element={<SobreNosotros />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
