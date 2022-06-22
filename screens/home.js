import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <Title titleText="QUIZBC" />
      {/* <View style={{marginVertical: 50}}>
        <Image
          source={{
            uri: 'https://w7.pngwing.com/pngs/55/420/png-transparent-mind-logic-brain-quiz-riddle-brain-purple-game-violet.png',
          }}
          style={styles.banner}
        />
      </View> */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '80%',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Quiz');
          }}>
          <Text style={styles.buttonText}>Start</Text>
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
});

export default Home;
