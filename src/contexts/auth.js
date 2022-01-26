import React, { useState, createContext, useEffect } from "react";
import firebase from "../firebase/config";
import AsyncStorage from "@react-native-community/async-storage";

export const AutContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passou, setPassou] = useState();

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("Auth_user");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      } else {
        alert("Error AsyncStorage");
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  //Funcao para logar o usario
  async function signIn(email, password) {
    setLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .once("value")
          .then((snapshot) => {
            let data = {
              uid: uid,
              nome: snapshot.val().nome,
              email: value.user.email,
            };

            setUser(data);
            storageUser(data);
            setLoading(false);
          });
      })
      .catch((error) => {
        alert(error.code);
        setLoading(false);
      });
  }

  //Cadastrar usuario
  async function signUp(email, password, nome, telefone) {
    setLoading(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .set({
            senha: password,
            nome: nome,
            email: email,
            telefone: telefone,
          })
          .then(() => {
            let data = {
              uid: uid,
              nome: nome,
              email: value.user.email,
            };
            setLoading(false);
            setUser(data);
            storageUser(data);
          });
      })
      .catch((error) => {
        alert(error.code);
        setLoading(false);
      });
  }

  async function storageUser(data) {
    await AsyncStorage.setItem("Auth_user", JSON.stringify(data));
  }

  //Funcao para Deslogar o usario
  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear().then(() => {
      setUser(false);
    });
  }

  return (
    <AutContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AutContext.Provider>
  );
}

export default AuthProvider;
