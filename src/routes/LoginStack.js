import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Register from "../screens/Register";
import StartScreen from "../screens/StartScreen";
<<<<<<< HEAD
import { StyleSheet, Pressable } from "react-native";
import CustomBackButton from "../components/buttons/CustomBackButton";
=======
import ForgetPassword from "../screens/ForgetPassword";
import ResetPassword from "../screens/ResetPassword";
>>>>>>> origin/PasswordScreen

const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    <NavigationContainer>
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
            headerLeft: () => (
              <CustomBackButton navigation={navigation} route={route} />
            ),
          })}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={({ navigation, route }) => ({
            title: "Register",
            headerLeft: () => (
              <CustomBackButton navigation={navigation} route={route} />
            ),
          })}
        />
<<<<<<< HEAD
=======
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forget Password" component={ForgetPassword} />
        <Stack.Screen 
          name="Reset Password" 
          component={ResetPassword} 
          options={{
          // headerTintColor: "",
          headerStyle: { backgroundColor: "#E5E5E5" },
        }}
        
        />
>>>>>>> origin/PasswordScreen
        {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default LoginStack;
