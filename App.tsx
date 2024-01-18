import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Routes from './src/routes';




function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"transparent"} barStyle={"light-content"} translucent={true} />
      <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
