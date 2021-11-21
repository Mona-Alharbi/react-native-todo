
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Task from '../Task/Task';
import styles from './styles';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';

const TodoList = ({ navigation, taskList }: { navigation: any, taskList: any }) => {
  console.log("todo list page")
  console.log(taskList)
  return (
    <View
      style={styles.container}
     >
      <ScrollView>
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>My Task</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {taskList.map((task: {}, index: any) => {
              // console.log({index})
              return <Task key={index} text={task} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = (state: { task: {}; }) => {
  return {
    taskList: state.task,
  };
};
export default connect(mapStateToProps, null)(TodoList);
