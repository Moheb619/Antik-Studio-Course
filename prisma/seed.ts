const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcryptjs");

const prismaDB = new PrismaClient();

async function main() {
  const password = await hash("password123", 12);
  const user = await prismaDB.user.upsert({
    where: { email: "admin@admin.com" },
    update: {},
    create: {
      email: "admin@admin.com",
      name: "Admin",
      password,
    },
  });
  console.log({ user });
}
main()
  .then(() => prismaDB.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prismaDB.$disconnect();
    process.exit(1);
  });
