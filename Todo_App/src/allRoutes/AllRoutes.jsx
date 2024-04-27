import React from "react";
import Login from "../pages/Login";
import Todo from "../pages/Todo";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
