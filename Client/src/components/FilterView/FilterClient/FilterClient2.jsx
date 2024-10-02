import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export const FilterClient2 = ({
  setComponentView,
  setProgress,
  setDataClient,
}) => {
  const [task, setTask] = useState({
    cocinar: false,
    recogida: false,
    tareas: false,
    actividades: false,
    dormir: false,
    deberes: false,
    baño: false,
  });

  const handleTask = (e) => {
    setTask((prev) => ({ ...prev, [e.target.value]: e.target.checked }));
  };

  const handleNextView = () => {
    setComponentView(3);
    setProgress((100 / 5) * 3);
    setDataClient((prev) => ({
      ...prev,
      tareas: task,
    }));
  };

  return (
    <>
      <div className="container-xxl">
        <h3>Detalles</h3>
        <p>¿Necesitas cuidados adicionales?</p>

        <ToggleButtonGroup
          type="checkbox"
          className="d-flex gap-2 flex-wrap w-25 bor"
        >
          {Object.keys(task).map((key) => (
            <ToggleButton
              key={key}
              id={key}
              value={key}
              checked={task[key]}
              onChange={handleTask} // Cambiado de onClick a onChange
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
              {/* Capitaliza la primera letra */}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <button onClick={handleNextView}>Siguiente</button>
    </>
  );
};
