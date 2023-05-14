import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import SQLite from "react-native-sqlite-storage";
import GetNews from "./src/components/GetNews";
import WebView from "./src/components/WebView";
import BookmarkScreen from "./src/screens/BookmarkScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SearchScreen from "./src/screens/SearchScreen";
import UserProfileScreen from './src/screens/UserProfileScreen';
import { authentication } from "./src/components/database/firebase";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Seperate the Tabs from Login and Signup
function HomeTabs () {
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


function App () {
{
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    padding: 8,
    margin: 10,
    width: "80%",
    fontSize: 18,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    marginTop: 20,
    fontSize: 16,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
export default App;