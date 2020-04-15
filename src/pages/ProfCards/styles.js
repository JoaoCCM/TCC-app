import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flex: 0.70,
        height: 100,
        borderRadius: 8,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    cardImage: {
        width: 120,
        marginBottom: -170,
        resizeMode: 'contain',
        alignSelf: 'center'
    },

    infoContainer: {
        marginBottom: 220,
        alignItems: 'center'
    },

    profEmail: {
        marginTop: 20,
        fontFamily: 'montserrat-regular',
        fontSize: 18,
        color: 'grey'
    },

    profName: {
        marginTop: 80,
        fontFamily: 'montserrat-regular',
        fontSize: 18

    }
})

export default styles;