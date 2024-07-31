import React from "react";

const UserCard = ({ firstName, position, userImg }) => {
  return (
    <div className="flex items-center gap-4 p-5 border border-gray-900 rounded-xl mb-4 shadow-lg mt-4">
      <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
      <div>
        <h1>{firstName}</h1>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default UserCard;
