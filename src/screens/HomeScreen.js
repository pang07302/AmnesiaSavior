import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import TabBar from "../components/TabBar";
import Card from "../components/cards/Card";
import SearchBar from "../components/SearchBar";
import { Header, Body, Footer } from "../theme/mainStyle";

const HomeScreen = ({ navigation }) => {
  const CATEGORY = [
    {
      id: "001",
      name: "All",
      icon: "all-inclusive",
    },
    {
      id: "002",
      name: "Social Media",
      icon: "chat",
    },
    {
      id: "003",
      name: "E-mail",
      icon: "email",
    },
    {
      id: "004",
      name: "Game",
      icon: "gamepad-variant",
    },
    {
      id: "005",
      name: "Website/App",
      icon: "application-outline",
    },
    {
      id: "006",
      name: "Bank Account",
      icon: "bank-outline",
    },
    {
      id: "007",
      name: "Network Provider",
      icon: "access-point-network",
    },
  ];
  return (
    <View style={styles.container}>
      {/* <Header>
        <View style={styles.textContainer}>
          <View style={{ borderWidth: 2, position: "relative", top: "30%" }}>
            <Text
              style={{ fontSize: 36, fontWeight: "bold", paddingLeft: "5%" }}
            >
              My Vault
            </Text>
          </View>
        </View>
        <View style={styles.SearchBarContainer}>
          <SearchBar />
        </View>
      </Header> */}

      <Body>
        <ScrollView style={styles.bodyContainer}>
          {CATEGORY.map((item, index) => {
            return (
              <Card
                key={item.id}
                theme="primary"
                itemName={item.name}
                icon={item.icon}
                onPress={() => console.log("click category card")}
              />
            );
          })}
        </ScrollView>
        {/* <View style={{width:'100%',height:200, zIndex:1,position:"fixed" ,bottom:20}}> */}

        {/* </View> */}
      </Body>

      <Footer>
        <TabBar />
      </Footer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textContainer: {
    borderWidth: 2,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    //alignItems: 'baseline',
    backgroundColor: "#ffd94d",
    position: "relative",
    zIndex: 0,
  },
  SearchBarContainer: {
    borderWidth: 2,
    borderColor: "red",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "13%",
    zIndex: 3,
  },
  bodyContainer: {
    padding: 16,

    width: "100%",
    paddingBottom: "16%",

    // borderWidth: 2,
  },
});

export default HomeScreen;
