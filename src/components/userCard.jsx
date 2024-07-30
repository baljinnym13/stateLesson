import React from "react";

const UserCard = () => {
  return (
    <div className="flex items-center gap-4 p-5">
      <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
      <div>
        <h1>{firstName}</h1>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default UserCard;
