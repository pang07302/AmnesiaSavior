import { Pressable, View, StyleSheet } from "react-native";
import TabButton from "./buttons/TabButton";
import AddButton from "./buttons/AddButton";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const iconSource = route.params.iconSource;
        const isFocused = state.index === index;
        // if (label === "Create") return null;
        return (
          <View>
            <TabButton
              iconSource={iconSource}
              onPress={() => navigation.navigate(label)}
              isFocused={isFocused}
              label={label}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // borderWidth: 3,
    width: "75%",
    paddingRight: 2,
  },
  text: {
    fontSize: 24,
    fontFamily: "Roboto-Medium",
  },
});

export default TabBar;

// const TabBar = ({ state, navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.tabContainer}>
//         <View>
//           <TabButton
//             iconSource={"home"}
//             onPress={() => navigation.navigate(console.log(state.routes))}
//             label={"Vault"}
//           />
//         </View>

//         <View>
//           <TabButton
//             iconSource={"key"}
//             onPress={() => navigation.navigate("Tool")}
//             label={"Tool"}
//           />
//         </View>

//         <View>
//           <TabButton
//             iconSource={"user-circle-o"}
//             onPress={() => navigation.navigate("Profile")}
//             label={"Profile"}
//           />
//         </View>

//         <View>
//           <TabButton
//             iconSource={"gear"}
//             onPress={() => navigation.navigate("Setting")}
//             label={"Setting"}
//           />
//         </View>
//       </View>

//       <AddButton
//         iconSource={"plus"}
//         onPress={() => navigation.navigate("Create")}
//       />
//     </View>
//   );
// };
