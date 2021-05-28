import React from 'react';
import AboutScreen from '../screens/AboutScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function AboutStack() {
    const navigation = useNavigation();

    return (
    <Stack.Navigator>
        <Stack.Screen name="About" component={AboutScreen} 
        options={{title: "Acerca de",
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