import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
  return (
    <View>
      <Text style={styles.mainText}>QUIZBC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#F72585',
  },
});

export default Title;
