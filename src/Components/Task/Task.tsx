import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';
const Task = (props: any) => {
  const [press, setPress] = useState(false);
  return (
    <TouchableOpacity onPress={() => setPress(!press)}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}>
            {press && <Icon name="checkmark" size={20} color="black" />}
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

export default Task;
