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
        marginLeft:30
    },
    inputTask: {
        justifyContent: "center",
        marginTop: 180,
    },
    textStyle: {
        fontSize: 30,
        marginTop:10,
        shadowColor: "#ffff",
        color: 'white'
    },

    input: {
        backgroundColor: '#8867d599',
        padding:20,
        paddingTop:15,
        borderRadius: 20,
        height: 100,
        margin: 15,
        width: '70%',
        marginLeft: 50,
        color:'white'
        
    },
    addWrapper: {
        marginLeft: 70,
        width: '40%',
        borderRadius: 10,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        color: "white",
     },
});