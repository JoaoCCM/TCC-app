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

        elevation: 6,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 15,
        paddingLeft: 5,
    },
    gradientBar: {
        padding: 8,
        marginBottom: 3,
    },
    magGlassIcon: {
        width: 30,
        height: 27,
    },
});
