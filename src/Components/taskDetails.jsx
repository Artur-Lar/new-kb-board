import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function TaskPage({ backlogTasks }) {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const foundTask = backlogTasks.find((task) => task.id === parseInt(id));
    setTask(foundTask);
  }, [id, backlogTasks]);

  return (
    <div className="task-page">
      {task ? (
        <div>
          <h2>{task.task}</h2>
          <p>{task.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/">Back to main page</Link>
    </div>
  );
}

export default TaskPage;
