import React, { useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styled from "styled-components";

const TodosContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Todo = () => {
  const no = useRef(1);
  const [todo, setTodo] = useState([]);

  const onDel = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, check: !item.check } : item
      )
    );
  };

  const onAdd = (text) => {
    setTodo([
      ...todo,
      {
        id: no.current++,
        text,
        check: false,
      },
    ]);
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
