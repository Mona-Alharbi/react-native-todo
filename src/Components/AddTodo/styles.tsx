import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#170e2e",

    },

    image: {
        marginBottom: 10,
        width: 100,
        height: 100,
        justifyContent: "center",
        marginLeft: 140
    },
    inputTask: {
        justifyContent: "center",
        marginTop: 140,
        flexDirection: 'column',


    },
    textStyle1: {
        fontSize: 20,
        marginTop: 12,
        shadowColor: "#ffff",
        color: 'white',
        marginLeft: 100
    },
    textStyle2: {
        fontSize: 15,
        marginTop: 12,
        shadowColor: "#ffff",
        color: 'white',
        marginLeft: 110
    },
    input: {
        backgroundColor: '#8867d599',
        padding: 20,
        paddingTop: 15,
        borderRadius: 20,
        height: 100,
        margin: 15,
        width: '70%',
        marginLeft: 60,
        color: 'white',
        marginTop: 30

    },
    addWrapper: {
        marginLeft: 75,
        width: '40%',
        borderRadius: 10,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        color: "white",
    },
});