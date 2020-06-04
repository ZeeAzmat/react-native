import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <View>
        <Text style={styles.bold}>
          Here are some boxes of different colors!
        </Text>
      </View>

      <View style={[styles.container, styles.cyan]}>
        <Text>Cyan #2aa198</Text>
      </View>

      <View style={[styles.container, styles.blue]}>
        <Text>Blue #268bd2</Text>
      </View>

      <View style={[styles.container, styles.magenta]}>
        <Text>Magenta #d33682</Text>
      </View>

      <View style={[styles.container, styles.orange]}>
        <Text>Orange #cb4b16</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
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
  container: {
    marginVertical: 5,
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default App;
