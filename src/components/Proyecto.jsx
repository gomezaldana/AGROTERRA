
import React, { useEffect, useState, useRef } from 'react';
import "../App.css";
import PagoButton from './PagoButton';

export const Proyecto = () => {
    const [proyecto, setProyecto] = useState(null);
    const [autorProyecto, setAutorProyecto] = useState(null);


    useEffect(() => {
        fetchProyecto();
    }, []); 

    // Función para obtener los datos del proyecto
    const fetchProyecto = async () => {
        // Cuando se logueen, guardar token y buscarlo desde ahi
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NzMzNWY2ZTUwOWE2NTAwYmQ5NzMyMGUiLCJuYW1lIjoiRmVsaXBlIiwiaWF0IjoxNzMxNTkxMDc4LCJleHAiOjE3MzE2MDU0Nzh9.yhwBIE88-VL7eezKg3MTjfyGLlqPMib3arlv9lK1LiM"

        //Cuando alguien apriete ver en detalle un proyecto, poner id aca
        const idProject = "67335cc9509a6500bd9731cf";
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
        <div className='container 'style={{ paddingTop: '150px' }}>
            <div className="row">
                <p>s</p>
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

                        <PagoButton  proyecto={proyecto}></PagoButton>
                        
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
                    <p>No se encontró el proyecto.</p>
                )}
            </div>
        </div>
    );
};