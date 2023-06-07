import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import database from '@react-native-firebase/database';

const usersRef = database().ref('users');

// Dado a ser enviado
const userData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
};

// Enviar o dado para o Realtime Database



const Envio = () => {
   
   function deuCerto(){
      usersRef.once('value')
      .then((snapshot) => {
         const usersData = snapshot.val();
         console.log(usersData); // { "users": "oi" }
      })
      .catch((error) => {
         console.error('Erro ao acessar o dado:', error);
      });
   }
   function ligarDisp(){
      database().ref('/').update({
         users: 1,
      }).then(() => console.log('Data updated.'));
   }
   function desligarDisp(){
      database().ref('/').update({
         users: 0,
      }).then(() => console.log('Data updated.'));
   }

  const [text, setText] = useState('');

  const handleTextInputChange = (value) => {
    setText(value);
  };

  const handleButtonPress = async () => {
    const usersRef = database().ref('/EnergyControl');

    usersRef.once('led')
     .then((snapshot) => {
        const usersData = snapshot.val();
        console.log(usersData); // { "users": "oi" }
     })
     .catch((error) => {
        console.error('Erro ao acessar o dado:', error);
     });
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={handleTextInputChange}
        placeholder="Digite seu nome"
      />
      <Button title="Ligar dispositivo" onPress={ligarDisp} />
      <Button title="Desligar Dispositivo" onPress={desligarDisp} />
      <Button title="Teste" onPress={handleButtonPress} />
    </View>
  );
};

export default Envio;
