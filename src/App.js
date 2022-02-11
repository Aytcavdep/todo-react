import { useState } from "react";
import ToDOList from "./ToDOList";
import TForm from "./TForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleChangeComplete = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id == id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  const date = new Date();
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;

  return (
    <div className="App">
      <header>
        <h1>
          Список задач {dayOfMonth}.{month}.{year}
        </h1>
      </header>
      <TForm addTask={addTask} />
      <h1>Задачи: {todos.length}</h1>
      {todos.map((todo) => {
        if (!todo.complete) {
          return (
            <ToDOList
              todo={todo}
              key={todo.id}
              removeTask={removeTask}
              handleChangeComplete={handleChangeComplete}
            />
          );
        }
      })}

      {todos.map((todo) => {
        if (todo.complete) {
          return (
            <ToDOList
              todo={todo}
              key={todo.id}
              removeTask={removeTask}
              handleChangeComplete={handleChangeComplete}
            />
          );
        }
      })}
    </div>
  );
}
export default App;
