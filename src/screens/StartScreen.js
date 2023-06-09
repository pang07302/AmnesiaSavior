import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import ImageViewer from "../components/ImageViewer";
import RoundButton from "../components/buttons/BasicButton";

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
        <ImageViewer imgSource={PlaceholderImage} ratio={0.6} />
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
    width: "100%",
    //borderColor: "blue",
  },
  imageContainer: {
    //flexBasis: "55%",
    height: "56%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    // borderWidth: 2,
    // borderColor: 'yellow',
    marginTop: "7%",
  },
  textContainer: {
    height: "16%",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: 'black'
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
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: 'green'
  },
});
export default StartScreen;
