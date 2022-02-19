import React, { useState } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card";
import styles from "./CourseGoalForm.module.css";

const CourseGoalForm = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalChaneHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredGoal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredGoal.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const newGoalData = {
      title: enteredGoal,
      id: Math.random(),
    };

    props.onAddGoal(newGoalData);
    setEnteredGoal("");
  };

  return (
    <Card>
      <form className={styles["goal-form"]} onSubmit={submitHandler}>
        <div className={`${styles["goal-form"]} ${!isValid && styles.invalid}`}>
          <label>Course Goal</label>
        </div>
        <div className={`${styles["goal-form"]} ${!isValid && styles.invalid}`}>
          <input type="text" value={enteredGoal} onChange={goalChaneHandler} />
        </div>
        <div className="goal-form__actions">
          <Button type="submit">Add Goal</Button>
        </div>
      </form>
    </Card>
  );
};

export default CourseGoalForm;
