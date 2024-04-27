import { THEME_CHANGE } from "./actionsItem";

const initialTheme = {
  theme: "light_theme",
};

export const themeReducres = (prevState = initialTheme, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return { theme: action.payload };
    default:
      return prevState;
  }
};
