import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  heading: {
    color: "#fff",
    height: 55,
    width: "100%",
    textAlign: "center",
  },
  heading2: {
    color: "#B3B3B3",
    height: 35,
    width: "100%",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 30,
  },
  text: {
    color: "#B3B3B3",
    height: 35,

    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: "row", // Sắp xếp các phần tử con theo hàng ngang
    justifyContent: "space-between", // Các phần tử con được căn giữa và phân chia khoảng cách đều giữa chúng
    alignItems: "center", // Các phần tử con được căn giữa theo chiều dọc
    marginBottom: 10, // Khoảng cách dưới
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    height: 55,
    width: "100%",
    borderRadius: 5,
  },
  description: {
    color: "#ccc",
    fontSize: 10,
  },
  button: {
    fontWeight: "bold",
    color: "#ccc",
    backgroundColor: "#1DB954",
  },
});
export default styles;
