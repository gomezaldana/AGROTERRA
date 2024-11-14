import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const faqData = [
  {
    category: "Registrar un Proyecto",
    questions: [
      {
        id: "uno",
        title: "¿Qué tipo de proyectos puedo registrar en la plataforma?",
        answer: "Puedes registrar proyectos relacionados con agricultura sostenible, desarrollo rural, y cualquier iniciativa orientada a mejorar la calidad de vida en el campo."
      },
      {
        id: "dos",
        title: "¿Cómo puedo saber si mi proyecto es aceptado?",
        answer: "Recibirás una notificación en tu perfil y un correo electrónico con el estado de tu proyecto."
      },
      {
        id: "tres",
        title: "¿Cuánto tiempo tarda en publicarse mi proyecto?",
        answer: "Generalmente, el proceso de revisión tarda entre 2 y 3 días."
      },
      {
        id: "cuatro",
        title: "¿Qué tipo de información necesito proporcionar al registrar mi proyecto?",
        answer: "Deberás incluir una descripción detallada del proyecto, objetivos, y cualquier material relevante."
      },
      {
        id: "cinco",
        title: "¿Cómo me contactan las personas interesadas en contribuir o colaborar?",
        answer: "Los interesados pueden contactarte a través de un formulario en la plataforma o directamente a través de tus datos de contacto."
      },
      {
        id: "seis",
        title: "¿Qué sucede si no alcanzo la meta de financiación?",
        answer: "Podrás optar por continuar recaudando fondos o recibir una notificación sobre las siguientes opciones disponibles."
      }
    ]
  },
  {
    category: "Contribución Económica",
    questions: [
      {
        id: "siete",
        title: "¿Cuáles son los métodos de pago disponibles?",
        answer: "Puedes realizar pagos con Mercado Pago"
      },
      {
        id: "ocho",
        title: "¿Puedo realizar contribuciones anónimas?",
        answer: "Sí, tienes la opción de contribuir de manera anónima seleccionando la opción al momento de realizar la donación."
      },
      {
        id: "nueve",
        title: "¿Cómo puedo hacer seguimiento de los proyectos a los que he contribuido?",
        answer: "Podrás seguir el progreso del proyecto a través de tu panel de control en la plataforma, donde recibirás actualizaciones periódicas."
      },
      {
        id: "diez",
        title: "¿Puedo contactar directamente con los creadores de los proyectos?",
        answer: "Sí, puedes comunicarte directamente con los creadores a través de los datos de contacto que ellos proporcionen."
      }
    ]
  }
];

export const Preguntas = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    comentario: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construir el enlace mailto con los datos del formulario
    const subject = `Comentario de ${formData.nombre} ${formData.apellido}`;
    const body = `Nombre: ${formData.nombre}\nApellido: ${formData.apellido}\n\nComentario: ${formData.comentario}`;
    const mailtoLink = `mailto:Agroterra@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redirigir al enlace mailto
    window.location.href = mailtoLink;
  };

  return (
    <div className="container my-5">
      {/* Sección de Preguntas Frecuentes */}
      
      
      
      <h2 className="text-center fw-bold mb-4" style={{ margin: "150px" ,  color: "#2b5930"   }}>
        PREGUNTAS FRECUENTES
      </h2>
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "800px" }}>
        <div className="card-body">
          <div className="accordion" id="preguntasF">
            {faqData.map((section, index) => (
              <div key={index}>
                <h5 className="fw-bold mt-4 mb-3">{section.category}</h5>
                {section.questions.map((q) => (
                  <div className="accordion-item" key={q.id}>
                    <h2 className="accordion-header" id={`heading${q.id}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${q.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse${q.id}`}
                      >
                        {q.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${q.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${q.id}`}
                      data-bs-parent="#preguntasF"
                    >
                      <div className="accordion-body">{q.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de Contacto */}
      <h2 className="text-center fw-bold mb-4 mt-5" style={{ color: "#2b5930" }}>
        CONTACTANOS
      </h2>
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px", backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            {/* Nombre */}
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Escribe tu nombre"
                style={{ borderColor: "#2b5930" }}
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            {/* Apellido */}
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label fw-bold">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                placeholder="Escribe tu apellido"
                style={{ borderColor: "#2b5930" }}
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>

            {/* Comentario */}
            <div className="mb-3">
              <label htmlFor="comentario" className="form-label fw-bold">Déjanos tu comentario</label>
              <textarea
                className="form-control"
                id="comentario"
                rows="4"
                placeholder="Escribe aquí tu comentario"
                style={{ borderColor: "#2b5930" }}
                value={formData.comentario}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Botón Enviar */}
            <div className="text-center">
              <button type="submit" className="btn" style={{ backgroundColor: "#2b5930", color: "#ffffff", borderRadius: "20px", padding: "10px 30px" }}>
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
