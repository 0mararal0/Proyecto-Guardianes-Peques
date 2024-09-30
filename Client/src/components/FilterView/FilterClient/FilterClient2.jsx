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
    setTask((prov) => ({ ...prov, [e.target.value]: e.target.checked }));
  };
  const handleNextView = () => {
    setComponentView(3);
    setProgress((100 / 6) * 3);
    setDataClient((prov) => ({
      ...prov,
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
          onClick={handleTask}
        >
          <ToggleButton id="cocinar" value={"cocinar"} checked>
            Cocinar o preparación de comidas
          </ToggleButton>
          <ToggleButton id="recogida" value={"recogida"}>
            Servicio de recogida
          </ToggleButton>
          <ToggleButton id="tareas" value={"tareas"}>
            Tareas básicas de la casa
          </ToggleButton>
          <ToggleButton id="actividades" value={"actividades"}>
            Actividades (ej: natación)
          </ToggleButton>
          <ToggleButton id="dormir" value={"dormir"}>
            Poner a los nños a dormir
          </ToggleButton>
          <ToggleButton id="deberes" value={"deberes"}>
            Ayuda con los deberes
          </ToggleButton>
          <ToggleButton id="baño" value={"baño"}>
            Bañar a los niños
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <button onClick={handleNextView}>Siguiente</button>
    </>
  );
};
