import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    loginContainer: {
        flex: 1,
        backgroundColor: '#fff',

    },
    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchText: {
        marginTop: 140,
        fontSize: 26,
        fontFamily: 'montserrat-regular'
    },

    input: {
        width: 300,
        height: 60,
        marginTop: 10,
        fontSize: 18,
        fontFamily: 'montserrat-regular'

    },
    register: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'montserrat-medium',
        color: '#6A82FB',
        marginTop: 40,
        borderWidth: 2,
        borderColor: '#6A82FB',
        padding: 20,
        width: 250
    },
    or: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    orText: {
        color: 'grey',
        fontFamily: 'montserrat-medium'
    },

    arrowText: {
        flexDirection: 'row-reverse',

    },

    arrow: {
        width: 25,
        height: 25,
        paddingTop: 5,
        alignItems: 'center'
    },
    loginOpt: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    googleIcon: {
        width: 30,
        height: 30,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 50,
        padding: 25,
        marginLeft: 15
    },

    faceIcon: {
        width: 30,
        height: 30,
        padding: 25

    }

});

export default styles;