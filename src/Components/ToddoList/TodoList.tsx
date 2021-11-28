
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
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

const TodoList = ({ navigation, taskList }: { navigation: any, taskList: any }) => {
  return (
    <View
      style={styles.container}
    >
      <ScrollView>
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>My Todos</Text>
          <View style={styles.items}>
            {taskList.length == 0 &&<Text style={{color:"#a09da799", marginLeft:8}}> Yourr todos Empty, Please add some Todos</Text>
           }
            {taskList.map((task: {}, index: any) => {
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
