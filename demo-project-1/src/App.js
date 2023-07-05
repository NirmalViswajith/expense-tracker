import React, { useState } from "react";
import FormInput from "./Components/FormInput";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import GoalList from "./Components/GoalList";

function App() {
  const [careerGoals, setCareerGoals] = useState([
    { text: "Learning Frontend", id: "g1" },
    { text: "Learning Backend", id: "g2" },
    { text: "Learning Devops", id: "g3" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCareerGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteListHandler = (goalId) => {
    setCareerGoals((prevGoal) => prevGoal.filter((goal) => goal.id !== goalId));
  };

  let content = <p className="d-flex justify-content-center">No Goals has been found. May be add one?</p>;
  if (careerGoals.length > 0) {
    content = <GoalList items={careerGoals} onDeleteItem={deleteListHandler} />;
  }

  return (
    <div>
      <Container >
        <section>
          <FormInput onAddGoal={addGoalHandler} />
        </section>
        <section>{content}</section>
      </Container>
    </div>
  );
}

export default App;
