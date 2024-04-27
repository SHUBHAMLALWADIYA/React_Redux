// import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO_STATUS } from "./action";

// export const add_todo = (payload) => {
//   return {
//     type: ADD_TODO,
//     paylaod: payload,
//   };
// };

// export const uppdate_todo = (payload) => {
//   return {
//     type: UPDATE_TODO_STATUS,
//     payload: payload,
//   };
// };

// export const delete_todo = (payload) => {
//   return {
//     type: DELETE_TODO,
//     payload: payload,
//   };
// };

import axios from "axios";
import { ADD_TODO, UPDATE_TODO_STATUS, DELETE_TODO } from "./action";

export const addTodo = (newTodo) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:3000/todo", newTodo);
      dispatch({ type: ADD_TODO, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTodoStatus = (id, status) => {
  return async (dispatch) => {
    try {
      const newStatus = !status;
      await axios.patch(`http://localhost:3000/todo/${id}`, {
        status: newStatus,
      });
      dispatch({
        type: UPDATE_TODO_STATUS,
        payload: { id, status: newStatus },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/todo/${id}`);
      dispatch({ type: DELETE_TODO, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};
