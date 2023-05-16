import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { firebase } from "../components/database/firebase";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };

  // forget password
  const forgetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/Newsmosa_icon.png")}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => loginUser(email, password)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.gButton}
      >
        <Text style={styles.gText}>Enter as Guest</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Registration")}
        style={styles.link}
      >
        <Text style={styles.loginText}>Don't have an account?</Text>
        <Text style={styles.linkText}>Sign up here</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={forgetPassword} style={styles.link}>
        <Text style={styles.linkForgotText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  textInput: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 300,
    fontSize: 20,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    marginBottom: 20,
    textAlign: "left",
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 25,
    marginBottom: 10,
    height: 60,
    width: 300,
    backgroundColor: "#02474C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  gButton: {
    marginTop: 5,
    height: 30,
    width: 150,
    fontSize: 5,
    backgroundColor: "#02474C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#fff",
  },
  gText: {
    fontSize: 14,
    color: "#fff",
  },
  link: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#000",
    fontSize: 16,
  },
  linkText: {
    color: "#009688",
    fontSize: 16,
    marginLeft: 5,
  },
  linkForgotText: {
    color: "#009688",
    fontSize: 16,
    marginLeft: 5,
    marginTop: -15,
  },
});

export default Login;
