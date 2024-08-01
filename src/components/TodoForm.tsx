import { Dispatch, SetStateAction, useState } from "react";
import TodoService from "../TodoService";
import TodoTypes from "../todo";

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

function TodoForm({ setTodos }: PropTypes) {
  const [newTodoText, setNewTodoText] = useState<string>("");
  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      const newTodo = TodoService.addTodos(newTodoText.trim());
      setTodos((prevTodo) => [...prevTodo, newTodo]);
      setNewTodoText("");
    }
  };

  return (
    <div className="inputForm">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus={true}
        placeholder="Add a new task"
      />
      <button className="add" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}

export default TodoForm;
