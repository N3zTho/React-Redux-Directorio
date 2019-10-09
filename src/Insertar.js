import React, { useState } from "react";
import { connect } from "react-redux";
import { addContacto } from "./redux/action";

const Insertar = ({ addContacto }) => {
  const [contacto, setContacto] = useState({
    nombre: "",
    apellidos: "",
    direccion: ""
  });

  const handleClick = evt => {
    evt.preventDefault();

    addContacto(contacto);

    setContacto({
      nombre: "",
      apellidos: "",
      direccion: ""
    });
  };

  const handleChange = evt => {
    let _contacto = {
      ...contacto,
      [evt.target.name]: evt.target.value
    };

    setContacto(_contacto);
  };

  return (
    <>
      <form
        autoComplete="off"
        className="bs-example bs-example-form"
        data-example-id="input-group-sizing"
      >
        <div className="row">
          <div className="col-sm-6">
            <div className="input-group input-group-lg">
              {" "}
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-user"></i>
              </span>{" "}
              <input
                onChange={handleChange}
                value={contacto.nombre}
                autoFocus
                className="form-control"
                name="nombre"
                placeholder="Nombre"
              />{" "}
            </div>
          </div>

          <div className="col-sm-6">
            <div className="input-group input-group-lg">
              {" "}
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-user"></i>
              </span>{" "}
              <input
                onChange={handleChange}
                value={contacto.apellidos}
                className="form-control"
                name="apellidos"
                placeholder="Apellidos"
              />{" "}
            </div>
          </div>

          <div className="col-sm-12" style={{ marginTop: "15px" }}>
            <div className="input-group input-group-lg">
              {" "}
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-pushpin"></i>
              </span>{" "}
              <input
                onChange={handleChange}
                value={contacto.direccion}
                className="form-control"
                name="direccion"
                placeholder="Direccion"
              />{" "}
            </div>
          </div>
        </div>
        <br />
        <button className="btn btn-primary" onClick={handleClick}>
          Guardar
        </button>
      </form>
      <br />
    </>
  );
};

const mapDistpachToProps = {
  addContacto
};

export default connect(
  null,
  mapDistpachToProps
)(Insertar);
