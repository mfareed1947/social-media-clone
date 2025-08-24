import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
