import { StyleSheet } from "react-native";

export default StyleSheet.create({
    cadastro: {
        alignItems: "center",
        flex: 1,
        justifyContent: "space-between",
    },
    cadastroContainer: {
        flex: 1,
    },
    emailLoginContainer: {
        flex: 1,
        paddingVertical: 10,
        justifyContent: "center",
    },
    cadastroTitle: {
        fontFamily: "montserrat-regular",
        fontSize: 27,
        fontWeight: "bold",
        flex: 0.8,
    },
    inputContainer: {
        justifyContent: "space-between",
        alignSelf: "stretch",
        paddingHorizontal: "10%",
    },
    input: {
        height: 35,
        alignSelf: "stretch",
    },
    inputSenha: {
        marginEnd: 0,
        flex: 1,
    },
    cursos: {
        alignSelf: "stretch",
    },
    esqueceuSenhaContainer: {
        alignSelf: "stretch",
        paddingVertical: 10,
    },
    esqueceuSenha: {
        color: "#A6A6A6",
        fontSize: 15,
        textDecorationLine: "underline",
        letterSpacing: 0.3,
    },
    sendInput: {
        marginTop: 10,
        alignSelf: "stretch",
    },
    emailLogin: {
        color: "#6A82FB",
        paddingTop: 15,
        textDecorationLine: "underline",
        fontSize: 16,
    },
    passwordContainer: {},
});
