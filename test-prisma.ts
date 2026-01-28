import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Fetch all users (assuming you have a User table)
    const users = await prisma.user.findMany();
    console.log("Users from DB:", users);

    // Or just check a simple raw query
    const now = await prisma.$queryRaw`SELECT NOW()`;
    console.log("DB Time:", now);
  } catch (error) {
    console.error("Prisma error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
