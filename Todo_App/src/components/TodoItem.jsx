import React from "react";

function TodoItem({ id, status, title, handleTodoStatus, handleTodoDelete }) {
  return (
    <div>
      <p>
        {title} - {status ? "Completed" : "Pending"}{" "}
        <button onClick={() => handleTodoStatus(id, status)}>Toggle</button>{" "}
        <button onClick={() => handleTodoDelete(id)}>Delete</button>{" "}
      </p>
    </div>
  );
}

export default TodoItem;
