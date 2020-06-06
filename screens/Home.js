import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../data/colors.json';

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Rainbow', colors: RAINBOW },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
];

const Home = ({ navigation }) => {
  return (
    <FlatList
      style={styles.section}
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => navigation.navigate('ColorPalette', item)}
          colorPalette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Home;
