import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { firebase } from "../components/database/firebase";

signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      this.props.navigation.navigate("Login");
    })
    .catch((error) => this.setState({ errorMessage: error.message }));
};

const UserProfileScreen = () => {
  const [name, setName] = useState([]);

  const changePassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("does not exist");
        }
      });
  }, []);

  return (
    <LinearGradient
      colors={["#FFC371", "#FF5F6D"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.greeting}>Hello, {name.firstName}!</Text>

        <TouchableOpacity
          onPress={() => {
            changePassword();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 10,
  },
  greeting: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#181B2E",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#02474C",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default UserProfileScreen;
