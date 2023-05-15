import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { firebase } from '../components/database/firebase';

signOut = () => {
  firebase.auth().signOut().then(() => {
    this.props.navigation.navigate('Login')
  })
  .catch(error => this.setState({ errorMessage: error.message }))
}  

const UserProfileScreen = () => {
  const [name, setName] = useState([]);

  const changePassword = () => {
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
    .then(() => {
      alert('Password reset email sent!')
    })
    .catch(error => {
      alert(error)
    })
  }

  useEffect(() => {
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) =>{
      if(snapshot.exists){
          setName(snapshot.data())
      }
      else {
        console.log('does not exist')
      }
  })
  }, [])


  return (
    <LinearGradient
      colors={['white', '#176051']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
       <SafeAreaView style={styles.container}>
      
      <Text style={{fontSize:20, fontWeight:'bold'}}>
        Hello, {name.firstName}
      </Text>
      <TouchableOpacity
          onPress={()=>{
            changePassword()
        }}
          style={styles.button}
      >
        <Text style={{fontWeight:'bold', fontSize:22}}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={()=>{
            firebase.auth().signOut();
        }}
          style={styles.button}
      >
        <Text style={{fontWeight:'bold', fontSize:22}}>Sign Out</Text>
      </TouchableOpacity>
    
  </SafeAreaView>
  </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 10,
  },
  userImage: {
    alignSelf: 'center',
    width: 130,
    height: 130,
    borderRadius: 9999,
    marginTop: 80,
  },
  card: {
    marginTop: 20,
    borderRadius: 20,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    width: '100%',
  },
  email: {
    marginTop: 1,
    fontSize: 11,
    color: 'gray',
  },
  catchphrase: {
    marginTop: 1,
    fontSize: 11,
    color: 'gray',
  },
  gender: {
    marginTop: 20,
  },
  link: {
    color: '#017e60',
    marginTop: 10,
  },
  editIcon: {
    position: 'absolute',
    top: 265,
    right: 60,
    zIndex: 1,
  },
});

export default UserProfileScreen;
