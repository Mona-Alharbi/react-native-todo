import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {logIn} from '../Action';
import {logOut} from '../Action';
import {addTask} from '../Action';
import {deletTasks} from '../Action';

export const mapStateToProps = (state: { user: {}; task: {}; }) => {
  return {
    user: state.user,
    taskList: state.task,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    actions: bindActionCreators(
      {logIn, logOut, addTask, deletTasks},
      dispatch,
    ),
  };
};
