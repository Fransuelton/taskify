import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export { AppRoutes };
