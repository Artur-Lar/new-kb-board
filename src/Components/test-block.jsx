import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BlokDropdown = function ({ title, initialTasks = [] }) {
  const [backlogTasks, setBacklogTasks] = useState([
    "Login page – performance issues",
    "Sprint bugfix",
  ]);
  const [readyTasks, setReadyTasks] = useState([
    "Shop page – performance issues",
    "Checkout bugfix",
    "Shop bug1",
    "Shop bug2",
    "Shop bug3",
    //"Shop bug4",
    //"Shop bug5",
    //"Shop bug6",
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

  const [tasks, setTasks] = useState([...initialTasks]);
  const [newTask, setNewTask] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const [finishedTaskCount, setFinishedTaskCount] = useState(
    finishedTasks.length
  );
  const [activeTaskCount, setActiveTaskCount] = useState(
    inProgressTasks.length
  );

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const updatedBacklogTasks = [...backlogTasks, newTask];
      setBacklogTasks(updatedBacklogTasks);
      setTasks(updatedBacklogTasks);
      setNewTask("");
    }
    setIsInputActive(false);
  };

  const handleToggleInput = () => {
    setIsInputActive(!isInputActive);
  };

  const [showBacklogDropdown, setShowBacklogDropdown] = useState(false);
  const [showReadyDropdown, setShowReadyDropdown] = useState(false);
  const [showInProgressDropdown, setShowInProgressDropdown] = useState(false);

  const moveTask = (task, source, destination, setSource, setDestination) => {
    const updatedSource = source.filter((item) => item !== task);
    const updatedDestination = [...destination, task];
    setSource(updatedSource);
    setDestination(updatedDestination);

    if (destination === finishedTasks) {
      setFinishedTaskCount(updatedDestination.length);
    } else if (destination === inProgressTasks) {
      setActiveTaskCount(updatedDestination.length);
    }
  };

  return (
    <div className="container">
      <div className="block-task">
        <p>Backlog</p>
        <ul>
          {backlogTasks.map((task, index) => (
            <li key={index}>
              <NavLink to="/task">{task}</NavLink> {/* Добавлен Link */}
            </li>
          ))}
        </ul>
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
      </div>
      <div className="block-task">
        <p>Ready</p>
        <ul>
          {readyTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        {backlogTasks.length > 0 && (
          <div className="dropdown">
            <button
              className="btn-add"
              onClick={() => setShowBacklogDropdown(!showBacklogDropdown)}
            >
              + Add task
            </button>
            {showBacklogDropdown && (
              <ul className="dropdown-list">
                {backlogTasks.map((task, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      moveTask(
                        task,
                        backlogTasks,
                        readyTasks,
                        setBacklogTasks,
                        setReadyTasks
                      )
                    }
                  >
                    {task}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="block-task">
        <p>In Progress</p>
        <ul>
          {inProgressTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        {readyTasks.length > 0 && (
          <div className="dropdown">
            <button
              className="btn-add"
              onClick={() => setShowReadyDropdown(!showReadyDropdown)}
            >
              + Add task
            </button>
            {showReadyDropdown && (
              <ul className="dropdown-list">
                {readyTasks.map((task, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      moveTask(
                        task,
                        readyTasks,
                        inProgressTasks,
                        setReadyTasks,
                        setInProgressTasks
                      )
                    }
                  >
                    {task}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="block-task">
        <p>Finished</p>
        <ul>
          {finishedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        {inProgressTasks.length > 0 && (
          <div className="dropdown">
            <button
              className="btn-add"
              onClick={() => setShowInProgressDropdown(!showInProgressDropdown)}
            >
              + Add task
            </button>
            {showInProgressDropdown && (
              <ul className="dropdown-list">
                {inProgressTasks.map((task, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      moveTask(
                        task,
                        inProgressTasks,
                        finishedTasks,
                        setInProgressTasks,
                        setFinishedTasks
                      )
                    }
                  >
                    {task}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <footer>
        <div className="footer-content">Active tasks: {activeTaskCount}</div>
        <div className="footer-content">
          Finished tasks: {finishedTaskCount}
        </div>
        <div className="footer-content">
          Kanban board by Artur Larionov, 2023
        </div>
      </footer>
    </div>
  );
};

export default BlokDropdown;
