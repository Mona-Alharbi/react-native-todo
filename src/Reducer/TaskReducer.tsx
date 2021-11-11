const taskReducer = (state = [], action: { type: string; task: {}; }) => {
  switch (action.type) {
    case "AddTask":
      return [...state, action.task];
    case "DeletTasks":
      return (state = []);

    default:
      return state;
  }
};
export default taskReducer;
