import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const r = Router();

// Minimal: Liste Users
r.get("/users", async (_req, res) => {
  const users = await prisma.user.findMany({ select: { id: true, email: true, displayName: true } });
  res.json(users);
});

export default r;
