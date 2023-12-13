import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
import Home from '../Home/Home';
import Entreprenaria from '../Entreprenaria/Entreprenaria';
import Enfant from '../Enfant/Enfant';
import Investir from '../Investir/Investir';

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false 
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Enfant"
        component={Enfant}
        options={{
          tabBarLabel: 'Enfant',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-child" color={color} size={size} />
          ),
        //  Pour faire une notification  tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Investir"
        component={Investir}
        options={{
          tabBarLabel: 'Investir',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bank" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Entreprenaria"
        component={Entreprenaria}
        options={{
          tabBarLabel: 'Entreprenaria',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>

  );
}

export default Tabs