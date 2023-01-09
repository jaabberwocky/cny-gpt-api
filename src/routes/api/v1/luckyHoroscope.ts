import { openai } from '../../../utils/clients'
import {
    FastifyInstance,
    FastifyReply,
    FastifyRequest,
    FastifyPluginAsync,
} from 'fastify'
import { QueryParams } from '../../../types/queryParam'

const generateLuckyPhrase = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const queryParams: QueryParams = Object(request.query)
    if (!('name' in queryParams) && Object.keys(queryParams).length >= 1) {
        reply.status(400).send('error: parameter not understood')
        return
    }
    const name = queryParams.name
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Write me an auspicious horoscope for Chinese New Year for ${name}`,
        temperature: 0.9,
        max_tokens: 200,
    })
    reply.status(200).send({
        phrase: completion.data.choices[0].text,
    })
}

const luckyPhrase: FastifyPluginAsync = async (
    fastify: FastifyInstance,
    opts
) => {
    fastify.get('/lucky-horoscope', generateLuckyPhrase)
}

export default luckyPhrase
