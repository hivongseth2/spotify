// Trong tệp RegisterScreen.js
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  RadioButton,
} from "react-native";
import CheckBox from "expo-checkbox";
import React, { useEffect, useState, useMemo } from "react";
import Colors from "../../Color";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Box, Button, Heading, Input, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import styles from "../styles/scss/RegisterScreenStyles.js"; // Import CSS
import { FormatDate } from "../utils/Formatter.js";
import RadioGroup from "react-native-radio-buttons-group";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [heading, setHeading] = useState("Email của bạn là gì");
  const [descrip, setDescript] = useState("Bạn cần xác nhận email này sau.");
  const [type, setType] = useState("email");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(true);
  const [buttonName, setButtonName] = useState("Tiếp");
  const [sex, setSex] = useState();
  const [userName, setUserName] = useState("");
  const [flag, setFlag] = useState();
  const [input, setInput] = useState("");
  const radioButtons = useMemo(
    () => [
      {
        id: true, // acts as primary key, should be unique and non-empty string
        label: "Nam",
        value: "Male",
        color: "green",
        borderSize: "4",
        size: 25,
        labelStyle: styles.text,
      },
      {
        id: false,
        label: "Nữ",
        value: "Female",
        color: "green",
        borderSize: "4",
        size: 25,
        labelStyle: styles.text,
      },
    ],
    []
  );
  //Check box cuối
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([false, false]);

  const checkboxes = [
    {
      label: "Tôi không muốn nhận tin nhắn tiếp thị",
      value: "marketingMessages",
    },
    { label: "Chia sẻ dữ liệu đăng ký", value: "shareRegistrationData" },
  ];
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setShow(false);
  };

  useEffect(() => {
    setFlag(0);
  }, []);

  useEffect(() => {
    console.log(
      `email: ${email} || mật khẩu : ${password} || date : ${date} || sex : ${sex} || username : ${userName}`
    );
  }, [flag]);

  const handleNextButtonPress = () => {
    console.log(flag);
    if (flag === 0) {
      setEmail(input);
      setHeading("Tạo một mật khẩu");
      setDescript("");

      setInput("");
      setFlag(1);
    } else if (flag === 1) {
      setPassword(input);
      setHeading("Ngày sinh của bạn là gì");
      setInput("");
      setFlag(2);
    } else if (flag === 2) {
      setHeading("Giới tính của bạn là gì");
      setInput("");
      setFlag(3);
    } else if (flag === 3) {
      setHeading("Tên của bạn là gì?");
      setInput("");
      setDescript("Thông tin này sẽ xuất hiện trên hồ sơ Spotify của bạn.");
      setButtonName("Tạo tài khoản");
      setFlag(4);
    } else if (flag === 4) {
      setUserName(input);
      setFlag(5);
    }
  };

  const handleValue = (text) => {
    setInput(text);
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
          <Heading style={styles.heading}>{heading}</Heading>
          {flag === 2 ? (
            // Hiển thị ngày và date picker
            <View style={styles.rowContainer}>
              <Text style={styles.heading2} onPress={() => setShow(true)}>
                {FormatDate(date)}
              </Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  onChange={onChange}
                  display="spinner"
                />
              )}
            </View>
          ) : flag === 3 ? (
            // Hiển thị radio button "Nam" và "Nữ"
            <View>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={setSex}
                selectedId={sex}
                layout="row"
                containerStyle={styles.rowContainer}
              />
            </View>
          ) : flag === 4 ? (
            <>
              <Input
                mt={3}
                variant="underlined"
                value={input}
                style={styles.input}
                onChangeText={(text) => handleValue(text)}
              />
              <VStack>
                <View style={styles.rowContainer}>
                  <Text style={styles.description}>{checkboxes[0].label}</Text>

                  <CheckBox
                    value={selectedCheckboxes[0]}
                    onValueChange={(newValue) => {
                      const updatedCheckboxes = [...selectedCheckboxes];
                      updatedCheckboxes[0] = newValue;
                      setSelectedCheckboxes(updatedCheckboxes);
                    }}
                  />
                </View>

                <View style={styles.rowContainer}>
                  <Text style={styles.description}>{checkboxes[1].label}</Text>

                  <CheckBox
                    value={selectedCheckboxes[1]}
                    onValueChange={(newValue) => {
                      const updatedCheckboxes = [...selectedCheckboxes];
                      updatedCheckboxes[1] = newValue;
                      setSelectedCheckboxes(updatedCheckboxes);
                    }}
                  />
                </View>
              </VStack>
            </>
          ) : (
            // Nếu flag không phải 2, 3 hoặc 4, hiển thị Input và checkbox
            <Input
              mt={3}
              variant="underlined"
              value={input}
              style={styles.input}
              onChangeText={(text) => handleValue(text)}
            />
          )}

          {/* Các phần tử khác ở đây (nếu có) */}
          <Text style={styles.description}>{descrip}</Text>
        </VStack>

        <Button
          _pressed={{ bg: Colors.green }}
          my={38}
          w="45%"
          h={"55"}
          type={type}
          rounded={50}
          bg={Colors.gray}
          style={styles.button} // Sử dụng CSS cho Button
          marginTop={10}
          alignSelf="center"
          onPress={() => handleNextButtonPress()}
        >
          <Text style={{ fontWeight: "bold", color: "#ccc" }}>
            {buttonName}
          </Text>
        </Button>
      </Box>
    </Box>
  );
}

// Không cần import StyleSheet và khai báo styles ở đây
