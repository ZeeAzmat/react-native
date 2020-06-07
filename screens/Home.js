import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../data/colors.json';

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Rainbow', colors: RAINBOW },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
];

const colorPalettesUrl = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ navigation }) => {
  const [colorPalette, setColorPalette] = useState([]);

  const handleFetchColorPalettes = useCallback(async () => {
    const result = await fetch(colorPalettesUrl);
    const colorPaletteList = await result.json();

    if (result.ok) {
      setColorPalette(colorPaletteList);
    }
  }, []);

  useEffect(() => {
    handleFetchColorPalettes();
  }, [handleFetchColorPalettes]);

  return (
    <SafeAreaView>
      <FlatList
        style={styles.section}
        data={colorPalette}
        // data={COLOR_PALETTES}
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
