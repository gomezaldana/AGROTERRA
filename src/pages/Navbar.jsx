import React from 'react'


export const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">AGROTERRA</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">INICIO</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Proyectos">PROYECTOS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Preguntas">Preguntas frecuentes</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/SobreNosotros">SOBRE NOSOTROS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="bi bi-person-circle"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}
