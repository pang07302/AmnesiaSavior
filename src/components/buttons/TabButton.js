import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TabButton = ({ iconSource, onPress, label, isFocused }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <FontAwesome
          name={iconSource}
          size={24}
          style={styles.buttonIcon}
          color={isFocused ? "#000000" : "#aaaaaa"}
        />
        <Text style={{ color: isFocused ? "#000000" : "#aaaaaa" }}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonIcon: {
    paddingHorizontal: 15,
  },
  button: {
    borderRadius: 2,
    borderColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    // borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 15,
    color: "red",
  },
  buttonContainer: {
    // color: isFocused ? "#673ab7" : "#222",
    alignItems: "center",
    justifyContent: "center",
    //padding: 2,
    marginHorizontal: 4,
    width: 70,
    height: 70,
    width: "100%",
  },
});

export default TabButton;
