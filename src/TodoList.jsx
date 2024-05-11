import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, id: Date.now() }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <div className="todo-box">
        <h1>TODO</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <button className="task-checkbox"></button>
              <label htmlFor={`task-${task.id}`} className="task-label">
                {task.text}

                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-task"
                >
                  &#10005;
                </button>
              </label>
            </li>
          ))}
        </ul>
        <hr />
        <div className="add-task">
          <input
            type="text"
            placeholder="Add task here..."
            value={newTask}
            onChange={handleInputChange}
            className="task-input"
          />
          <button onClick={addTask} className="add-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
