import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function HomeStack() {
    
    const navigation = useNavigation();


    return (
    <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{title: "Bienvenido",
        headerRight: () => (
            <Button                
              onPress={() =>{ 
                  try{
                    if(index!=0)
                    navigation.goBack();
                    else
                    console.log(`Hijoles no se pudo :(`);
                  }
                  catch(e){
                    console.log(`Hijoles no se pudo :(`);
                  }
                }}
              title="Regresar"
              color="#000"
            />
          ),
        }} 
        />
    </Stack.Navigator>
    );
}