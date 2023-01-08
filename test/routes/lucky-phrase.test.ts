import { test } from 'tap'
import { build } from '../helper'

test('lucky-phrase returns 200 status code without name in query param', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        url: '/api/v1/lucky-phrase',
    })
    t.same(res.statusCode, 200)
})

test('lucky-phrase returns 200 status code with name in query param', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        url: '/api/v1/lucky-phrase?name=James',
    })
    t.same(res.statusCode, 200)
})

test('sending anything but "name" in query params throws a 400', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        url: '/api/v1/lucky-phrase?nameasd=James',
    })

    t.same(res.statusCode, 400)
})
