import { PrismaClient } from "@prisma/client";

console.log("Creando Prisma Client");

const prisma = new PrismaClient();
export default prisma;
