import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Stars(Stars, showNumber) {
  let s = [0, 0, 0, 0, 0];

  return (
    <View style={styles.stars}>
      <View style={styles.starView}>
        {/* {s.map(() => {
          <AntDesign name="staro" size={14} color="black" />;
        })} */}
        <AntDesign name="star" size={14} color="#FFA500" />
        <AntDesign name="star" size={14} color="#FFA500" />
        <AntDesign name="staro" size={14} color="#63c2d1" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: "row",
  },
  starView: {
    flexDirection: "row",
  },
});
