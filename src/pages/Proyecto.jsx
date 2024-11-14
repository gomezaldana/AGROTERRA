
import React, { useEffect, useState, useRef } from 'react';
import "../App.css";
import PagoButton from '../components/PagoButton';
import { useParams } from 'react-router-dom';

export const Proyecto = () => {
    const [proyecto, setProyecto] = useState(null);
    const [autorProyecto, setAutorProyecto] = useState(null);
    const { id } = useParams(); // Esto obtiene el `id` del proyecto desde la URL
    console.log(id)

    useEffect(() => {
        fetchProyecto();
    }, []);

    // Función para obtener los datos del proyecto
    const fetchProyecto = async () => {
        // Cuando se logueen, guardar token y buscarlo desde ahi
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NzMzNWY2ZTUwOWE2NTAwYmQ5NzMyMGUiLCJuYW1lIjoiRmVsaXBlIiwiaWF0IjoxNzMxNjA3NDAyLCJleHAiOjE3MzE2MjE4MDJ9.WRa5V-N3q0cV13qyEX8YQOQvAdlNrNZBKZTJwDyJ1wg"

        const idProject = id;
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
        fetchAutorProyecto(data.userId);
    };

    // Función para obtener los datos del autor del proyecto
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
        <div className='container ' style={{ paddingTop: '160px' }}>
            <div className="row">
                {proyecto && autorProyecto ? (<>
                    <div className="col">
                        {proyecto.images && proyecto.images.length > 0 && (
                            <img
                                className='rounded border mt-2 '
                                src={`data:${proyecto.images[0].data.contentType};base64,${proyecto.images[0].data}`} // saco la imagen guardada en la bd
                                alt={proyecto.title}
                                style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
                            />
                        )}
                    </div>
                    <div className="col ">
                        <h1 className='mt-1 text-center mb-4 text-uppercase'>{proyecto.title}</h1>
                        <p className="fs-5" >{autorProyecto.name} {autorProyecto.lastName} es la persona que organiza esta recaudación de fondos.</p>
                        <p>{proyecto.resume}</p>

                        <div className="d-flex justify-content-between">
                            <p className="fs-6 fw-bolder mb-2 text-success-emphasis text-start">
                                CONTRIBUIDO ${proyecto.raised}
                            </p>
                            <p style={{ fontSize: "1rem", marginLeft: "20px" }} className="fw-bolder mb-2 text-success-emphasis text-end">
                                OBJETIVO ${proyecto.amount}
                            </p>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-success" style={{ width: '25%' }}></div>
                        </div>

                        <PagoButton proyecto={proyecto}></PagoButton>

                    </div>
                    <hr />
                    <h2>OBJETIVO</h2>
                    <p className='fs-5 '>{proyecto.description}</p>
                    <img
                        className='mt-2 mb-5 mx-auto d-block '
                        src={`data:${proyecto.images[1].data.contentType};base64,${proyecto.images[1].data}`}
                        alt={proyecto.title}
                        style={{ height: '600px', width: 'auto' }}
                    />
                </>
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
        </div>
    );
};