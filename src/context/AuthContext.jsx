import { createContext, useContext, useState } from "react";

const defaultValue = {
  firstName: "",
  surName: "",
  email: "",
  gender: "",
  dateOfBirth: "",
};

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(defaultValue);

  // console.log(userDetails);

  return (
    <AuthContext value={{ userDetails, setUserDetails }}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
