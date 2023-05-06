import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./components/NavigationStack";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
