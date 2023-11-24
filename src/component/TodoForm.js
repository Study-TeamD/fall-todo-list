import React, { useRef, useState } from "react";
import styled from "styled-components";

const TodoFormContainer = styled.form`
  display: flex;
  margin-top: 20px;

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
  }

  button {
    padding: 8px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const TodoForm = ({ onAdd }) => {
  const textRef = useRef("");
  const [text, setText] = useState("");
  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) return;
    onAdd(text);
    setText("");
    textRef.current.focus();
  };

  return (
    <TodoFormContainer onSubmit={onSubmit}>
      <input type='text' value={text} onChange={changeInput} ref={textRef} />
      <button type='submit'>Add</button>
    </TodoFormContainer>
  );
};

export default TodoForm;
