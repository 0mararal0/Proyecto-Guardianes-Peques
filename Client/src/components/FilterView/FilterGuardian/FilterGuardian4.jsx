import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export const FilterGuardian4 = ({
  setComponentView,
  setProgress,
  setDataGuardian,
}) => {
  const [diaInicio, setDiaInicio] = useState(""); // Fecha de inicio
  const [horaInicio, setHoraInicio] = useState(""); // Hora de inicio
  const [tiempo, setTiempo] = useState(""); // Duración en horas
  const [tarifa, setTarifa] = useState(""); // Tarifa por hora
  const [comentario, setComentario] = useState(""); // Comentarios adicionales
  const [error, setError] = useState(""); // Estado para mensajes de error

  const handleNextView = () => {
    // Validar que los campos requeridos estén completos
    if (!diaInicio || !horaInicio || !tiempo || !tarifa) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Validar tarifa mínima
    if (parseFloat(tarifa) < 1) {
      setError("La tarifa mínima es de 1.");
      return;
    }

    // Validar duración dentro del rango de 1 a 8 horas
    if (parseFloat(tiempo) < 1 || parseFloat(tiempo) > 8) {
      setError("La duración debe estar entre 1 y 8 horas.");
      return;
    }

    // Limpiar el mensaje de error si la validación es correcta
    setError("");

    // Guardar los datos del servicio
    setDataGuardian((prevData) => ({
      ...prevData,
      diaInicio,
      horaInicio,
      tiempo: parseFloat(tiempo),
      tarifa: parseFloat(tarifa),
      comentario,
    }));

    // Actualizar el progreso y cambiar la vista
    setProgress((100 / 6) * 5); // Ajustar el progreso
    setComponentView(5); // Pasar a la siguiente vista
  };

  return (
    <>
      <div className="container-xxl" style={{ marginTop: "20px" }}>
        <h3>Detalles del servicio</h3>

        <Form.Group controlId="formDiaInicio">
          <Form.Label>Fecha de inicio</Form.Label>
          <Form.Control
            type="date"
            value={diaInicio}
            onChange={(e) => setDiaInicio(e.target.value)}
            isInvalid={!diaInicio && error} // Validar si falta la fecha
          />
        </Form.Group>

        <Form.Group controlId="formHoraInicio">
          <Form.Label>Hora de inicio</Form.Label>
          <Form.Control
            type="time"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
            isInvalid={!horaInicio && error} // Validar si falta la hora
          />
        </Form.Group>

        <Form.Group controlId="formTiempo">
          <Form.Label>Duración (horas)</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="8" // Rango de 1 a 8 horas
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
            isInvalid={(!tiempo || tiempo < 1 || tiempo > 8) && error} // Validar si está fuera de rango
          />
        </Form.Group>

        <Form.Group controlId="formTarifa">
          <Form.Label>Tarifa por hora ($)</Form.Label>
          <Form.Control
            type="number"
            min="1" // Valor mínimo de 1 para la tarifa
            value={tarifa}
            onChange={(e) => setTarifa(e.target.value)}
            isInvalid={!tarifa && error} // Validar si falta la tarifa
          />
        </Form.Group>

        <Form.Group controlId="formComentario">
          <Form.Label>Comentarios adicionales (opcional)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </Form.Group>

        {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar mensaje de error */}
      </div>

      <button
        onClick={handleNextView}
        style={{ marginTop: "20px" }} // Estilo en línea para el botón
      >
        Siguiente
      </button>
    </>
  );
};