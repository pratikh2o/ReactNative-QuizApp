import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const params = route.params;

  console.log(params);
  return (
    <View style={styles.homeContainer}>
      <Title titleText="RESULT" />
      <View style={styles.textMain}>
        <Text style={styles.textResult}>Your Result is {params.score}/100</Text>
        <Text style={styles.textResult}>
          You {params.score > 30 ? 'Pass :)' : 'Fail :('}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '80%',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#7209B7',
    height: '100%',
  },
  // banner: {
  //   width: 100,
  //   height: 100,
  // },

  button: {
    backgroundColor: '#F72585',
    width: 100,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  textMain: {
    marginVertical: 20,
  },
  textResult: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Result;
