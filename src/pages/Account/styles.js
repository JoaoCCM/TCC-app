import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    imageContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 30,
    },
    userPhoto: {
        width: 110,
        height: 90,
        borderRadius: 110 / 2,
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
        height: 170,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: "#fff",
        width: 350,
        marginTop: 30,
        paddingHorizontal: 10,
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
        width: 350,
        paddingVertical: 20,
        marginRight: 35,
        alignItems: "flex-end",
    },
    logoutText: {
        color: "red",
        fontFamily: "montserrat-regular",
        fontSize: 17,
        textDecorationLine: "underline",
    },
});
