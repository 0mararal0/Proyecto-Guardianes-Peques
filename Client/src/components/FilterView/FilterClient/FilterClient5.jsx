import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const FilterClient5 = ({
  setComponentView,
  setProgress,
  setDataClient,
  dataClient,
}) => {
  const [dataGuardian, setDataGuardian] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/guardian")
      .then((res) => {
        let prov = res.data.filter(
          (elem) =>
            elem.edadNiño.bebe
              ? true
              : dataClient.edadNiño.bebe
              ? false
              : true && elem.edadNiño.pequeño
              ? true
              : dataClient.edadNiño.pequeño
              ? false
              : true /*&& elem.edadNiño.prescolar
            ? true
            : dataClient.edadNiño.prescolar
            ? false
            : true && elem.edadNiño.escolar
            ? true
            : dataClient.edadNiño.escolar
            ? false
            : true && elem.edadNiño.adolescente
            ? true
            : dataClient.edadNiño.adolescente
            ? false
            : true && elem.tareas.cocinar
            ? true
            : dataClient.tareas.cocinar
            ? false
            : true && elem.tareas.actividades
            ? true
            : dataClient.tareas.actividades
            ? false
            : true && elem.tareas.baño
            ? true
            : dataClient.tareas.baño
            ? false
            : true && elem.tareas.deberes
            ? true
            : dataClient.tareas.deberes
            ? false
            : true && elem.tareas.dormir
            ? true
            : dataClient.tareas.dormir
            ? false
            : true && elem.tareas.recogida
            ? true
            : dataClient.tareas.recogida
            ? false
            : true && elem.ocasional
            ? true
            : dataClient.reservationOccasional
            ? false
            : true */
        );
        setDataGuardian(prov);
        console.log(prov);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h3>Estos son los guardianes disponibles para ti</h3>
      {dataGuardian?.length !== 0 ? (
        dataGuardian.map((elem) => {
          return (
            <Card key={elem.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <div>
          <p>ahora no hay ningun guardian disponible</p>
        </div>
      )}
    </>
  );
};
