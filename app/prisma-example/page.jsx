import prisma from '@/utils/db'
import React from 'react'

const prismaHandler = async() => {
  await prisma.task.create({
    data: {
      content: "Wake up"
    }
  })
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
  return allTasks
}

const PrismaPageExample = async() => {
  const tasks = await prismaHandler()
  return (
    <div>
      <h1 className='text-7xl'>PrismaPageExample</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className='text-xl py-2'>❤ {task.content}</h2>
        )
      })}
    </div>
  )
}

export default PrismaPageExample