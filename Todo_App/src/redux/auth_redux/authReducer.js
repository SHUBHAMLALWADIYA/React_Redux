import { USER_STATE } from "./action";
const default_state = {
  auth_user: false,
};

export const authReducers = (prevState = default_state, action) => {
  switch (action.type) {
    case USER_STATE:
      return {
        ...prevState,
        auth_user: true,
      };
    default:
      return prevState;
  }
};
