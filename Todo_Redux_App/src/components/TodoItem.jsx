import React from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { add_todo, update_todo } from "../Redux/todo_redux/actionItem";
import { useToast } from "@chakra-ui/react";

function TodoItem({ id, title, status }) {
  const current_user_status = useSelector((state) => state.todo.auth_user);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleToggle = (id) => {
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
    dispatch(update_todo(id));
  };
  return (
    <div className="items">
      <p>
        {title} - {status ? "completed" : "pending"} -{" "}
        <button onClick={() => handleToggle(id)}>Toggle</button>
      </p>
    </div>
  );
}

export default TodoItem;
