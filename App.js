import React from 'react';
import ColorBox from './components/ColorBox';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <View>
        <Text style={styles.bold}>
          Here are some boxes of different colors!
        </Text>
      </View>

      <ColorBox colorName="Cyan" hexCode="#2aa198" />
      <ColorBox colorName="Blue" hexCode="#268bd2" />
      <ColorBox colorName="Magenta" hexCode="#d33682" />
      <ColorBox colorName="Orange" hexCode="#cb4b16" />
      <ColorBox colorName="Grey" hexCode="#555555" />
      <ColorBox colorName="Black" hexCode="#000000" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  white: {
    color: 'white',
  },
  safeAreaView: {
    marginVertical: 20,
    marginHorizontal: 20,
    flex: 1,
  },
  bold: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default App;
