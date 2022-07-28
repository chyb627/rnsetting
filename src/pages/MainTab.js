import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="First"
        component={FirstScreen}
        options={{ title: '홈', tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} /> }}
      />
      <Tab.Screen
        name="Second"
        component={SecondScreen}
        options={{ title: '알림', tabBarIcon: ({ color, size }) => <Icon name="notifications" color={color} size={size} /> }}
      />
      <Tab.Screen
        name="Third"
        component={ThirdScreen}
        options={{ title: '메세지', tabBarIcon: ({ color, size }) => <Icon name="message" color={color} size={size} /> }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
