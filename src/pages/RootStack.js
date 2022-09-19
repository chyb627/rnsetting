import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUserContext } from '../contexts/UserContext';

import Login from './Login';
import MainTab from './MainTab';
import UploadScreen from './UploadScreen';
import FourthScreen from './FourthScreen';

import SignInScreen from './SignInScreen';
import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  const { user } = useUserContext();
  // console.log('user::::', user);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
    // <Stack.Navigator>
    //   <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
    //   <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    //   {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    //   <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
    //   <Stack.Screen name="Upload" component={UploadScreen} options={{ title: '새 게시물', headerBackTitle: '뒤로가기' }} />
    //   <Stack.Screen name="Fourth" component={FourthScreen} options={{ headerShown: false }} /> */}
    // </Stack.Navigator>
  );
}

export default RootStack;
