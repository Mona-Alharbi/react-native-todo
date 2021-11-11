
import React from 'react';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {mapDispatchToProps} from './Connect';
import {mapStateToProps} from './Connect';
import Task from './Task';
import {Appbar} from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
const TodoList = ({navigation, actions, user, tasklist}:{navigation:any, user:{}, actions:any ,tasklist:any}) => {
  const logOut = () => {
    actions.loggedOut(user);
    actions.deletTasks();
    navigation.navigate('Registration');
  };
  return (
    <LinearGradient
    style={styles.container}
    colors={['#ffff', '#83a4d4', '#83a4d4']} 
  >
      <Appbar.Header style={styles.AppbarHead}>
        <Appbar.Content  
          title="back"
          onPress={() => {
            navigation.navigate('AddTask');
          }}
        />
        <Appbar.Content style={styles.AppbarHeadLeft}  title="log out"  onPress={logOut} />
      </Appbar.Header>
      <ScrollView>
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {tasklist.map((task: {}, index: any) => {
              return <Task key={index} text={task} />;
            })}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
{
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
  AppbarHead: {
    backgroundColor: '#83a4d4',
 
  },
  AppbarHeadLeft: {
    marginLeft:120,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
