import Fastify from "fastify";
import dotenv from 'dotenv'

dotenv.config()

const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
const port = process.env.PORT ? Number(process.env.PORT) : 3000
fastify.listen({ port }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})