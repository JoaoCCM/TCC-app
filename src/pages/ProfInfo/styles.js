import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontFamily: "montserrat-medium",
    fontSize: 24,
  },

  align: {
    alignItems: "center",
    marginTop: 10,
  },

  infoContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 8,
    width: 300,
    elevation: 2,
  },

  prof: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },

  profNome: {
    marginHorizontal: 15,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: "bold",
    fontFamily: "montserrat-regular",
    fontSize: 18,
  },

  profImage: {
    width: 50,
    borderRadius: 25,
    height: 50,
  },

  info: {
    justifyContent: "flex-start",
    padding: 15,
  },

  textinfo: {
    paddingVertical: 10,
    fontFamily: "montserrat-regular",
    fontSize: 18,
    color: "#6A82FB",
    textDecorationLine: "underline",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.2)"
  },

  modalView: {
    margin: 15,
    marginVertical: 40,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalClose: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: '100%'
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'red',
  }
});

export default styles;
