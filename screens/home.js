import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Title from '../components/title';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Title />
      <View>
        <Image
          source={require('../assets/Customer Survey-rafiki.png')}
          style={styles.banner}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  banner: {
    width: 300,
    height: 300,
  },

  button: {
    backgroundColor: '#F72585',
    width: '30%',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Home;
