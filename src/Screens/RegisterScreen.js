import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../Color";
import { Box, Button, Heading, Input, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [heading, setHeading] = useState("Email của bạn là gì000000000");
  const [descrip, setDescript] = useState("Bạn cần xác nhận email này sau.");
  const [type, setType] = useState("email");
  const [password, setPassword] = useState("");
  const [Date, setDate] = useState("");
  const [sex, setSex] = useState("");
  const [userName, setUserName] = useState("");
  const [flag, setFlag] = useState();
  const [input, setInput] = useState("");

  useEffect(() => {
    setFlag(0);
  }, []); // Thêm mảng trống [] để chỉ định rằng useEffect chỉ chạy một lần sau khi component mount.

  useEffect(() => {
    console.log("email", email);
  }, [email]);

  useEffect(() => {
    console.log("password", password);
  }, [password]);

  const handleNextButtonPress = () => {
    console.log(flag);
    if (flag === 0) {
      // Update email and change heading, type, and flag
      setEmail(input);
      setHeading("Tạo một mật khẩu");
      setDescript("");
      setType("password");
      setInput("");

      setFlag(1);
    } else if (flag === 1) {
      setPassword(input);
      setHeading("Ngày sinh của bạn là gì");
      setType("Date");
      setInput("");

      setFlag(2);
    }
  };

  const handleValue = (text) => {
    setInput(text);
    console.log("input", input);
  };

  return (
    <Box flex={1} bg={Colors.black}>
      <Box
        w="full"
        h="full"
        position="absolute"
        top="20"
        px="6"
        bg={Colors.black}
      >
        <VStack space={4} pt="8">
          <Heading color={Colors.white}>{heading}</Heading>
          <Input
            mt={3}
            variant="underlined"
            value={input}
            w="100%"
            h="55"
            bg={Colors.gray}
            color={Colors.white}
            borderRadius="5"
            onChangeText={(text) => handleValue(text)}
          ></Input>
          <Text style={{ color: "#ccc", fontSize: 10 }}>{descrip}</Text>
        </VStack>

        <Button
          _pressed={{ bg: Colors.main }}
          my={38}
          w="45%"
          h={"55"}
          type={type}
          rounded={50}
          bg={Colors.gray}
          marginTop={10}
          alignSelf="center"
          onPress={() => handleNextButtonPress()}
        >
          <Text style={{ fontWeight: "bold", color: "#ccc" }}>Tiếp</Text>
        </Button>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({});
