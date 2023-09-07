import { StyleSheet } from "react-native";
const stylesSelect = StyleSheet.create({
  heading: {
    color: "#fff",
    height: 80,
    width: "90%",
    textAlign: "left",
    fontSize: 30,
    marginTop: 50,
    marginLeft: 30,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#ccc",
    color: "#333",
    height: 40,
    width: "90%",
    borderRadius: 5,
    alignItems: "center",
  },
  columnContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 50,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  img: {
    borderRadius: 100,
    height: 100,
    width: 100,
  },
  button: {
    fontWeight: "bold",
    // color: "#ccc",
    height: 45,
    position: "absolute",
    zIndex: 1, // Điều này đặt block trong suốt ở phía trên cùng
    bottom: 0,
    width: 100,
    borderRadius: 100,
    alignSelf: "center",
    backgroundColor: "#fff",
    marginBottom: 30,
  },
  text: {
    color: "#B3B3B3",
    height: 35,

    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  container: {
    flex: 3,
    backgroundColor: "black",
  },
  gridItem: {
    width: 100, // Đặt độ rộng của mỗi ô trong lưới
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  background: {
    backgroundColor: "#000000",
  },

  name: {
    marginTop: 8,
    fontSize: 16,
    color: "gray",
    fontWeight: "bold",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderColor: "white",
    position: "relative", // Để biểu tượng "tick" được căn giữa
  },
  tickIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 2,
  },
});
export default stylesSelect;
