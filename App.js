import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack'

import { Home } from './pages/Home'; 
import { Cadastro } from './pages/Cadastro'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} /*options={{headerShown: false}}*//>
        <Stack.Screen name="Cadastro" component={Cadastro} /*options={{headerShown: false}}*//>
      </Stack.Navigator>
    </NavigationContainer>
  );
}