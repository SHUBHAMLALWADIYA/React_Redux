import { THEME_CHANGE } from "./action";

export const theme_changer = (payload) => {
  return { type: THEME_CHANGE, payload };
};
