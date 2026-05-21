import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./features/taskSlice";
import "./App.css";

function App() {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.taskList);

  const handleAddTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty");
      return;
    }

    dispatch(addTask(task));

    setTask("");
  };

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task Manager</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={handleAddTask}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
