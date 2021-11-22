import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  item: {
    backgroundColor: '#8867d599',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    //width:'90%',
    marginLeft: 12,
    //height:45,
    maxWidth: '100%',   // <-- Max width is 80%
    minHeight: 45,

  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 26,
    height: 28,
    backgroundColor: '#83a4d4',
    opacity: 0.5,
    borderRadius: 5,
    marginRight: 13,
    marginLeft: 4

  },

});
