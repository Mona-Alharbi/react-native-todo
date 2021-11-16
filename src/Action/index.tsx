const LogIn = 'LogIn';
const LogOut = 'LogOut';
const TasksList = 'TasksList';
const AddTask = 'AddTask';
const DeletTasks = 'DeletTasks';

export const logIn = (value: {}) => ({
  type: LogIn,
  payload: value,
});

export const logOut = () => ({
  type: LogOut,
});

export const addTask = (value: {}) => ({
  type: AddTask,
  task: value,
});
export const deletTasks = () => ({
  type: DeletTasks,
});
