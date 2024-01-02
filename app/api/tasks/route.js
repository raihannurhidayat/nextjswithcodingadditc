import db from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const tasks = await db.task.findMany();
  return NextResponse.json({ data: tasks });
};

export const POST = async (req) => {
  const data = await req.json();
  const task = await db.task.create({
    data: {
      content: data.task,
    },
  });

  return NextResponse.json({ message: "Created Success..", data: task });
};
