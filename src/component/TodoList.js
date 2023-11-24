import TodoItem from "./TodoItem";

const TodoList = ({ todo, onToggle, onDel }) => {
  return (
    <ul className='TodoList'>
      {todo.map((item) => (
        <TodoItem key={item.id} item={item} onToggle={onToggle} onDel={onDel} />
      ))}
    </ul>
  );
};

export default TodoList;
