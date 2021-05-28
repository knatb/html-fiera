import React from 'react';
import MarketScreen from '../screens/MarketScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function MarketStack() {
    const navigation = useNavigation();

    return (
    <Stack.Navigator>
        <Stack.Screen name="Market" component={MarketScreen} 
        options={{title: "Market Place", headerRight: () => (
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