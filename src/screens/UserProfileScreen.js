import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Button, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import firebase from '../components/database/firebase';

signOut = () => {
  firebase.auth().signOut().then(() => {
    this.props.navigation.navigate('Login')
  })
  .catch(error => this.setState({ errorMessage: error.message }))
}  

const UserProfileScreen = () => {
  return (
    <LinearGradient
      colors={['white', '#176051']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <TouchableOpacity style={styles.editIcon}>
        <MaterialIcons name="edit" size={24} color="#017e60" />
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/profile_image.jpg')}
        style={styles.userImage}
      />
      <Card style={styles.card}>
        <Card.Content>
          <Title>firebase.auth().currentUser.displayName</Title>
          <Paragraph style={styles.email}>firebase.auth().currentUser.email</Paragraph>
          <TouchableOpacity>
            <Paragraph style={styles.link}>
              View Saved Stories
            </Paragraph>
          </TouchableOpacity>

          <TouchableOpacity>
          <Button
          color="#3740FE"
          title="Logout"
          onPress={() => firebase.auth().signOut()}
        />
          </TouchableOpacity>
          
        </Card.Content>
      </Card>
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
