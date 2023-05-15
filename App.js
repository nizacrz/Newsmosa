import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from 'react';
import { firebase } from "./src/components/database/firebase";



import Header from "./src/components/Header";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SearchScreen from "./src/screens/SearchScreen";
import UserProfileScreen from './src/screens/UserProfileScreen';

import BookmarkScreen from "./src/screens/BookmarkScreen";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ 
          headerTitle: () => <Header name="Bug Ninza" />,
           headerStyle:{
            height:150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            backgroundColor:'#00e4d0',
            shadowColor:'#000',
            elevation:25
           }
         }}
      />
      <Stack.Screen
        name="Registration"
        component={RegisterScreen}
        options={{ 
          headerTitle: () => <Header name="Bug Ninza" />,
           headerStyle:{
            height:100,
            borderBottomLeftRadius:50,
            borderBottomRightRadius:50,
            backgroundColor:'#00e4d0',
            shadowColor:'#000',
            elevation:25
           }
         }}
      />
    </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: "#176051"
  }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: () =><Ionicons name="home" size={24} color="black" />
      }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: () =><Ionicons name="search" size={24} color="black" />
      }}/>
      <Tab.Screen name="Bookmark" component={BookmarkScreen} options={{
          tabBarIcon: () =><Ionicons name="bookmark" size={24} color="black" />
      }}/>
      <Tab.Screen name="User Profile" component={UserProfileScreen} options={{
          tabBarIcon: () =><Ionicons name="person" size={24} color="black" />
      }}/>
  </Tab.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}