import { PrismaClient } from "@prisma/client";
// declare the global for development phase
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// If not in production phase than the declared global
// Prevent overflow in hotreload
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
