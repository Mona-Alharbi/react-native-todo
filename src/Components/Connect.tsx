import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {loggedIn} from '../Action';
import {loggedOut} from '../Action';
import {addTask} from '../Action';
import {deletTasks} from '../Action';

export const mapStateToProps = (state: { user: {}; task: {}; }) => {
  return {
    user: state.user,
    tasklist: state.task,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    actions: bindActionCreators(
      {loggedIn, loggedOut, addTask, deletTasks},
      dispatch,
    ),
  };
};
