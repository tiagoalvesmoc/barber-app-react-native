import React, { useEffect, useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AutContext } from "../../contexts/auth";

export default function Preload() {
  const navigation = useNavigation();
  const { signed } = useContext(AutContext);

  const [dark, setDark] = useState(true);
  // useEffect(() => {
  //   const checktoken = async () => {
  //     const token = await AsyncStorage.getItem("token");

  //     if (token !== null) {
  //     } else {
  //       navigation.navigate("SignIn");
  //     }
  //   };
  //   checktoken();
  // }, []);

  useEffect(() => {
    signed ? navigation.navigate("MainTabs") : navigation.navigate("SignIn");
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: dark ? "rgba(10, 10, 30,1)" : "#63c2d1",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    img: {
      width: "100%",
      height: "50%",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {dark ? (
        <Image
          source={require("../../assets/img/logowhite.png")}
          style={styles.img}
        />
      ) : (
        <Image
          source={require("../../assets/img/logo2.png")}
          style={styles.img}
        />
      )}

      <ActivityIndicator color={"#000"} size="large" />
    </SafeAreaView>
  );
}
