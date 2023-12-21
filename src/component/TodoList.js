import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  background-color: #fff;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &.on {
    background-color: #e0f7fa;
  }

  span {
    margin-right: 8px;
    cursor: pointer;
  }

  em {
    flex: 1;
    margin-right: 8px;
  }

  button {
    background-color: #f44336;
    color: #fff;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const TodoList = ({ todo, onToggle, onDel }) => {
  return (
    <ul>
      {todo.map((item) => (
        <TodoItemContainer key={item.id} className={item.done ? "on" : ""}>
          <span onClick={() => onToggle(item.id)}>&#10003;</span>
          <em>{item.title}</em>
          <button onClick={() => onDel(item.id)}>&#10799;</button>
        </TodoItemContainer>
      ))}
    </ul>
  );
};

export default TodoList;
