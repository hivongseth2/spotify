import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function FormatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần +1
  const year = date.getFullYear();

  // Tạo chuỗi ngày/tháng/năm (định dạng DD/MM/YYYY)
  return `${day}/${month}/${year}`;
}
