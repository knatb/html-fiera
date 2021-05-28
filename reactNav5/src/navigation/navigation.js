import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import AboutScreen from '../screens/AboutScreen';

import HomeStack from '../navigation/HomeStack';
import NotificationStack from '../navigation/NotificationStack';
import MarketStack from '../navigation/MarketStack';
import ProfileStack from '../navigation/ProfileStack';
import ContactStack from '../navigation/ContactStack';
import AboutStack from '../navigation/AboutStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused
                ? 'home-sharp'
                : 'home-outline';
            } else if (route.name === 'Notification') {
                iconName = focused ? 'mail-unread' : 'mail-unread-outline';
            } else if (route.name === 'Market') {
                iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Profile') {
                iconName = focused ? 'glasses' : 'glasses-outline';
            } else if (route.name === 'Contact') {
                iconName = focused ? 'people-circle' : 'person-outline';
            } else if (route.name === 'About') {
                iconName = focused ? 'information' : 'information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
    >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Notification" component={NotificationStack} options={{ tabBarBadge: 3 }}/>
        <Tab.Screen name="Market" component={MarketStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="Contact" component={ContactStack} />
        <Tab.Screen name="About" component={AboutStack} />
    </Tab.Navigator>
    );
  }