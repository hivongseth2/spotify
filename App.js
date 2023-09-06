import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/Screens/HomeScreen";
import { NativeBaseProvider } from "native-base";

import React from "react";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
export default function App() {
  return (
    <NativeBaseProvider>
      <RegisterScreen />
    </NativeBaseProvider>
  );
}
