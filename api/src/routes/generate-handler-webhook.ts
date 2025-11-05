import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { webhooks } from '@/db/schema'
import { database } from '@/db'
import { eq, inArray } from 'drizzle-orm'

export const generateHandlerWebhook: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/api/generate-handler',
    {
      schema: {
        summary: 'Generate a Typescript handler',
        tags: ['Webhooks'],
        body: z.object({
          webhooksIds: z.array(z.string())
        }),
        response: {
          201: z.object({
            code: z.string()
          })
        },
      },
    },

    async (request, reply) => {
     const {webhooksIds} = request.body

      const result = await database.select().from(webhooks).where(inArray(webhooks.id,  webhooksIds))
      
      const webhooksBodies = result.map(webhook => webhook.body).join('\n\n')

      return reply.status(201).send({code: webhooksBodies})
    },
  )
}
