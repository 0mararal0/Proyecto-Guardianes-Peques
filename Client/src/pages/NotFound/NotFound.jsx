import React from "react";
import imagenNotFound from "../../assets/images/bebe_not_found.jpg";
import "./styleNotFound.css";

export const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe o ha sido eliminada.</p>
      <img src={imagenNotFound} alt="imagen" />
      <a href="/" className="button">
        Volver a la página principal
      </a>
    </div>
  );
};
