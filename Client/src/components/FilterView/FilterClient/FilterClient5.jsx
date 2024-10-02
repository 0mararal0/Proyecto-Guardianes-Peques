import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export const FilterClient5 = ({
  setComponentView,
  setProgress,
  setDataClient,
  dataClient,
}) => {
  const [dataGuardianSelect, setDataGuardianSelect] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/guardian")
      .then((res) => {
        let prov = res.data.filter((elem) => {
          //Edad del niño
          if (dataClient.edadNiño.bebe && !elem.edadNiño.bebe) return false;
          if (dataClient.edadNiño.pequeño && !elem.edadNiño.pequeño)
            return false;
          if (dataClient.edadNiño.prescolar && !elem.edadNiño.prescolar)
            return false;
          if (dataClient.edadNiño.escolar && !elem.edadNiño.escolar)
            return false;
          if (dataClient.edadNiño.adolescente && !elem.edadNiño.adolescente)
            return false;

          //Tareas
          if (dataClient.tareas.cocinar && !elem.tareas.cocinar) return false;
          if (dataClient.tareas.recogida && !elem.tareas.recogida) return false;
          if (dataClient.tareas.tareas && !elem.tareas.tareas) return false;
          if (dataClient.tareas.actividades && !elem.tareas.actividades)
            return false;
          if (dataClient.tareas.dormir && !elem.tareas.dormir) return false;

          return true;
        });

        setDataGuardianSelect(prov);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (id) => {
    setComponentView(6);
    setProgress((100 / 6) * 6);
    setDataClient((prov) => ({
      ...prov,
      guardianId: id,
    }));
  };
  return (
    <>
      <h3>Estos son los guardianes disponibles para ti</h3>
      {dataGuardianSelect?.length !== 0 ? (
        dataGuardianSelect.map((elem) => {
          return (
            <Card key={elem.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={elem.foto} />
              <Card.Body>
                <Card.Title>
                  {elem.nombre} {elem.apellidos}
                </Card.Title>
                <Card.Text>{elem.comentario}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  {elem.teléfono} {elem.email}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {elem.localidad} {elem.provincia}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <button onClick={() => handleSubmit(elem.id)}> </button>
                <Link to={`/reservation/${elem.id}`}>Reservar</Link>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <div>
          <p>Ahora no hay ningun guardian disponible</p>
          <p>Quieres volver a rellenar el formulario?</p>
          <Link to={"/filter"}>Si</Link>
          <Link to={"/"}>No</Link>
        </div>
      )}
    </>
  );
};
