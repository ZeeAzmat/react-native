import React from 'react';
import Home from './screens/Home';
import 'react-native-gesture-handler';
import Calculator from './screens/Calculator';
import ColorPalette from './screens/ColorPalette';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({
            title: route.params.paletteName,
          })}
        />

        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
