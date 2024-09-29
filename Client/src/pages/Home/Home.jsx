import "./styleHome.css";
import foto1 from "../../assets/images/padreHijo-removebg-preview.png";

export const Home = () => {
  return (
    <>
      <section className="containerSection1Home container-xxl mx-auto m-5 d-flex">
        <img src={foto1} alt="" />
        <div className="my-auto">
          <h1>Personas de confianza cerca de ti</h1>
          <label htmlFor="">
            <input type="text" placeholder="Introduce un código Postal" />
          </label>
          <p>¿Quieres trabajar con nosotros? Encuentra un trabajo</p>
        </div>
      </section>
    </>
  );
};
