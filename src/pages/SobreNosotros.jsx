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
        src="img/aldana.png"
        className="card-img-left"
        style={{ width: '150px', height: 'auto' }} // Tamaño fijo para la imagen
        alt="Explorar Proyectos"
      />
      <div className="card-body d-flex align-items-center">
        <h7 className="text-center">Soy una estudiante de Licenciatura en informática. Me entusiasma la idea de un espacio donde pueda trabajar en equipo, para poder contribuir con mis habilidades y crecer profesionalmente. Busco constantemente aprender cosas nuevas, me adapto a distintas situaciones siendo responsable y creativa.</h7>
      </div>
    </div>
  </div>

  {/* Card 2 - Imagen a la izquierda */}
  <div className="col-12 mb-4">
    <div className="card d-flex flex-row">
      <img
        src="img/ariadna.png"
        className="card-img-left"
        style={{ width: '150px', height: 'auto' }} // Tamaño fijo para la imagen
        alt="Contribuye a un proyecto"
      />
      <div className="card-body d-flex align-items-center">
        <h7 className="text-center">Soy estudiante de Desarrollo Web Full-Stack, emocionada por seguir aprendiendo sobre programación. Poseo adaptabilidad dentro de un equipo de trabajo y una comunicación asertiva. Proyecto a futuro encontrar un trabajo que refuerze mis habilidades y me ayude a potenciarlas.</h7>
      </div>
    </div>
  </div>

  {/* Card 3 - Imagen a la derecha */}
  <div className="col-12 mb-4">
    <div className="card d-flex flex-row-reverse">
      <img
        src="img/jaime.png"
        className="card-img-left"
        style={{ width: '150px', height: 'auto' }} // Tamaño fijo para la imagen
        alt="Mira el Impacto"
      />
      <div className="card-body d-flex align-items-center">
        <h7 className="text-center">Soy estudiante de Tecnicatura Superior en Análisis de Sistemas. Me apasiona aprender nuevas tecnologías y aplicarlas a proyectos desafiantes. Con mi última experiencia laboral logre mejorar mi comunicación, adaptabilidad, y resolución de problemas. Estoy interesado en desarrollar mis habilidades en el ámbito informático y aportar valor a las organizaciones.</h7>
      </div>
    </div>
  </div>

  
</div>

      </div>
    </>
  );
};