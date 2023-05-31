import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import InputField from "./InputField";

const OtherForm = () => {
  return (
    <View style={styles.container}>
      <InputField
        label={"Login Detail"}
        placeholder={"Email or username"}
        onChangeText={() => console.log("text change...")}
      />

      <TextInput
        placeholder={"Password"}
        style={{
          backgroundColor: "#e5e5e5",
          borderRadius: 20,
          width: 360,
          height: 56,
          paddingHorizontal: 8,
          marginTop: 4,
        }}
        onChangeText={() => console.log("PASSWORD text changed")}
      />

      <InputField
        label={"Website address"}
        placeholder={"Enter website address(optional)"}
        onChangeText={() => console.log("text change...")}
      />

      <InputField
        label={"Note"}
        placeholder={"Enter some note for the vault(optional)"}
        onChangeText={() => console.log("text change...")}
        col={150}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
  },
});

export default OtherForm;
