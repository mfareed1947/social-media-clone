import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
