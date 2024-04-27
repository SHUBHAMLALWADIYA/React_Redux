import { USER_STATE } from "./action";

export const user_auth_state = (payload) => {
  return {
    type: USER_STATE,
    payload,
  };
};
