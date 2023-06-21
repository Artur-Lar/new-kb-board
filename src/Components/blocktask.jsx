import React, { useState } from "react";

const BlockTask = function ({ title, initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
    setIsInputActive(false);
  };

  const handleToggleInput = () => {
    setIsInputActive(!isInputActive);
  };

  return (
    <div>
      <div className="block-task">
        <ul>
          <p>{title}</p>
          <li>
            <a href="http://www.youtube.com">Task 1</a>
          </li>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
          {isInputActive ? (
            <div>
              <input
                className="input"
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button className="btn-submit" onClick={handleAddTask}>
                Submit
              </button>
            </div>
          ) : (
            <div>
              <button className="btn-add" onClick={handleToggleInput}>
                + Add cart
              </button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlockTask;
