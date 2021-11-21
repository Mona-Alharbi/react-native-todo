import TodoList from "../Components/ToddoList/TodoList";

const taskReducer = (state = [ ], action: { type: string; task: any; }) => {
  const found = state.find(todo => todo === action.task);
  switch (action.type) {
    case "AddTask":
      return [...state, action.task];
    case "DeleteTasks":
      return (state = []);
    case "DeleteTask":
      return [...state.filter(
        (todo) => { return todo  != action.task})];
    case "CheckTask":
    return state.map(todo => {
      if(todo !== action.task) {
        return todo;
      }
      return({...todo, ...{ isDone: !todo.isDone }});
    });
        
    default:
      return state;
  }
};
export default taskReducer;
