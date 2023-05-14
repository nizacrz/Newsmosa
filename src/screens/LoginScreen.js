
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { Component, useState } from 'react';
import { ActivityIndicator, Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authentication } from '../components/database/firebase';


const LoginScreen = () => {
  
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signIn = () => {
    if(email === '' && password === '') {
      Alert.alert('Enter details to signin!')
    } else {
    signInWithEmailAndPassword(authentication, email, password)
    .then((res) => {
      setIsSignedIn(true);
      console.log('User signed in successfully!')
      this.props.navigation.navigate('Login')
    })
    console.log();
  }
}


    return (
        <SafeAreaView>
          <TextInput placeholder='Email' value = {email} onChangeText={text=>setEmail(text)}/>

          <TextInput placeholder='Password' value = {password} onChangeText={text=>setPassword(text)} secureTextEntry={true} />
          <Button title = 'Sign In' onPress={signIn} />
          <View>
        <Text 
          style={styles.registerText}
          onPress={() => this.props.navigation.navigate('Register')}>
          Already Registered? Click here to login
        </Text>        
        </View>
        </SafeAreaView>

      )
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  registerText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

export default LoginScreen;