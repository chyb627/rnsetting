import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTab from './MainTab';
import SignInScreen from './SignInScreen';
import WelcomeScreen from './WelcomeScreen';
import UploadScreen from './UploadScreen';
// import { useUserContext } from '../contexts/UserContext';
import { getUser } from '../lib/users';
import { subscribeAuth } from '../lib/auth';
import ModifyScreen from './ModifyScreen';
import SettingScreen from './SettingScreen';
import { useSelector } from 'react-redux';
import { RootState } from '~store/reducer';
import { useAppDispatch } from '~store';
import userSlice from '~slice/user';

const Stack = createNativeStackNavigator();

function RootStack() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector((state: RootState) => !!state.user.id);
  // const { user, setUser } = useUserContext();
  // console.log('user::::', user);

  useEffect(() => {
    // 컴포넌트 첫 로딩 시 로그인 상태를 확인하고 UserContext에 적용
    const unsubscribe = subscribeAuth(async (currentUser) => {
      // 여기에 등록한 함수는 사용자 정보가 바뀔 때마다 호출되는데
      // 처음 호출될 때 바로 unsubscribe에 한번 호출된 후에는 더 이상 호출되지 않게 설정
      unsubscribe();
      if (!currentUser) {
        SplashScreen.hide();
        return;
      }
      const profile = await getUser(currentUser.uid);

      if (!profile) {
        return;
      }
      // setUser(profile);
      dispatch(
        userSlice.actions.setUser({
          ...profile,
        }),
      );
    });
  }, [dispatch]);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
          <Stack.Screen name="Upload" component={UploadScreen} options={{ title: '새 게시물', headerBackTitle: '뒤로가기' }} />
          <Stack.Screen name="Modify" component={ModifyScreen} options={{ title: '설명 수정', headerBackTitle: '뒤로가기' }} />
          <Stack.Screen name="Setting" component={SettingScreen} options={{ title: '설정', headerBackTitle: '뒤로가기' }} />
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default RootStack;
