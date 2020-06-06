import React from 'react';
import { COLORS } from './data/colors.json';
import ColorBox from './components/ColorBox';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <View>
        <Text style={styles.bold}>
          Here are some boxes of different colors!
        </Text>
      </View>

      <FlatList
        data={COLORS}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
      />
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
