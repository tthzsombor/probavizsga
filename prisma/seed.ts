import { PrismaClient } from "@prisma/client"
import { faker } from '@faker-js/faker'


const prisma = new PrismaClient();

async function main() {
   
try{
    for (let i=0; i<15; i++)
{
   await prisma.member.create({
        data: {
          name: faker.date.recent(),
          gender: faker. date.soon(),
          birth_date: faker.date.recent(),
          created_at: faker.date.recent()
        }
    })
}
}
finally{
    prisma.$disconnect()
}
    
    
}

main()
