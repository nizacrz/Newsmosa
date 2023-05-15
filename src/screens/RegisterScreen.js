import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { firebase } from "../components/database/firebase";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  registerUser = async (email, password, firstName, lastName) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://newsmosareact.firebaseapp.com",
          })
          .then(() => {
            alert("Email sent");
          })
          .catch((error) => {
            alert(error);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstName,
                lastName,
                email,
              });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/Newsmosa_icon.png")}
      />
      <TextInput
        style={styles.textInput}
        placeholder="First Name"
        onChangeText={(firstName) => setFirstName(firstName)}
        autoCorrect={false}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Last Name"
        onChangeText={(lastName) => setLastName(lastName)}
        autoCorrect={false}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => registerUser(email, password, firstName, lastName)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.link}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Log in</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 10,
  },
  textInput: {
    paddingTop: 10,
    paddingBottom: 5,
    width: 300,
    fontSize: 18,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 35,
    marginBottom: 5,
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
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  link: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#555",
    fontSize: 16,
  },
  linkText: {
    color: "#F8A000",
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Registration;
