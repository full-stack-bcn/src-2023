import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const f1 = await prisma.forum.create({
  data: { name: "Backend Questions" },
});
console.log(`Created forum ${f1.name} (${f1.id})`);

const f2 = await prisma.forum.create({
  data: { name: "Frontend Questions" },
});
console.log(`Create forum ${f2.name} (${f2.id})`);

const user = await prisma.user.create({
  data: {
    nick: "pauek",
    admin: true,
    fullName: "Pau Fernández",
  },
});
console.log(`Created user ${user.nick} (${user.id})`);

await prisma.message.createMany({
  data: [
    {
      text: "This is the first message (automated)",
      forumId: f1.id,
      userId: user.id,
    },
    {
      text: "This is the second message...",
      forumId: f1.id,
      userId: user.id,
    }
  ],
});
