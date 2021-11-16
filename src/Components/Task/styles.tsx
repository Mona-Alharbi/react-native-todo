import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#83a4d4',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    itemText: {
      maxWidth: '80%',
    },
  });
  