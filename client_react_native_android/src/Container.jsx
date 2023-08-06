import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from './screens/Home';
import BottomTabs from './screens/BottomContainer';

const Stack = createNativeStackNavigator();

const Container = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen name="Home" component={BottomTabs} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
