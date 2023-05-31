import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useLoginContext } from "../context/LoginProvider";
import LoginStack from "./LoginStack";
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

function RouteStack() {
  const { isLogged } = useLoginContext();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogged ? (
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{ headerShown: false }}
          ></Stack.Screen>
        ) : (
          <Stack.Screen
            name="LoginStack"
            component={LoginStack}
            options={{ headerShown: false }}
          ></Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteStack;
