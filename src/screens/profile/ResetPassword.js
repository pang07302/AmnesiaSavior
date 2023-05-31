import React from "react";
import { StyleSheet, View, Text } from "react-native";
import InputField from "../../components/forms/InputField";
import BasicButton from "../../components/buttons/BasicButton";
import { Body } from "../../theme/mainStyle";

const ResetPassword = () => {
  return (
    <View style={styles.container}>
      <Body>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Enter a new password to reset the password on your account.
          </Text>
        </View>
        <View style={styles.inputFieldContainer}>
          <InputField
            label={"Current Password"}
            onChangeText={() => console.log("enter current pwd")}
          />
          <InputField
            label={"New Password"}
            onChangeText={() => console.log("enter new pwd")}
          />
          <InputField
            label={"Confirm Password"}
            onChangeText={() => console.log("re-enter new password")}
          />
        </View>
        <View style={styles.btnContainer}>
          <BasicButton
            label={"Submit"}
            onPress={() => console.log("submit your new password")}
          />
        </View>
      </Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  textContainer: {
    // borderWidth: 2,
    // borderColor: 'red',
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "30%",
    marginTop: "8%",
    padding: "5%",
  },
  text: {
    fontSize: 20,
    color: "#696969",
  },
  inputFieldContainer: {
    // borderWidth: 2,
    // borderColor: 'green',
    justifyContent: "center",
    alignItems: "center",
    height: "65%",
  },
  btnContainer: {
    // borderWidth: 2,
    // borderColor: 'yellow',
    maxHeight: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
});

export default ResetPassword;
