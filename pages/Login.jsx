import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}> 
      <Image source={require('./../assets/images/Image.png')}/>
      <Text style={styles.textInfo}> Controle seus aparelhos e acompanhe o consumo deles!</Text>
      <Text style={{textAlign: 'center', justifyContent: 'center'}}>Logssdsdsdsin</Text>
    </View>
  )
}
const styles = StyleSheet.create({
   container:{
      flex: 1,
      backgroundColor: '#202529'
   }
})