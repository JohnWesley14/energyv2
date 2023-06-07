import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";

export default function Cadastrar() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleNewAccount() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert("Certo"))
      .catch((error) => console.log(error));
    console.log(email);
    console.log(password);
  }
  function ligarDisp() {
    database()
      .ref("/")
      .update({
        users: 1,
      })
      .then(() => console.log("Data updated."));
  }
  function desligarDisp() {
    database()
      .ref("/")
      .update({
        users: 0,
      })
      .then(() => console.log("Data updated."));
  }
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/images/Image.png")}
        style={{
          marginTop: -40,
          resizeMode: "contain",
          width: 300,
          height: 200,
        }}
      />

      <Text style={styles.textInfo}>
        {" "}
        Controle seus aparelhos e acompanhe o consumo deles!
      </Text>

      <View style={styles.divLogin}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Senha"
          onChangeText={setPassword}
        />
        {/* <View style={styles.socialMedia}>
           <TouchableOpacity style={styles.buttonSocialMedia}>
             <AntDesign name="google" size={24} />
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonSocialMedia}>
             <AntDesign name="google" size={24} color="black" />
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonSocialMedia}>
             <AntDesign name="google" size={24} color="black" />
           </TouchableOpacity>
         </View> */}
        <TouchableOpacity onPress={handleNewAccount} style={styles.buttonLogin}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202529",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogin: {
    backgroundColor: "rgb(70,150,90)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 30,
    marginTop: 20,
  },
  textInfo: {
    color: "#fff",
    fontSize: 14,
    maxWidth: "70%",
    textAlign: "center",
    marginBottom: 5,
    marginTop: 15,
  },
  inputText: {
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
  divLogin: {
    marginTop: 20,
    gap: 10,
  },
  socialMedia: {
    gap: 20,
    display: "flex",
    flexDirection: "row",
  },
  buttonSocialMedia: {
    backgroundColor: "#fff",
    width: 87,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
