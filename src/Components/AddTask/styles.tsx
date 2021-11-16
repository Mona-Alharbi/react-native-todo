import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },

    inputTask: {
        justifyContent: "center",
        marginTop: 70,
    },
    textStyle: {
        fontFamily: "Cochin",
        fontSize: 20,
        fontWeight: "bold",
        shadowColor: "#ffff",
        marginLeft: 90,
        marginBottom: 20,
    },

    input: {
        backgroundColor: "#FFF",
        borderRadius: 20,
        height: 60,
        paddingHorizontal: 15,
        margin: 15,
        borderColor: "#83a4d4",
        borderWidth: 2,
    },
    addWrapper: {
        width: "40%",
        borderRadius: 10,
        height: 45,
        marginLeft: 110,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        margin: 15,
        borderColor: "white",
        borderWidth: 2,
    },

    AppbarHead: {
        backgroundColor: "#83a4d4",
        marginLeft: 120,

    },
    image: {
        marginBottom: 10,
        width: 300,
        height: 200,
        justifyContent: "center",
        marginHorizontal: 30,
    },
});