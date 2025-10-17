import React from "react";
import AppProvider from "../context/AppContext";
import AuthProvider from "../context/AuthContext";
import PostContextProvider from "../context/PostContext";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  return (
    <>
      <AppProvider>
        <AuthProvider>
          <Provider store={store}>
            <PostContextProvider>{children}</PostContextProvider>
          </Provider>
        </AuthProvider>
      </AppProvider>
    </>
  );
};

export default Providers;
