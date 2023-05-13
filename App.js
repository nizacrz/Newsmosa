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
import SearchScreen from "./src/screens/SearchScreen";
import UserProfileScreen from './src/screens/UserProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
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
            <StatusBar style="auto" />
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
