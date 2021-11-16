import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import taskReducer from './TaskReducer';

const allReduser = combineReducers({
  user: userReducer,
  task: taskReducer,
});
export default allReduser;
