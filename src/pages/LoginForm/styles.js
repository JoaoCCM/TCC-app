import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        fontSize: 19,
        width: 260,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
        textAlignVertical: "center",
        marginTop: 10,
    },
    passwordContainer: {
        flexDirection: "row",
    },
    passwordInput: {
        width: 240,
        height: 50,
    },
    submitContainer: {
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 10,
    },
    btnSubmit: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#6A82FB",
        height: 45,
        width: 120,
    },
    btnText: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
        textAlign: "center",
        fontFamily: "montserrat-medium",
        fontWeight: "bold",
        color: "#6A82FB",
        fontSize: 18,
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
