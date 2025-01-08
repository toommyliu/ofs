// create-user.ts
"use server"

import prisma from "@/lib/prisma"

export async function createUser() {
  try {
    const users = await prisma.users.create({
      data: {
        email: "t@t.com",
        approved: false,
        createdAt: new Date(),
        firstName: "tommy",
        isAdmin: true,
        lastName: "t",
        password: "password",
        username: "tommyt",
      },
    })
    return { success: true, data: users }
  } catch (error) {
    console.log("error creating user", error)
    return { success: false, error: 'Failed to create user' }
  }
}