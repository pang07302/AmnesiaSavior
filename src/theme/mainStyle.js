import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Text,
  Pressable,
} from "react-native";

export const Header = ({ children }) => {
  return <View style={mainStyles.header}>{children}</View>;
};
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
    //marginVertical: "20%",
    borderWidth: 2,
    borderColor: "red",
  },
  footer: {
    // flex: 1,
    position: "absolute",
    height: "12.5%",
    width: "100%",
    bottom: 0,
    borderWidth: 3,
    borderColor: "blue",
    backgroundColor: "pink",
    zIndex: 1,
  },
});
