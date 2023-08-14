import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const App = () => {
  const [currentColor, setCurrentColor] = useState('red');
  const [remainingTime, setRemainingTime] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime === 0) {
        if (currentColor === 'red') {
          setCurrentColor('green');
          setRemainingTime(5);
        } else if (currentColor === 'green') {
          setCurrentColor('yellow');
          setRemainingTime(3);
        } else {
          setCurrentColor('red');
          setRemainingTime(5);
        }
      } else {
        setRemainingTime(remainingTime - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentColor, remainingTime]);

  return (
    <View style={styles.container}>
      <Image source={require('./images/4985.jpg')} style={styles.image} />
      <View
        style={[
          styles.light,
          styles.red,
          {backgroundColor: currentColor === 'red' ? 'red' : '#808080'},
        ]}>
        <Text style={[styles.remainingTimeText]}>
          {currentColor === 'red' ? remainingTime : ''}
        </Text>
      </View>
      <View
        style={[
          styles.light,
          styles.yellow,
          {backgroundColor: currentColor === 'yellow' ? 'yellow' : '#808080'},
        ]}>
        <Text style={[styles.remainingTimeText]}>
          {currentColor === 'yellow' ? remainingTime : ''}
        </Text>
      </View>
      <View
        style={[
          styles.light,
          styles.green,
          {backgroundColor: currentColor === 'green' ? 'green' : '#808080'},
        ]}>
        <Text style={[styles.remainingTimeText]}>
          {currentColor === 'green' ? remainingTime : ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  light: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: deviceWidth,
    height: deviceHeight,
    resizeMode: 'contain', // You can adjust the resizeMode as needed
  },
  red: {
    top: '29%',
  },
  yellow: {
    top: '44%',
  },
  green: {
    top: '59%',
  },
  remainingTime: {
    position: 'absolute',
    top: '80%',
  },
  remainingTimeText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#ffffff',
  },
});

export default App;
