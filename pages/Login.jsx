import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
export default function Login() {
  return (
    <View style={styles.container}> 
      <Image source={require('./../assets/images/Image.png')} style={{marginTop: -40}}/>
      <Text style={styles.textInfo}> Controle seus aparelhos e acompanhe o consumo deles!</Text>

      <View style={styles.divLogin}>
         <TextInput style={styles.inputText} placeholder='Nome de usuário' />
         <TextInput style={styles.inputText} placeholder='Senha' />
         <View style={styles.socialMedia}> 
            <TouchableOpacity style={styles.buttonSocialMedia}>
               <AntDesign name="google" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSocialMedia}>
               <AntDesign name="google" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSocialMedia}>
               <AntDesign name="google" size={24} color="black" />
            </TouchableOpacity>
         </View>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
   container:{
      flex: 1,
      backgroundColor: '#202529',
      alignItems: 'center',
      justifyContent: 'center'
   },textInfo:{
      color: "#fff",
      fontSize: 16,
      maxWidth: '70%',
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 10,
   },
   inputText:{
      width: 300,
      height: 50,
      borderRadius: 10,
      backgroundColor: '#fff',
      textAlign: 'center',
      fontWeight: '700'
   },
   divLogin:{
      marginTop: 20,
      gap: 10,
   },
   socialMedia:{
      gap: 20,
      display: 'flex',
      flexDirection: 'row'
      
      
   },
   buttonSocialMedia:{
      backgroundColor: '#fff',
      width: 87,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
   },
   
})