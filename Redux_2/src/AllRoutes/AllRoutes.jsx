import React from "react";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import { Routes, Route } from "react-router-dom";
import Todo from "../Pages/Todo";
import Theme from "../components/Theme";

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
