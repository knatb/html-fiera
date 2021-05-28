import React from 'react';
import ContactScreen from '../screens/ContactScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function ContactStack() {
    const navigation = useNavigation();

    return (
    <Stack.Navigator screenOptions={{ headerShown: true, }}>
        <Stack.Screen name="Contact" component={ContactScreen} 
        options={{title: "Contacto",
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