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
        marginTop: 130,
        flexDirection: 'column',


    },
    textStyle1: {
        fontSize: 20,
        marginTop: 12,
        shadowColor: "#ffff",
        color: 'white',
        textAlign:'center'
    },
    textStyle2: {
        fontSize: 15,
        marginTop: 12,
        shadowColor: "#ffff",
        color: 'white',
        textAlign:'center'
    },
    input: {
        backgroundColor: '#8867d599',
        padding: 20,
        paddingTop: 15,
        borderRadius: 20,
        height: 100,
        margin: 12,
        width: '70%',
        marginLeft: 60,
        color: 'white',
        marginTop: 30

    },
    errorMassage:{
        fontSize: 13,
        color: "#ca555a",
        marginLeft: 80,
    },
    addWrapper: {
        marginLeft: 75,
        width: '40%',
        borderRadius: 10,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        color: "white",
    },
});