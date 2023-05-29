import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Register from "../screens/Register";
import StartScreen from "../screens/StartScreen";
import CustomBackButton from "../components/buttons/CustomBackButton";
import ForgetPassword from "../screens/ForgetPassword";
import ResetPassword from "../screens/ResetPassword";
import { Header } from "../theme/mainStyle";
import TopBar from "../components/TopBar";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    // <NavigationContainer>
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
          title: "Login",
          header: () => (
            <Header>
              <TopBar
                title="Login"
                leftButton={() => navigation.goBack()}
                theme="login"
              ></TopBar>
            </Header>
          ),
        })}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={({ navigation, route }) => ({
          title: "Register",
          header: () => (
            <Header>
              <TopBar
                title="Register"
                leftButton={() => navigation.goBack()}
                theme="login"
              ></TopBar>
            </Header>
          ),
        })}
      />
      <Stack.Screen
        name="Forget Password"
        component={ForgetPassword}
        options={({ navigation, route }) => ({
          title: "Forget Password",
          headerLeft: () => (
            <CustomBackButton navigation={navigation} route={route} />
          ),
        })}
      />
      <Stack.Screen
        name="Reset Password"
        component={ResetPassword}
        options={({ navigation, route }) => ({
          title: "Reset Password",
          headerLeft: () => (
            <CustomBackButton navigation={navigation} route={route} />
          ),
        })}
      />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
export default LoginStack;
