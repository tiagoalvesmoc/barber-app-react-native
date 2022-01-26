import React, { useContext } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AutContext } from "../../contexts/auth";

export default function Profile() {
  const { signOut } = useContext(AutContext);

  function Logout() {
    signOut();
  }
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        top: 60,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
        }}
      >
        <Image
          source={require("../../assets/img/pp.jpg")}
          style={styles.imgPerfil}
        />
      </View>

      <TouchableOpacity style={styles.cambtn} onPress={Logout()}>
        <AntDesign name="camerao" size={30} color="#63c2d1" />
      </TouchableOpacity>

      <View>
        <Text>Tiago Alves</Text>
      </View>

      <TouchableOpacity style={styles.cambtn} onPress={Logout()}>
        <AntDesign name="logout" size={24} color="#63c2d1" />

        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imgPerfil: {
    alignItems: "center",

    width: 100,
    height: 100,
    borderRadius: 100,
  },
  cambtn: {
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 10,
  },
});
