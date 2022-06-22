import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [quesNo, setQuesNo] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  const genrateOptions = _questions => {
    let options = [..._questions.incorrect_answers];
    options.push(_questions.correct_answer);
    shuffleArray(options);
    return options;
  };

  const getQuiz = async () => {
    try {
      const res = await fetch(
        'https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple&encode=url3986',
      );
      const data = await res.json();
      setQuestions(data.results);
      setOptions(genrateOptions(data.results[0]));
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    setQuesNo(quesNo + 1);
    setOptions(genrateOptions(questions[quesNo + 1]));
  };

  const handleAnswer = _option => {
    if (_option === questions[quesNo].correct_answer) {
      setScore(score + 10);
    }
    if (quesNo !== 9) {
      setQuesNo(quesNo + 1);
      setOptions(genrateOptions(questions[quesNo + 1]));
    }
    if (quesNo === 9) {
      navigation.navigate('Result', {score: score});
    }
  };

  const handleEnd = () => {
    navigation.navigate('Result', {score: score});
    console.log(score);
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
              Q. {decodeURIComponent(questions[quesNo].question)}
            </Text>
          </View>
          <View style={styles.options}>
            {options.map(val => {
              return (
                <TouchableOpacity
                  style={styles.parentOption}
                  key={val}
                  onPress={() => {
                    handleAnswer(val);
                  }}>
                  <Text style={styles.option}>{decodeURIComponent(val)}</Text>
                </TouchableOpacity>
              );
            })}

            {/* <TouchableOpacity style={styles.parentOption}>
              <Text style={styles.option}>
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.parentOption}>
              <Text style={styles.option}>
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.parentOption}>
              <Text style={styles.option}>
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.bottom}>
            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity> */}
            {quesNo !== 9 && (
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
            )}
            {quesNo === 9 && (
              <TouchableOpacity style={styles.button} onPress={handleEnd}>
                <Text style={styles.buttonText}>END</Text>
              </TouchableOpacity>
            )}
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
