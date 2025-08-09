import { Router } from "express";

const r = Router();

// Files routes - placeholder
r.get("/", (_req, res) => {
  res.json({ message: "Files routes - coming soon" });
});

export default r;
