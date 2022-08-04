import React from "react";

export default function FormPage2(props) {
  const handleWorkspace = function (e) {
    props.handleWorkspace(e.target.value);
  };

  const handleURL = function (e) {
    props.handleURL(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 my-4">
      <p className="text-3xl font-semibold">
        Let's set up a home for all your work
      </p>
      <p className="mt-4 mb-10 text-gray-500">
        You can always create another workspace later.
      </p>
      <div className="w-96">
        <p className="text-sm">Workspace Name</p>
      </div>
      <input
        onChange={handleWorkspace}
        type="text"
        placeholder="Basement"
        className="border rounded-md mt-2 mb-4 p-2 w-96 h-10"
      />
      <div className="w-96 flex">
        <p className="text-sm">Workspace URL </p>
        <p className="text-sm font-light text-gray-400 px-1">(optional)</p>
      </div>
      <div className="w-96 flex">
        <input
          disabled
          type="text"
          placeholder="www.eden.com/"
          className="bg-slate-50 border border-r-0 rounded-md rounded-r-none mt-2 mb-4 p-2 h-10 w-2/3"
        />
        <input
          onChange={handleURL}
          type="text"
          placeholder="Example"
          className="border rounded-md rounded-l-none mt-2 mb-4 p-2 h-10 w-full"
        />
      </div>
    </div>
  );
}
