import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import database from "@react-native-firebase/database";

export default function DashboardInicial() {
  const [stateOfLed, setStateOfLed] = useState("");
  function ligarDisp() {
    database()
      .ref("/EnergyControl/")
      .update({
        led: "1",
      })
      .then(() => console.log(`Ligado ${console.count()}`));
  }
  function desligarDisp() {
    database()
      .ref("/EnergyControl/")
      .update({
        led: "0",
      })
      .then(() => console.log(`Desligado ${console.count()}`));
  }
  function lerDisp() {
    database()
      .ref("/EnergyControl/on")
      .on("value", (snapshot) => {
        setStateOfLed(`O led está: ${snapshot.val()}`);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Entypo name="menu" size={24} color="white" />
        <FontAwesome name="user-circle" size={24} color="white" />
      </View>
      <View style={styles.sectionButtons}>
        <TouchableOpacity onPress={ligarDisp} style={styles.btn}>
          <Text style={styles.textBtn}>Ligar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={desligarDisp} style={styles.btn}>
          <Text style={styles.textBtn}>Desligar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={lerDisp} style={styles.btn}>
          <Text style={styles.textBtn}>Teste</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textState}>{stateOfLed}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#202529",
  },
  btn: {
    width: 70,
    height: 40,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
    position: "absolute",
    top: "10%",
  },
  sectionButtons: {
    width: "100%",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
  textBtn: {
    color: "rgb(20, 20, 20)",
  },
  textState: {
    color: "#fff",
  },
});
