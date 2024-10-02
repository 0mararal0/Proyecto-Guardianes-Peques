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

  // Datos iniciales para las edades
  const edadesIniciales = {
    bebe: false,
    pequeño: false,
    prescolar: false,
    escolar: false,
    adolescente: false,
  };

  const [serviciosSeleccionados, setServiciosSeleccionados] = useState(serviciosData);
  const [edadesSeleccionadas, setEdadesSeleccionadas] = useState(edadesIniciales);
  const [guardianData, setGuardianData] = useState({
    numeroNiños: '1',
  });
  const [error, setError] = useState('');

  // Manejo del cambio en la cantidad de niños
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuardianData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdadChange = (edad) => {
    setEdadesSeleccionadas((prev) => ({
      ...prev,
      [edad]: !prev[edad], // Alterna entre verdadero y falso para la selección
    }));
  };

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
    // Verifica que al menos una categoría de edad esté seleccionada
    const atLeastOneAgeSelected = Object.values(edadesSeleccionadas).some((selected) => selected);

    if (!atLeastOneAgeSelected) {
      setError('Debes seleccionar al menos una categoría de edad que puedas cuidar.');
      return; // Evitar pasar a la siguiente vista si no se selecciona ninguna edad
    }

    // Si pasa la validación, avanza a la siguiente vista
    setComponentView(3);
    setProgress((100 / 4) * 3);
    setDataGuardian((prev) => ({
      ...prev,
      numeroNiños: guardianData.numeroNiños,
      edadesSeleccionadas, // Guardar las edades seleccionadas
      serviciosSeleccionados, // Guardar los servicios seleccionados
    }));
  };

  return (
    <>
      <div className="container-xxl">
        <h3 style={{ marginTop: '20px' }}>Número de peques que puedes cuidar:</h3>
        <Form.Group controlId="formNumeroNiños">
          <Form.Control
            type="number"
            name="numeroNiños"
            value={guardianData.numeroNiños}
            onChange={handleChange}
            min="1"
            max="5" // Limitar a un máximo de 5 niños
            required
          />
        </Form.Group>

        <h4 style={{ marginTop: '20px' }}>Edad peques:</h4>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {Object.keys(edadesIniciales).map((edad) => (
            <div key={edad} style={{ flex: '1 1 150px' }}>
              <Form.Check
                type="checkbox"
                label={edad.charAt(0).toUpperCase() + edad.slice(1)}
                checked={edadesSeleccionadas[edad]}
                onChange={() => handleEdadChange(edad)}
              />
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: '20px' }}>Servicios adicionales (opcional):</h3>
        {error && <div style={{ color: 'red' }}>{error}</div>}

        <div className="servicios-list" style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
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
                backgroundColor: serviciosSeleccionados[servicio] ? "#007bff" : "#f8f9fa",
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