import React from "react";
import "./FormPage.css";

export default function FormPage3(props) {
  const handleUsage = function (e) {
    props.handleUsage(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 my-4">
      <p className="text-3xl font-semibold">
        How are you planning to use Eden?
      </p>
      <p className="mt-4 mb-10 text-gray-500">
        we'll steamline yur setup experience accordingly.
      </p>
      <div className="flex mb-2">
        <div className="card relative">
          <input
            onChange={handleUsage}
            checked
            id="card1"
            type="radio"
            name="radio"
            value="myself"
          />
          <label htmlFor="card1" className="absolute left-10 top-5">
            <img
              src="Images/myself-icon.png"
              alt=""
              className="w-max h-max mb-4"
            />
            <p className="pb-2 font-medium">For myself</p>
            <p className="opacity-60 text-sm pr-5">
              Write better. Think more clearly. Stay organized.
            </p>
          </label>
        </div>
        <div className="card relative">
          <input
            onChange={handleUsage}
            id="card2"
            type="radio"
            name="radio"
            value="team"
          />
          <label htmlFor="card2" className="absolute left-10 top-5">
            <img
              src="Images/team-icon.png"
              alt=""
              className="w-max h-max mb-4"
            />
            <p className="pb-2 font-medium">With my team</p>
            <p className="opacity-60 text-sm pr-5">
              Wikis, docs, tasks & projects, all in one place.
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}
