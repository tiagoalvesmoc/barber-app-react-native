import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainsStack";
import AuthProvider from "./src/contexts/auth";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer style={styles.container}>
        <StatusBar barStyle="light-content" hidden={true} />
        <MainStack />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
