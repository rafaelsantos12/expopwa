import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Camera from './pages/Camera';
import Main from './pages/Main';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          options={{ tabBarIcon: ({ color }) => 
            <Feather name="home" size={20} colo={color}/>
          }} 
          name="Main" 
          component={Main} />
        <Tab.Screen  
          options={{ tabBarIcon: ({ color }) => 
            <Feather name="camera" size={20} colo={color}/>
          }} 
          name="Camera" 
          component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}