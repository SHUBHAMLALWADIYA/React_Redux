import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  addTodo,
  deleteTodo,
  updateTodoStatus,
} from "../redux/todo_redux/actionItem";
import { useToast, Button, Input, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import "../index.css";

function Todo() {
  const [input, setInput] = useState("");
  const todo = useSelector((state) => state.todo.todo);
  const current_user_state = useSelector((state) => state.auth.auth_user);
  const [todos, setTodos] = useState(todo);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    setTodos(todo);
  }, [todo]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/todo");
      setTodos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTodoStatus = async (id, status) => {
    if (!current_user_state) {
      toast({
        title: "Login Required",
        description: "You need to login first!",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    await dispatch(updateTodoStatus(id, status));
    getData();
  };

  const handleTodoDelete = async (id) => {
    if (!current_user_state) {
      toast({
        title: "Login Required",
        description: "You need to login first!",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    await dispatch(deleteTodo(id));
    getData();
  };

  const handleAddTodo = async () => {
    if (!current_user_state) {
      toast({
        title: "Login Required",
        description: "You need to login first!",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    const newTodo = {
      title: input,
      status: false,
    };

    await dispatch(addTodo(newTodo));
    setInput("");
    getData();
    toast({
      title: "Todo Added",
      description: "Todo added successfully",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <>
      <div className="todo">
        <Input
          placeholder="Enter todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="md"
          width="300px"
        />
        <Button onClick={handleAddTodo} colorScheme="blue" ml="2">
          ADD
        </Button>
      </div>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos.map((item) => (
            <Tr key={item.id} bg={item.status ? "green.100" : "gray.100"}>
              <Td>{item.title}</Td>
              <Td>{item.status ? "Completed" : "Pending"}</Td>
              <Td>
                <Button onClick={() => handleTodoStatus(item.id, item.status)} colorScheme="purple" size="sm" mr="2">
                  Toggle
                </Button>
                <Button onClick={() => handleTodoDelete(item.id)} colorScheme="red" size="sm">
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}

export default Todo;

