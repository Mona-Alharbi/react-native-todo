import { StyleSheet } from 'react-native';
export default StyleSheet.create(  {
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    marginBottom: 10,
    width: 290,
    height: 200,
    justifyContent: 'center',
    marginTop: 20,
  },
  inputView1: {
    flex: 0.17,
  },
  inputView2: {
    width: '70%',
    height: 45,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 8,
  },

  loginBtn: {
    width: '50%',
    borderRadius: 10,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: "white",
    borderColor: 'red',
  },
  textStyle: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
    shadowColor: '#ffff',
  },
});
