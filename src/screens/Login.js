import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";
import InputField from "../components/forms/InputField";
import BasicButton from "../components/buttons/BasicButton";
import SocialLoginServices from "../components/SocialLoginServices";
import { Body } from "../theme/mainStyle";
import Reminder from "../components/Reminder";

import { useLoginContext } from "../context/LoginProvider";

const Login = ({ navigation }) => {
  const { isLogged, setIsLogged } = useLoginContext();
  const [loaded] = useFonts({
    "Roboto-Light": require("./../../assets/fonts/Roboto-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Body>
        <View
          style={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InputField
            label={"Your Email"}
            onChangeText={() => console.log("text changed")}
            placeholder={"Enter your email"}
            keyboardType={"email-address"}
          />

          <InputField
            label={"Password"}
            onChangeText={() => console.log("pwd changed")}
            placeholder={"Enter your password"}
          />
          <View style={{ width: 360 }}>
            <Pressable onPress={() => navigation.navigate("Forget Password")}>
              <Text style={styles.forgetPwdTxt}>Forget password?</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <BasicButton
            label={"Log in"}
            onPress={() => setIsLogged((isLogged) => (isLogged = true))}
          />
          <SocialLoginServices />
        </View>

        <Reminder
          text={"Don't have an account?"}
          onPress={() => navigation.navigate("Register")}
          linkTxt={"Sign up"}
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
  forgetPwdTxt: {
    textAlign: "right",
    fontSize: 18,
    fontFamily: "Roboto-Light",
    color: "#534b8a",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    fontSize: 20,
    color: "#696969",
  },
});
export default Login;
