import { ApolloClient, InMemoryCache, concat, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

export const useApollo = () => {
  const asyncAuthLink = setContext(
    () =>
      new Promise(async (success) => {
        //get token ASYNC
        const token = 'aaaa';
        console.log('getToken', token);
        success({ headers: { authorization: token } });
      }),
  );

  const httplink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    //uri: 'http://192.168.0.104:4000/graphql',
    credentials: 'include',
    headers: {
      //useragent
    },
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
      );

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const getConfig = () => {
    return new ApolloClient({
      uri: 'http://localhost:40000',
      cache: new InMemoryCache(),
      link: concat(httplink, concat(errorLink, asyncAuthLink)),
    });
  };

  return [getConfig];
};
