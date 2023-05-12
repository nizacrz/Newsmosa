import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SQLite from "react-native-sqlite-storage";
import NavigationStack from "./src/components/NavigationStack";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";

import { Provider as PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Trending" component={SearchScreen} />
          {/* <Stack.Screen name='GetNews' component={GetNews} /> */}
          {/* <Stack.Screen name='WebView' component={WebViewComponent} options={{ headerShown: false }} /> */}
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
