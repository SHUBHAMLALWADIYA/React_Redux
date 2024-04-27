import { createStore, combineReducers } from "redux";
import { todoReducer } from "./todo_redux/reducer";
import { themeReducres } from "./theme_redux/reducers";

const rootReducers = combineReducers({
  todo: todoReducer,
  theme: themeReducres,
});

export const store = createStore(rootReducers);
