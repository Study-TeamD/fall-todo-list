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

const TodoItem = ({ item, onToggle, onDel }) => {
  const { id, check } = item;
  const text = item.title;

  return (
    <TodoItemContainer className={check ? "on" : ""}>
      <span onClick={() => onToggle(id)}>&#10003;</span>
      <em>{text}</em>
      <button onClick={() => onDel(id)}>&#10799;</button>
    </TodoItemContainer>
  );
};

export default TodoItem;
