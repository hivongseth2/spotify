import {
  FlatList,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../../Color.js";
import React from "react";
import { useState } from "react";
import Singer from "../data/Singer.js";
import stylesSelect from "../styles/scss/SelectSingerStyle.js";
import { HStack, VStack } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Box, Button, Heading, Input } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../utils/CustomButton.js";

export default function SelectSinger() {
  const [Singers, setSingers] = useState(Singer);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const toggleSelection = (id) => {
    if (selectedIds.includes(id)) {
      // Nếu id đã được chọn, bỏ chọn nó
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      // Nếu id chưa được chọn, thêm vào danh sách đã chọn
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleValue = (text) => {
    setSearchInput(text);
    //  const newData = Singer.filter((item) => {
    //  const itemData = item.name.toUpperCase();
    //   const textData = text.toUpperCase();
    //   return itemData.indexOf(textData) > -1;
    // }
  };
  // thao tác với item ở đây
  const renderItem = ({ item }) => {
    const isSelected = selectedIds.includes(item.id);
    return (
      <TouchableOpacity
        onPress={() => toggleSelection(item.id)}
        style={[stylesSelect.gridItem, isSelected && stylesSelect.selected]}
      >
        <Image source={{ uri: item.img }} style={stylesSelect.img} />
        {isSelected && (
          <View style={stylesSelect.tickIcon}>
            <Icon name="check" size={16} color="black" />
          </View>
        )}
        <Text style={stylesSelect.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={stylesSelect.container} bg={Colors.black}>
      <Text style={stylesSelect.heading}>Chọn 3 người bạn thích trở lên</Text>
      <View
        style={{
          width: "80%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Input
          InputLeftElement={
            <AntDesign
              name="search1"
              size={20}
              marginLeft={20}
              //marginTop={1}
              marginRight={20}
              color="white"
              backgroundColor="black"
            />
          }
          mt={3}
          variant="underlined"
          value={searchInput}
          onChangeText={(text) => handleValue(text)}
          style={{
            height: 40,
            backgroundColor: "black",
            color: "white",
            fontSize: 19,
          }}
          placeholder="Tìm kiếm"
        />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={Singers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          contentContainerStyle={stylesSelect.columnContainer}
        ></FlatList>
        {selectedIds.length >= 3 && (
          <Button
            title="Xong"
            onPress={() => {
              // Xử lý sự kiện khi nút "Xong" được nhấn
            }}
            style={stylesSelect.button}
          >
            <Text style={{ fontWeight: "bold", color: "black" }}>Xong</Text>
          </Button>
        )}
      </View>
    </View>
  );
}
