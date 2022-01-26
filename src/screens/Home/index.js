import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import * as Location from "expo-location";

import { useNavigation } from "@react-navigation/native";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import BarberItem from "../../components/BarberItem";

export default function Home() {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  async function handleLocationFinder() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    } else {
      let location = await Location.getCurrentPositionAsync({});
      let txt = JSON.stringify(location.coords);
      setLocation(txt);
      console.log(Location);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.headerArea}>
          <Text numberOfLines={2} style={styles.headerTitle}>
            Encontre Seu Barbeiro Favorito
          </Text>

          <TouchableOpacity
            style={styles.serchbtn}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.LocationArea}>
          <TextInput
            placeholderTextColor="#f5f5f5"
            placeholder="Onde você está? "
            style={styles.locationAreaTxt}
            value={location}
            onChangeText={(txt) => setLocationText(txt)}
          />

          <TouchableOpacity
            style={styles.LocationFinder}
            onPress={handleLocationFinder}
          >
            <MaterialIcons name="gps-fixed" size={24} color="#f5f5f5" />
          </TouchableOpacity>
        </View>

        <View style={styles.listArea}>
          <BarberItem />
          <BarberItem />
          <BarberItem />
          <BarberItem />
          <BarberItem />
          <BarberItem />
          <BarberItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#63c2d1",
  },
  scroll: {
    flex: 1,
    padding: 20,
  },
  headerArea: {
    width: 280,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "#f5f5f5",
    fontSize: 24,
    fontWeight: "bold",
  },
  serchbtn: {
    width: 25,
    height: 24,
  },
  LocationArea: {
    backgroundColor: "#4eadbe",
    height: 60,
    borderRadius: 30,
    flexDirection: "row",
    alignContent: "space-around",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
  },
  locationAreaTxt: {
    flex: 1,
    fontSize: 16,
    color: "#f5f5f5",
    height: "100%",
  },
  LocationFinder: {},
  listArea: {
    marginTop: 30,
    marginBottom: 30,
  },
});
