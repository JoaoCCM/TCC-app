import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    formBtnContainer: {
      marginTop: 15,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
    imageContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 30,
    },
    userPhoto: {
        width: 150,
        height: 110,
        borderRadius: 300 / 2,
    },
    addImg: {
        resizeMode: "contain",
        bottom: 45,
        left: 45,
    },
    userName: {
        fontSize: 25,
        color: "#333",
        // paddingTop: 10,
        fontFamily: "montserrat-medium",
        // fontWeight: "bold",
    },
    formContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    infoContainer: {
        // height: 170,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: "#fff",
        width: 350,
        marginTop: 30,
        paddingLeft: 10,
        paddingRight: 20,
        paddingVertical: 20,
    },
    info: {
        marginLeft: 15,
    },
    text: {
        marginTop: 20,
        fontFamily: "montserrat-regular",
        fontSize: 17,
    },
    passwordLink: {
        marginTop: 20,
        fontFamily: "montserrat-regular",
        fontSize: 17,
        color: "#6A82FB",
        textDecorationLine: "underline",
    },
    edit: {
        alignItems: "flex-end",
        marginRight: 10,
    },
    logout: {
        marginTop: 20,
        paddingBottom: 40,
        marginRight: 45,
        alignItems: "flex-end",
    },
    logoutText: {
        color: "red",
        fontFamily: "montserrat-regular",
        fontSize: 17,
        textDecorationLine: "underline",
    },
    btnSubmit: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#6A82FB",
      height: 30,
      width: 100,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
  },
  btnText: {
      fontFamily: "montserrat-medium",
      fontWeight: "bold",
      color: "#6A82FB",
      fontSize: 18,
  },
  input: {
    fontSize: 18,
    height: 30,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "stretch",
},
});
