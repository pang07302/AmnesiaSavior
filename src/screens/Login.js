<<<<<<< HEAD
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";
import InputField from "../components/forms/InputField";
import TopBar from "../components/TopBar";
import BasicButton from "../components/buttons/BasicButton";
import SocialLoginServices from "../components/SocialLoginServices";
import { Header, Body, Footer } from "../theme/mainStyle";
import TabBar from "../components/TabBar";
=======
import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import {useFonts} from 'expo-font';
import InputField from '../components/forms/InputField';
import TopBar from '../components/TopBar';
import BasicButton from '../components/buttons/BasicButton';
import SocialLoginServices from '../components/SocialLoginServices';

>>>>>>> origin/HomeScreen

const Login = ({ navigation }) => {
  const [loaded] = useFonts({
    "Roboto-Light": require("./../../assets/fonts/Roboto-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      {/* ----------------Header------------------- */}
      <Header>
        <TopBar title={"Log in"} onPress={() => console.log("back")} />
      </Header>

      {/* ----------------Middle------------------- */}
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
            <Pressable onPress={() => console.log("forget password")}>
              <Text style={styles.forgetPwdTxt}>Forget password?</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <BasicButton label={"Log in"} onPress={() => console.log("Log in")} />
          <SocialLoginServices />
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text
              style={[
                styles.signUpText,
                { color: "black", fontWeight: "bold" },
              ]}
            >
              {" "}
              Sign up
            </Text>
          </Pressable>
        </View>
      </Body>

      {/* ---------------Footer--------------------    */}
      <Footer>
        <TabBar />
      </Footer>
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
