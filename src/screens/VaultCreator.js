import React, { useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import NewVault from "./NewVault";

const VaultCreator = ({ isVisible, onClose }) => {
  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>New Vault</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="black" size={22} />
          </Pressable>
        </View>
        <NewVault />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: "100%",
    width: "100%",
    // borderTopRightRadius: 18,
    // borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "18%",
    backgroundColor: "#FFD94D",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "black",
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default VaultCreator;
