const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Create an instructor
  const instructor = await prisma.user.upsert({
    where: { email: 'instructor@example.com' },
    update: {},
    create: {
      email: 'instructor@example.com',
      name: 'John Doe',
      passwordHash: 'hashed_password_placeholder',
      role: 'INSTRUCTOR',
    },
  })

  // Create initial courses
  const coursesToCreate = [
    {
      title: 'Complete React & Next.js Masterclass',
      description: 'Learn how to build production-ready applications with React, Next.js, and modern web technologies.',
      price: 89.99,
      instructorId: instructor.id,
    },
    {
      title: 'Advanced UI/UX Animation with Framer',
      description: 'Master Framer Motion and create stunning interactive experiences on the web.',
      price: 69.99,
      instructorId: instructor.id,
    },
    {
      title: 'Backend Systems Design & Architecture',
      description: 'Learn how to architect scaleable system backends using Node.js and Databases.',
      price: 99.99,
      instructorId: instructor.id,
    }
  ]

  console.log('Seeding Database with Mock Courses...')
  
  for (const c of coursesToCreate) {
    await prisma.course.create({
      data: c,
    })
  }
}

main()
  .then(async () => {
    console.log("Seeding complete!")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
