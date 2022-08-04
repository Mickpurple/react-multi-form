import React from "react";
import "./Progress.css";

export default function ProgressStep(props) {
  return (
    <div className={"stepBlock" + (props.selected ? " selected" : "")}>
      <div className="circleWrapper">
        <div className="circle">{props.index + 1}</div>
      </div>
    </div>
  );
}
