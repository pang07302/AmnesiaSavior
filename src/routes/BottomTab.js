import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, Tool, Profile, Setting, CreateVault } from "../screens";
import { Footer } from "../theme/mainStyle";
import TopBar from "../components/TopBar";
import TabBar from "../components/TabBar";
import { AddButton } from "../components/buttons";
import { View } from "react-native";
import VaultCreator from "../screens/VaultCreator";
import { useState } from "react";

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onModalClose = () => {
    setIsModalVisible(false);
  };
  const onModalOpen = () => {
    setIsModalVisible(true);
  };
  return (
    <Tab.Navigator
      initialRouteName="Vault"
      tabBar={(props) => (
        <Footer>
          <TabBar {...props} />
          <View style={{ bottom: "4%", width: "25%" }}>
            <AddButton iconSource={"plus"} onPress={onModalOpen} />
            <VaultCreator isVisible={isModalVisible} onClose={onModalClose} />
          </View>
        </Footer>
      )}
    >
      <Tab.Screen
        name="Vault"
        component={HomeScreen}
        initialParams={{ iconSource: "home" }}
        options={({ navigation, route }) => ({
          header: () => <TopBar title="Vault" theme="vault"></TopBar>,
        })}
      ></Tab.Screen>
      <Tab.Screen
        name="Tool"
        component={Tool}
        initialParams={{ iconSource: "key" }}
        options={({ navigation, route }) => ({
          header: () => <TopBar title="Tool" theme="primary"></TopBar>,
        })}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ iconSource: "user-circle-o" }}
        options={({ navigation, route }) => ({
          header: () => <TopBar title="Profile" theme="Profile"></TopBar>,
        })}
      ></Tab.Screen>
      <Tab.Screen
        name="Setting"
        component={Setting}
        initialParams={{ iconSource: "gear" }}
        options={({ navigation, route }) => ({
          header: () => <TopBar title="Setting" theme="primary"></TopBar>,
        })}
      ></Tab.Screen>

      {/* <Tab.Screen
        name="Create"
        component={CreateVault}
        initialParams={{ iconSource: "plus" }}
        options={({ navigation, route }) => ({
          tabBarButton: () => (
            <AddButton
              iconSource={"plus"}
              onPress={(props) => navigation.navigate("Create")}
            />
          ),
          header: () => (
            <Header>
              <TopBar
                title="Create"
                leftButton={() => navigation.goBack()}
                theme="primary"
              ></TopBar>
            </Header>
          ),
        })}
      ></Tab.Screen> */}
    </Tab.Navigator>
  );
};

export default BottomTab;
