import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import Listado from "./Listado";
import Insertar from "./Insertar";
import Eliminar from "./Eliminar";
import Editar from "./Editar";

function App({ lista }) {
  const [pantalla, setPantalla] = useState(1);

  const [contactoIndex, setContactoIndex] = useState(-1);

  const handleClick = ev => {
    switch (ev.target.id) {
      case "btn-listado":
        goToPantalla(1);
        break;

      case "btn-insertar":
        goToPantalla(2);
        break;
    }
  };

  const onEditar = index => {
    setContactoIndex(index);
    goToPantalla(3);
  };

  const onEliminar = index => {
    setContactoIndex(index);
    goToPantalla(4);
  };

  const goToPantalla = index => {
    setPantalla(index);
  };

  const mostrarPantalla = () => {
    if (pantalla == 1)
      return (
        <Listado lista={lista} onEditar={onEditar} onEliminar={onEliminar} />
      );
    else if (pantalla == 2) return <Insertar />;
    else if (pantalla == 3)
      return <Editar index={contactoIndex} goToPantalla={goToPantalla} />;
    else if (pantalla == 4)
      return <Eliminar index={contactoIndex} goToPantalla={goToPantalla} />;
  };

  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>Redux React</h1>
        </div>
        <div className="btn-group" role="group" aria-label="...">
          <button
            type="button"
            className="btn btn-default"
            id="btn-listado"
            onClick={handleClick}
          >
            Mostrar listado
          </button>

          <button
            type="button"
            className="btn btn-default"
            id="btn-insertar"
            onClick={handleClick}
          >
            Insertar un registro
          </button>
        </div>
        <br />
        <br />
        {mostrarPantalla()}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    lista: state
  };
};

export default connect(mapStateToProps)(App);
