import { test } from 'tap'
import { build } from '../helper'

test('previous-results throws 400 if number length less than 4', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        url: '/api/v1/previous-result/123',
    })
    t.same(res.statusCode, 400)
})

test('previous-results throws 400 if number length more than 4', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        url: '/api/v1/previous-result/12345',
    })
    t.same(res.statusCode, 400)
})

test('previous-results returns 200 if number length equals 4', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        url: '/api/v1/previous-result/1234',
    })
    t.same(res.statusCode, 200)
})

test('previous-results returns 400 if no number provided', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        url: '/api/v1/previous-result/',
    })
    t.same(res.statusCode, 400)
})
