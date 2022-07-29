import React, { useState } from "react";
import FormHeader from "./FormHeader";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import { ProgressBar } from "react-step-progress-bar";

function FormMain() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState("");

  const ShowPage = function () {
    switch (step) {
      case 1:
        return <FormPage1 />;
      case 2:
        return <FormPage2 />;
      default:
        return <h1>Thanks for filling the form!</h1>;
    }
  };

  const NextStep = function () {
    setStep(step + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <FormHeader />
      <ProgressBar
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        percent={75}
      />
      {ShowPage()}
      <button
        hidden={step > 3}
        onClick={NextStep}
        className="bg-primary text-white p-2 w-96 rounded-md text-"
      >
        Create Workspace
      </button>
    </div>
  );
}

export default FormMain;
