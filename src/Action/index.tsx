import { useState } from "react";

const LogIn = 'LogIn';
const LogOut = 'LogOut';
const TasksList = 'TasksList';
const AddTask = 'AddTask';
const DeleteTasks = 'DeleteTasks';
const DeleteTask='DeleteTask'
const CheckTask='CheckTask'

export const logIn = (value: {}) => ({
  type: LogIn,
  payload: value,
});

export const logOut = () => ({
  type: LogOut,
});

export const addTask = (value: any) => ({
  type: AddTask,
  task:{isDone:false,value}
 
});
export const deleteTasks = () => ({
  type: DeleteTasks,
});
export const deleteTask = (value: {}) => ({
    type: DeleteTask,
    task: value, 
  
});
export const checkTask = (value: {}) => ({
  type: CheckTask,
  task: value, 

});
