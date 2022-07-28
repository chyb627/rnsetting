import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTab from './MainTab';
import FourthScreen from './FourthScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
      <Stack.Screen name="Fourth" component={FourthScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
