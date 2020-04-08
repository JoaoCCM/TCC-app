import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    initialInfo: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'montserrat-regular',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20
    },
    content: {
        width: 300,
        textAlign: 'center',
        fontFamily: 'montserrat-regular',
        marginTop: 7
    },
    questionsContainer: {
        flex: 1
    },
    dropdown: {
        marginTop: 40,
        alignSelf: 'center'
    },
    headerContent: {
        width: 360,
        height: 50,
        borderTopWidth: 1,
        borderTopColor: '#CACACA',
        borderBottomWidth: 1,
        borderBottomColor: '#CACACA'
    },
    headerText: {
        textAlign: 'left',
        marginLeft: 15,
        padding: 10,
        fontFamily: 'montserrat-regular',
        fontSize: 18
    },
    body: {
        marginTop: 20,
        marginLeft: 15,
        fontFamily: 'montserrat-regular',
        fontSize: 18
    }
});

export default styles;