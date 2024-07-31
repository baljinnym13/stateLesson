import React, { useState } from "react";

const Input = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <input
        className="border border-gray-500"
        type="text"
        onChange={handleChange}
      />
      <p>Search value: {searchValue}</p>
      <button className="border-gray-500 rounded-md">click</button>
    </div>
  );
};

export default Input;
