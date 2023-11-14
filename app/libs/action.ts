import { revalidatePath } from "next/cache";

import axios from "axios";

const postNewData = async (data: FormData) => {
  try {
    const res = await axios.post("/api/school", data);
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const postCourseData = async (data: FormData) => {
  try {
    const res = await axios.post("/api/school/course", data);
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const getCourses = async () => {
  try {
    const res = await axios.get("/api/school/course");
    // revalidatePath("/api/school/course");
    //check on revalidatePath later and implement it
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export { postNewData, postCourseData, getCourses };
