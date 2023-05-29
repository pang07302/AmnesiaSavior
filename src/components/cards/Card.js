import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "react-native-vector-icons";

const Card = ({ theme, itemName, icon, onPress }) => {
  if (theme === "primary") {
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <View style={styles.logoContainer}>
              <MaterialCommunityIcons name={icon} size={24} color="black" />
            </View>

            <Text style={styles.label}>{itemName}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}></View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.label}>{itemName}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => console.log("click remove button")}>
          <FontAwesome name="remove" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    // borderWidth: "3",
    // borderColor:'green'
  },
  btnContainer: {
    width: "85%",
    height: "100%",
    //flexDirection: 'row',
    paddingHorizontal: 2,
    justifyContent: "flex-start",
    // borderWidth: 2,
    // borderColor: "blue",

    zIndex: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: "2%",
    // padding: 8,
    // height: '40%',
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    // might be changed as it does not work with android
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  iconContainer: {
    justifyContent: "center",
    //    borderWidth: 2,
    position: "relative",
    zIndex: 2,
    padding: 8,
    height: 10,
    left: 160,
  },
  logoContainer: {
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
    padding: 16,
  },

  label: {
    fontSize: 30,
  },
});

export default Card;
