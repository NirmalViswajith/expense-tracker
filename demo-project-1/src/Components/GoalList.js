import React from "react";
import ListItem from "./ListItem";

const GoalList = (props) => {
  const list = props.items.map((goal) => (
    <ListItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
      {goal.text}
    </ListItem>
  ));
  return (
    <div>
      <h1>hi</h1>
      <ul style={{ fontWeight: "bold" }}>{list}</ul>
    </div>
  );
};

export default GoalList;
