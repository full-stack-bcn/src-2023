import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

// const newMovie = await prisma.movie.create({
//   data: {
//     title: "The Incredibles",
//     duration: 124,
//     year: 2004,
//   }
// })

const newTag = await prisma.tag.create({
  data: {
    tag: "animation",
  }
})

console.log(newTag);
