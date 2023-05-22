import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import StartScreen from "../screens/StartScreen";
import ForgetPassword from "../screens/ForgetPassword";
import ResetPassword from "../screens/ResetPassword";

const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          // headerTintColor: "",
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
          options={{
            // headerTintColor: "",
            headerStyle: { backgroundColor: "#E5E5E5" },
          }}
        />
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
        {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default LoginStack;
