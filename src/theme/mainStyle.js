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
      <ScrollView>{children}</ScrollView>
      {/* 
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
    borderWidth: 1,
    borderColor: "green",
  },
  body: {
    flex: 6,
    width:'100%',

    // borderWidth: 1,
    // borderColor: "red",
  },
  footer: {
    flex: 1,
    width:'100%',
    // borderWidth: 1,
    // borderColor: "blue",
  },
});
