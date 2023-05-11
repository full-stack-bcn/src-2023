import { Router } from "express";
import prisma from "./prisma-client.js";
import { errorChecked } from "./utils.js";

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

router.get(
  "/:id",
  errorChecked(async (req, res) => {
    const { id } = req.params;
    const forum = await prisma.forum.findUniqueOrThrow({
      where: { id: Number(id) },
    });
    res.status(200).json(forum);
  })
);

router.put(
  "/:id",
  errorChecked(async (req, res) => {
    const { id } = req.params;
    const updatedForum = await prisma.forum.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.status(200).json(updatedForum);
  })
);

router.delete(
  "/:id",
  errorChecked(async (req, res, next) => {
    const { id } = req.params;
    const deletedForum = await prisma.forum.delete({
      where: { id: Number(id) },
    });
    res.status(200).json(deletedForum);
  })
);

// GET /forums/:id/messages
// POST /forums/:id/messages

export default router;
