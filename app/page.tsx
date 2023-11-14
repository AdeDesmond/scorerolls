import AddScores from "@/components/AddScores";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import TopStudents from "@/components/TopStudents";
import Image from "next/image";

export default function Home() {
  return (
    <main className="shadow-lg bg-white flex-grow rounded-lg overflow-hidden p-4">
      <Header />
      <Banner />
      <TopStudents />
      <AddScores />
    </main>
  );
}
