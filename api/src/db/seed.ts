import { database } from '@/db'
import { webhooks } from './schema'
import { faker } from '@faker-js/faker'

async function seed() {
  const stripeEvents = [
    'payment_intent.succeeded',
    'payment_intent.payment_failed',
    'invoice.paid',
    'invoice.payment_failed',
    'invoice.created',
    'customer.created',
    'customer.updated',
    'customer.deleted',
    'checkout.session.completed',
    'charge.succeeded',
    'charge.failed',
    'subscription.created',
    'subscription.updated',
    'subscription.deleted',
    'payout.paid',
    'payout.failed',
    'refund.created',
    'refund.succeeded',
    'setup_intent.succeeded',
    'setup_intent.setup_failed',
  ]

  const methods = ['POST', 'GET', 'PUT']
  const paths = [
    '/v1/payment_intents',
    '/v1/invoices',
    '/v1/customers',
    '/v1/checkout/sessions',
    '/v1/charges',
    '/v1/subscriptions',
    '/v1/payouts',
    '/v1/refunds',
    '/v1/setup_intents',
  ]

  const webhooksData = Array.from({ length: 60 }).map(() => {
    const event = faker.helpers.arrayElement(stripeEvents)
    const method = faker.helpers.arrayElement(methods)
    const pathname = faker.helpers.arrayElement(paths)
    const ip = faker.internet.ip()
    const userAgent = `Stripe-Webhook/${faker.system.semver()}`
    const contentType = 'application/json'
    const data = {
      id: faker.string.uuid(),
      object: 'event',
      api_version: '2024-06-01',
      created: faker.date.recent().getTime() / 1000,
      data: {
        object: {
          id: faker.string.uuid(),
          amount: faker.number.int({ min: 100, max: 100000 }),
          currency: 'usd',
          customer: faker.string.uuid(),
          status: faker.helpers.arrayElement(['succeeded', 'failed', 'pending']),
        },
      },
      livemode: false,
      pending_webhooks: 1,
      request: { id: faker.string.uuid(), idempotency_key: faker.string.uuid() },
      type: event,
    }
    const body = JSON.stringify(data)

    return {
      method,
      ip,
      contentType,
      contentLenght: body.length,
      body,
      headers: {
        'content-type': contentType,
        'user-agent': userAgent,
        'stripe-signature': faker.string.alphanumeric({ length: 32 }),
      },
      pathname,
      createdAt: faker.date.recent({ days: 30 }),
    }
  })

  await database.insert(webhooks).values(webhooksData)

  console.log('Seed realizado com sucesso!')
  process.exit(0)
}

seed().catch((e) => {
  console.error(e)
  process.exit(1)
})
