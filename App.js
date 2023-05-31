import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import LoginProvider from "./src/components/context/LoginProvider";
import LoginStack from "./src/routes/LoginStack";
import * as React from "react";
import ResetPassword from "./src/screens/profile/ResetPassword";
import SubmittedScreen from "./src/screens/SubmittedScreen";
import Profile from "./src/screens/profile/Profile";
import HomeScreen from "./src/screens/vault/HomeScreen";
import { useLoginContext } from "./src/context/LoginProvider";

import AppProvider from "./src/context/AppProvider";
import RouteStack from "./src/routes/RouteStack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AppProvider>
      <RouteStack />
    </AppProvider>
  );
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
