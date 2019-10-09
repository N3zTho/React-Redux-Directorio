export const getListado = () => {
  return {
    type: "GET_CONTACTOS"
  };
};

export const addContacto = payload => {
  return {
    type: "ADD_CONTACTO",
    payload
  };
};

export const editContacto = (index, contacto) => {
  return {
    type: "EDIT_CONTACTO",
    payload: {
      index,
      contacto
    }
  };
};

export const deleteContacto = payload => {
  return {
    type: "DELETE_CONTACTO",
    payload
  };
};

export const getContacto = payload => {
  return {
    type: "GET_CONTACTO",
    payload
  };
};
