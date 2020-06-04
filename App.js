// import { View, Text } from 'react-native';
import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "./screens/HomePage"
import MemeAlbum from "./screens/MemeAlbum"
import SplashScreen from "./screens/SplashPage"
import SignIn from "./screens/SignIn"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Splash"}>
        <Stack.Screen name="Home" component={HomePage} options={{ title: "MemeWorks", headerLeft: null }} />
        <Stack.Screen name="Album" component={MemeAlbum} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={SignIn} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
