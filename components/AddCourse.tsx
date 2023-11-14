"use client";
import { useState } from "react";
import React from "react";
import { postCourseData } from "@/app/libs/action";

export default function AddCourse() {
  const [course, setCourse] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const courseData = new FormData();
    courseData.append("course", course);
    courseData.append("courseCode", courseCode);
    const response = await postCourseData(courseData);
    if (response) {
      setCourse("");
      setCourseCode("");
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <form
      action=""
      className="text-center flex flex-col"
      onSubmit={handleSubmit}
    >
      <label htmlFor="course" className="mb-2 text-slate-400 font-semibold">
        Course
      </label>
      <div className=" gap-x-2">
        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          type="text"
          name="course"
          id="course"
          placeholder="Enter the course"
          className="outline-none border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-slate-900 focus:ring-offset-1 transition-all"
        />
        <label
          htmlFor="courseCode"
          className="mb-2 text-slate-400 font-semibold"
        >
          CourseCode
        </label>
        <input
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          type="text"
          name="course"
          id="course"
          placeholder="Enter the course code"
          className=" mb-2 outline-none border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-slate-900 focus:ring-offset-1 transition-all"
        />

        <button className="bg-slate-800 px-5 py-2 text-slate-300 shadow-md hover:shadow-sm rounded-lg focus:scale-95 hover:scale-105 transition-all hover:font-bold hover:text-slate-400 ">
          Submit
        </button>
      </div>
    </form>
  );
}
