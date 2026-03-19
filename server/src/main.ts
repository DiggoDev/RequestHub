import Fastify from "fastify";
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve('../', '.env') })

import { initializeDb, insertUser, getUserByUsername } from "./db";

const fastify = Fastify({
  logger: true
})

initializeDb().then(() => console.log('Database initialized'))

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.get('/test', async(request, reply) => {
  const username = 'user1410'
  const password = 'pass'

  await insertUser(username, password)

  const dbUser = await getUserByUsername(username)

  return reply.send(dbUser)

})

fastify.post('/authenticate', (request, reply) => {
  const { username, password }: { username: string; password: string  } = JSON.parse(request.body as string)

  if (username === 'admin' && password === 'password') {
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