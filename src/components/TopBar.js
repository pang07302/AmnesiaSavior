import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import IconButton from "./buttons/IconButton";

const TopBar = ({ title, onPress, theme }) => {
  const [loaded] = useFonts({
    "Roboto-Medium": require("./../../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }
  if (theme === "primary") {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.btnContainer}>
          <IconButton
            iconSource={"search"}
            theme={"primary"}
            onPress={() => console.log("search button click")}
          />
        </View>
      </View>
    );
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
    position: "fixed",
    top: 0,
    width: "100%",
    height: 40,
    flexDirection: "row",
    backgroundColor: "rgba(229, 229, 229, 0.6)", //delete
  },
  iconContainer: {
    position: "absolute",
    height: "100%",
    paddingHorizontal: 16,
    zIndex: 1,
  },
  //search or sort button
  btnContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'red',
    right: 0,
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
