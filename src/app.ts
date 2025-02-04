import Fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = Fastify({
  logger: true,
})
app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
