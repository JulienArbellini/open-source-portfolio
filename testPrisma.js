const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.admin.create({
    data: {
      adminUserId: "admin-id-123",
      name: "John Doe",
      imageUrl: "/path/to/image.png",
      position: "Web Developer",
      location: "Paris, France",
      introduction: "Hello! I am the admin.",
      education: "Some University",
      skills: [{ name: "JavaScript" }, { name: "React" }],
      github: "https://github.com/johndoe",
      email: "admin@example.com",
    },
  });

  console.log("Admin data added!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });