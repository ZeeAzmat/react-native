import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Calculator = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    setCount((currentValue) => currentValue - 1);
  }, []);

  return (
    <SafeAreaView>
      <Text>Calculator: {count}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={handleIncrement}>
          <Text>Increment</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={handleDecrement}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttons: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Calculator;
