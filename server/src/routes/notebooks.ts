import { Router } from "express";

const r = Router();

// Notebooks routes - placeholder
r.get("/", (_req, res) => {
  res.json({ message: "Notebooks routes - coming soon" });
});

export default r;
