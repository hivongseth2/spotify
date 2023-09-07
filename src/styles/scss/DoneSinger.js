// import { View, Text } from 'react-native'
import { FlatList, View, Image, Text, StyleSheet } from "react-native";

import React from "react";
import { Center } from "native-base";

const stylesDoneSinger = StyleSheet.create({
  mainContent: {
    backgroundColor: "black",
    height: "100%",
    // width: "100%",
  },
  container: {
    // flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    padding: 80,
    // alignItems: "center",
    height: 300,
  },
  gridItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // width: "50%",

    // marginLeft: -20,
    // paddingRight: 40,
  },

  img: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 3,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  heading2: {
    color: "white",
    height: 35,
    width: "100%",
    textAlign: "center",
    fontWeight: "700",
    justifyContent: "center",
    fontSize: 30,
  },
  text: {
    color: "white",
    height: 35,
    width: "100%",

    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});

export default stylesDoneSinger;
