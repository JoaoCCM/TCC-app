import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    title: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleText: {
        fontFamily: 'montserrat-medium',
        fontSize: 24
    },

    align: {
        alignItems: 'center',
        marginTop: 10
    },

    infoContainer: {
        marginTop: 20,
        borderRadius: 8,
        width: 300,
        elevation: 2
    },

    prof: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },

    profNome: {
        marginLeft: 20,
        fontFamily: 'montserrat-regular',
        fontSize: 17
    },

    profImage: {
        width: 50,
        borderRadius: 25,
        height: 50
    },

    info: {
        justifyContent: 'flex-start',
        padding: 15
    },

    textinfo: {
        paddingVertical: 10,
        fontFamily: 'montserrat-regular',
        fontSize: 18,
        color: '#6A82FB',
        textDecorationLine: 'underline'
    }

});

export default styles;
