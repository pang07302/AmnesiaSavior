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
      {children}
      {/* <ScrollView></ScrollView>
      <FlatList data = {} renderItem={(itemData)=>{
        return(<View></View>)

      }}></FlatList> */}
    </View>
  );
};
export const Footer = ({ children }) => {
  return <View style={mainStyles.footer}>{children}</View>;
};

const mainStyles = StyleSheet.create({
  header: {
    flex: "1",
    backgroundColor: "ddeedd",
  },
  body: {
    backgroundColor: "#eeeeee",
    flex: "6",
  },
  footer: {
    flex: "1",
    backgroundColor: "#dddddd",
  },
});
