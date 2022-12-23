import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

import { resolvers } from './graphql/resolvers';

const typeDefs = readFileSync('./src/graphql/schema.graphql', {
  encoding: 'utf-8',
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () =>
  await startStandaloneServer(server, {
    listen: { port: process.env.PORT as unknown as number },
  }))();

console.log(`Server's ready at port: ${process.env.PORT}`);
