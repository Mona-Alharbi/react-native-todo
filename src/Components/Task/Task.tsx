import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';
import { connect } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { deleteTask } from '../../Action';
import { checkTask } from '../../Action';
const Task = (props: { actions: { checkTask: (arg0: any) => void; deleteTask: (arg0: any) => void; }; text: { isDone: any; value: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }) => {

  return (
    <TouchableOpacity onPress={() => props.actions.checkTask(props.text)}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <LinearGradient style={styles.square} colors={['#42a3f4', '#6663ed', '#9637fc']}>
            {props.text.isDone && <Icon name="checkmark" size={27} color="white" fontWeight="bold" />}
          </LinearGradient>
          <Text
            style={{
              textDecorationLine: props.text.isDone ? 'line-through' : 'none', color: 'white', fontSize: 16, maxWidth: '80%',
            }}>
            {props.text.value}
          </Text>
        </View>
        <TouchableOpacity onPress={() => props.actions.deleteTask(props.text)}>
          <Icon name="trash" size={20} color="#ca555a" />
        </TouchableOpacity>
      </View>

    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    actions: bindActionCreators(
      { deleteTask, checkTask },
      dispatch,
    ),
  };
};
export default connect(null, mapDispatchToProps)(Task);
