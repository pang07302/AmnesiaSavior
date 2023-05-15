import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import ImageViewer from "../components/ImageViewer";
import RoundButton from "../components/buttons/BasicButton";
import { NavigationContainer } from "@react-navigation/native";

const PlaceholderImage = require("./../assets/starting_image.png");

const StartScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    "Roboto-Regular": require("./../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Light": require("./../../assets/fonts/Roboto-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Small Vault</Text>
        <Text style={styles.description}>
          Secure your paswword, Secure your future
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton
          label={"Get Started"}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //borderWidth: 2,
    borderColor: "blue",
  },
  imageContainer: {
    flexBasis: "53%",
    paddingTop: 10,
    //borderWidth: 2,
    marginTop: 70,
  },
  textContainer: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    //borderWidth: 2,
  },
  title: {
    fontSize: 40,
    fontFamily: "Roboto-Regular",
  },
  description: {
    fontSize: 20,
    fontFamily: "Roboto-Light",
    marginTop: 10,
  },
  buttonContainer: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default StartScreen;
