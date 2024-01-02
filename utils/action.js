"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (FormData) => {
  const content = await FormData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};

export const deleteTask = async (FormData) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const id = FormData.get("id");
  await prisma.task.delete({
    where: {
      id,
    },
  });
  revalidatePath("/tasks");
};

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};
export const editTask = async (FormData) => {
  const id = FormData.get("id");
  const content = FormData.get("content");
  const completed = FormData.get("completed");
  console.log(completed);
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};

export const createTaskCustom = async (prevState, FormData) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const content = await FormData.get("content");
  const Task = z.object({
    content: z.string().min(5),
  });
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    console.log(error)
    return { message: "error" };
  }
};
