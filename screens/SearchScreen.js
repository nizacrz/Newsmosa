import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper.js";

export default function Search() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text>SEARCH PAGE</Text>
        <StatusBar style="auto" />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
