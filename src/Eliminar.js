import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getContacto, deleteContacto } from "./redux/action";

const Eliminar = ({
  index,
  lista,
  getContacto,
  goToPantalla,
  deleteContacto
}) => {
  useEffect(() => {
    getContacto(index);
  }, []);

  const handleClick = () => {
    deleteContacto(index);
    goToPantalla(1);
  };

  return (
    <>
      <div className="alert alert-warning alert-dismissible" role="alert">
        <strong>Atención!</strong> Desea eliminar el siguiente registro?
        <p>
          <strong>Nombre:</strong> {lista.contacto.nombre}
        </p>
        <p>
          <strong>Apellidos:</strong> {lista.contacto.apellidos}
        </p>
        <p>
          <strong>Direccion:</strong> {lista.contacto.direccion}
        </p>
      </div>

      <button className="btn btn-danger" onClick={handleClick}>
        Eliminar
      </button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    lista: state
  };
};

const mapDistpachToProps = {
  getContacto,
  deleteContacto
};

export default connect(
  mapStateToProps,
  mapDistpachToProps
)(Eliminar);
