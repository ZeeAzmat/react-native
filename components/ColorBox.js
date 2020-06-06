import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const colorCode = {
    backgroundColor: hexCode,
  };

  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.2
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.container, colorCode]}>
      <Text style={textColor}>
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
});

export default ColorBox;
