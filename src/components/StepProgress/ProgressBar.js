import React from "react";
import ProgressStep from "./ProgressStep";

export default function ProgressBar(props) {
  return (
    <div className="flex my-20">
      {[...Array(props.last)].map((item, index) => (
        <ProgressStep
          key={index}
          index={index}
          selected={index + 1 === props.step}
        />
      ))}
    </div>
  );
}
