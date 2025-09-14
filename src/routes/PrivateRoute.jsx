import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  let user = true;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
