import { OPEN_LEFT_MENU, CLOSE_LEFT_MENU, TOGGLE_LEFT_MENU } from "./constants";

const initialState = {
  leftMenuIsOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LEFT_MENU:
      return {
        ...state,
        leftMenuIsOpen: true,
      };
    case CLOSE_LEFT_MENU:
      return {
        ...state,
        leftMenuIsOpen: false,
      };
    case TOGGLE_LEFT_MENU:
      return {
        ...state,
        leftMenuIsOpen: !state.leftMenuIsOpen,
      };
    default:
      return state;
  }
};

export default reducer;
