import { StyleSheet } from 'react-native';
export default StyleSheet.create(  {
    container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#170e2e',
    
  },
  image: {
    marginTop:210,
    marginBottom: 20,
    width: 90,
    height: 90,
    justifyContent: 'center',
  },
  inputView1: {
    flex: 0.23,
  },
  inputView2: {
    width: '70%',
    height: 45,
    backgroundColor: '#8867d599',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 8,
    color: "white",
    fontSize: 16,
    marginTop:3,
    marginBottom:1,

  },

  loginBtn: {
    width: '48%',
    borderRadius: 10,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    color: "white",
  },
  textStyle_title: {
    fontSize: 20,
    fontWeight: 'bold',
    shadowColor: '#ffff',
    marginBottom: 10,
    color: 'white'
  },
    textStyle_text: {
    width:'70%',
    fontSize: 18,
    shadowColor: '#ffff',
    marginBottom: 40,
    color: 'white',
    textAlign: 'center',
  },
});
