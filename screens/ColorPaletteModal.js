import { COLORS_LIST } from '../data/colors.json';
import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  Alert,
  Switch,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');
  const [colorsList, setColorsList] = useState([]);

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('Please enter palette name!');
    } else if (colorsList.length < 3) {
      Alert.alert('Please add at least 3 colors!');
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: colorsList,
      };
      navigation.navigate('Home', newColorPalette);
    }
  }, [name, navigation, colorsList]);

  const handleValueChange = useCallback((value, color) => {
    if (value) {
      setColorsList((colors) => [...colors, color]);
    } else {
      setColorsList((colors) =>
        colors.filter(
          (selectedColor) => color.colorName !== selectedColor.colorName,
        ),
      );
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Name of the palette</Text>
      <TextInput
        value={name}
        style={styles.input}
        onChangeText={setName}
        placeholder="Palette Name"
      />

      <FlatList
        data={COLORS_LIST}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.colorName}</Text>
            <Switch
              value={
                !!colorsList.find((color) => color.colorName === item.colorName)
              }
              onValueChange={(selected) => {
                handleValueChange(selected, item);
              }}
            />
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
  },
  button: {
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: 'teal',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  row: {
    borderColor: 'grey',
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ColorPaletteModal;
