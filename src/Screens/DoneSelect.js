import { View, Text, Image, FlatList } from "react-native";
// import React from "react";
import { useState, React } from "react";
import stylesDoneSinger from "../styles/scss/DoneSinger";
import Singer from "../data/Singer.js";

export default function DoneSelect() {
  const [Singers, setSingers] = useState(Singer);
  const renderItem = ({ item }) => (
    <View style={stylesDoneSinger.gridItem}>
      <Image source={{ uri: item.img }} style={stylesDoneSinger.img} />
    </View>
  );

  return (
    <View style={stylesDoneSinger.mainContent}>
      <FlatList
        data={Singers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={5} // Số cột trong lưới
        contentContainerStyle={stylesDoneSinger.container}
      />

      <Text style={stylesDoneSinger.heading2}>Những lựa chọn tuyệt vời!</Text>
      <Text style={stylesDoneSinger.text}>
        Chúng tôi đã tạo một danh sách phát để bạn bắt đầu.
      </Text>
    </View>
  );
}
