import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { firebase } from "../components/database/firebase";


const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    loginUser = async (email, password) => {
        try {
          await firebase.signInWithEmailAndPassword(email, password);
        } catch (error) {
          alert(error.message)
        }

    }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/Newsmosa_icon.png")}
        />
      </View>
      <Text style={styles.logoText}>Welcome back</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect = {false}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={styles.input}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={() => loginUser (email,password)}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.registerTextContainer}>
          <Text style={styles.registerText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.registerLink}> Register here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
  }
  export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 400,
    height: 400,
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  input: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: "#009688",
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  registerTextContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  registerText: {
    color: "#000",
    fontSize: 16,
  },
  registerLink: {
    color: "#009688",
    fontSize: 16,
  },
  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    marginTop: 60,
    textAlign: "center",
    textTransform: "uppercase",
  },
});


