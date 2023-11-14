import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/app/libs/db/dbConfig/mongoConnectDB";
import { Course } from "@/app/models/courseModel";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("course");
    const courseCode = formData.get("courseCode");
    const newCourse = await Course.create({ name, courseCode });
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const coursesData = await Course.find({});
    return NextResponse.json({ courses: coursesData }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
