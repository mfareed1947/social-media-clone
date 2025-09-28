import { createContext, useContext, useState, useReducer } from "react";
import reducer from "../reducer/AuthReducer";

const defaultValue = {
  firstName: "",
  surName: "",
  email: "",
  gender: "",
  dateOfBirth: "",
  isUserLogin: false,
  token: "",
  post: [],
  profile: {},
};

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  // const [userDetails, setUserDetails] = useState(defaultValue);

  // console.log(state);

  return <AuthContext value={{ state, dispatch }}>{children}</AuthContext>;
};

export default AuthProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
