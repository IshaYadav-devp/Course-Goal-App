import React, { useState } from "react";

import Goals from "./Components/Goals/Goals";
import CourseGoalForm from "./Components/NewGoals/CourseGoalForm";
import "./App.css";

const Dummy_Goal = [
  {
    id: "g1",
    title: "Finish the course!",
  },
  {
    id: "g2",
    title: "Learn and Practice",
  },
];

function App() {
  const [newGoal, setNewGoal] = useState(Dummy_Goal);

  const addGoalHandler = (goal) => {
    setNewGoal((prevGoal) => {
      const updatedGoal = [...prevGoal];
      updatedGoal.unshift(goal);
      return updatedGoal;
    });
  };

  const deleteGoalHandler = (goalId) => {
    setNewGoal((prevGoal) => {
      const updatedGoal = prevGoal.filter((goal) => goal.id !== goalId);
      return updatedGoal;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (newGoal.length > 0) {
    content = <Goals goals={newGoal} onDeleteGoal={deleteGoalHandler} />;
  }

  return (
    <div className="App">
      <CourseGoalForm onAddGoal={addGoalHandler} />
      {content}
    </div>
  );
}

export default App;
