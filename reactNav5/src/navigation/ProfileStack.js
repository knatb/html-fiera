import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function ProfileStack() {
    const navigation = useNavigation();
    return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} 
        options={{title: "Perfil",
        headerRight: () => (
            <Button
              onPress={() => navigation.goBack()}
              title="Regresar"
              color="#000"
            />
          ),
        }} />
    </Stack.Navigator>
    );
}