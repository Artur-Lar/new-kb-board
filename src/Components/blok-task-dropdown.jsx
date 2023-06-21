import React, { useState } from "react";

const BlokDropdown = function ({
  title,
  initialTasks,
  nextTasks,
  setNextTasks,
}) {
  const [taskList, setTaskList] = useState(initialTasks || []);
  const [backlogTasks, setBacklogTasks] = useState([
    "Login page – performance issues",
    "Sprint bugfix",
  ]);
  const [ReadyList, setReadyList] = useState([
    "Shop page – performance issues",
    "Checkout bugfix",
    "Shop bug1",
    "Shop bug2",
    "Shop bug3",
    "Shop bug4",
    "Shop bug5",
    "Shop bug6",
    "Shop page – performance issues",
  ]);
  const [inProgressTasks, setInProgressTasks] = useState([
    "User page – performance issues",
    "Auth bugfix",
  ]);
  const [finishedTasks, setFinishedTasks] = useState([
    "Main page – performance issues",
    "Main page bugfix",
  ]);
  const isAddTaskActive = ReadyList.length > 0;
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectTask = (task) => {
    setTaskList([...taskList, task]);
    setBacklogTasks(backlogTasks.filter((item) => item !== task));
    setReadyList(ReadyList.filter((item) => item !== task));
    setNextTasks([...nextTasks, task]);
    setShowDropdown(false);
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className="block-task">
        <ul>
          <p>{title}</p>
          {taskList.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
          {isAddTaskActive && (
            <div className="dropdown">
              <button className="btn-add" onClick={handleToggleDropdown}>
                + Add cart
              </button>
              {showDropdown && (
                <ul className="dropdown-list">
                  {backlogTasks.map((task, index) => (
                    <li key={index} onClick={() => handleSelectTask(task)}>
                      {task}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </ul>
      </div>

      <div className="block-task">
        <ul>
          <p>{title}</p>
          {taskList.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
          {isAddTaskActive && (
            <div className="dropdown">
              <button className="btn-add" onClick={handleToggleDropdown}>
                + Add cart
              </button>
              {showDropdown && (
                <ul className="dropdown-list">
                  {ReadyList.map((task, index) => (
                    <li key={index} onClick={() => handleSelectTask(task)}>
                      {task}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlokDropdown;
