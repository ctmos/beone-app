import { Router } from "express";

const r = Router();

// Posts routes - placeholder
r.get("/", (_req, res) => {
  res.json({ message: "Posts routes - coming soon" });
});

export default r;
