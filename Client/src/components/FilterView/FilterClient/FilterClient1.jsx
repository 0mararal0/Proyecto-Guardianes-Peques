import { useState } from "react";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export const FilterClient1 = ({
  setComponentView,
  setProgress,
  setDataClient,
}) => {
  const [kidAge, setKidAge] = useState({
    bebe: false,
    pequeño: false,
    prescolar: false,
    escolar: false,
    adolescente: false,
  }); //guardamos los años de los niños
  const [kid, setKid] = useState(null); //guardamos los niños que tiene

  const handleKids = (e) => {
    setKid(e.target.id);
  };
  const handleAge = (e) => {
    setKidAge((prov) => ({ ...prov, [e.target.value]: e.target.checked }));
  };

  const handleNextView = () => {
    setComponentView(2);
    setProgress((100 / 6) * 2);
    setDataClient((prov) => ({
      ...prov,
      niños: kid,
      edad: kidAge,
    }));
  };

  return (
    <>
      <div className="container-xxl">
        <h3>Detalles</h3>
        <p>¿Cuántos niños tienes?</p>
        <Form onClick={handleKids}>
          <div>
            <Form.Check
              inline
              label="1 niño"
              name="group1"
              type={"radio"}
              id={"1"}
            />
            <Form.Check
              inline
              label="2 niños"
              name="group1"
              type={"radio"}
              id={"2"}
            />
          </div>
          <div>
            <Form.Check
              inline
              label="3 niño"
              name="group1"
              type={"radio"}
              id={"3"}
            />
            <Form.Check
              inline
              label="+4 niños"
              name="group1"
              type={"radio"}
              id={"4"}
            />
          </div>
        </Form>
        <p>¿Qué edad tienen?</p>
        <ToggleButtonGroup
          type="checkbox"
          className="d-flex gap-2 flex-wrap w-25 bor"
          onClick={handleAge}
        >
          <ToggleButton id="bebe" value={"bebe"} checked>
            Bebé
          </ToggleButton>
          <ToggleButton id="pequeño" value={"pequeño"}>
            Niño pequeño
          </ToggleButton>
          <ToggleButton id="prescolar" value={"prescolar"}>
            Edad Prescolar
          </ToggleButton>
          <ToggleButton id="escolar" value={"escolar"}>
            Edad escolar (6-12 años)
          </ToggleButton>
          <ToggleButton id="adolescente" value={"adolescente"}>
            Adolescente
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      {kid === null ||
      (kidAge.bebe === false &&
        kidAge.pequeño === false &&
        kidAge.prescolar === false &&
        kidAge.escolar === false &&
        kidAge.adolescente === false) ? (
        <button disabled>Siguiente</button>
      ) : (
        <button onClick={handleNextView}>Siguiente</button>
      )}
    </>
  );
};
