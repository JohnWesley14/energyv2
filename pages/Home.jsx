import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("./../assets/images/Image.png")} />
      <Text style={styles.textInfo}>
        {" "}
        Controle seus aparelhos e acompanhe o consumo deles!
      </Text>
      <View style={styles.loginArea}>
        <TouchableOpacity
          style={styles.input}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.input}
          onPress={() => navigation.navigate("Cadastrar")}
        >
          <Text style={styles.textButton}>Cadastrar-se</Text>
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
  textInfo: {
    color: "#fff",
    fontSize: 16,
    maxWidth: "70%",
    textAlign: "center",
  },
  input: {
    width: 350,
    height: 50,
    backgroundColor: "#FFF",
    borderColor: "red",
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 19,
  },
  loginArea: {
    marginTop: 20,
    gap: 10,
  },
  textButton: {
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 13,
    fontSize: 18,
    fontWeight: "600",
  },
});
