import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, title: "りんご", isDone: false },
    { id: 1, title: "バナナ", isDone: true },
    { id: 2, title: "メロン", isDone: false },
  ]);

  const [input, setInput] = useState("");

  const checkTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onChangeText = (e) => {
    setInput(e.target.value);
  };

  const addTodos = () => {
    if (input.trim() === "") return; // 空文字チェック
    const newTodo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
      title: input,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInput(""); // 入力欄をクリア
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => checkTodo(todo.id)}
              />
              {todo.title}
            </label>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={onChangeText}
      />
      <button onClick={addTodos}>追加</button>
    </>
  );
}

export default App;
