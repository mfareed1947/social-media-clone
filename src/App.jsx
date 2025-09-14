import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import PrivateRoute from "./routes/privateRoute";
import Layout from "./components/layout/layout";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {routes.map((currRoute) => {
            return (
              <Route
                path={currRoute.path}
                element={
                  <PrivateRoute>
                    <Layout>{currRoute.component}</Layout>
                  </PrivateRoute>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
