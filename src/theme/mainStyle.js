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
    // flex:2,
    top:0,
    position:'relative',
    height:'12.5%',
    width:'100%',
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "red",
  },
  body: {
    // flex: 7,
    top:'12.5%',
    height:'75%',
    width:'100%',
    position:'relative',


    borderWidth: 10,
    borderColor: "black",
  },
  footer: {
    // flex: 1,
    position:'relative',
    height:'12.5%',
    width:'100%',
    bottom:0,
    borderWidth: 1,
    borderColor: "blue",

  },
});
