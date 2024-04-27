import { ADD_TODO, AUTH_USER, UPDATE_TODO_STATUS } from "./action";

export const auth_user = () => {
  return { type: AUTH_USER };
};

export const add_todo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const update_todo = (id) => {
  return { type: UPDATE_TODO_STATUS, payload: id };
};
