import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Pressable } from "react-native";

const AddButton = ({ iconSource, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <FontAwesome name={iconSource} size={40} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    borderColor: "#ffffff",
    borderWidth: 6,
    width: 100,
    height: 100,
    backgroundColor: "#FFD94D",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddButton;
