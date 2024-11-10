import React, { useState } from 'react';

const PagoButton = ({ proyecto }) => {

  // Función para crear la preferencia de pago y redirigir al usuario
  const handleCrearPreferenciaYRedirigir = async () => {
    if (!proyecto || !proyecto.amount || !proyecto.title) {
      console.error('Datos del proyecto no disponibles');
      return;
    }


    try {
      console.log('Haciendo petición a backend para crear la preferencia');

      const response = await fetch('http://localhost:8080/create_preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: proyecto.amount,
          title: proyecto.title,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al crear la preferencia');
      }

      const data = await response.json();
      console.log('Preferencia creada:', data);

      // Redirigir al usuario a Mercado Pago
      window.location.href = data.redirectUrl; // Redirige a la URL de Mercado Pago

    } catch (error) {
      console.error('Error creando la preferencia:', error);
    } finally {
    }
  };

  return (
    <div>
      <button className='btn btn-outline-success mt-4 mb-5' onClick={handleCrearPreferenciaYRedirigir}>DONAR $1000
      </button>
    </div>
  );
};

export default PagoButton;
