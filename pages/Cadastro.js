import React, { useState, useEffect } from 'react';
import config from '../config/config.json'
import { 
  StyleSheet,
  Text,
  View, 
  TouchableWithoutFeedback, 
  Keyboard, 
  TextInput, 
  TouchableOpacity } from 'react-native';

export function Cadastro({ navigation }) {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [message, setMessage] = useState(null)

  async function registerUser() {

    let reqs = await fetch(config.urlRootNode + 'create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nameUser: user,
        passwordUser: password,
        emailUser: email
      })
    });

    let ress = await reqs.json()
    setMessage(ress)
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={{alignItems: 'center'}}>
          {message && (
            <Text>{message}</Text>
          )}

        <TextInput style={styles.input}
            placeholder='Digite seu nome'
            onChangeText={(text) =>setUser(text)}
          />
          <TextInput style={styles.input}
            placeholder='Digite seu email'
            onChangeText={(text) =>setEmail(text)}
          />
          <TextInput style={styles.input}
            placeholder='Digite seu senha'
            onChangeText={(text) =>setPassword(text)}
            secureTextEntry={true}
          />
        
          <TouchableOpacity style={styles.btnSubmit} onPress={registerUser}>
            <Text style={styles.text}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 60,
    width: 250,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 5
  },
  btnSubmit: {
    backgroundColor: 'blue',
    height: 60,
    width: 250,
    borderRadius: 5,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  }
})