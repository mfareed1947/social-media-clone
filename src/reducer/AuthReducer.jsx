const AuthReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      console.log("this is working", action);
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        surName: action.payload.surName,
      };
    //   break;
    default:
      break;
  }
};

export default AuthReducer;
