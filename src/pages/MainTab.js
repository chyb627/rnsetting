import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
  console.log('user:::::', user);
  return (
    <View style={styles.block}>
      <Text style={styles.text}>hello, {user.displayName}</Text>
    </View>

    // <>
    //   <View style={styles.block}>
    //     <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#6200ee' }}>
    //       <Tab.Screen
    //         name="Home"
    //         component={HomeScreen}
    //         options={{ title: '홈', tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} /> }}
    //       />
    //       <Tab.Screen
    //         name="MyProfileStack"
    //         component={MyProfileStack}
    //         options={{ title: '내정보', tabBarIcon: ({ color, size }) => <Icon name="person" color={color} size={size} /> }}
    //       />
    //       {/* <Tab.Screen
    //     name="Third"
    //     component={ThirdScreen}
    //     options={{ title: '메세지', tabBarIcon: ({ color, size }) => <Icon name="message" color={color} size={size} /> }}
    //   /> */}
    //     </Tab.Navigator>
    //   </View>
    //   <CameraButton />
    // </>
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
