import React, { useEffect, useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styled from "styled-components";
import axios from "axios";

const TodosContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #e9f3ff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Todo = () => {
  const no = useRef(1);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchTodoItems();
  }, []);

  const fetchTodoItems = async () => {
    try {
      const response = await axios.get("/api/todos");
      setTodo(response.data.todos);
    } catch (error) {
      console.error("Error fetch todo item : ", error);
    }
  };

  const onDel = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodo(todo.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error delete todo item : ", error);
    }
  };

  const onToggle = async (id) => {
    const targetTodo = todo.find((item) => item.id === id);
    const updatedTodos = todo.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );

    try {
      // 서버에 변경된 상태를 반영
      const response = await axios.put(`/api/todos/${id}`, {
        ...targetTodo,
        done: !targetTodo.done,
      });

      if (response.status === 200) {
        // 서버에서 정상적으로 처리되었다면
        setTodo(updatedTodos);
      } else {
        throw new Error("Server Error");
      }
    } catch (error) {
      console.error("Error updating todo item:", error);
    }
  };

  const onAdd = async (text) => {
    try {
      const formData = new FormData();
      formData.append(
        "todoData",
        JSON.stringify({
          id: no.current++,
          title: text,
          done: false,
        })
      );

      const response = await axios.post("/api/todos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setTodo([
        ...todo,
        { ...response.data, title: JSON.parse(response.data.title).title },
      ]);
    } catch (error) {
      console.error("Error adding todo item:", error);
    }
  };

  return (
    <TodosContainer>
      <h1>ToDoList</h1>
      <TodoForm onAdd={onAdd} />
      <TodoList todo={todo} onToggle={onToggle} onDel={onDel} />
    </TodosContainer>
  );
};

export default Todo;
