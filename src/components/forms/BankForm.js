import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DropDownBox from "./DropDownBox";
import InputField from "./InputField";

const BankForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [item, setItem] = useState([
    { label: "Checking account", value: "checking account" },
    { label: "Saving account", value: "saving account" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownBox
        label={"Account Type"}
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={setValue}
        item={item}
        setItem={setItem}
        index={0}
        placeholder={"Please select an account type..."}
        onChangeItem={(item) => console.log(item.value)}
        containerStyle={{ width: 360 }}
        style={[
          styles.dropDownContainer,
          { marginBottom: open ? "20%" : "2%" },
        ]}
        dropDownStyle={styles.dropDownList}
      />
      <InputField
        label={"Account Holder"}
        placeholder={"Please enter account holder(required)"}
        onChangeText={() => console.log("text changed...")}
      />
      <InputField
        label={"Account Number"}
        placeholder={"Please enter account number(required)"}
        onChangeText={() => console.log("text changed...")}
        keyboardType={"number-pad"}
      />
      <InputField
        label={"PIN"}
        placeholder={"Please enter PIN(required)"}
        onChangeText={() => console.log("text changed...")}
      />
      <InputField
        label={"IBAN"}
        placeholder={"Please enter IBAN"}
        onChangeText={() => console.log("text changed...")}
      />
      <InputField
        label={"Swift Code"}
        placeholder={"Please enter Swift code"}
        onChangeText={() => console.log("text changed...")}
      />
      <InputField
        label={"Routing No."}
        placeholder={"Please enter rounting no."}
        onChangeText={() => console.log("text changed...")}
      />
      <InputField
        label={"Note"}
        placeholder={"Enter some note for the vault(optional)"}
        onChangeText={() => console.log("text change...")}
        col={150}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 3,
    // borderColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginTop: "8%",
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

export default BankForm;
