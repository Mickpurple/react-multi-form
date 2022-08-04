import React from "react";
import "./FormPage.css";

export default function FormPage4(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 my-4">
      <img src="Images/check-icon.png" alt="" className="w-max h-max pb-8" />
      <p className="text-3xl font-semibold">Congratulations, {props.name}!</p>
      <p className="mt-4 mb-6 text-gray-500">
        you have completed onboarding, you can start using Eden!
      </p>
    </div>
  );
}
