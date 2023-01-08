import { test } from 'tap'
import { build } from '../helper'

test('lucky-number returns 4 digit number', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        url: '/api/v1/lucky-number',
    })
    const number = JSON.parse(res.payload).number
    t.same(number.length, 4)
})

test('lucky-number returns 4 digit number', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        url: '/api/v1/lucky-number',
    })
    const number = JSON.parse(res.payload).number
    t.same(number.length, 4)
})
