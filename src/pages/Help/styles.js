import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    initialInfo: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: "montserrat-regular",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 25,
    },
    content: {
        width: 300,
        textAlign: "center",
        fontFamily: "montserrat-regular",
        marginTop: 15,
        marginBottom: 50,
    },
    questionsContainer: {
        flex: 1,
    },
    dropdown: {
        // alignSelf: "center",
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#CACACA",
    },
    headerContent: {
        width: 360,
        height: 50,
        paddingTop: 0,
    },
    headerText: {
        textAlign: "left",
        marginLeft: 15,
        fontFamily: "montserrat-regular",
        fontSize: 18,
        textTransform: "capitalize",
    },
    body: {
        marginBottom: 15,
        marginLeft: 15,
        fontFamily: "montserrat-regular",
        fontSize: 18,
    },
});

export default styles;
