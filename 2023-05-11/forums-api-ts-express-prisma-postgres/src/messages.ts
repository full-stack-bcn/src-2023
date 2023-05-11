import { Router } from "express";
import { errorChecked } from "./utils.js";
import prisma from "./prisma-client.js";
import { RequestWithForumId } from "./forums.js";

const router = Router();

router.get(
  "/",
  errorChecked(async (req: RequestWithForumId, res) => {
    const messages = await prisma.message.findMany({
      where: { forumId: req.forumId },
    });
    res.status(200).json(messages);
  })
);

router.post(
  "/",
  errorChecked(async (req: RequestWithForumId, res) => {
    const newMessage = await prisma.message.create({
      data: { ...req.body, forumId: req.forumId },
    });
    res.status(200).json(newMessage);
  })
);

export default router;
