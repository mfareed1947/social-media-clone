import { createContext, useContext } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const changeTheme = () => {};

  return <AppContext value={"dark"}>{children}</AppContext>;
};

export default AppProvider;

export const useAppContext = () => {
  const values = useContext(AppContext);
  console.log(values);
};
