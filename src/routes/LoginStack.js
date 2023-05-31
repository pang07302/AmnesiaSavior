import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register, ForgetPassword, StartScreen } from "../screens";

import TopBar from "../components/TopBar";
import NewVault from "../screens/NewVault";

const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 24,
        },
        headerStyle: { backgroundColor: "#E5E5E5" },
      }}
    >
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation, route }) => ({
          header: () => (
            <TopBar
              title="Login"
              leftButton={() => navigation.goBack()}
              theme="login"
            ></TopBar>
          ),
        })}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={({ navigation, route }) => ({
          header: () => (
            <TopBar
              title="Register"
              leftButton={() => navigation.goBack()}
              theme="login"
            ></TopBar>
          ),
        })}
      />
      <Stack.Screen
        name="Forget Password"
        component={ForgetPassword}
        options={({ navigation, route }) => ({
          header: () => (
            <TopBar
              title="Forget Password"
              leftButton={() => navigation.goBack()}
              theme="login"
            ></TopBar>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
export default LoginStack;
