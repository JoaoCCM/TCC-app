import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    titleContainer: {
        flex: 1,
        padding: 50,
        alignItems: 'center',
        marginBottom: 20
    },

    title: {
        textAlign: 'center',
        fontSize: 26,
        fontFamily: 'montserrat-medium'

    },

    favList: {
        marginTop: 10,
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
        width: 40,
        height: 40,
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
        backgroundColor: '#AF2222',
        height: 62,
        marginTop: 10
    },
    deleteText: {
        textAlign: 'right',
        alignItems: 'center',
        marginTop: 17,
        marginRight: 25,
    },

    msgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },

    msg: {
        fontFamily: 'montserrat-regular',
        color: 'grey'
    }
});

export default styles;
