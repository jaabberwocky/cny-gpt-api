require('dotenv').config()
import { join } from 'path'
import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload'
import cors from '@fastify/cors'
import { FastifyPluginAsync } from 'fastify'

export type AppOptions = {
    // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {}

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts
): Promise<void> => {
    // Place here your custom code!
    await fastify.register(cors, {
        origin: (origin, cb) => {
            const hostname = new URL(origin).hostname
            if(hostname === "localhost"){
              //  Request from localhost will pass
              cb(null, true)
              return
            }
            // Generate an error on other origins, disabling access
            cb(new Error("Not allowed"), false)
          }
    })

    // Do not touch the following lines

    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    void fastify.register(AutoLoad, {
        dir: join(__dirname, 'plugins'),
        options: opts,
    })

    // This loads all plugins defined in routes
    // define your routes in one of these
    void fastify.register(AutoLoad, {
        dir: join(__dirname, 'routes'),
        options: opts,
    })
}

export default app
export { app, options }
