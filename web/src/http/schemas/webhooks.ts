import { z } from 'zod'

export const webhookListItemSchema = z.object({
  id: z.uuidv7(),
  method: z.string(),
  pathname: z.string(),
  cretatedAt: z.coerce.date(),
})

export const webhookListSchema = z.object({
  webhooks: z.array(webhookListItemSchema),
  nextCursor: z.string()
})

export const webhookDetailsSchema = z.object({
  id: z.uuidv7(),
  method: z.string(),
  pathname: z.string(),
  ip: z.string(),
  statusCode: z.number(),
  contentType: z.string().nullable(),
  contentLenght: z.number().nullable(),
  queryParams: z.record(z.string(), z.string()).nullable(),
  headers: z.record(z.string(), z.string()),
  body: z.string().nullable(),
  cretatedAt: z.coerce.date(),
})

export const webhookHandler = z.object({
  code: z.string()
})