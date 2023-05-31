import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";
import TopBar from "../components/TopBar";
import InputField from "../components/forms/InputField";
import BasicButton from "../components/buttons/BasicButton";
import SocialLoginServices from "../components/SocialLoginServices";
import { Body } from "../theme/mainStyle";
import Reminder from "../components/Reminder";

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Body>
        <View style={styles.inputFieldContainer}>
          <InputField
            label={"Your Email"}
            onChangeText={() => console.log("email changed")}
            placeholder={"Enter your email"}
            keyboardType={"email-address"}
          />

          <InputField
            label={"Create Password"}
            onChangeText={() => console.log("create password")}
            placeholder={"Enter your password"}
          />

          <InputField
            label={"Confirm Password"}
            onChangeText={() => console.log("Confirm password")}
            placeholder={"Confirm your password"}
          />
        </View>

        <View style={styles.footerContainer}>
          <BasicButton
            label={"Register"}
            onPress={() => navigation.navigate('Create')}
          />
          <SocialLoginServices />
        </View>
        <Reminder
          text={"Already have an account?"}
          onPress={() => navigation.navigate("Login")}
          linkTxt={"Sign in"}
        />
      </Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  inputFieldContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
  },
  footerContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  footerText: {
    fontSize: 20,
    color: "#696969",
  },
});

export default Register;
