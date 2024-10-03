import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export const EditGuardian = () => {
  const [dataGuardian, setDataGuardian] = useState();
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const { guardianId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/guardian/${guardianId}`)
      .then((res) => {
        setDataGuardian(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .put(`http://localhost:4000/guardian/${guardianId}`, dataGuardian)
        .then((res) => {
          console.log("actualizado correctamente", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      navigate("/guardians");
    }
    setValidated(true);
  };

  const handleName = (e) => {
    setDataGuardian((newData) => ({ ...newData, nombre: e.target.value }));
  };
  const handleLastName = (e) => {
    setDataGuardian((newData) => ({ ...newData, apellidos: e.target.value }));
  };
  const handlePhoto = (e) => {
    setDataGuardian((newData) => ({ ...newData, foto: e.target.value }));
  };
  const handlePhone = (e) => {
    setDataGuardian((newData) => ({ ...newData, telefono: e.target.value }));
  };
  const handleEmail = (e) => {
    setDataGuardian((newData) => ({ ...newData, email: e.target.value }));
  };
  const handleCity = (e) => {
    setDataGuardian((newData) => ({ ...newData, localidad: e.target.value }));
  };
  const handleCountry = (e) => {
    setDataGuardian((newData) => ({ ...newData, provincia: e.target.value }));
  };
  const handleTarifa = (e) => {
    setDataGuardian((newData) => ({ ...newData, tarifa: e.target.value }));
  };
  const handleComentario = (e) => {
    setDataGuardian((newData) => ({ ...newData, comentario: e.target.value }));
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Container className="m-5 text-center">
          <Row>
            <Col xs={12} md={12}>
              <Image src={dataGuardian?.foto} roundedCircle />
            </Col>
          </Row>
        </Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre"
                defaultValue={dataGuardian?.nombre}
                onChange={handleName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Apellidos"
                defaultValue={dataGuardian?.apellidos}
                onChange={handleLastName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="email"
                  aria-describedby="inputGroupPrepend"
                  required
                  defaultValue={dataGuardian?.email}
                  onChange={handleEmail}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Localidad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Localidad"
                required
                defaultValue={dataGuardian?.localidad}
                onChange={handleCity}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Provincia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Provincia"
                required
                defaultValue={dataGuardian?.provincia}
                onChange={handleCountry}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Teléfono"
                required
                defaultValue={dataGuardian?.telefono}
                onChange={handlePhone}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom06">
              <Form.Label>Foto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Foto"
                required
                defaultValue={dataGuardian?.foto}
                onChange={handlePhoto}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustom07">
              <Form.Label>Tarifa</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tarifa"
                required
                defaultValue={dataGuardian?.tarifa}
                onChange={handleTarifa}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom08">
              <Form.Label>Comentario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Comentario"
                required
                defaultValue={dataGuardian?.comentario}
                onChange={handleComentario}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Guardar</Button>
          <Button type="button" onClick={() => navigate("/guardians")}>
            Volver
          </Button>
        </Form>
      </div>
    </>
  );
};
