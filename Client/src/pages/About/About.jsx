import React from "react";
import "./styleAbout.css";

export const About = () => {
  return (
    <section>
      <div className="about-div">
        <h1>Acerca de nosotros</h1>
        <div>
          <h3>Conectamos familias con cuidadores.</h3>
          <p>
          Guardianes & Peques es una plataforma creada con el objetivo de 
          ofrecer atención de calidad a los niños, entendiendo que este cuidado 
          es esencial para el bienestar familiar y el desarrollo saludable de los pequeños.
          </p>
          <p>Nuestra misión en Guardianes & Peques es facilitar a las familias la búsqueda 
            de cuidadores especializados que se adapten a sus necesidades, al tiempo que 
            brindamos oportunidades laborales a profesionales en el ámbito del cuidado infantil.
          </p>
        </div>
        <div>
          <h3>¿Qué ofrecemos?</h3>
          <ul>
          <li>
          Para las familias, proporcionamos una solución accesible y completa que simplifica 
          la búsqueda de niñeras, educadores, cuidadores con experiencia en necesidades especiales, 
          y otros profesionales del cuidado infantil.
          </li>
          <li>
          Para los cuidadores, ofrecemos una plataforma donde pueden descubrir oportunidades 
          laborales de calidad y conectar con familias que valoran su experiencia y dedicación.
          </li>
          </ul>
        </div>
      </div>
    </section>
  )
};
