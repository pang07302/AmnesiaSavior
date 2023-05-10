import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useFonts } from "expo-font";

const TopBar = ({ title, onPress }) => {
  const [loaded] = useFonts({
    "Roboto-Medium": require("./../../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.iconContainer}>
        <FontAwesome name="angle-left" size={36} color="black" />
      </Pressable>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 40,
    flexDirection: "row",
    marginTop: 56,
    //backgroundColor: "#00ffff", //delete
  },
  iconContainer: {
    position: "absolute",
    height: "100%",
    paddingHorizontal: 16,
    zIndex: 1,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  text: {
    fontSize: 24,
    fontFamily: "Roboto-Medium",
  },
});

export default TopBar;
