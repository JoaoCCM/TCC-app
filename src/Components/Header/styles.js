import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        paddingTop: 25,
        paddingBottom: 5,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 3,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 15,
        paddingLeft: 15,
    },
    gradientBar: {
        padding: 8,
        marginBottom: 3,
    },
    magGlassIcon: {
        width: 30,
        height: 27,
    },
    modalToggle: {
        // marginBottom: 10,
        padding: 10,
        alignSelf: "center",
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
        height: "100%",
    },
});
