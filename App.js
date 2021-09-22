import React from 'react';
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/homeScreen';
import DetailScreen from './Components/detailScreen';
import Splash from './src/screen/splashscreen/index';
import loginScreen from './src/screen/loginScreen/index';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}> 
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={loginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Detail" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/*
export default function App(){
  return(
    <View>
      <Text>Welcome to React Native World!</Text>
      <Text>Saiteja!</Text>
      <Text>Good Bye!</Text>
    </View>
  );
} 
*/