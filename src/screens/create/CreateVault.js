import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import InputField from "../../components/forms/InputField";
import { ScrollView } from "react-native-gesture-handler";
import { Body } from "../../theme/mainStyle";

const CreateVault = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [item, setItem] = useState([
    { label: "Social Media", value: "social media" },
    { label: "Email", value: "email" },
    { label: "Game", value: "Game" },
    { label: "Website/App", value: "website/app" },
    { label: "Network Provider", value: "network provider" },
  ]);
  return (
    <View style={styles.container}>
      <Body>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          keyboardShouldPersistTaps={"always"}
        >
          {/* <View style={{justifyContent:'flex-start', width: '80%', borderWidth: 3}}>
                <View style={{ borderWidth:3, width: '70%', }}>
                    <Text style={styles.label}>Category</Text>
                </View>
                
                <View>
                    <DropDownPicker
                    open={open}
                    value={value}
                    items={item}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItem}
                    defaultIndex={0}
                    closeAfterSelecting={true}
                    listMode="SCROLLVIEW"
                    //dropDownDirection="TOP"
                    //bottomOffset={100}
                    containerStyle={{height: '2%', width: '80%', marginTop: '0%'}}
                    style={styles.dropDownContainer}
                    dropDownStyle={styles.dropDownList}
                    placeholder="please select a category..."
                    onChangeItem={item => console.log(item.value)}
                /> 
               </View>
               </View> */}

          <InputField
            label={"Title"}
            placeholder={"please enter a title(required), e.g. google account"}
            onChangeText={() => console.log("text change...")}
          />

          <InputField
            label={"Login Detail"}
            placeholder={"Email or username"}
            onChangeText={() => console.log("text change...")}
          />
          <InputField
            label={""}
            placeholder={"Password"}
            onChangeText={() => console.log("text change...")}
          />

          <InputField
            label={"Website address"}
            placeholder={"Email or username"}
            onChangeText={() => console.log("text change...")}
          />

          <InputField
            label={"Note"}
            placeholder={"Email or username"}
            onChangeText={() => console.log("text change...")}
          />
        </ScrollView>
      </Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderWidth: 4,
    borderColor: "green",
  },
  scrollContainer: {
    borderWidth: 5,
    borderColor: "blue",
    //height: '100%',
    //flex: 1
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dropDownContainer: {
    borderWidth: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 8,
  },
  dropDownList: {
    //borderColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default CreateVault;
