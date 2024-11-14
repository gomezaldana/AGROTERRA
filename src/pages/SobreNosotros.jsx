import React, { useState } from 'react';
import "../App.css"; 

export const SobreNosotros = () => {
  const [flipped, setFlipped] = useState([false, false, false]);

  const handleFlip = (index) => {
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];  // Cambiar el estado de la imagen en el índice seleccionado
      return newFlipped;
    });
  };

  return (
    <>
      <div className="container sobre-nosotros" style={{ paddingTop: '150px' }}>
        <h2 className="text-center">Acerca del proyecto</h2>
        <div className="row justify-content-center mt-4">
          {/* Imagen 1 */}
          <div className="col-4 mb-4 ">
            <div
              className={`card-container ${flipped[0] ? 'flipped' : ''}`}
              onClick={() => handleFlip(0)}
            >
              <div className="card">
                <div className="card-front">
                  <img
                    src="img/mision.png"
                    alt="Nuestra mision"
                    className="img-fluid"
                  />
                </div>
                <div className="card-back">
                  <img
                    src="img/misiontext.png"
                    alt="Mision texto"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Imagen 2 */}
          <div className="col-4 mb-4">
            <div
              className={`card-container ${flipped[1] ? 'flipped' : ''}`}
              onClick={() => handleFlip(1)}
            >
              <div className="card">
                <div></div>
                <div className="card-front">
                  <img
                    src="img/voluntariado.png"
                    alt="Porque el voluntariado"
                    className="img-fluid"
                  />
                </div>
                <div className="card-back">
                  <img
                    src="img/voluntariadotext.png"
                    alt="Voluntariado texto"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Imagen 3 */}
          <div className="col-4 mb-4">
            <div
              className={`card-container ${flipped[2] ? 'flipped' : ''}`}
              onClick={() => handleFlip(2)}
            >
              <div className="card">
                <div className="card-front">
                  <img
                    src="img/nuestroimpacto.png"
                    alt="Nuestro impacto"
                    className="img-fluid"
                  />
                </div>
                <div className="card-back">
                  <img
                    src="img/voluntariadotext.png"
                    alt="Voluntariado texto"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container nuestro-equipo'>
        <h2>Nuestro equipo</h2>
        
        <div className="row justify-content-center">
  {/* Card 1 - Imagen a la derecha */}
  <div className="col-12 mb-4">
    <div className="card d-flex flex-row-reverse">
      <img
        src="img/explorarProyectos.png"
        className="card-img-left"
        style={{ width: '150px', height: 'auto' }} // Tamaño fijo para la imagen
        alt="Explorar Proyectos"
      />
      <div className="card-body d-flex align-items-center">
        <h7 className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis expedita minima modi voluptate repudiandae eligendi. Libero illum quisquam officiis.</h7>
      </div>
    </div>
  </div>

  {/* Card 2 - Imagen a la izquierda */}
  <div className="col-12 mb-4">
    <div className="card d-flex flex-row">
      <img
        src="img/ContribuyeProyecto.png"
        className="card-img-left"
        style={{ width: '150px', height: 'auto' }} // Tamaño fijo para la imagen
        alt="Contribuye a un proyecto"
      />
      <div className="card-body d-flex align-items-center">
        <h7 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quo aliquid ut blanditiis nihil placeat ab, aspernatur obcaecati. Corporis, quaerat.</h7>
      </div>
    </div>
  </div>

  {/* Card 3 - Imagen a la derecha */}
  <div className="col-12 mb-4">
    <div className="card d-flex flex-row-reverse">
      <img
        src="img/Impacto.png"
        className="card-img-left"
        style={{ width: '150px', height: 'auto' }} // Tamaño fijo para la imagen
        alt="Mira el Impacto"
      />
      <div className="card-body d-flex align-items-center">
        <h7 className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, sed? Porro ad quos expedita quam nulla eligendi culpa autem exercitationem.</h7>
      </div>
    </div>
  </div>

  {/* Card 4 - Imagen a la izquierda */}
  <div className="col-12 mb-4">
    <div className="card d-flex flex-row">
      <img
        src="img/Impacto.png"
        className="card-img-left"
        style={{ width: '150px', height: 'auto' }} // Tamaño fijo para la imagen
        alt="Mira el Impacto"
      />
      <div className="card-body d-flex align-items-center">
        <h7 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non esse aut amet ullam, quo reiciendis laudantium mollitia quod rem.</h7>
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  );
};