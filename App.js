import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import LoginStack from "./src/routes/LoginStack";
import * as React from "react";

export default function App() {
  return <LoginStack></LoginStack>;
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
