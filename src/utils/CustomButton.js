import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function CustomButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>Xong</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    fontWeight: "bold",
    color: "green",
    backgroundColor: "#fff",
    width: 100,
    height: 50,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 30,
  },
  buttonText: {
    textAlign: "center",
  },
});

export default CustomButton;
