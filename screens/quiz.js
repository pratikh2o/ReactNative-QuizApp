import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const getQuiz = async () => {
    try {
      const res = await fetch(
        'https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple',
      );
      const data = await res.json();
      console.log(data.results[0]);
      setQuestions(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);
  return (
    <View>
      {questions && (
        <View style={styles.Container}>
          <View style={styles.top}>
            <Text style={styles.question}>
              Q.good MCQ question it is wdfdsdf dsfds fdsf
            </Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.parentOption}>
              <Text style={styles.option}>option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.parentOption}>
              <Text style={styles.option}>option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.parentOption}>
              <Text style={styles.option}>option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.parentOption}>
              <Text style={styles.option}>option 4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 15,
    height: '100%',
    backgroundColor: '#7209B7',
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
    alignItems: 'center',
  },
  button: {
    padding: 10,
    width: '25%',
    borderRadius: 16,
    backgroundColor: '#F72585',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  question: {
    fontSize: 28,

    color: 'white',
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  parentOption: {
    paddingVertical: 12,
    marginVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#B5179E',
  },
});

export default Quiz;
