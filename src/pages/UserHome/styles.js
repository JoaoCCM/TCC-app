import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 32,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderTopWidth: 1,
        borderTopColor: 'black'
    },

    profilePic: {
        width: 30,
        height: 30,
        marginLeft: 10
    },

    profName: {
        width: 200,
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        padding: 12,
        marginRight: 38,
        fontFamily: 'montserrat-regular',
        fontSize: 18
    },

    sendMail: {
        width: 37,
        height: 37,
        marginRight: 10
    }
})

export default styles;