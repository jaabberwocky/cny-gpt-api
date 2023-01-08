import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

const pong = (request: FastifyRequest, reply: FastifyReply) => {
    reply.status(200).send({ msg: 'pong' })
}

const ping = (fastify: FastifyInstance, opts: any, done: any) => {
    fastify.get('/ping', pong)
    done()
}

export default ping
