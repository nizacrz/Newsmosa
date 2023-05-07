import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./components/NavigationStack";

import {Provider as PaperProvider} from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <NavigationStack />
      <StatusBar style="auto" />
    </NavigationContainer>
    </PaperProvider>
  );
}
