import Input from "@/components/input";
import UserCard from "@/components/userCard";
import { useState } from "react";
const profiles = [
  {
    id: 1,
    firstName: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
    phone: "99011090",
    jobTitle: "Software Engineer",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    firstName: "Jane Smith",
    age: 30,
    email: "jane.smith@example.com",
    address: "456 Oak St, Springfield, IL",
    phone: "99011091",
    jobTitle: "Project Manager",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    firstName: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    address: "789 Pine St, Springfield, IL",
    phone: "99011092",
    jobTitle: "UX Designer",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    firstName: "Bob Brown",
    age: 35,
    email: "bob.brown@example.com",
    address: "101 Maple St, Springfield, IL",
    phone: "99011093",
    jobTitle: "Product Owner",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    firstName: "Charlie Davis",
    age: 22,
    email: "charlie.davis@example.com",
    address: "202 Elm St, Springfield, IL",
    phone: "99011094",
    jobTitle: "Marketing Specialist",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState(profiles);

  const handleChange = (text) => {
    setSearchValue(text);
    const findUser = profiles.filter((user) =>
      user.firstName.toLowerCase().includes(text.toLowerCase())
    );
    setUsers(findUser);
  };
  const handleClick = (e) => {
    console.log("click");

    setUsers(null);
  };
  const handleClickRes = (e) => {
    console.log("click");

    setUsers(profiles);
  };

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl fond-bold">User find application</h1>
      <Input handleChange={handleChange} />
      <button
        className="border border-black rounded-md shadow-md px-1 mb-4 mt-4"
        onClick={handleClick}
      >
        clear
      </button>
      <button
        className="border border-black rounded-md shadow-md p-1 mb-4"
        onClick={handleClickRes}
      >
        view
      </button>
      <p>search value: {searchValue}</p>
      {users?.map((user) => (
        <UserCard
          userImg={user.imageUrl}
          firstName={user.firstName}
          position={user.address}
        />
      ))}
      {!users && <p>ХООСОН</p>}
    </main>
  );
}
