import mongoose from "mongoose";
import { Course } from "./courseModel";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    chinesename: {
      type: String,
      required: true,
    },
    studentNumber: {
      type: String,
      required: true,
    },
    courses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Course,
    },
  },
  { timestamps: true }
);

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
export { Student };
