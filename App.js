import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import App_Routes from './src/routes/App_routes';

export default function App() {
  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <App_Routes />
  </SafeAreaView>
}