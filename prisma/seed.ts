import { PrismaClient } from '@prisma/client'
import { hash } from "argon2";

/*
model User {
  id        Int      @id @default(autoincrement())
  firstName String   @map("first_name")
  lastName  String   @map("last_name")
  email     String   @unique
  username  String   @map("display_name")
  password  String
  isAdmin   Boolean  @default(false) @map("is_admin")
  approved  Boolean  @default(false)
  createdAt DateTime @default(now())
}
  */

const prisma = new PrismaClient()

async function main() {
    const users = [
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            username: 'johndoe',
            password: await hash('password123'),
            isAdmin: true,
            approved: true,
        },
        {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            username: 'janesmith',
            password: await hash('password456'),
            isAdmin: false,
            approved: true,
        },
    ]

    for (const user of users) {
        await prisma.users.create({ data: user })
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })