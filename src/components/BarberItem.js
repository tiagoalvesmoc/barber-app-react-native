import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";

import Stars from "../components/Stars";
export default function BarberItem() {
  return (
    <TouchableOpacity style={styles.area}>
      <Image style={styles.img} source={require("../assets/img/pp.jpg")} />

      <View style={styles.areainfo}>
        <Text style={styles.username}>Tiago Alves</Text>

        <Stars Stars={5} showNumber={5} />

        <View style={styles.seeProfile}>
          <Text style={styles.seeProfiletxt}>Ver Perfil</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  area: {
    backgroundColor: "#f5f5f5",
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: "row",
    padding: 5,
  },
  img: {
    width: 88,
    height: 88,
    borderRadius: 20,
  },
  areainfo: {
    marginLeft: 20,
    justifyContent: "space-between",
  },
  username: {
    fontSize: 17,
    fontWeight: "bold",
  },
  seeProfile: {
    width: 85,
    height: 26,
    borderWidth: 1,
    borderColor: "#4eadbe",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  seeProfiletxt: {
    fontSize: 13,
    color: "#268596",
  },
});
