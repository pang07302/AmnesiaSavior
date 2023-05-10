import { Pressable, View, StyleSheet } from "react-native";
import TabButton from "./buttons/TabButton";
import AddButton from "./buttons/AddButton";

const TabBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <View>
          <TabButton
            iconSource={"home"}
            onPress={() => console.log("press Vault button")}
            label={"Vault"}
          />
        </View>

        <View>
          <TabButton
            iconSource={"key"}
            onPress={() => console.log("press Tool button")}
            label={"Tool"}
          />
        </View>

        <View>
          <TabButton
            iconSource={"user-circle-o"}
            onPress={() => console.log("press Profile button")}
            label={"Profile"}
          />
        </View>

        <View>
          <TabButton
            iconSource={"gear"}
            onPress={() => console.log("press Setting button")}
            label={"Setting"}
          />
        </View>
      </View>

      <AddButton
        iconSource={"plus"}
        onPress={() => console.log("press Add button")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "8%",
    bottom: 0,
    paddingBottom: 8,
    backgroundColor: "rgba(229, 229, 229, 0.6)", //#E5E5E5
    alignItems: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  tabContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 24,
    fontFamily: "Roboto-Medium",
  },
});

export default TabBar;
