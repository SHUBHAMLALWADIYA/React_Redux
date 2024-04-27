import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
import { ADD_TODO } from "../Redux/todo_redux/action";
import "../index.css";
import { useToast } from "@chakra-ui/react";

function Todo() {
  const current_todo = useSelector((state) => state.todo.todo);
  const current_user_status = useSelector((state) => state.todo.auth_user);

  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleAddTodo = () => {
    if (!current_user_status) {
      toast({
        title: "Authentication Required",
        description: "You need to login first.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: title,
      status: false,
    };
    dispatch({ type: ADD_TODO, payload: newTodo });
    setTitle("");
  };

  return (
    <>
      <div className="todo">
        <input
          style={{ border: "1px solid black", padding: "5px 15px" }}
          onChange={handleChange}
          type="text"
          placeholder="Enter todo..."
          name="todo"
          id="todo"
          value={title}
        />
        <button className="btn" onClick={handleAddTodo}>
          ADD_TODO
        </button>
      </div>

      {current_todo.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </>
  );
}

export default Todo;
