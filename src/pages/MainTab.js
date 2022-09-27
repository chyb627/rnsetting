import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeStack from './HomeStack';
import MyProfileStack from './MyProfileStack';
import CameraButton from '../components/CameraButton';
const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <>
      <View style={styles.block}>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#6200ee' }}>
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{ title: '홈', tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} /> }}
          />
          <Tab.Screen
            name="MyProfileStack"
            component={MyProfileStack}
            options={{ title: '내정보', tabBarIcon: ({ color, size }) => <Icon name="person" color={color} size={size} /> }}
          />
        </Tab.Navigator>
      </View>
      <CameraButton />
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    zIndex: 0,
  },
});

export default MainTab;
