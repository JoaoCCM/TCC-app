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
    flex: 1,
    justifyContent: "center",
    paddingBottom: '30%'
  },

  infoContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 8,
    width: "80%",
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
    height: 50
  },

  info: {
    justifyContent: "flex-start",
    padding: 25,
  },

  textinfo: {
    paddingVertical: 10,
    fontFamily: "montserrat-regular",
    fontSize: 18,
    color: "#6A82FB",
    textDecorationLine: "underline",
  },
  item: {
    width: 10,
    height: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  bold: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10
  },
  listItem: {
    marginVertical: 10
  },
  modalClose: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: '100%'
  },
  modalView: {
    backgroundColor: '#fff',
    marginTop: 50,
    paddingBottom: 90,
    marginBottom: 50,
    borderRadius: 8,
    width: '100%',
    elevation: 2,
    padding: 20
  },
  modalContent: {
    margin: 15,
  }
});

export default styles;
