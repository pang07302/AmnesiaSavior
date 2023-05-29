import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import SearchBar from "./SearchBar";

const TopBar = ({ title, leftButton, theme }) => {
  const [loaded] = useFonts({
    "Roboto-Medium": require("./../../assets/fonts/Roboto-Medium.ttf"),
  });
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [edit, setEdit] = useState(false);

  if (!loaded) {
    return null;
  }

  switch (theme) {
    case "login":
      return renderLogin(title, leftButton);
    case "primary":
      return renderPrimary(title);
    case "vault":
      return renderVault(
        title,
        leftButton,
        displaySearchBar,
        setDisplaySearchBar
      );
    case "record":
      return renderRecord(title, leftButton, edit, setEdit);
    default:
      return renderPrimary(title);
  }
};

const renderLogin = (title, leftButton) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        {/* title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* left button */}
        <View style={styles.leftButtonContainer}>
          <Pressable onPress={leftButton} style={styles.button}>
            <FontAwesome name="angle-left" size={36} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const renderPrimary = (title) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        {/* title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const renderVault = (
  title,
  leftButton,
  displaySearchBar,
  setDisplaySearchBar
) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        {/* title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* left button */}
        <View style={styles.leftButtonContainer}>
          <Pressable onPress={leftButton} style={styles.button}>
            <FontAwesome name="angle-left" size={36} color="black" />
          </Pressable>
        </View>

        {/* right button */}
        <View style={styles.rightButtonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setDisplaySearchBar((search) => (search = !search))}
          >
            {displaySearchBar === true ? (
              <Text>Cancel</Text>
            ) : (
              <FontAwesome name="search" size={28} color="black" />
            )}
          </Pressable>
        </View>
      </View>

      <View style={styles.searchBarContainer}>
        {displaySearchBar === true ? <SearchBar /> : <></>}
      </View>
    </View>
  );
};

const renderRecord = (title, leftButton) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        {/* title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* left button */}
        <View style={styles.leftButtonContainer}>
          <Pressable onPress={leftButton} style={styles.button}>
            <FontAwesome name="angle-left" size={36} color="black" />
          </Pressable>
        </View>

        {/* right button */}
        <View style={styles.rightButtonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setEdit((edit) => (edit = !edit))}
          >
            {displaySearchBar === true ? (
              <Text>Cancel</Text>
            ) : (
              <Text>Edit</Text>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ffd94d",
    paddingTop: "8%",
    borderWidth: 5,

    height: 160,
  },
  upperContainer: {
    width: "100%",
    flexDirection: "row",
    height: "60%",
  },
  searchBarContainer: {
    width: "100%",
    height: "40%",
    alignItems: "center",
  },

  titleContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto-Medium",
  },

  leftButtonContainer: {
    position: "absolute",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  rightButtonContainer: {
    position: "absolute",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    right: 0,
  },
  button: {
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
});

export default TopBar;
