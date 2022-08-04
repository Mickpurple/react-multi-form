import React, { useState } from "react";
import FormHeader from "./FormHeader";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";
import FormPage4 from "./FormPage4";
import ProgressBar from "../StepProgress/ProgressBar";

export default function FormMain(props) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    username: "",
    workspace: "",
    url: "",
    usage: "",
  });

  const ShowPage = function () {
    switch (step) {
      case 1:
        return (
          <FormPage1 handleName={handleName} handleUsername={handleUsername} />
        );
      case 2:
        return (
          <FormPage2 handleWorkspace={handleWorkspace} handleURL={handleURL} />
        );
      case 3:
        return <FormPage3 handleUsage={handleUsage} />;
      case 4:
        return <FormPage4 name={data.username} />;
      default:
        return <h1>Thanks for filling the form!</h1>;
    }
  };

  const NextStep = function () {
    setStep(step + 1);
  };

  const handleName = function (val) {
    setData({ ...data, name: val });
    console.log(data);
  };
  const handleUsername = function (val) {
    setData({ ...data, username: val });
    console.log(data);
  };
  const handleWorkspace = function (val) {
    setData({ ...data, workspace: val });
    console.log(data);
  };
  const handleURL = function (val) {
    setData({ ...data, url: val });
    console.log(data);
  };
  const handleUsage = function (val) {
    setData({ ...data, usage: val });
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center">
      <FormHeader />
      <ProgressBar step={step} last={4} />
      {ShowPage()}
      {step < 4 ? (
        <button
          onClick={NextStep}
          className="bg-primary text-white p-2 py-3 w-96 rounded-md text-"
        >
          Create Workspace
        </button>
      ) : (
        <button className="bg-primary text-white p-2 py-3 w-96 rounded-md text-">
          Launch Eden
        </button>
      )}
    </div>
  );
}
