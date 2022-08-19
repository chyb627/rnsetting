import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import MainTab from './MainTab';
import FourthScreen from './FourthScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
      <Stack.Screen name="Fourth" component={FourthScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default RootStack;
