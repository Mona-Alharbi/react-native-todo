const initialState = {
  name: "",
  password: "",
};

const userReducer = (state = initialState, action: { type: string; payload: {}; }) => {
  switch (action.type) {
    case "LogIn":
      return action.payload;
    case "LogOut":
      return (state = initialState);
    default:
      return state;
  }
};
export default userReducer;
