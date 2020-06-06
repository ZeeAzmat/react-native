import React from 'react';
import ColorBox from '../components/ColorBox';
import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.name}>{paletteName}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default ColorPalette;
