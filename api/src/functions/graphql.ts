import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { authDecoder, getCurrentUser } from 'src/lib/auth'
import { db } from 'src/lib/db'
import generateGraphiQLHeader from 'src/lib/generateGraphiQLHeader'
import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  authDecoder,
  getCurrentUser,
  generateGraphiQLHeader,
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  armorConfig: {
    maxDepth: { n: 7 },
  },
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
