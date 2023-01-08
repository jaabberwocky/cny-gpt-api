import { test } from 'tap'
import { build } from '../helper'

test('ping works', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        url: '/api/v1/ping',
    })

    t.equal(res.statusCode, 200)
})
