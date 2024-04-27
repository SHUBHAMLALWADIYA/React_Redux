import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
import { ADD_TODO } from "../Redux/todo_redux/action";
import "../index.css";
import { useToast, Input, Button, VStack, Box } from "@chakra-ui/react";

function Todo() {
  const current_todo = useSelector((state) => state.todo.todo);
  const current_user_status = useSelector((state) => state.todo.auth_user);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (event) => setTitle(event.target.value);

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
      id: Date.now(), // Normally, you would want the backend to assign IDs.
      title: title,
      status: false,
    };
    dispatch({ type: ADD_TODO, payload: newTodo });
    setTitle("");
    toast({
      title: "Success",
      description: "Todo added successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Input
          placeholder="Enter todo..."
          size="md"
          value={title}
          onChange={handleChange}
          mr={3}
        />
        <Button 
          colorScheme="blue" 
          onClick={handleAddTodo} 
          ml={2}>
          Add Todo
        </Button>
      </Box>

      {current_todo.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </VStack>
  );
}

export default Todo;

