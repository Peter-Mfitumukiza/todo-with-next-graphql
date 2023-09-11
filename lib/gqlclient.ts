// graphqlClient.js
import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPHQL_URL as string;

const client = new GraphQLClient(endpoint, {
  headers: {
   'x-hasura-admin-secret': process.env.GRAPHQL_SECRET as string
  },
});

export default client;