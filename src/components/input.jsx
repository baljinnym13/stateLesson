import React, { useState } from "react";

const Input = () => {
  const [searchValue, setSearchValue] = useState("");
  const [Value, setValue] = useState("");

  const handleChange = (e) => {
    console.log("e.target.value", e.target.value);
    setSearchValue(e.target.value);
  };
  const handleClick = (e) => {
    console.log("click");
    setSearchValue(Value);
  };
  return (
    <div>
      <input className="border-gray-400" type="text" onChange={handleChange} />
      <p>search value: {searchValue}</p>
      <button onClick={handleClick}>clear</button>
    </div>
  );
};

export default Input;
