import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import LoginStack from "./src/routes/LoginStack";
import * as React from "react";
import ResetPassword from "./src/screens/ResetPassword";
import SubmittedScreen from "./src/screens/SubmittedScreen";
import Profile from "./src/screens/Profile";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  //return <LoginStack></LoginStack>;
  return <HomeScreen></HomeScreen>
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
