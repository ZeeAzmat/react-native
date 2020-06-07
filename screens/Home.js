import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../data/colors.json';

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Rainbow', colors: RAINBOW },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
];

const Home = ({ navigation }) => {
  const [colorPalette, setColorPalette] = useState([]);

  return (
    <SafeAreaView>
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

      <Text onPress={() => navigation.navigate('Calculator')}>Calculator</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Home;
