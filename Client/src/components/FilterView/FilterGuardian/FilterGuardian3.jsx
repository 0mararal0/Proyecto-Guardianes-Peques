import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export const FilterGuardian3 = ({
  setComponentView,
  setProgress,
  setDataGuardian,
}) => {
  const [ocasional, setOcasional] = useState(false);
  const [diasSemana, setDiasSemana] = useState({
    L: false,
    M: false,
    X: false,
    J: false,
    V: false,
    S: false,
    D: false,
  });
  const [error, setError] = useState(""); // Estado para el mensaje de error

  const handleOcasionalChange = () => {
    setOcasional((prev) => {
      // Si se marca como ocasional, reiniciamos los días seleccionados
      if (!prev) {
        setDiasSemana({
          L: false,
          M: false,
          X: false,
          J: false,
          V: false,
          S: false,
          D: false,
        });
      }
      return !prev; // Cambiar el estado del campo ocasional
    });
    setError(""); // Limpiar mensaje de error al cambiar ocasional
  };

  const handleDiaChange = (dia) => {
    if (ocasional) {
      // Si es ocasional, solo permitir seleccionar un día
      if (diasSemana[dia]) {
        // Si el día ya está seleccionado, lo deselecciona
        setDiasSemana({ L: false, M: false, X: false, J: false, V: false, S: false, D: false });
      } else {
        // Si el día no está seleccionado, seleccionarlo y desmarcar los demás
        setDiasSemana({
          L: false,
          M: false,
          X: false,
          J: false,
          V: false,
          S: false,
          D: false,
          [dia]: true,
        });
      }
    } else {
      // Si no es ocasional, permite seleccionar múltiples días
      setDiasSemana((prev) => ({
        ...prev,
        [dia]: !prev[dia],
      }));
    }
    setError(""); // Limpiar mensaje de error al cambiar un día
  };

  const handleNextView = () => {
    // Validar si se seleccionó al menos un día
    const diasSeleccionados = Object.values(diasSemana).filter(Boolean).length;

    // Verifica las condiciones
    if (diasSeleccionados === 0) {
      setError("Debes seleccionar al menos un día.");
      return;
    } else if (!ocasional && diasSeleccionados === 1) {
      setError("Si no seleccionas 'Ocasional', debes seleccionar más de un día.");
      return;
    } else if (ocasional && diasSeleccionados !== 1) {
      setError("Has marcado 'Ocasional'. Marca un solo día.");
      return;
    }

    setError(""); // Limpiar el mensaje de error si la validación es correcta
    setDataGuardian({ ocasional, diasSemana }); // Guardar los datos del guardián
    setProgress((100 / 6) * 4); // Actualizar el progreso aquí
    setComponentView(4); // Cambiar a la siguiente vista
  };

  // Estilos en línea
  const diasListStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const formCheckStyle = {
    marginBottom: '10px',
  };

  return (
    <>
      <div className="container-xxl">
        <h3>Disponibilidad</h3>

        <Form.Group controlId="formOcasional">
          <Form.Check
            type="checkbox"
            label="Ocasional"
            checked={ocasional}
            onChange={handleOcasionalChange}
          />
        </Form.Group>

        <h4>Días de la semana</h4>
        <div style={diasListStyle}>
          {Object.keys(diasSemana).map((dia) => (
            <Form.Group key={dia} controlId={`formDia${dia}`} style={formCheckStyle}>
              <Form.Check
                type="checkbox"
                label={dia}
                checked={diasSemana[dia]}
                onChange={() => handleDiaChange(dia)}
              />
            </Form.Group>
          ))}
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar mensaje de error */}
      </div>

      <button onClick={handleNextView}>
        Siguiente
      </button>
    </>
  );
};