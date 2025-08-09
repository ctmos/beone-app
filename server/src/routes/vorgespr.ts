import { Router } from "express";

const r = Router();

// Vorgespr routes - placeholder
r.get("/", (_req, res) => {
  res.json({ message: "Vorgespr routes - coming soon" });
});

export default r;
