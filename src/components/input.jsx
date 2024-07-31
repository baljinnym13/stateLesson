import React, { useState } from "react";

const Input = ({ handleChange }) => {
  const changeValue = (e) => {
    console.log("e.target.value", e.target.value);
    handleChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <input className="border-gray-400" type="text" onChange={changeValue} />
    </div>
  );
};

export default Input;
