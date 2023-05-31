import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import ImageViewer from "../../components/ImageViewer";
import BasicButton from "../../components/buttons/BasicButton";
import { Body } from "../../theme/mainStyle";

const img = require("../../assets/default-profile.jpg");

const Profile = () => {
  return (
    <View style={styles.container}>
      <Body>
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={img} ratio={0.8} />
        </View>
        <View style={styles.emailContainer}>
          <Text style={{ fontSize: 24, color: "#696969", fontWeight: "300" }}>
            user0012@gmail.com
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <BasicButton
            label={"Change password"}
            onPress={() => console.log("navigate to reset pwd screen")}
          />
          <BasicButton
            label={"Sign out"}
            onPress={() => console.log("sign out")}
          />
        </View>
      </Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    width: "100%",
    // borderWidth: 2,
    // borderColor: 'blue'
  },
  imageContainer: {
    height: "56%",
    //width: '%',
    justifyContent: "center",
    alignItems: "center",
    marginTop: "16%",
    // borderColor: 'yellow',
    // borderWidth: 2
  },
  emailContainer: {
    // height: '8%',
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 2
  },
  btnContainer: {
    // borderWidth: 10,
    // borderColor: 'green',
    width: "100%",
    alignItems: "center",
    marginTop: "10%",
  },
});

export default Profile;
