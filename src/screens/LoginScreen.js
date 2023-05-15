import { signInWithEmailAndPassword } from "firebase/auth";
import React, { Component, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { authentication } from "../components/database/firebase";

const LoginScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    if (email === "" && password === "") {
      Alert.alert("Enter details to signin!");
    } else {
      signInWithEmailAndPassword(authentication, email, password).then(
        (res) => {
          setIsSignedIn(true);
          console.log("User signed in successfully!");
          this.props.navigation.navigate("Login");
        }
      );
      console.log();
    }
  };

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
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.registerTextContainer}>
          <Text style={styles.registerText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.registerLink}> Register here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

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

export default LoginScreen;
