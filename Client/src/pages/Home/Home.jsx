import "./styleHome.css";
import { Link } from "react-router-dom";
import foto1 from "../../assets/images/padreHijo-removebg-preview.png";

export const Home = () => {
  return (
    <>
      <section className="containerSection1Home container-xxl mx-auto m-5 d-flex">
        <img src={foto1} alt="" />
        <div className="my-auto">
          <h1>Personas de confianza cerca de ti</h1>
          <Link to={"/filter"}>
            <p>Guardianes</p>
          </Link>
          <Link to={"/filterGuardian"}>
            <p>¿Quieres trabajar con nosotros? Encuentra un trabajo</p>
          </Link>
        </div>
      </section>
    </>
  );
};
