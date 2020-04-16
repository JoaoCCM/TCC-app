import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50

    },

    ghost: {
        width: 120,
        height: 120,
    },

    OopsText: {
        fontFamily: 'montserrat-regular',
        fontSize: 17,
        color: 'grey'
    },

    text: {
        marginTop: 10,
        fontFamily: 'montserrat-regular',
        fontSize: 17,
        color: 'grey'
    },

    textContent: {
        marginRight: 30,
    },

    seachContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30
    },

    searchBtn: {
        width: 270,
        padding: 20,
        borderWidth: 1,
        borderColor: '#6A82FB',
        borderRadius: 8
    },

    searchText: {
        color: '#6A82FB',
        textAlign: 'center',
        fontFamily: 'montserrat-regular',
        fontWeight: 'bold'
    }



});

export default styles;