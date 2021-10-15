import React from 'react';
import {AppRegistry} from 'react-native';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import Router from './src/Router';
import {name as appName} from './app.json';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql-pokeapi.graphcdn.app/',
  }),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => App);
