import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    emailInput: {
        fontSize: 19,
        width: 260,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        textAlignVertical: "center",
        marginBottom: 32,
    },
    passwordContainer: {
        flexDirection: "row",
    },
    passwordInput: {
        fontSize: 19,
        width: 240,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        textAlignVertical: "center",
        marginBottom: 32,
    },
    eyeContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        height: 50,
        justifyContent: "center",
        paddingRight: 5,
    },
    eye: {
        alignItems: "center",
        marginLeft: 0,
        marginTop: 0,
    },
    submitContainer: {
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 5,
    },
    btnSubmit: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#6A82FB",
        height: 45,
        width: 120,
    },
    btnText: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 11,
        textAlign: "center",
        fontFamily: "montserrat-medium",
        fontWeight: "bold",
        color: "#6A82FB",
    },
    googleIcon: {
        width: 35,
        height: 35,
        marginLeft: 10,
        marginRight: 50,
    },
    faceIcon: {
        width: 35,
        height: 35,
    },
});

export default styles;
