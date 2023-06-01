import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { useFonts } from "expo-font";

const InputField = ({
  label,
  onChangeText,
  keyboardType = "default",
  placeholder,
  value,
  secureTextEntry = false,
  col = 56,
  multiline = false,
}) => {
  const [loaded] = useFonts({
    "Roboto-Medium": require("../../../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        multiline={multiline}
        style={[styles.inputField, { height: col }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: "15%",
    //alignItems: 'center',
    justifyContent: "center",
    // height: 20,
    //borderWidth: 2,
    marginTop: 32,
    //backgroundColor:'red'
  },
  inputField: {
    marginTop: 8,
    width: 360,
    //height: 56,
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: "#e5e5e5",
  },
  label: {
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
});

export default InputField;
