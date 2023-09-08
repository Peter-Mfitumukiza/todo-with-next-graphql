// apollo-client.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL as string,
});

const authLink = setContext((_, { headers }) => {
  const customHeaders = {
    'x-hasura-admin-secret': process.env.GRAPHQL_SECRET as string,
  };

  return {
    headers: {
      ...headers,
      ...customHeaders,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
