// const { PrismaClient } = require("@prisma/client");

// const database = new PrismaClient();

// async function main() {
//   try {
//     await database.category.createMany({
//       data: [
//         { name: "Computer Science" },
//         { name: "Music" },
//         { name: "Fitness" },
//         { name: "Photography" },
//         { name: "Accounting" },
//         { name: "Engineering" },
//         { name: "Filming" },
//       ],
//     });
//   } catch (error) {
//     console.log("Error seeding the database categories", error);
//   } finally {
//     await database.$disconnect();
//   }
// }

// main();

const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcryptjs");

const database = new PrismaClient();

async function main() {
  const password = await hash("password123", 12);
  const user = await database.user.upsert({
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
  .then(() => database.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await database.$disconnect();
    process.exit(1);
  });
