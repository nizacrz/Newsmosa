import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import initDB from './database';
   

const LoginScreen = ({ navigation }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
 
   const handleLogin = () => {
     const db = initDB();
 
     db.transaction(tx => {
       tx.executeSql(
         'SELECT * FROM users WHERE email = ? AND password = ?',
         [email, password],
         (tx, results) => {
           if (results.rows.length > 0) {
             console.log('User logged in successfully');
             navigation.navigate('Main');
           } else {
             console.log('Invalid email or password');
             setErrorMessage('Invalid email or password. Please try again.');
           }
         }
       );
     });
   };
 
   return (
     <View style={styles.container}>
       <Text style={styles.title}>Login</Text>
       {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
       <TextInput
         style={styles.input}
         placeholder="Email"
         onChangeText={text => setEmail(text)}
       />
       <TextInput
         style={styles.input}
         placeholder="Password"
         secureTextEntry={true}
         onChangeText={text => setPassword(text)}
       />
       <Button title="Login" onPress={handleLogin} />
       <Button title="Don't have an account? Signup" onPress={() => navigation.navigate('Signup')} />
     </View>
   );
 };