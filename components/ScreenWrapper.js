import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

const ScreenWrapper = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {children}
    </View>
  );
};

//Spacing
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
});

export default ScreenWrapper;
