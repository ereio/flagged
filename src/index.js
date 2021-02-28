/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { ApolloProvider } from '@apollo/client';

import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import { store } from './store';
import { apolloClient } from './services/countries/client';
import { AppNavigator } from './views/navigator';


export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <View style={styles.fullscreen}>
          <StatusBar barStyle="dark-content" />
          <AppNavigator />
        </View>
      </Provider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
}); 
