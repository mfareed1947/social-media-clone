import React from "react";
import AppProvider from "../context/AppContext";
import AuthProvider from "../context/AuthContext";

const Provider = ({ children }) => {
  return (
    <>
      <AppProvider>
        <AuthProvider>{children}</AuthProvider>
      </AppProvider>
    </>
  );
};

export default Provider;
