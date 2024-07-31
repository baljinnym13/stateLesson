import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/componets/input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl fond-bold">User find application</h1>
      <Input />
      <p>list</p>
    </main>
  );
}
