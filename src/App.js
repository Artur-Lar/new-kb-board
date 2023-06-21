import "./style.css";
import "typeface-roboto";
import "./styles/style-block-tasks.css";
import "./styles/style-full-task.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import KanbanBoard from "./Components/test-block";
import EmptyPage from "./Components/EmptyPage";

const App = () => {
  return (
    <Router>
      <div className="blocks">
        <Routes>
          <Route path="/" element={<KanbanBoard />} />
          <Route path="/task" element={<EmptyPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
