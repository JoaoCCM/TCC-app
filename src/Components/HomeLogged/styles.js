import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    profListContainer: {
        flex: 2,
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    searchText: {
        marginTop: 55,
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
    favList: {
        marginTop: 25,
    },
    listContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 10,
        paddingVertical: 5,

        borderBottomWidth: 1,
        borderBottomColor: "#cacaca",
        borderTopWidth: 1,
        borderTopColor: "#cacaca",
    },

    profilePic: {
        borderRadius: 25,
        width: 50,
        height: 50,
        marginLeft: 10,
    },

    profName: {
        width: 200,
        height: 50,
        borderRadius: 8,
        alignItems: "center",
        padding: 12,
        marginRight: 38,
        fontFamily: "montserrat-regular",
        fontSize: 18,
    },

    sendMail: {
        width: 37,
        height: 37,
        marginRight: 10,
    },

    touch: {
        backgroundColor: "#AF2222",
        height: 62,
        marginTop: 10,
    },
    deleteText: {
        textAlign: "right",
        alignItems: "center",
        marginTop: 17,
        marginRight: 25,
    },

    msgContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
    },

    msg: {
        fontFamily: "montserrat-regular",
        color: "grey",
    },
});

export default styles;
