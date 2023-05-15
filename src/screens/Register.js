import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";
import TopBar from "../components/TopBar";
import InputField from "../components/forms/InputField";
import BasicButton from "../components/buttons/BasicButton";
import SocialLoginServices from "../components/SocialLoginServices";

const Register = () => {
  return (
    <View style={styles.container}>
      {/* <TopBar 
            title={'Create New Account'} 
            onPress={() => console.log('back to starting screen')}/> */}

      {/* -----------Middle-------- */}
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

      {/* ---------------Footer---------------- */}
      <View style={styles.footerContainer}>
        <BasicButton
          label={"Register"}
          onPress={() => console.log("direct to main screen")}
        />
        <SocialLoginServices />

        <View style={styles.textContainer}>
          {/* ---this section might be improved---- */}
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => console.log("direct to sign up screen")}>
            <Text
              style={[
                styles.footerText,
                { color: "black", fontWeight: "bold" },
              ]}
            >
              {" "}
              Sign in
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    //borderWidth: 3
  },
  inputFieldContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    // borderWidth: 2,
    // borderColor: 'green'
  },
  footerContainer: {
    alignItems: "center",
    justifyContent: "center",
    // borderColor: 'purple',
    // borderWidth: 3,
    height: 300,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    // borderColor: 'yellow',
    // borderWidth: 3
  },
  footerText: {
    fontSize: 20,
    color: "#696969",
  },
});

export default Register;
