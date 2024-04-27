import { THEME_CHANGE } from "./actionsItem";

export const change_theme = (payload) => {
  return {
    type: THEME_CHANGE,
    payload,
  };
};
