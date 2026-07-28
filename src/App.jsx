import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setTodos([...todos, { id: Date.now(), text: input.trim() }]);
    setInput('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="header">
        <div>
          <p className="eyebrow">Deployment Demo 2</p>
          <h1>Today's Plan</h1>
        </div>
        <div className="badge">{todos.length} tasks</div>
      </div>

      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.length === 0 ? (
          <li className="empty">No tasks yet. Add one to get started.</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button className="done-btn" onClick={() => removeTodo(todo.id)}>
                Done
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
