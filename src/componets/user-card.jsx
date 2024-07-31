import React from "react";

const UserCard = ({ userimg, firstname }) => {
  return (
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full" src="{userimg}" alt="" />
      <div>
        <h1>{name}</h1>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default UserCard;
