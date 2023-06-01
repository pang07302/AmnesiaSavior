import { StyleSheet, View, ScrollView } from "react-native";

export const Body = ({ children }) => {
  return (
    <View style={mainStyles.body}>
      <ScrollView style={{ marginBottom: "1%", height: "100%" }}>
        {children}
      </ScrollView>
    </View>
  );
};
export const Footer = ({ children }) => {
  return <View style={mainStyles.footer}>{children}</View>;
};

const mainStyles = StyleSheet.create({
  body: {
    // flex: 7,
    position: "relative",
    height: "100%",
    width: "100%",
    // position: "absolute",
    backgroundColor: "#FFFFFF",
    // borderWidth: 10,
    // borderColor: "black",
  },
  footer: {
    position: "absolute",
    height: "10%",
    width: "100%",
    bottom: 0,
    paddingBottom: "4%",
    backgroundColor: "rgba(229, 229, 229, 1)",
    alignItems: "flex-end",
    flexDirection: "row",
    zIndex: 1,

    borderWidth: 3,
  },
});
