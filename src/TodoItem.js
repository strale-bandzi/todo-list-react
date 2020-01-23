import React from "react";
import "./styles.css";

function TodoItem(props) {
  const completed = {
    fontStyle: "italic",
    color: "maroon",
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">
      <p style={props.item.completed ? completed : null}>
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        {props.item.text}{" "}
      </p>
    </div>
  );
}

export default TodoItem;
