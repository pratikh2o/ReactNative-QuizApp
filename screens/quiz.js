import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Quiz = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.top}>
        <Text>good MCQ question it is</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 15,
    height: '100%',
  },
  top: {
    marginVertical: 15,
  },
  options: {
    marginVertical: 15,
    flex: 1,
  },

  bottom: {
    marginBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Quiz;
