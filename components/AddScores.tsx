"use client";

import { useState, useEffect } from "react";
import { postNewData, getCourses } from "@/app/libs/action";
import React from "react";

interface CourseProps {
  courses: {
    courses: any[];
  };
}

export default function AddScores() {
  const [courses, setCourses] = useState<CourseProps | undefined>();
  const [name, setName] = useState("");
  const [chineseName, setChineseName] = useState("");
  const [number, setNumber] = useState("");
  console.log(courses);
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const studentData = new FormData();
    studentData.append("name", name);
    studentData.append("chineseName", chineseName);
    studentData.append("number", number);
    await postNewData(studentData);
    setName("");
    setChineseName("");
    setNumber("");
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourses();
      setCourses(data);
    };
    fetchData();
  }, []);
  return (
    <main className="w-full">
      <form
        onSubmit={submitHandler}
        action=""
        className="flex items-center gap-x-2 justify-center relative"
      >
        <div className="flex flex-col">
          <label
            htmlFor="Course"
            className="text-center font-semibold text-gray-500"
          >
            Course Code
          </label>
          <select
            name="Course"
            id="Course"
            className="outline-none focus:ring focus:ring-slate-900 focus:ring-offset-1 rounded-lg border border-slate-300 px-3 py-[.65rem] transition-all mt-2 w-[8rem] bg-white"
          >
            {!!courses &&
              courses?.courses?.map((course: any) => (
                <option key={course._id} value={course._id}>
                  {course.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-center font-semibold text-gray-500"
          >
            English Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="outline-none focus:ring focus:ring-slate-900 focus:ring-offset-1 rounded-lg border border-slate-300 px-3 py-2 transition-all mt-2 placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-center font-semibold text-gray-500"
          >
            Chinese Name
          </label>
          <input
            value={chineseName}
            onChange={(e) => setChineseName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your chinese name"
            className="outline-none focus:ring focus:ring-slate-900 focus:ring-offset-1 rounded-lg border border-slate-300 px-3 py-2 transition-all mt-2 placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="number"
            className="text-center font-semibold text-gray-500"
          >
            Number
          </label>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            name="number"
            id="number"
            placeholder="Enter your number"
            className="outline-none focus:ring focus:ring-slate-900 focus:ring-offset-1 rounded-lg border border-slate-300 px-3 py-2 transition-all mt-2 placeholder:text-sm"
          />
        </div>
        <button className="absolute top-[6rem] right-[50%] bg-slate-800 px-5 py-2 text-slate-300 shadow-md hover:shadow-sm rounded-lg focus:scale-95 hover:scale-105 transition-all hover:font-bold hover:text-slate-400 ">
          Submit
        </button>
      </form>
    </main>
  );
}
