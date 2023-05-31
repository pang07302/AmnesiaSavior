import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useFonts } from "expo-font";

const DropDownBox = ({
  label,
  open,
  setOpen,
  value,
  setValue,
  item,
  setItem,
  index,
  selected = true,
  listMode = "SCROLLVIEW",
  direction = "BOTTOM",
  placeholder,
  onChangeItem,
  containerStyle,
  style,
  dropDownStyle,
}) => {
  const [loaded] = useFonts({
    "Roboto-Medium": require("../../../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>

      <View>
        <DropDownPicker
          open={open}
          value={value}
          items={item}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItem}
          defaultIndex={index}
          closeAfterSelecting={selected}
          listMode={listMode}
          dropDownDirection={direction}
          containerStyle={containerStyle}
          style={style}
          dropDownStyle={dropDownStyle}
          placeholder={placeholder}
          placeholderStyle={{
            color: "#bdbdbd",
          }}
          onChangeItem={onChangeItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginTop: 8,
    // borderColor: "red",
    // borderWidth: 3,
  },
  labelContainer: {
    // borderWidth: 2,
    width: 360,
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
});
export default DropDownBox;
