import React from 'react';
import { FlatList } from 'react-native';
import { COLORS } from '../data/colors.json';
import ColorBox from '../components/ColorBox';

const ColorPalette = () => {
  return (
    <FlatList
      data={COLORS}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
    />
  );
};

export default ColorPalette;
