import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

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
          <Title>Juan Dela Cruz</Title>
          <Paragraph style={styles.email}>juandelacruz@gmail.com</Paragraph>
          <Paragraph style={styles.catchphrase}>What's the catch today?</Paragraph>
          <Paragraph style={styles.gender}>
            {'    '}Age{'       '}Gender{'      '}Number
          </Paragraph>
           <Paragraph>     ??          ??               ??
          </Paragraph>
          <Paragraph>
          {'  '}
          </Paragraph>
          <TouchableOpacity>
            <Paragraph style={styles.link}>
              View Saved Stories
            </Paragraph>
          </TouchableOpacity>

          <TouchableOpacity>
            <Paragraph style={styles.link}>
              Logout
            </Paragraph>
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
