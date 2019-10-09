import React, { useEffect } from "react";

const Listado = ({ lista, onEditar, onEliminar }) => {
  //   useEffect(() => {
  //     console.log(contactos);
  //   });

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">Listado de contactos</div>
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Dirección</th>
                  <th width="180">Operación</th>
                </tr>
              </thead>
              <tbody>
                {lista.contactos.map((contacto, index) => {
                  return (
                    <tr key={index}>
                      <td>{contacto.nombre}</td>
                      <td>{contacto.apellidos}</td>
                      <td>{contacto.direccion}</td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="..."
                        >
                          <button
                            type="button"
                            className="btn btn-default"
                            onClick={() => onEditar(index)}
                          >
                            Editar
                          </button>

                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => onEliminar(index)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listado;
