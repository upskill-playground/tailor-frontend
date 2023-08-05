import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import OtpPage from "./pages/OTP";
import PrivateRoutes from "./utils/PrivateRoutes";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Dashboard />} path="/" />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<OtpPage />} path="/OTP" />
      </Routes>
    </Router>
  );
};

export default App;
