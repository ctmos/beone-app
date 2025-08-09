import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import adminRoutes from "./routes/admin.js";

const app = express();
const prisma = new PrismaClient();

app.use(helmet());
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || "*", credentials: true }));

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/admin", adminRoutes);

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`BeOne server running on :${port}`));
