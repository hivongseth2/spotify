import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Color";
import { Box, Button, Heading, Input, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export default function LoginScreen() {
  return (
    <Box flex={1} bg={Colors.black}>
      <Box
        w="full"
        h="full"
        position="absolute"
        top="20"
        px="6"
        // justifyContent="center"
        bg={Colors.black}
      >
        <VStack space={6} pt="8">
          <Heading color={Colors.white}>EMAIL HOẶC TÊN NGƯỜI DÙNG</Heading>
          <Input
            variant="underlined"
            placeholder="user@gmail.com"
            w="100%"
            h="55"
            bg={Colors.gray}
            color={Colors.white}
            borderRadius="5"
          ></Input>

          {/* PASSWORD */}

          <Heading color={Colors.white}>MẬT KHẨU</Heading>
          <Input
            InputRightElement={
              <AntDesign name="eyeo" size={25} color={Colors.white} />
            }
            variant="underlined"
            w="100%"
            h="55"
            placeholder="******"
            type="password"
            bg={Colors.gray}
            color={Colors.white}
            borderRadius="5"
          ></Input>
        </VStack>

        <Button
          _pressed={{ bg: Colors.main }}
          my={38}
          w="45%"
          h={"55"}
          rounded={50}
          bg={Colors.gray}
          marginTop={12}
          alignSelf="center"
        >
          <Text style={{ fontWeight: "bold", color: "#ccc" }}>ĐĂNG NHẬP</Text>
        </Button>

        <Button
          w="70%"
          h="5%"
          ml={5}
          rounded={50}
          borderColor={Colors.gray}
          borderWidth={1}
          bg={Colors.black}
          marginTop={0}
          alignSelf="center"
          Colors={Colors.white}
        >
          <Text
            h={18}
            style={{ fontSize: 10, fontWeight: "bold", color: "#fff" }}
          >
            Đăng nhập không cần mật khẩu
          </Text>
        </Button>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({});
