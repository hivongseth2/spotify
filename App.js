import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/Screens/HomeScreen";
import { NativeBaseProvider } from "native-base";

import React from "react";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import SelectSinger from "./src/Screens/SelectSinger";
import DoneSelect from "./src/Screens/DoneSelect";
export default function App() {
  return (
    <NativeBaseProvider>
      <DoneSelect />
    </NativeBaseProvider>
  );
}
