import React from "react";

function FormPage1() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 my-4">
      <p className="text-3xl font-semibold">Welcome! First things first...</p>
      <p className="mt-4 mb-10 text-gray-500">
        You can always change them later.
      </p>
      <div className="w-96">
        <p className="text-sm">Full Name</p>
      </div>
      <input
        type="text"
        placeholder="Dustin Henderson"
        className="border rounded-md mt-2 mb-4 p-2 w-96 h-10"
      />
      <div className="w-96">
        <p className="text-sm">Display Name</p>
      </div>
      <input
        type="text"
        placeholder="Dusty-Bun"
        className="border rounded-md mt-2 mb-4 p-2 w-96 h-10"
      />
    </div>
  );
}

export default FormPage1;
