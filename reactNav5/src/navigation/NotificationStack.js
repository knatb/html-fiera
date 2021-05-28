import React from 'react';
import NotificationScreen from '../screens/NotificationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function NotificationStack() {
    
    const navigation = useNavigation();

    return (
    <Stack.Navigator>
        <Stack.Screen name="Notification" component={NotificationScreen} 
        options={{title: "Notificaciones",
        headerRight: () => (
            <Button
              onPress={() => navigation.goBack()}
              title="Regresar"
              color="#000"
            />
          ),}} />
    </Stack.Navigator>
    );
}