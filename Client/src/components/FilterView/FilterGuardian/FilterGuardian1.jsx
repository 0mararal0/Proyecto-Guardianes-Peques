import { useState } from "react";
import Form from "react-bootstrap/Form";

export const FilterGuardian1 = ({
  setComponentView,
  setProgress,
  setDataGuardian,
}) => {
  const [guardianData, setGuardianData] = useState({
    id: 'abcd', // Puedes generarlo dinámicamente si es necesario
    nombre: '',
    apellidos: '',
    localidad: '',
    provincia: '',
    nacimiento: '',
    telefono: '',
    email: '',
    foto: '',
    numeroNiños: '1', // Por defecto a 1
    edadNiño: [{ bebe: false, pequeño: false, prescolar: false, escolar: false, adolescente: false }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "numeroNiños") {
      const newNumber = parseInt(value, 10);
      // Actualiza el estado de edadNiño según el nuevo número de niños
      const newEdades = Array.from({ length: newNumber }, (_, index) => ({
        bebe: false,
        pequeño: false,
        prescolar: false,
        escolar: false,
        adolescente: false,
      }));
      
      setGuardianData((prev) => ({
        ...prev,
        numeroNiños: value,
        edadNiño: newEdades.slice(0, newNumber), // Mantén solo la cantidad correspondiente
      }));
    } else {
      setGuardianData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNextView = () => {
    setComponentView(2);
    setProgress((100 / 6) * 2);
    setDataGuardian(guardianData);
  };

  const isFormValid = Object.values(guardianData).every((field) => field !== '' || typeof field === 'object');

  const handleEdadChange = (index, edad) => {
    const updatedEdades = guardianData.edadNiño.map((item, idx) => {
      if (idx === index) {
        return {
          // Deselecciona todas las edades primero y luego selecciona la elegida
          bebe: false,
          pequeño: false,
          prescolar: false,
          escolar: false,
          adolescente: false,
          [edad]: true,
        };
      }
      return item; // Mantiene las edades de los demás niños
    });

    setGuardianData((prev) => ({
      ...prev,
      edadNiño: updatedEdades,
    }));
  };

  return (
    <>
      <div className="container-xxl">
        <h3>Sobre Ti</h3>
        <Form>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={guardianData.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formApellidos">
            <Form.Label>Apellidos:</Form.Label>
            <Form.Control
              type="text"
              name="apellidos"
              value={guardianData.apellidos}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formLocalidad">
            <Form.Label>Localidad:</Form.Label>
            <Form.Control
              type="text"
              name="localidad"
              value={guardianData.localidad}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formProvincia">
            <Form.Label>Provincia:</Form.Label>
            <Form.Control
              type="text"
              name="provincia"
              value={guardianData.provincia}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formNacimiento">
            <Form.Label>Fecha de Nacimiento:</Form.Label>
            <Form.Control
              type="date"
              name="nacimiento"
              value={guardianData.nacimiento}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTelefono">
            <Form.Label>Teléfono:</Form.Label>
            <Form.Control
              type="tel"
              name="telefono"
              value={guardianData.telefono}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={guardianData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formFoto">
            <Form.Label>Foto:</Form.Label>
            <Form.Control
              type="text"
              name="foto"
              value={guardianData.foto}
              onChange={handleChange}
              placeholder="URL de la foto"
            />
          </Form.Group>
          <Form.Group controlId="formNumeroNiños">
            <Form.Label>Número de Niños:</Form.Label>
            <Form.Control
              type="number"
              name="numeroNiños"
              value={guardianData.numeroNiños}
              onChange={handleChange}
              min="1"
              max="5" // Cambiado a 5
              required
            />
          </Form.Group>

          <h4>Edad del Niño:</h4>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[...Array(parseInt(guardianData.numeroNiños, 10))].map((_, index) => (
              <div key={index} style={{ flex: '1 1 150px' }}> {/* Ajusta el tamaño según sea necesario */}
                <h5>Niño {index + 1}</h5>
                {Object.keys(guardianData.edadNiño[index]).map((edad) => (
                  <Form.Check 
                    key={edad}
                    type="checkbox"
                    label={edad.charAt(0).toUpperCase() + edad.slice(1)}
                    checked={guardianData.edadNiño[index][edad]}
                    onChange={() => handleEdadChange(index, edad)}
                  />
                ))}
              </div>
            ))}
          </div>
        </Form>
      </div>

      <button onClick={handleNextView} disabled={!isFormValid}>
        Siguiente
      </button>
    </>
  );
};