import PalettePreview from '../components/PalettePreview';
import React, { useState, useCallback, useEffect } from 'react';
import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../data/colors.json';
import {
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Rainbow', colors: RAINBOW },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
];

const colorPalettesUrl = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ navigation, route }) => {
  const newColorPalette = route.params ? route.params : undefined;

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

  useEffect(() => {
    if (newColorPalette) {
      setColorPalette((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

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
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate('ColorPaletteModal')}>
            <Text style={styles.launchModal}>Add a color scheme!</Text>
          </TouchableOpacity>
        }
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
  launchModal: {
    fontSize: 20,
    color: 'teal',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default Home;
