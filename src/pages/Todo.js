import React, { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    // push
    // concat
    // ...
    const added = todos.concat([{ id: todos.length, text }]);
    setTodos(added);

    // setTodos([...todos, { text }]);
  };

  console.log("todo", todos);

  return (
    <div>
      {todos.map((todo) => (
        <div>{todo.text}</div>
      ))}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Submit</button>
    </div>
  );
};

export default Todo;
