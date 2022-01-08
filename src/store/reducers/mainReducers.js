import { TOGGLE_ADD_MODAL } from "../types";

const initialState = {
  addFilmModal: false,
};

export const mainReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_MODAL:
      return {
        ...state,
        addFilmModal: !state.addFilmModal,
      };

    default:
      return state;
  }
};
