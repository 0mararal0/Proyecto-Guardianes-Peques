import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export const FilterGuardian2 = ({
  setComponentView,
  setProgress,
  setDataGuardian,
}) => {
  const serviciosData = {
    cocinar: false,
    recogida: false,
    tareas: false,
    actividades: false,
    dormir: false,
  };

  const [serviciosSeleccionados, setServiciosSeleccionados] = useState(serviciosData);
  const [error, setError] = useState('');

  const handleServicioClick = (servicio) => {
    setServiciosSeleccionados((prev) => ({
      ...prev,
      [servicio]: !prev[servicio],
    }));
    // Limpiar el error cuando se selecciona un servicio
    if (!serviciosSeleccionados[servicio]) {
      setError('');
    }
  };

  const handleNextView = () => {
    const isAnyServiceSelected = Object.values(serviciosSeleccionados).some((selected) => selected);

    if (!isAnyServiceSelected) {
      setError('Debes seleccionar al menos un servicio.');
      return; // Evitar pasar a la siguiente vista
    }

    setComponentView(3);
    setProgress((100 / 6) * 3);
    setDataGuardian(serviciosSeleccionados); // Solo se envían los servicios seleccionados
  };

  return (
    <>
      <div className="container-xxl">
        <h3>Tus Servicios</h3>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div className="servicios-list" style={{ display: 'flex', flexDirection: 'column' }}>
          {Object.keys(serviciosData).map((servicio) => (
            <div
              key={servicio}
              className={`servicio-item ${serviciosSeleccionados[servicio] ? "selected" : ""}`}
              onClick={() => handleServicioClick(servicio)}
              style={{
                cursor: "pointer",
                padding: "10px",
                margin: "5px",
                color: serviciosSeleccionados[servicio] ? "#fff" : "#000",
                borderRadius: "5px",
                backgroundColor: serviciosSeleccionados[servicio] ? "#007bff" : "#f8f9fa", // Color por defecto
              }}
            >
              {servicio.charAt(0).toUpperCase() + servicio.slice(1)}
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleNextView}>
        Siguiente
      </button>
    </>
  );
};