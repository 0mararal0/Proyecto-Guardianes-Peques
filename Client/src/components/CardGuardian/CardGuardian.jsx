/* import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CardGuardian = ({ id }) => {
  const [data, setData] = useState();
  const [year, setYear] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/guardian/${id}`)
      .then((res) => {
        setData(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
 */
/*  const fechaNacimiento = data?.nacimiento.split("-");
  const hoy = new Date();
  let edad = hoy.getFullYear() - parseInt(fechaNacimiento[0]);

  const mesActual = hoy.getMonth();
  const diaActual = hoy.getDate();
  if (
    mesActual < parseInt(fechaNacimiento[1]) ||
    (mesActual === parseInt(fechaNacimiento[1]) &&
      diaActual < parseInt(fechaNacimiento[2]))
  ) {
    edad--;
  } */

/*  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data?.foto} />
        <Card.Body>
          <Card.Title>
            {data?.nombre} {data?.apellidos}
            {}
          </Card.Title>
          <Card.Text>{data?.comentario}</Card.Text>
        </Card.Body>
        <Button variant="primary" onClick={handleDelete(data.id)}>
          Eliminar
        </Button>
      </Card>
    </div>
  );
}; */
