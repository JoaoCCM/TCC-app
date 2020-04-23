import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    gradientBar: {
        padding: 8,
        marginTop: 25,
    },
    xIcon: {
        alignItems: 'flex-end',
        padding: 15
    },
    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center'
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
    searchBtn: {
        flexDirection: 'column',
        // backgroundColor: 'red',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 280

    },
    btn: {
        width: 250,
        borderWidth: 1,
        borderColor: '#6A82FB',
        borderRadius: 7,
        padding: 15
    },
    text: {
        textAlign: 'center',
        fontFamily: 'montserrat-regular',
        fontWeight: 'bold',
        color: '#6A82FB'
    },
})

export default styles;