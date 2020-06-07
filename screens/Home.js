import PalettePreview from '../components/PalettePreview';
import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../data/colors.json';

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Rainbow', colors: RAINBOW },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
];

const colorPalettesUrl = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ navigation }) => {
  const [colorPalette, setColorPalette] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFetchColorPalettes = useCallback(async () => {
    setIsRefreshing(true);
    const result = await fetch(colorPalettesUrl);
    const colorPaletteList = await result.json();

    if (result.ok) {
      setTimeout(() => {
        setColorPalette(colorPaletteList);
        setIsRefreshing(false);
      }, 1000);
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
        refreshing={isRefreshing}
        onRefresh={handleFetchColorPalettes}
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
