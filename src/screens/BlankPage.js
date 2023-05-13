import { Header, Body, Footer } from "../theme/mainStyle";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const BlankPage = () => {
  return (
    <View style={{ width: "100%" }}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </View>
  );
};

export default BlankPage;
