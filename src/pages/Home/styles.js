import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: "#fbfbfb",
    },
    searchContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    searchText: {
        marginTop: 40,
        paddingHorizontal: 50,
        textAlign: "center",
        color: "#3a3a3a",
        fontSize: 27,
        fontFamily: "montserrat-regular",
        fontWeight: "bold",
    },
    input: {
        width: 300,
        height: 60,
        marginTop: 10,
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 5,
        fontFamily: "montserrat-regular",
    },
    register: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    registerText: {
        textAlign: "center",
        fontSize: 18,
        fontFamily: "montserrat-medium",
        color: "#6A82FB",
        marginTop: 40,
        borderWidth: 2,
        borderColor: "#6A82FB",
        borderRadius: 5,
        padding: 10,
        width: 250,
    },
    or: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginLeft: "auto",
        marginRight: "auto",
        width: 280,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
        position: "relative",
    },

    orText: {
        position: "absolute",
        color: "grey",
        fontFamily: "montserrat-medium",
        backgroundColor: "#fbfbfb",
        padding: 10,
        top: -20,
    },

    arrowText: {
        flexDirection: "row-reverse",
        position: "relative",
    },

    arrow: {
        width: 36,
        height: 36,
        paddingTop: 5,
        alignItems: "center",
        position: "absolute",
        bottom: 10,
    },
    loginOpt: {
        marginTop: 30,
        paddingHorizontal: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    loginIcon: {
        width: 30,
        height: 30,
        padding: 25,
    },

    faceIcon: {
        width: 30,
        height: 30,
        padding: 25,
    },
});

export default styles;
