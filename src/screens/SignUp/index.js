import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AutContext } from "../../contexts/auth";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [telefone, setTelefone] = useState();

  const { signIn, loading, signUp } = useContext(AutContext);

  function Login() {
    // signIn(email, password);
    signUp(email, password, name, telefone);
  }

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/img/logo2.png")}
        style={styles.img}
      />

      <Text style={{ fontSize: 29, fontWeight: "bold", fontStyle: "normal" }}>
        Cadastre-Se
      </Text>
      <View style={styles.inputArea}>
        <MaterialIcons name="account-circle" size={25} color="black" />
        <TextInput
          style={styles.txtInput}
          selectionColor="#000"
          placeholder="Digite seu nome"
          textContentType="name"
          onChangeText={(txt) => {
            setName(txt);
          }}
        />
      </View>
      <View style={styles.inputArea}>
        <MaterialIcons name="phone" size={25} color="black" />
        <TextInput
          style={styles.txtInput}
          selectionColor="#000"
          placeholder="Digite seu telefone"
          textContentType="telephoneNumber"
          onChangeText={(txt) => {
            setTelefone(txt);
          }}
        />
      </View>
      <View style={styles.inputArea}>
        <MaterialIcons name="email" size={25} color="black" />
        <TextInput
          style={styles.txtInput}
          selectionColor="#000"
          placeholder="Digite seu email"
          keyboardType="email-address"
          textContentType="emailAddress"
          onChangeText={(txt) => {
            setEmail(txt);
          }}
        />
      </View>

      <View style={styles.inputArea}>
        <FontAwesome5 name="key" size={25} color="black" />
        <TextInput
          style={styles.txtInput}
          secureTextEntry={true}
          selectionColor="#000"
          placeholder="Digite sua Senha"
          onChangeText={(txt) => {
            setPassword(txt);
          }}
        />
      </View>
      <TouchableOpacity style={styles.custombtn} onPress={Login}>
        {loading ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Text style={styles.custobtntxt}>Cadastrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnsignup}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text>Possui uma conta?</Text>
        <Text style={{ color: "#FFF" }}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#63c2d1",
  },
  img: {
    width: "100%",
    height: 235,
    position: "relative",
    marginTop: -50,
  },
  inputArea: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    margin: 5,
    width: 250,
    height: 50,
  },
  inputarea_txt: {},
  txtInput: {
    width: 220,
    height: 40,
    marginHorizontal: 5,

    alignItems: "flex-start",
  },
  custombtn: {
    borderRadius: 10,
    margin: 5,
    width: 250,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#268596",
  },
  custobtntxt: {
    fontWeight: "bold",
    fontSize: 15,
  },

  btnsignup: {
    flexDirection: "row",
    position: "relative",
    bottom: -30,
  },
});
