import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
  const adminPass = process.env.ADMIN_PASSWORD || "changeMe123!";

  const [ADMIN, EDITOR, CONTRIBUTOR, READER] = await Promise.all([
    prisma.role.upsert({ where: { name: "ADMIN" }, create: { name: "ADMIN" }, update: {} }),
    prisma.role.upsert({ where: { name: "EDITOR" }, create: { name: "EDITOR" }, update: {} }),
    prisma.role.upsert({ where: { name: "CONTRIBUTOR" }, create: { name: "CONTRIBUTOR" }, update: {} }),
    prisma.role.upsert({ where: { name: "READER" }, create: { name: "READER" }, update: {} }),
  ]);

  const hash = await bcrypt.hash(adminPass, 12);
  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      passwordHash: hash,
      displayName: "Administrator",
      roles: { create: [{ roleId: ADMIN.id }] },
    },
  });

  console.log("Seed ok. Admin:", adminEmail);
}

main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
