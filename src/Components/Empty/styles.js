import { StyleSheet, BackHandler } from "react-native";

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 50,
        alignSelf: "center",
    },
    ghost: {
        width: 140,
        height: 140,
    },
    OopsText: {
        fontFamily: "montserrat-regular",
        fontSize: 17,
        color: "grey",
    },

    text: {
        marginTop: 10,
        fontFamily: "montserrat-regular",
        fontSize: 17,
        color: "grey",
        maxWidth: 210,
    },

    textContent: {},

    seachContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        marginTop: 30,
    },

    searchBtn: {
        width: 270,
        padding: 20,
        borderWidth: 1,
        borderColor: "#6A82FB",
        borderRadius: 8,
    },

    searchText: {
        color: "#6A82FB",
        textAlign: "center",
        fontFamily: "montserrat-regular",
        fontWeight: "bold",
    },
});

export default styles;
