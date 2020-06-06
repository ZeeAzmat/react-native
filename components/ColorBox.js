import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const colorCode = {
    backgroundColor: hexCode,
  };

  return (
    <View style={[styles.container, colorCode]}>
      <Text style={styles.white}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  white: {
    color: 'white',
  },
});

export default ColorBox;
