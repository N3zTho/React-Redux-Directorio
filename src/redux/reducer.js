const initialData = {
  contactos: [],
  contacto: {
    nombre: "",
    apellidos: "",
    direccion: ""
  }
};

const reducers = (state = initialData, action) => {
  let newState;
  let contacto;

  switch (action.type) {
    case "GET_CONTACTOS":
      return state;

    case "GET_CONTACTO":
      contacto = state.contactos[action.payload];

      return {
        ...state,
        contacto
      };

    case "EDIT_CONTACTO":
      contacto = {
        ...action.payload.contacto
      };

      newState = [...state.contactos];
      newState[action.payload.index] = contacto;

      return {
        contactos: newState,
        contacto
      };

    case "DELETE_CONTACTO":
      newState = [...state.contactos];
      newState.splice(action.payload, 1);

      return {
        ...state,
        contactos: newState
      };

    case "ADD_CONTACTO":
      newState = [...state.contactos];

      newState.push(action.payload);
      return {
        ...state,
        contactos: newState
      };

    default:
      return state;
  }
};

export default reducers;
