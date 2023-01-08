import {
    FastifyInstance,
    FastifyReply,
    FastifyRequest,
    FastifyPluginAsync,
} from 'fastify'

const pong = (request: FastifyRequest, reply: FastifyReply) => {
    reply.status(200).send({ msg: 'pong' })
}

const ping: FastifyPluginAsync = async (fastify: FastifyInstance, opts) => {
    fastify.get('/ping', pong)
}

export default ping
