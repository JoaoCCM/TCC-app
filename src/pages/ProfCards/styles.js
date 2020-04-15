import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flex: 0.70,
        height: 100,
        borderRadius: 8,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    cardImage: {
        width: 120,
        marginBottom: 160,
        resizeMode: 'contain'
    },
    cardContainer: {
        flex: 1,
    }
})

export default styles;