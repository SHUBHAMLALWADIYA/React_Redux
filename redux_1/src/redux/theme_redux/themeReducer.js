import { THEME_CHANGE } from "./action";

const inital_state = {
  theme: "light_theme",
};

export const themeReducers = (prevState = inital_state, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return { ...prevState, payload: action.payload };
    default:
      return prevState;
  }
};
