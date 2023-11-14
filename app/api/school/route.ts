import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const schoolData = await request.formData();
    const schoolName = schoolData.get("name");
    const schoolchineseName = schoolData.get("chineseName");
    const schoolNumber = schoolData.get("number");
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
