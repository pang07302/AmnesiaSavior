import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import LoginStack from "./src/routes/LoginStack";
import * as React from "react";
import ResetPassword from "./src/screens/ResetPassword";
import SubmittedScreen from "./src/screens/SubmittedScreen";
import Profile from "./src/screens/Profile";

export default function App() {
  //return <LoginStack></LoginStack>;
  return <Profile></Profile>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
  },
});
