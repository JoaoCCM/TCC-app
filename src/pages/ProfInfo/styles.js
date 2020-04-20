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

    infoContainer: {
        // justifyContent: 'center',
        // alignSelf: 'center',
        flex: 0.8,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        maxWidth: 300,
        marginLeft: 30
    },

    prof: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10
    },

    profNome: {
        marginLeft: 20,
        fontFamily: 'montserrat-regular',
        fontSize: 17
    },

    profImage: {
        width: 35,
        height: 35
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