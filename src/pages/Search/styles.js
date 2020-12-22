import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  gradientBar: {
    padding: 8,
    marginTop: 25,
  },
  chipView: {
    minHeight: "55%",
    maxHeight: "55%",
  },
  chipTitle: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: "bold",
    marginHorizontal: 30,
  },
  chipContainer: {
    margin: 0,
    marginHorizontal: 25,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  chipContent: {
    alignItems: "center",
    flexDirection: "row",
  },
  chipSelected: {
    margin: 5,
    flexWrap: "wrap",
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#6A82FB",
  },
  chip: {
    margin: 5,
    borderRadius: 6,
    flexWrap: "wrap",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "rgba(106, 130, 251, 0.45)",
  },
  chipText: {
    fontSize: 18,
    marginRight: 10,
  },
  xIcon: {
    alignItems: "flex-end",
    padding: 15,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "85%",
    height: 60,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 5,
    fontFamily: "montserrat-regular",
  },
  searchBtn: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  btn: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#6A82FB",
    borderRadius: 7,
    padding: 15,
  },
  text: {
    fontSize: 20,
    color: "#6A82FB",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "montserrat-regular",
  },
});

export default styles;
