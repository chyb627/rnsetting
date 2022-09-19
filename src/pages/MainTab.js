import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useUserContext } from '../contexts/UserContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';
import MyProfileStack from './MyProfileStack';
// import ThirdScreen from './ThirdScreen';
import CameraButton from '../components/CameraButton';

const Tab = createBottomTabNavigator();

function MainTab() {
  const { user } = useUserContext();
  return (
    <View style={styles.block}>
      {user.photoURL && (
        <Image source={{ uri: user.photoURL }} style={{ width: 128, height: 128, marginBottom: 16 }} resizeMode="cover" />
      )}
      <Text style={styles.text}>hello, {user.displayName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    // zIndex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default MainTab;
