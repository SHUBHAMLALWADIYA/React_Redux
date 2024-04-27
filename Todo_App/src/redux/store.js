import { createStore, combineReducers, applyMiddleware } from "redux";
import { themeReducers } from "./theme_redux/themeReducer";
import { todoReducers } from "./todo_redux/todoReducer";
import { thunk } from "redux-thunk";
import { authReducers } from "./auth_redux/authReducer";

const rootReducers = combineReducers({
  theme: themeReducers,
  todo: todoReducers,
  auth: authReducers,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
