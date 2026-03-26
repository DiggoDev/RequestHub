import Fastify from "fastify";
import dotenv from 'dotenv'

dotenv.config()

import { initializeDb, createNewUser, getUserByEmail } from "./db";

const fastify = Fastify({
  logger: true
})

initializeDb().then(() => console.log('Database initialized'))

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.get('/test', async(request, reply) => {
  const email = 'user1410@gmail.com'
  const password = 'pass'

  await createNewUser(email, password)

  const dbUser = await getUserByEmail(email)

  return reply.send(dbUser)
})

fastify.get('/info', (request, reply) => {
  return reply.send({
    ...process.env,
  })
})

fastify.get('/health', (request, reply) => {
  return reply.send('OK')
})

fastify.post('/authenticate', (request, reply) => {
  const { email, password }: { email: string; password: string  } = JSON.parse(request.body as string)

  if (email === 'admin@gmail.com' && password === 'password') {
    return reply.send({ token: 'admin-token' })
  }
  return reply.code(401).send({ error: 'Invalid credentials' })
  
})

console.log(process.env.SERVER_PORT)

// Run the server!
const port = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000
const host = "0.0.0.0"
fastify.listen({ port, host }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})