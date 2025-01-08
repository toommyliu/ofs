// get-users.ts
"use server";

import prisma from "@/lib/prisma";

export async function getUsers() {
  try {
    const users = await prisma.users.findMany();
    return { success: true, data: users };
  } catch (error) {
    console.log("error fetching users", error);
    return { success: false, error: "Failed to fetch users" };
  }
}
