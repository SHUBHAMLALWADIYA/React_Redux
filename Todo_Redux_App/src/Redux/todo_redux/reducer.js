import { ADD_TODO, AUTH_USER, UPDATE_TODO_STATUS } from "./action";

const initial_state = {
  auth_user: false,
  todo: [
    {
      id: 1,
      title: "learn HTML",
      status: false,
    },
  ],
};
export const todoReducer = (prevState = initial_state, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...prevState, auth_user: true };
    case ADD_TODO:
      return {
        ...prevState,
        todo: [...prevState.todo, action.payload],
      };
    case UPDATE_TODO_STATUS:
      return {
        ...prevState,
        todo: prevState.todo.map((todo) =>
          todo.id === action.payload ? { ...todo, status: !todo.status } : todo
        ),
      };
    default:
      return prevState;
  }
};
