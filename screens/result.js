import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Result = () => {
  return (
    <View style={styles.Container}>
      <View>
        <Text>Result </Text>
      </View>
      <View>
        <Text>You failed the quiz :(</Text>
      </View>
      <TouchableOpacity>
        <Text>HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 20,
  },
});

export default Result;
