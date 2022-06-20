import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#7209B7',
    flex: 1,
  },
});

export default App;
