import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "@/app/components/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manas Consults",
  description: "Create your way!!!",
};

export default function Home() {
  return (
    <div>
      <Main />
    </div>
  );
}
