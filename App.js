import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      {/* <Text
        style={{
          fontWeight: 'bold',
          fontSize: 50,
          color: '#F72585',
          fontStyle: 'italic',
        }}>
        QUIZ APP
      </Text> */}
      <Home />
      {/* <Quiz /> */}
      {/* <Result /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#7209B7',
    flex: 1,
  },
});

export default App;
