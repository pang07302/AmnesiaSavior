import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import InputField from "../components/forms/InputField";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Body, Footer } from "../theme/mainStyle";
import TabBar from "../components/TabBar";
import DropDownBox from "../components/forms/DropDownBox";
import BankForm from "../components/forms/BankForm";
import OtherForm from "../components/forms/OtherForm";

const NewVault = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [item, setItem] = useState([
    { label: "Social Media", value: "social media" },
    { label: "Email", value: "email" },
    { label: "Bank Account", value: "bank account" },
    { label: "Game", value: "Game" },
    { label: "Website/App", value: "website/app" },
    { label: "Network Provider", value: "network provider" },
  ]);
  const [title, setTitle] = useState("");
  return (
    <View style={styles.container}>
      <Body>
        <DropDownBox
          label={"Category"}
          open={open}
          setOpen={setOpen}
          value={value}
          setValue={setValue}
          item={item}
          setItem={setItem}
          index={0}
          placeholder={"Please select a category..."}
          onChangeItem={(item) => console.log(item.value)}
          containerStyle={{ width: 360 }}
          style={[
            styles.dropDownContainer,
            { marginBottom: open ? "50%" : "2%" },
          ]}
          dropDownStyle={styles.dropDownList}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputField
            label={"Title"}
            value={title}
            placeholder={"Please enter a title(required), e.g. google account"}
            onChangeText={() => console.log("text change...")}
          />
          {value === "bank account" ? <BankForm /> : <OtherForm />}
        </View>
      </Body>
      {/* <Footer>
        <TabBar />
      </Footer> */}
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
    // borderWidth: 4,
    // borderColor: 'green'
  },
  scrollContainer: {
    // borderWidth: 5,
    // borderColor: 'blue',
    width: "100%",
    height: "auto",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  dropDownContainer: {
    borderWidth: 2,
    borderColor: "#e5e5e5",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 8,
    backgroundColor: "#e5e5e5",
  },
  dropDownList: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#e5e5e5",
  },
});

export default NewVault;
