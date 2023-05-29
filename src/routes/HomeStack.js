import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../theme/mainStyle";
import TopBar from "../components/TopBar";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          title: "Vault",
          header: () => (
            <Header>
              <TopBar title="Vault" theme="primary"></TopBar>
            </Header>
          ),
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default HomeStack;
