import { StyleSheet } from "react-native";

export default StyleSheet.create({
    imageContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 30,
    },
    userPhoto: {
        width: 100,
        height: 100,
    },
    userName: {
        fontSize: 25,
        color: "#333",
        paddingTop: 20,
        fontFamily: 'montserrat-medium',
        // fontWeight: "bold",
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    infoContainer: {
        height: 170,
        borderRadius: 8,
        elevation: 2,
        // alignItems: 'flex-start',
        width: 300,
        marginTop: 30,
        padding: 10,
    },
    info: {
        marginLeft: 15
    },
    text: {
        marginTop: 20,
        fontFamily: 'montserrat-regular',
        fontSize: 17
    },
    passwordLink: {
        marginTop: 20,
        fontFamily: 'montserrat-regular',
        fontSize: 17,
        color: '#6A82FB',
        textDecorationLine: 'underline'
    },
    edit: {
        alignItems: 'flex-end',
        marginRight: 10,
    },
    logout: {
        alignItems: 'flex-end',
        padding: 20,
        marginRight: 15
    },
    logoutText: {
        color: 'red',
        fontFamily: 'montserrat-regular',
        fontSize: 17,
        textDecorationLine: 'underline'
    }

});
