import AddCourse from "@/components/AddCourse";
import React from "react";

export default function ClassesPage() {
  return (
    <main className="shadow-lg bg-white flex-grow rounded-lg overflow-hidden px-6 flex gap-x-4">
      <div className="w-[30%] mt-6">
        <AddCourse />
      </div>
      <div className="flex-grow mt-6 bg-gray-200 rounded-lg shadow-md mb-4">
        this will be the display of the different student names
      </div>
    </main>
  );
}
