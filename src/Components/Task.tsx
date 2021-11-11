import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
//import { Ionicons } from "@expo/vector-icons";
//import Ionicons from 'react-native-vector-icons/Ionicons';
const Task = (props:any) => {
  const [press, setPress] = useState(false);
  return (
    <TouchableOpacity onPress={() => setPress(!press)}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}>
            {/* {press && <Ionicons name="checkmark" size={20} color="black" />} */}
          </View>
          <Text
            style={{
              maxWidth: '80%',
              textDecorationLine: press ? 'line-through' : 'none',
            }}>
            {props.text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default Task;
