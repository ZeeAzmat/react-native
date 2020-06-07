import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Calculator = () => {
  const [count, setCount] = useState(10);

  return (
    <SafeAreaView>
      <Text>Calculator: {count}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => setCount((currentValue) => currentValue + 1)}>
          <Text>Increment</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => setCount((currentValue) => currentValue - 1)}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Calculator;
