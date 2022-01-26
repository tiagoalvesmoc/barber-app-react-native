import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { AutContext } from "../contexts/auth";

export default function CustomTabBar({ state, navigation }) {
  const { user } = useContext(AutContext);
  const check = state.index;

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.tab_area}>
      <TouchableOpacity style={[styles.tab_item]} onPress={() => goTo("Home")}>
        <AntDesign name="home" size={24} color="#f5f5f5" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab_item} onPress={() => goTo("Search")}>
        <AntDesign name="search1" size={24} color="#f5f5f5" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab_itemMaior}
        onPress={() => goTo("Appointments")}
      >
        <AntDesign name="calendar" size={30} color="#4EADBE" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab_item}
        onPress={() => goTo("Favorites")}
      >
        <MaterialIcons name="favorite-border" size={24} color="#f5f5f5" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab_item} onPress={() => goTo("Profile")}>
        <Image
          source={require("../assets/img/pp.jpg")}
          style={{ width: 30, height: 30, borderRadius: 35 }}
        />

        {/* <AntDesign name="user" size={24} color="#f5f5f5" /> */}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  tab_area: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#4EADBE",
    flexDirection: "row",
    margin: 5,
    borderRadius: 10,
  },
  tab_item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "#f5f5f5",
    // borderRadius: 30,
    // height: 40,
    // margin: 3,
  },
  tab_itemMaior: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#4EADBE",
    marginTop: "-7%",
  },
});
