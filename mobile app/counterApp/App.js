import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Counter from './Counter';
import { store } from './Store';

export default function App() {
  return(
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
};
