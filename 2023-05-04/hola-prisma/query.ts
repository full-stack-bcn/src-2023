import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

console.log(
  await prisma.movie.aggregate({
    _max: {
      year: true,
      duration: true,
    }
  })
);
