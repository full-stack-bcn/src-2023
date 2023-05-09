import { Router } from "express";
import prisma from "./prisma-client.js";

const router = Router();

// GET /forums/
// GET /forums/:id
// POST /forums/
// PUT /forums/:id
// DELETE /forums/:id

// GET /forums/:id/messages
// POST /forums/:id/messages

router.get("/", async (req, res) => {
  try {
    const result = await prisma.forum.findMany({});
    res.status(200).json({ forums: result, ok: true });
  } catch (e) {
    res.status(500).json({
      type: e.constructor.name,
      message: e.toString(),
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const forum = await prisma.forum.findUnique({
      where: { id: Number(id) },
    });
    if (forum === null) {
      return res.status(404).json({
        error: `Forum with ID ${id} not found`,
      });
    }
    res.status(200).json(forum);
  } catch (e) {
    res.status(500).json({
      type: e.constructor.name,
      message: e.toString(),
    });
  }
});

export default router;
