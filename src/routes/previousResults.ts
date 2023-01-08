import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { ParamType } from '../types/body'

const getPreviousResults = async (
    request: FastifyRequest<{ Params: ParamType }>,
    reply: FastifyReply
) => {
    const number = request.params.number
    if (number.length != 4) {
        reply.status(400).send('error: number is not a 4 digit number')
        return
    }
    const bodyToSend = {
        numbers: [number, ''],
        checkCombinations: 'false',
        sortTypeInteger: '2',
    }
    const resp = await fetch(
        'https://www.singaporepools.com.sg/_layouts/15/FourD/FourDCommon.aspx/Get4DNumberCheckResultsJSON',
        {
            method: 'POST',
            body: JSON.stringify(bodyToSend),
            headers: { 'Content-Type': 'application/json' },
        }
    )
    const data = await resp.json()
    console.log(data)
    reply.status(200).send({ msg: 'received' })
}

const previousResults = (fastify: FastifyInstance, opt: any, done: any) => {
    fastify.get('/previous-result/:number', getPreviousResults)
    done()
}

export default previousResults
