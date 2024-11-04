// FAQContact.js
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const faqData = [
  {
    category: "Registrar un Proyecto",
    questions: [
      {
        id: "uno",
        title: "¿Qué tipo de proyectos puedo registrar en la plataforma?",
        answer: "Puedes registrar proyectos relacionados con agricultura sostenible, desarrollo rural, y cualquier iniciativa orientada a mejorar la calidad de vida en el campo."
      },
      // Añade más preguntas aquí...
    ]
  },
  {
    category: "Contribución Económica",
    questions: [
      {
        id: "siete",
        title: "¿Cuáles son los métodos de pago disponibles?",
        answer: "Puedes realizar pagos con tarjeta de crédito, transferencia bancaria o a través de plataformas de pago en línea como PayPal."
      },
      // Añade más preguntas aquí...
    ]
  }
];

const Preguntas = () => {
  return (
    <div className="container my-5">
      {/* Sección de Preguntas Frecuentes */}
      <h2 className="text-center fw-bold mb-4" style={{ color: "#2b5930" }}>
        PREGUNTAS FRECUENTES
      </h2>
      <div className="card shadow-sm mx-auto mb-5" style={{ maxWidth: "800px" }}>
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
      <h2 className="text-center fw-bold mb-4" style={{ color: "#2b5930" }}>
        CONTACTANOS
      </h2>
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px", backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
        <div className="card-body p-4">
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Escribe tu nombre"
                style={{ borderColor: "#2b5930" }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label fw-bold">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                placeholder="Escribe tu apellido"
                style={{ borderColor: "#2b5930" }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comentario" className="form-label fw-bold">Déjanos tu comentario</label>
              <textarea
                className="form-control"
                id="comentario"
                rows="4"
                placeholder="Escribe aquí tu comentario"
                style={{ borderColor: "#2b5930" }}
              ></textarea>
            </div>
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
