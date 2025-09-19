import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  let user = true;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

//useref
//usememo
//usecallback
//usecontext
//usereducer

// react 19
//use
//usId
//useTransition
//useActionState
