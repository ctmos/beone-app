import { Router } from "express";

const r = Router();

// Wiki routes - placeholder
r.get("/", (_req, res) => {
  res.json({ message: "Wiki routes - coming soon" });
});

export default r;
