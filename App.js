import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./src/screens/StartScreen";
import Login from "./src/screens/Login";
import TabBar from "./src/components/TabBar";

import "react-native-gesture-handler";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <StartScreen/> */}
      <Login />

      <TabBar />
    </View>
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
