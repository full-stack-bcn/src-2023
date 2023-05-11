import { Request, Router } from "express";
import prisma from "./prisma-client.js";
import { errorChecked } from "./utils.js";
import messagesRouter from "./messages.js";

const router = Router();

router.get(
  "/",
  errorChecked(async (req, res) => {
    const result = await prisma.forum.findMany({});
    res.status(200).json({ forums: result, ok: true });
  })
);

router.post(
  "/",
  errorChecked(async (req, res) => {
    const newForum = await prisma.forum.create({ data: req.body });
    res.status(200).json({ newForum, ok: true });
  })
);

export interface RequestWithForumId extends Request {
  forumId: number;
}
router.use("/:id", async (req: RequestWithForumId, res, next) => {
  const { id } = req.params;
  req.forumId = Number(id);
  next();
});

router.get(
  "/:id",
  errorChecked(async (req: RequestWithForumId, res) => {
    const forum = await prisma.forum.findUniqueOrThrow({
      where: { id: req.forumId },
    });
    res.status(200).json(forum);
  })
);

router.put(
  "/:id",
  errorChecked(async (req: RequestWithForumId, res) => {
    const updatedForum = await prisma.forum.update({
      where: { id: req.forumId },
      data: req.body,
    });
    res.status(200).json(updatedForum);
  })
);

router.delete(
  "/:id",
  errorChecked(async (req: RequestWithForumId, res) => {
    const deletedForum = await prisma.forum.delete({
      where: { id: req.forumId },
    });
    res.status(200).json(deletedForum);
  })
);

router.use("/:id/messages", messagesRouter);

export default router;
