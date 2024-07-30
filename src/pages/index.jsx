import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/components/input";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ userImg, firstName, position }) {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl font-bold text-gray-950">
        User Find application
      </h1>
      <div className="flex flex-col gap-5 mt-6">
        <Input />
        <p>List</p>
      </div>
    </main>
  );
}
